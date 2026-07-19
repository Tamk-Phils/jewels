import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  isLoaded: boolean;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "marchello.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) return JSON.parse(raw);
      } catch {
        // ignore
      }
    }
    return [];
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isLoaded) {
      localStorage.setItem(KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const value = useMemo<CartCtx>(() => ({
    items,
    add: (item, qty = 1) => setItems((cur) => {
      const idx = cur.findIndex((i) => i.id === item.id);
      if (idx >= 0) {
        const next = [...cur];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...cur, { ...item, quantity: qty }];
    }),
    remove: (id) => setItems((cur) => cur.filter((i) => i.id !== id)),
    setQty: (id, qty) => setItems((cur) =>
      cur.map((i) => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)
    ),
    clear: () => setItems([]),
    count: items.reduce((s, i) => s + i.quantity, 0),
    subtotal: items.reduce((s, i) => s + i.price * i.quantity, 0),
    isLoaded,
  }), [items, isLoaded]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
