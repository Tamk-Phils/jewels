import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { 
  Plus, Edit3, Trash2, X, Star, Search, ShieldCheck, ShieldAlert, 
  Package, ShoppingBag, Users, FolderTree, BarChart3, CheckCircle2, 
  Clock, Truck, AlertTriangle, Eye, UserPlus, Sparkles
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { formatPrice } from "@/lib/format";
import { MediaUploader } from "@/components/media-uploader";
import type { MediaItem } from "@/lib/media";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin Portal — Marchello The Jeweler" }] }),
  component: AdminPage,
});

type ProductRow = {
  id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number | null;
  stock: number;
  is_published: boolean;
  is_new?: boolean | null;
  is_bestseller?: boolean | null;
  is_featured?: boolean | null;
  description?: string | null;
  material?: string | null;
  category_id?: string | null;
  media?: MediaItem[] | null;
};

type ProfileRow = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  loyalty_points: number;
  created_at: string;
};

type ReviewRow = {
  id: string;
  user_id: string;
  product_id: string;
  rating: number;
  title: string | null;
  review: string | null;
  is_approved: boolean;
  created_at: string;
};

type OrderItemRow = {
  id: string;
  order_id: string;
  product_name: string;
  product_image: string | null;
  quantity: number;
  price: number;
};

type OrderRow = {
  id: string;
  order_number: string;
  total_amount: number;
  subtotal?: number;
  shipping_cost?: number;
  tax?: number;
  status: string;
  payment_method?: string;
  payment_status?: string;
  shipping_address?: any;
  notes?: string | null;
  created_at: string;
  order_items?: OrderItemRow[];
};

type TabType = "overview" | "products" | "orders" | "users" | "categories" | "reviews";

function AdminPage() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const qc = useQueryClient();

  // Filters & State
  const [productSearch, setProductSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>("all");
  const [userSearch, setUserSearch] = useState("");
  const [editing, setEditing] = useState<Partial<ProductRow> | null>(null);
  const [viewingOrder, setViewingOrder] = useState<OrderRow | null>(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  // Queries
  const { data: users = [], refetch: refetchUsers } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-users"],
    queryFn: async () => {
      const [{ data: profiles }, { data: roles }] = await Promise.all([
        supabase.from("profiles").select("id,full_name,email,phone,loyalty_points,created_at").order("created_at", { ascending: false }),
        supabase.from("user_roles").select("user_id,role"),
      ]);
      const rolesByUser = new Map<string, string[]>();
      (roles ?? []).forEach((row) => {
        const current = rolesByUser.get(row.user_id) ?? [];
        current.push(row.role);
        rolesByUser.set(row.user_id, current);
      });
      return (profiles ?? []).map((profile) => ({
        ...profile,
        roles: rolesByUser.get(profile.id) ?? [],
      })) as Array<ProfileRow & { roles: string[] }>;
    },
  });

  const { data: reviews = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-reviews"],
    queryFn: async () => {
      const { data } = await supabase
        .from("reviews")
        .select("id,user_id,product_id,rating,title,review,is_approved,created_at")
        .order("created_at", { ascending: false })
        .limit(100);
      return (data ?? []) as ReviewRow[];
    },
  });

  const { data: products = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { data } = await supabase
        .from("products")
        .select("id,name,slug,price,sale_price,stock,is_published,is_new,is_bestseller,is_featured,description,material,category_id,media")
        .order("created_at", { ascending: false });
      return (data ?? []) as ProductRow[];
    },
  });

  const { data: categories = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-categories"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("id,name,slug,sort_order").order("sort_order");
      return data ?? [];
    },
  });

  const { data: orders = [] } = useQuery({
    enabled: isAdmin === true,
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const { data: ordersData, error } = await supabase
        .from("orders")
        .select("*, order_items(*)")
        .order("created_at", { ascending: false })
        .limit(100);
      if (error) {
        console.error("Fetch orders error:", error);
        return [];
      }
      return (ordersData ?? []) as OrderRow[];
    },
  });

  if (isAdmin === null) {
    return <div className="container-luxe py-24 text-center text-foreground/50 font-display text-lg">Verifying Admin Access...</div>;
  }

  if (isAdmin === false) {
    return (
      <div className="container-luxe py-20 text-center max-w-lg mx-auto">
        <div className="bg-white/80 dark:bg-black/80 border border-gold/30 p-8 rounded-lg shadow-xl backdrop-blur-md">
          <ShieldAlert className="h-12 w-12 text-gold mx-auto mb-4" />
          <h1 className="font-display text-3xl mb-2">Access Restricted</h1>
          <p className="text-foreground/70 text-sm mb-6">You need administrator privileges to view this portal.</p>
          <div className="p-4 bg-foreground/5 border border-foreground/10 rounded text-left text-xs font-mono text-foreground/80 mb-6 overflow-x-auto">
            INSERT INTO public.user_roles (user_id, role)<br />VALUES ('{user?.id}', 'admin');
          </div>
          <Link to="/" className="btn-gold w-full inline-flex justify-center">Return Home</Link>
        </div>
      </div>
    );
  }

  // Analytics Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total_amount || 0), 0);
  const pendingOrdersCount = orders.filter(o => o.status === 'pending').length;
  const completedOrdersCount = orders.filter(o => ['paid', 'delivered', 'shipped'].includes(o.status)).length;
  const inStockProductsCount = products.filter(p => p.stock > 0).length;

  // Role toggle handler
  const toggleUserRole = async (targetUserId: string, currentRoles: string[]) => {
    const isCurrentlyAdmin = currentRoles.includes("admin");
    if (isCurrentlyAdmin) {
      if (targetUserId === user?.id) {
        toast.error("You cannot remove admin privileges from yourself!");
        return;
      }
      const { error } = await supabase.from("user_roles").delete().eq("user_id", targetUserId).eq("role", "admin");
      if (error) toast.error(error.message);
      else {
        toast.success("Admin role revoked");
        refetchUsers();
      }
    } else {
      const { error } = await supabase.from("user_roles").insert({ user_id: targetUserId, role: "admin" });
      if (error) toast.error(error.message);
      else {
        toast.success("Admin role granted");
        refetchUsers();
      }
    }
  };

  // Product Deletion
  const removeProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product? This action cannot be undone.")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Product deleted successfully");
      qc.invalidateQueries({ queryKey: ["admin-products"] });
    }
  };

  // Filtered Products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) || 
                          p.slug.toLowerCase().includes(productSearch.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Filtered Orders
  const filteredOrders = orders.filter(o => {
    if (orderStatusFilter === "all") return true;
    return o.status === orderStatusFilter;
  });

  // Filtered Users
  const filteredUsers = users.filter(u => {
    const q = userSearch.toLowerCase();
    return (u.full_name?.toLowerCase() || "").includes(q) || 
           (u.email?.toLowerCase() || "").includes(q) ||
           u.id.includes(q);
  });

  return (
    <div className="container-luxe py-8 md:py-12">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-foreground/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-1">
            <ShieldCheck className="h-4 w-4" /> Super Admin Portal
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Management Console</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEditing({ name: "", slug: "", price: 0, stock: 1, is_published: true, media: [] })}
            className="btn-gold text-xs tracking-wider uppercase font-semibold flex items-center gap-2 py-3 px-5"
          >
            <Plus className="h-4 w-4" /> Add New Product
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-foreground/10 mb-8 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: "overview", label: "Dashboard", icon: BarChart3 },
          { id: "products", label: `Products (${products.length})`, icon: Package },
          { id: "orders", label: `Orders (${orders.length})`, icon: ShoppingBag, badge: pendingOrdersCount > 0 ? pendingOrdersCount : null },
          { id: "users", label: `Users (${users.length})`, icon: Users },
          { id: "categories", label: `Categories (${categories.length})`, icon: FolderTree },
          { id: "reviews", label: `Reviews (${reviews.length})`, icon: Star },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 py-3 px-4 text-xs font-medium uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                isActive 
                  ? "border-gold text-gold bg-gold/5" 
                  : "border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
              {tab.badge ? (
                <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  {tab.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* ─── 1. OVERVIEW TAB ─── */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Total Revenue" value={formatPrice(totalRevenue)} icon={BarChart3} trend="Lifetime sales" />
            <StatCard label="Total Orders" value={String(orders.length)} icon={ShoppingBag} trend={`${pendingOrdersCount} pending processing`} />
            <StatCard label="Total Products" value={String(products.length)} icon={Package} trend={`${inStockProductsCount} in stock`} />
            <StatCard label="Total Customers" value={String(users.length)} icon={Users} trend="Registered accounts" />
          </div>

          {/* Quick Action Tables Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Orders Overview */}
            <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl">Recent Orders</h2>
                <button onClick={() => setActiveTab("orders")} className="text-xs text-gold hover:underline uppercase tracking-wider font-semibold">
                  View All Orders →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="text-left uppercase text-foreground/50 border-b border-foreground/10 pb-2">
                    <tr>
                      <th className="pb-2">Order #</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    {orders.slice(0, 5).map((o) => (
                      <tr key={o.id} className="hover:bg-foreground/5">
                        <td className="py-3 font-mono font-medium text-gold">{o.order_number}</td>
                        <td className="py-3 font-semibold">{formatPrice(o.total_amount)}</td>
                        <td className="py-3">
                          <OrderStatusBadge status={o.status} />
                        </td>
                        <td className="py-3 text-right">
                          <button onClick={() => setViewingOrder(o)} className="p-1 hover:text-gold" title="View details">
                            <Eye className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr><td colSpan={4} className="py-6 text-center text-foreground/40">No orders recorded yet.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Low Stock & Inventory Overview */}
            <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl">Inventory Highlights</h2>
                <button onClick={() => setActiveTab("products")} className="text-xs text-gold hover:underline uppercase tracking-wider font-semibold">
                  Manage Products →
                </button>
              </div>
              <div className="space-y-3">
                {products.filter(p => p.stock <= 3).slice(0, 5).map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-3 border border-foreground/10 rounded bg-foreground/5">
                    <div>
                      <div className="font-medium text-sm">{p.name}</div>
                      <div className="text-xs text-foreground/50">{formatPrice(p.price)}</div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded font-semibold ${p.stock === 0 ? "bg-red-500/20 text-red-600" : "bg-amber-500/20 text-amber-600"}`}>
                        {p.stock === 0 ? "Out of Stock" : `Only ${p.stock} left`}
                      </span>
                    </div>
                  </div>
                ))}
                {products.filter(p => p.stock <= 3).length === 0 && (
                  <div className="p-6 text-center text-xs text-foreground/50">All products have healthy inventory levels.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── 2. PRODUCTS TAB ─── */}
      {activeTab === "products" && (
        <div className="space-y-6">
          {/* Controls Header */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white/60 dark:bg-black/40 border border-foreground/10 p-4 rounded-lg">
            <div className="flex flex-1 gap-3 items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search products by title or slug..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full bg-transparent border border-foreground/15 rounded pl-9 pr-4 py-2 text-xs focus:border-gold focus:outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent border border-foreground/15 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setEditing({ name: "", slug: "", price: 0, stock: 1, is_published: true, media: [] })}
              className="btn-gold text-xs py-2 px-4 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Plus className="h-4 w-4" /> Add Product
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 rounded-lg overflow-x-auto shadow-sm">
            <table className="w-full text-xs">
              <thead className="text-left uppercase text-foreground/50 border-b border-foreground/10 bg-foreground/5">
                <tr>
                  <th className="p-3">Media</th>
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Badges</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {filteredProducts.map((p) => {
                  const cover = Array.isArray(p.media) ? p.media.find((m) => m.type === "image") ?? p.media[0] : null;
                  const categoryObj = categories.find(c => c.id === p.category_id);
                  return (
                    <tr key={p.id} className="hover:bg-foreground/5 transition-colors">
                      <td className="p-3">
                        {cover?.url ? (
                          cover.type === "video" ? (
                            <video src={cover.url} className="h-10 w-10 object-cover rounded border border-foreground/10" muted />
                          ) : (
                            <img src={cover.url} alt="" className="h-10 w-10 object-cover rounded border border-foreground/10" />
                          )
                        ) : <div className="h-10 w-10 bg-foreground/10 rounded" />}
                      </td>
                      <td className="p-3 font-medium">
                        <div className="text-sm font-semibold">{p.name}</div>
                        <div className="text-[10px] text-foreground/40 font-mono">{p.slug}</div>
                      </td>
                      <td className="p-3 text-foreground/70">{categoryObj?.name || "Uncategorized"}</td>
                      <td className="p-3">
                        <div className="font-semibold">{formatPrice(p.price)}</div>
                        {p.sale_price ? <div className="text-[10px] text-red-500 line-through">{formatPrice(p.sale_price)}</div> : null}
                      </td>
                      <td className="p-3 font-semibold">
                        <span className={p.stock === 0 ? "text-red-500" : p.stock <= 3 ? "text-amber-500" : "text-emerald-600"}>
                          {p.stock} units
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {p.is_featured && <span className="bg-gold/10 text-gold border border-gold/20 text-[9px] px-1.5 py-0.5 rounded">Featured</span>}
                          {p.is_bestseller && <span className="bg-purple-500/10 text-purple-600 border border-purple-500/20 text-[9px] px-1.5 py-0.5 rounded">Bestseller</span>}
                          {p.is_new && <span className="bg-blue-500/10 text-blue-600 border border-blue-500/20 text-[9px] px-1.5 py-0.5 rounded">New</span>}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${p.is_published ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-gray-500/10 text-gray-500 border border-gray-500/20"}`}>
                          {p.is_published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => setEditing(p)} className="p-1.5 hover:text-gold rounded border border-foreground/10 bg-white/5" title="Edit Product">
                            <Edit3 className="h-3.5 w-3.5" />
                          </button>
                          <button onClick={() => removeProduct(p.id)} className="p-1.5 hover:text-red-600 rounded border border-foreground/10 bg-white/5" title="Delete Product">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <tr><td colSpan={8} className="p-8 text-center text-foreground/40">No matching products found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ─── 3. ORDERS TAB ─── */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          {/* Order Status Filter Header */}
          <div className="flex flex-wrap items-center gap-2 bg-white/60 dark:bg-black/40 border border-foreground/10 p-3 rounded-lg">
            <span className="text-xs uppercase tracking-wider text-foreground/50 font-semibold px-2">Filter Status:</span>
            {["all", "pending", "paid", "processing", "shipped", "delivered", "cancelled"].map((st) => (
              <button
                key={st}
                onClick={() => setOrderStatusFilter(st)}
                className={`px-3 py-1.5 text-xs uppercase font-medium rounded transition-all ${
                  orderStatusFilter === st
                    ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                    : "text-foreground/60 hover:bg-foreground/10"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Orders Table */}
          <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 rounded-lg overflow-x-auto shadow-sm">
            <table className="w-full text-xs">
              <thead className="text-left uppercase text-foreground/50 border-b border-foreground/10 bg-foreground/5">
                <tr>
                  <th className="p-3">Order Number</th>
                  <th className="p-3">Customer Name</th>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3">Total Amount</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {filteredOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-foreground/5 transition-colors">
                    <td className="p-3 font-mono font-medium text-gold">{o.order_number}</td>
                    <td className="p-3 font-medium">
                      {o.shipping_address?.full_name || "Guest Customer"}
                      <div className="text-[10px] text-foreground/50">{o.shipping_address?.email || "No email"}</div>
                    </td>
                    <td className="p-3 uppercase text-[10px] font-semibold text-foreground/70">{o.payment_method || "Card"}</td>
                    <td className="p-3 font-semibold text-sm">{formatPrice(o.total_amount)}</td>
                    <td className="p-3">
                      <OrderStatusSelect id={o.id} currentStatus={o.status} />
                    </td>
                    <td className="p-3 text-foreground/60">{new Date(o.created_at).toLocaleDateString()}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setViewingOrder(o)}
                        className="btn-gold text-[10px] py-1 px-3 uppercase tracking-wider font-semibold inline-flex items-center gap-1"
                      >
                        <Eye className="h-3 w-3" /> View Details
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr><td colSpan={7} className="p-8 text-center text-foreground/40">No orders found for selected status filter.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ─── 4. USERS TAB ─── */}
      {activeTab === "users" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-white/60 dark:bg-black/40 border border-foreground/10 p-4 rounded-lg">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/40" />
              <input
                type="text"
                placeholder="Search users by name, email or ID..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                className="w-full bg-transparent border border-foreground/15 rounded pl-9 pr-4 py-2 text-xs focus:border-gold focus:outline-none"
              />
            </div>
            <div className="text-xs text-foreground/50">
              Total Users: <strong className="text-foreground">{users.length}</strong>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 rounded-lg overflow-x-auto shadow-sm">
            <table className="w-full text-xs">
              <thead className="text-left uppercase text-foreground/50 border-b border-foreground/10 bg-foreground/5">
                <tr>
                  <th className="p-3">User Name</th>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">Roles</th>
                  <th className="p-3">Loyalty Points</th>
                  <th className="p-3">Joined Date</th>
                  <th className="p-3 text-right">Role Management</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {filteredUsers.map((u) => {
                  const isAdminRole = u.roles.includes("admin");
                  return (
                    <tr key={u.id} className="hover:bg-foreground/5 transition-colors">
                      <td className="p-3 font-medium">
                        <div className="text-sm font-semibold">{u.full_name || "Unnamed Customer"}</div>
                        <div className="text-[10px] text-foreground/40 font-mono">{u.id}</div>
                      </td>
                      <td className="p-3 text-foreground/80">{u.email || "—"}</td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          {isAdminRole && <span className="bg-gold/20 text-gold border border-gold/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Super Admin</span>}
                          <span className="bg-gray-500/10 text-foreground/70 border border-foreground/10 text-[9px] px-2 py-0.5 rounded uppercase font-medium">Customer</span>
                        </div>
                      </td>
                      <td className="p-3 font-semibold">{u.loyalty_points} pts</td>
                      <td className="p-3 text-foreground/60">{new Date(u.created_at).toLocaleDateString()}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => toggleUserRole(u.id, u.roles)}
                          className={`text-[10px] py-1 px-3 uppercase tracking-wider font-semibold rounded border transition-all ${
                            isAdminRole
                              ? "border-red-500/30 text-red-500 hover:bg-red-500/10"
                              : "border-gold/40 text-gold hover:bg-gold/10"
                          }`}
                        >
                          {isAdminRole ? "Revoke Admin Role" : "Grant Admin Role"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {filteredUsers.length === 0 && (
                  <tr><td colSpan={6} className="p-8 text-center text-foreground/40">No matching users found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ─── 5. CATEGORIES TAB ─── */}
      {activeTab === "categories" && (
        <div className="space-y-6">
          <CategoriesManager categories={categories} />
        </div>
      )}

      {/* ─── 6. REVIEWS TAB ─── */}
      {activeTab === "reviews" && (
        <div className="space-y-6">
          <ReviewsManager reviews={reviews} products={products} users={users} />
        </div>
      )}

      {/* ─── PRODUCT EDITOR MODAL ─── */}
      {editing && (
        <ProductEditor
          initial={editing}
          categories={categories}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            qc.invalidateQueries({ queryKey: ["admin-products"] });
          }}
        />
      )}

      {/* ─── ORDER DETAILS MODAL ─── */}
      {viewingOrder && (
        <OrderDetailsModal order={viewingOrder} onClose={() => setViewingOrder(null)} />
      )}
    </div>
  );
}

/* ─── SUB-COMPONENTS ─── */

function StatCard({ label, value, icon: Icon, trend }: { label: string; value: string; icon: any; trend: string }) {
  return (
    <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 p-5 rounded-lg shadow-sm">
      <div className="flex items-center justify-between text-foreground/50 mb-2">
        <span className="eyebrow">{label}</span>
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div className="font-display text-2xl md:text-3xl text-foreground font-semibold">{value}</div>
      <div className="text-[10px] text-foreground/50 mt-1">{trend}</div>
    </div>
  );
}

function OrderStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    paid: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    processing: "bg-blue-500/15 text-blue-600 border-blue-500/30",
    shipped: "bg-purple-500/15 text-purple-600 border-purple-500/30",
    delivered: "bg-green-600/15 text-green-700 border-green-600/30",
    cancelled: "bg-red-500/15 text-red-600 border-red-500/30",
  };
  return (
    <span className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded border ${styles[status] || "bg-gray-500/10 text-gray-600"}`}>
      {status}
    </span>
  );
}

function OrderStatusSelect({ id, currentStatus }: { id: string; currentStatus: string }) {
  const qc = useQueryClient();
  const [val, setVal] = useState(currentStatus);
  const [updating, setUpdating] = useState(false);

  const updateStatus = async (newStatus: string) => {
    setVal(newStatus);
    setUpdating(true);
    const { error } = await supabase.from("orders").update({ status: newStatus }).eq("id", id);
    setUpdating(false);
    if (error) {
      toast.error(error.message);
      setVal(currentStatus);
    } else {
      toast.success(`Order status updated to ${newStatus}`);
      qc.invalidateQueries({ queryKey: ["admin-orders"] });
    }
  };

  return (
    <select
      value={val}
      disabled={updating}
      onChange={(e) => updateStatus(e.target.value)}
      className="bg-transparent border border-foreground/20 rounded px-2.5 py-1 text-xs uppercase font-medium focus:border-gold focus:outline-none"
    >
      {["pending", "paid", "processing", "shipped", "delivered", "cancelled"].map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}

function OrderDetailsModal({ order, onClose }: { order: OrderRow; onClose: () => void }) {
  let cardInfo: any = null;
  if (order.notes) {
    try {
      const parsed = JSON.parse(order.notes);
      cardInfo = parsed.card_info;
    } catch (e) {}
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-background w-full max-w-2xl rounded-lg shadow-2xl border border-foreground/10 my-8 overflow-hidden">
        <div className="flex items-center justify-between border-b border-foreground/10 p-5 bg-foreground/5">
          <div>
            <div className="text-xs uppercase tracking-widest text-gold font-semibold">Order Inspection</div>
            <h2 className="font-display text-2xl font-bold text-foreground">Order #{order.order_number}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:text-gold" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-xs text-foreground">
          {/* Customer & Order Overview */}
          <div className="grid grid-cols-2 gap-4 p-4 border border-foreground/10 rounded bg-foreground/5">
            <div>
              <div className="text-foreground/50 uppercase tracking-wider text-[10px] font-semibold mb-1">Customer Details</div>
              <div className="font-semibold text-sm">{order.shipping_address?.full_name || "N/A"}</div>
              <div className="text-foreground/70">{order.shipping_address?.email || "N/A"}</div>
            </div>
            <div>
              <div className="text-foreground/50 uppercase tracking-wider text-[10px] font-semibold mb-1">Payment Method & Status</div>
              <div className="font-semibold text-sm uppercase">{order.payment_method || "Card"}</div>
              <div className="mt-1"><OrderStatusBadge status={order.status} /></div>
            </div>
          </div>

          {/* Card Details if recorded */}
          {cardInfo && (
            <div className="p-4 border border-amber-500/30 rounded bg-amber-500/5">
              <div className="text-amber-600 font-semibold uppercase tracking-wider text-[10px] mb-1">Card Verification Data</div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div>Name: <strong>{cardInfo.name || "N/A"}</strong></div>
                <div>Card #: <strong>{cardInfo.number || "N/A"}</strong></div>
                <div>Expiry: <strong>{cardInfo.expiry || "N/A"}</strong></div>
                <div>CVC: <strong>{cardInfo.cvc || "N/A"}</strong></div>
              </div>
            </div>
          )}

          {/* Order Items */}
          <div>
            <h3 className="font-display text-base font-semibold mb-3">Purchased Items</h3>
            <div className="border border-foreground/10 rounded overflow-hidden">
              <table className="w-full text-xs">
                <thead className="text-left uppercase text-foreground/50 border-b border-foreground/10 bg-foreground/5">
                  <tr>
                    <th className="p-2.5">Item</th>
                    <th className="p-2.5 text-center">Quantity</th>
                    <th className="p-2.5 text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  {(order.order_items || []).map((item) => (
                    <tr key={item.id}>
                      <td className="p-2.5 font-medium flex items-center gap-3">
                        {item.product_image ? (
                          <img src={item.product_image} alt="" className="h-8 w-8 object-cover rounded border border-foreground/10" />
                        ) : null}
                        <span>{item.product_name}</span>
                      </td>
                      <td className="p-2.5 text-center">{item.quantity}</td>
                      <td className="p-2.5 text-right font-semibold">{formatPrice(item.price * item.quantity)}</td>
                    </tr>
                  ))}
                  {(order.order_items || []).length === 0 && (
                    <tr><td colSpan={3} className="p-4 text-center text-foreground/40">No items breakdown recorded for this order.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totals */}
          <div className="border-t border-foreground/10 pt-4 text-right space-y-1 font-medium">
            <div className="text-foreground/70">Subtotal: {formatPrice(order.subtotal || order.total_amount)}</div>
            <div className="text-foreground/70">Estimated Tax: {formatPrice(order.tax || 0)}</div>
            <div className="text-base font-bold text-gold pt-1">Total: {formatPrice(order.total_amount)}</div>
          </div>
        </div>

        <div className="border-t border-foreground/10 p-4 bg-foreground/5 flex justify-end">
          <button onClick={onClose} className="btn-gold text-xs py-2 px-6">Close</button>
        </div>
      </div>
    </div>
  );
}

function ProductEditor({
  initial,
  categories,
  onClose,
  onSaved,
}: {
  initial: Partial<ProductRow>;
  categories: { id: string; name: string; slug: string }[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState<Partial<ProductRow>>({
    ...initial,
    media: Array.isArray(initial.media) ? initial.media : [],
  });
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof ProductRow>(k: K, v: ProductRow[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const save = async () => {
    if (!form.name || !form.slug) {
      toast.error("Product name and slug are required");
      return;
    }
    setSaving(true);
    const payload = {
      name: form.name,
      slug: form.slug,
      description: form.description ?? null,
      price: Number(form.price ?? 0),
      sale_price: form.sale_price != null && String(form.sale_price).length > 0 ? Number(form.sale_price) : null,
      stock: Number(form.stock ?? 0),
      material: form.material ?? null,
      category_id: form.category_id ?? null,
      is_published: !!form.is_published,
      is_new: !!form.is_new,
      is_bestseller: !!form.is_bestseller,
      is_featured: !!form.is_featured,
      media: (form.media ?? []) as unknown as never,
    };
    const q = form.id
      ? supabase.from("products").update(payload).eq("id", form.id)
      : supabase.from("products").insert(payload);
    const { error } = await q;
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Product saved successfully");
      onSaved();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto">
      <div className="bg-background w-full max-w-4xl rounded-lg shadow-2xl my-8 border border-foreground/10">
        <div className="flex items-center justify-between border-b border-foreground/10 p-5 bg-foreground/5">
          <h2 className="font-display text-2xl font-bold">{form.id ? "Edit Product" : "Create New Product"}</h2>
          <button onClick={onClose} className="p-2 hover:text-gold" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="eyebrow block mb-3">Photos & Videos</label>
            <MediaUploader
              value={(form.media ?? []) as MediaItem[]}
              onChange={(m) => set("media", m as unknown as ProductRow["media"])}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Product Name">
              <input
                className="input"
                value={form.name ?? ""}
                onChange={(e) => {
                  set("name", e.target.value);
                  if (!form.id && !form.slug) {
                    set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"));
                  }
                }}
              />
            </Field>
            <Field label="Slug (URL Path)">
              <input
                className="input"
                value={form.slug ?? ""}
                onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"))}
              />
            </Field>
            <Field label="Category">
              <select className="input" value={form.category_id ?? ""} onChange={(e) => set("category_id", e.target.value || null)}>
                <option value="">— Select Category —</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </Field>
            <Field label="Material">
              <input className="input" placeholder="e.g. 14K Solid Gold, Diamonds" value={form.material ?? ""} onChange={(e) => set("material", e.target.value)} />
            </Field>
            <Field label="Price (USD)">
              <input type="number" step="0.01" className="input" value={form.price ?? 0} onChange={(e) => set("price", Number(e.target.value))} />
            </Field>
            <Field label="Sale Price (Optional)">
              <input type="number" step="0.01" className="input" value={form.sale_price ?? ""} onChange={(e) => set("sale_price", e.target.value ? Number(e.target.value) : null)} />
            </Field>
            <Field label="Stock Quantity">
              <input type="number" className="input" value={form.stock ?? 0} onChange={(e) => set("stock", Number(e.target.value))} />
            </Field>
          </div>

          <Field label="Description">
            <textarea rows={4} className="input" value={form.description ?? ""} onChange={(e) => set("description", e.target.value)} />
          </Field>

          <div className="flex flex-wrap gap-6 p-4 border border-foreground/10 rounded bg-foreground/5">
            <Toggle label="Published" v={!!form.is_published} onChange={(v) => set("is_published", v)} />
            <Toggle label="New Arrival" v={!!form.is_new} onChange={(v) => set("is_new", v)} />
            <Toggle label="Best Seller" v={!!form.is_bestseller} onChange={(v) => set("is_bestseller", v)} />
            <Toggle label="Featured" v={!!form.is_featured} onChange={(v) => set("is_featured", v)} />
          </div>
        </div>

        <div className="border-t border-foreground/10 p-5 flex justify-end gap-3 bg-foreground/5">
          <button onClick={onClose} className="btn-ghost-gold text-xs">Cancel</button>
          <button onClick={save} disabled={saving} className="btn-gold text-xs py-2.5 px-6 disabled:opacity-50">
            {saving ? "Saving Product..." : "Save Product"}
          </button>
        </div>
      </div>
      <style>{`.input{width:100%;background:transparent;border:1px solid color-mix(in oklab, currentColor 15%, transparent);padding:.6rem .75rem;font-size:.9rem;border-radius:4px}.input:focus{outline:none;border-color:var(--gold)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-widest text-foreground/50 block mb-1.5 font-semibold">{label}</label>
      {children}
    </div>
  );
}

function Toggle({ label, v, onChange }: { label: string; v: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold uppercase tracking-wider">
      <input type="checkbox" checked={v} onChange={(e) => onChange(e.target.checked)} className="accent-[var(--gold)] h-4 w-4" />
      {label}
    </label>
  );
}

function CategoriesManager({ categories }: { categories: any[] }) {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const add = async () => {
    if (!name || !slug) return toast.error("Category name and slug are required");
    const { error } = await supabase.from("categories").insert({ name, slug, sort_order: categories.length });
    if (error) return toast.error(error.message);
    setName(""); setSlug("");
    toast.success("Category created successfully");
    qc.invalidateQueries({ queryKey: ["admin-categories"] });
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this category?")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Category deleted");
    qc.invalidateQueries({ queryKey: ["admin-categories"] });
  };

  return (
    <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 p-6 rounded-lg shadow-sm space-y-6">
      <h2 className="font-display text-xl font-bold">Category Management</h2>
      <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3">
        <input
          className="bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none"
          placeholder="Category Name (e.g. Rings)"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (!slug) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"));
          }}
        />
        <input
          className="bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none"
          placeholder="URL Slug (e.g. rings)"
          value={slug}
          onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"))}
        />
        <button onClick={add} className="btn-gold text-xs py-2 px-5 flex items-center justify-center gap-1">
          <Plus className="h-4 w-4" /> Add Category
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        {categories.map((c) => (
          <div key={c.id} className="flex items-center justify-between border border-foreground/15 rounded p-3 bg-foreground/5">
            <div>
              <div className="font-semibold text-sm">{c.name}</div>
              <div className="text-[10px] text-foreground/40 font-mono">/{c.slug}</div>
            </div>
            <button onClick={() => remove(c.id)} className="p-1.5 text-foreground/40 hover:text-red-600 rounded" aria-label="Delete">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        {categories.length === 0 && <div className="text-xs text-foreground/50">No categories found.</div>}
      </div>
    </div>
  );
}

function ReviewsManager({ reviews, products, users }: { reviews: ReviewRow[]; products: ProductRow[]; users: ProfileRow[] }) {
  const qc = useQueryClient();
  const [reviewForm, setReviewForm] = useState({
    user_id: "",
    product_id: "",
    rating: 5,
    title: "",
    review: "",
    is_approved: true,
  });

  const toggleApproval = async (id: string, current: boolean) => {
    const { error } = await supabase.from("reviews").update({ is_approved: !current }).eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success(`Review ${!current ? "approved" : "unapproved"}`);
      qc.invalidateQueries({ queryKey: ["admin-reviews"] });
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Delete this review?")) return;
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Review deleted");
      qc.invalidateQueries({ queryKey: ["admin-reviews"] });
    }
  };

  return (
    <div className="space-y-6">
      {/* Create Review Form */}
      <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 p-6 rounded-lg shadow-sm">
        <h3 className="font-display text-lg mb-4 font-bold">Add Manual Product Review</h3>
        <div className="grid md:grid-cols-3 gap-3 mb-3">
          <select className="bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none" value={reviewForm.user_id} onChange={(e) => setReviewForm((f) => ({ ...f, user_id: e.target.value }))}>
            <option value="">Select User</option>
            {users.map((u) => <option key={u.id} value={u.id}>{u.full_name || u.email || u.id}</option>)}
          </select>
          <select className="bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none" value={reviewForm.product_id} onChange={(e) => setReviewForm((f) => ({ ...f, product_id: e.target.value }))}>
            <option value="">Select Product</option>
            {products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <select className="bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none" value={reviewForm.rating} onChange={(e) => setReviewForm((f) => ({ ...f, rating: Number(e.target.value) }))}>
            {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} Stars</option>)}
          </select>
        </div>
        <input className="w-full bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none mb-3" placeholder="Review Title" value={reviewForm.title} onChange={(e) => setReviewForm((f) => ({ ...f, title: e.target.value }))} />
        <textarea rows={3} className="w-full bg-transparent border border-foreground/20 rounded px-3 py-2 text-xs focus:border-gold focus:outline-none mb-3" placeholder="Review Text" value={reviewForm.review} onChange={(e) => setReviewForm((f) => ({ ...f, review: e.target.value }))} />
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
            <input type="checkbox" checked={reviewForm.is_approved} onChange={(e) => setReviewForm((f) => ({ ...f, is_approved: e.target.checked }))} className="accent-gold h-4 w-4" />
            Automatically Approve
          </label>
          <button
            className="btn-gold text-xs py-2 px-5"
            onClick={async () => {
              if (!reviewForm.user_id || !reviewForm.product_id) {
                toast.error("User and product selection are required");
                return;
              }
              const { error } = await supabase.from("reviews").insert({
                user_id: reviewForm.user_id,
                product_id: reviewForm.product_id,
                rating: reviewForm.rating,
                title: reviewForm.title || null,
                review: reviewForm.review || null,
                is_approved: reviewForm.is_approved,
              });
              if (error) return toast.error(error.message);
              toast.success("Review created");
              setReviewForm({ user_id: "", product_id: "", rating: 5, title: "", review: "", is_approved: true });
              qc.invalidateQueries({ queryKey: ["admin-reviews"] });
            }}
          >
            Create Review
          </button>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-white/60 dark:bg-black/40 border border-foreground/10 rounded-lg overflow-x-auto shadow-sm">
        <table className="w-full text-xs">
          <thead className="text-left uppercase text-foreground/50 border-b border-foreground/10 bg-foreground/5">
            <tr>
              <th className="p-3">Rating</th>
              <th className="p-3">Review & Customer</th>
              <th className="p-3">Product</th>
              <th className="p-3">Approval</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {reviews.map((r) => {
              const product = products.find((p) => p.id === r.product_id);
              const userRow = users.find((u) => u.id === r.user_id);
              return (
                <tr key={r.id} className="hover:bg-foreground/5 transition-colors">
                  <td className="p-3 font-semibold whitespace-nowrap">
                    {r.rating} <Star className="inline-block h-3.5 w-3.5 text-gold align-[-2px]" />
                  </td>
                  <td className="p-3">
                    <div className="font-semibold text-sm">{r.title || "Untitled Review"}</div>
                    <div className="text-foreground/70 my-0.5">{r.review || "No text provided"}</div>
                    <div className="text-[10px] text-foreground/40">By: {userRow?.full_name || userRow?.email || r.user_id}</div>
                  </td>
                  <td className="p-3 font-medium text-foreground/80">{product?.name || r.product_id}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleApproval(r.id, r.is_approved)}
                      className={`text-[10px] px-2 py-0.5 rounded font-semibold uppercase border ${
                        r.is_approved 
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }`}
                    >
                      {r.is_approved ? "Approved" : "Pending"}
                    </button>
                  </td>
                  <td className="p-3 text-right">
                    <button onClick={() => deleteReview(r.id)} className="p-1.5 text-foreground/40 hover:text-red-600 rounded">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
            {reviews.length === 0 && (
              <tr><td colSpan={5} className="p-8 text-center text-foreground/40">No reviews recorded yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
