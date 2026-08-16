export interface SeedCategory {
  id: string;
  slug: string;
  name: string;
  sort_order: number;
}

export interface SeedProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price: number | null;
  images: string[];
  is_published: boolean;
  stock: number;
  category_id: string;
  gender: string;
  material: string;
  is_bestseller: boolean;
  is_featured: boolean;
  is_new: boolean;
  created_at: string;
  category: { id: string; slug: string; name: string } | null;
}

export const SEED_CATEGORIES: SeedCategory[] = [
  {
    "id": "11111111-1111-1111-1111-111111111111",
    "slug": "rings",
    "name": "Rings",
    "sort_order": 1
  },
  {
    "id": "22222222-2222-2222-2222-222222222222",
    "slug": "earrings",
    "name": "Earrings",
    "sort_order": 2
  },
  {
    "id": "33333333-3333-3333-3333-333333333333",
    "slug": "pendants",
    "name": "Pendants",
    "sort_order": 3
  },
  {
    "id": "44444444-4444-4444-4444-444444444444",
    "slug": "chains",
    "name": "Chains",
    "sort_order": 4
  },
  {
    "id": "55555555-5555-5555-5555-555555555555",
    "slug": "watches",
    "name": "Watches",
    "sort_order": 5
  },
  {
    "id": "66666666-6666-6666-6666-666666666666",
    "slug": "bracelets",
    "name": "Bracelets",
    "sort_order": 6
  }
];

export const SEED_PRODUCTS: SeedProduct[] = [
  {
    "id": "seed-prod-1",
    "name": "18k white gold and diamond Ladies Fancy Ring",
    "slug": "18k-white-gold-and-diamond-ladies-fancy-ring-2",
    "description": "<ul>\n<li>18k white gold and natural round, oval diamonds.</li>\n<li>Approximate diamond weight:<span> 0.95</span>ct.</li>\n<li>Approximate item weight: 4.3<span> grams at size 7. Actual weight will vary, based on selected ring size.</span>\n</li>\n<li><span>Approximate top width: 17.55mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3220,
    "sale_price": 2737,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at5.29.06PM.jpg?v=1785534020",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at5.29.05PM.jpg?v=1785534087",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at5.29.05PM_2.jpg?v=1785534108"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-16T08:20:25.205Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-2",
    "name": "14k White gold and Natural diamond Men's Ring",
    "slug": "14k-white-gold-and-natural-diamond-mens-ring",
    "description": "<ul>\n<li>14k white gold and natural round, princess cut diamonds.</li>\n<li>Approximate diamond weight: 5 ct.</li>\n<li>Approximate weight: 33.5 <span>grams. (size 13 - varies with size)</span>\n</li>\n<li>Approximate top width: 20.83 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>\n<p> </p>",
    "price": 6957.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at5.02.16PM.jpg?v=1785532366",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at5.02.16PM_1.jpg?v=1785532460",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at5.02.16PM_2.jpg?v=1785532517"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-16T07:20:25.206Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-3",
    "name": "14k White gold and Natural diamonds Men's Ring.",
    "slug": "14k-white-gold-and-natural-diamonds-mens-ring",
    "description": "<ul>\n<li>14k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.3 ct.</li>\n<li>Approximate weight: 10.9<span> </span><span>grams </span>\n</li>\n<li><span>Size : 9.5 (depending on size).</span></li>\n<li><span>Approximate bandwidth: 15.55 mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 2645,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at4.28.06PM.jpg?v=1785530361",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at4.28.05PM_1.jpg?v=1785530389",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at4.28.05PM.jpg?v=1785530461",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at4.28.05PM_2.jpg?v=1785530518"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-16T06:20:25.206Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-4",
    "name": "10k yellow gold and natural round diamonds Initial Pendant & Rope Chain Set.",
    "slug": "10k-yellow-gold-and-natural-round-diamonds-initial-pendant-rope-chain-set",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.33 - 1.8ct.</li>\n<li>Approximate pendant length (including bail): 33.9 - 35.5 mm.</li>\n<li>Approximate weight: 7.9 - 9.7grams (22\" chain + pendant combined).</li>\n<li>Comes with a 10k gold rope chain approx. 2.4 mm wide.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Don't see exactly what you're looking for? We also make custom orders. Please allow approximately 3–6 weeks for production.</li>\n</ul>",
    "price": 2758.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at3.04.42PM_1.jpg?v=1785525023",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at3.04.40PM.jpg?v=1785525180",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at3.04.44PM_1.jpg?v=1785525250",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at3.04.42PM.jpg?v=1785525325",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at3.04.43PM_1.jpg?v=1785525360",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at3.04.44PM.jpg?v=1785525394"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "10k,10K Yellow Gold Jewelry,diamonds,initial,Luxury Jewelry,pendant,rope chain,round diamonds,yellow gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-16T05:20:25.206Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-5",
    "name": "14k Rose gold and round Natural diamonds Men's Wedding band.",
    "slug": "14k-rose-gold-and-round-natural-diamonds-mens-wedding-band",
    "description": "<ul>\n<li>14k rose gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1 ct (depending on size).</li>\n<li>Approximate weight: 6.4 <span>grams Size : 11 (depending on size).</span>\n</li>\n<li><span>Approximate bandwidth: 7.5 mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.<br>\n</li>\n</ul>",
    "price": 1840,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at1.52.08PM.jpg?v=1785520766",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at1.52.08PM_1.jpg?v=1785521225",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at1.52.07PM_1.jpg?v=1785520897",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-31_at_2.08.58_PM.jpg?v=1785521372"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-16T04:20:25.206Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-6",
    "name": "14k gold and Natural Round Diamonds Wedding band.(Choose your color)",
    "slug": "14k-gold-and-natural-round-diamonds-wedding-band-choose-your-color",
    "description": "<ul>\n<li>14k yellow or white<strong> </strong> gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 2.31-2.39 ct. (depends size of the ring) </li>\n<li>Approximate weight: 6.9-7.3 grams<span>.(depends size of the ring) </span>\n</li>\n<li>\n<span>Approximate width: 7 mm.</span><br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 3448.85,
    "sale_price": 2932,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-31_at_1.13.28_PM.jpg?v=1785518482",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at12.42.12PM.jpg?v=1785518342",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at12.42.13PM_2.jpg?v=1785518386",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at12.42.14PM.jpg?v=1785518429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-31_at_1.13.29_PM_1.jpg?v=1785518522",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-31_at_1.13.29_PM.jpg?v=1785518567",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-31_at_1.31.52_PM.jpg?v=1785519256"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-16T03:20:25.206Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-7",
    "name": "14k Yellow Gold and Natural Round Diamonds Ring",
    "slug": "14k-yellow-gold-and-natural-round-diamonds-ring",
    "description": "<ul>\n<li>14k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.75ct.</li>\n<li>Approximate weight: 6.4 <span>grams.</span>\n</li>\n<li><span>Approximate band width: 2.86 mm.</span></li>\n<li>Approximate top diameter: 16.13 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2758.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-31_at_11.51.45_AM.jpg?v=1785514941",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.51.45AM_1.jpg?v=1785514259",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.51.44AM_1.jpg?v=1785514304",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.51.45AM_3.jpg?v=1785514532"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Yellow Gold and Natural Round Diamonds Ring",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-16T02:20:25.206Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-8",
    "name": "14k rose gold and natural diamonds Jesus head pendant and Rose gold rope chain.",
    "slug": "14k-rose-gold-and-natural-diamonds-jesus-head-pendant-and-rose-gold-rope-chain",
    "description": "<ul>\n<li>14k rose gold and natural round diamonds pendant.</li>\n<li>Approximate diamond weight: 1.1ct.</li>\n<li>10k rose gold approx. 1.7 mm rope chain.</li>\n<li>Approximate pendant height (including bail): 1.36 inches.</li>\n<li>Approximate weight: 10.2 grams (18 inches chain + pendant combined). Actual weight will vary, based on selected length of chain.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2758.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.18.07AM_1.jpg?v=1785511870",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.18.08AM_2.jpg?v=1785512000",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.18.07AM.jpg?v=1785512086",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.18.08AM_4.jpg?v=1785512123",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at11.18.08AM_3.jpg?v=1785512153"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-16T01:20:25.206Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-9",
    "name": "14k white gold and natural diamond Jesus Head pendant and White gold Cuban chain",
    "slug": "10k-white-gold-and-natural-diamonds-pendant",
    "description": "<ul>\n<li>14k white gold and natural earth mined round diamond pendant.</li>\n<li>Approximate diamond weight: 0.45ct.</li>\n<li>10k white gold approx. 3 mm cuban chain.</li>\n<li>Approximate pendant height (including bail): 1.28 inches.</li>\n<li>Approximate weight: 8.81 grams (22 inches chain + pendant combined). Actual weight will vary, based on selected length of chain.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2183.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at10.46.10AM_4.jpg?v=1785509794",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at10.46.10AM_3.jpg?v=1785509831",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at10.46.10AM.jpg?v=1785509903",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at10.46.09AM.jpg?v=1785509579",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at10.46.09AM_1.jpg?v=1785509971"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-16T00:20:25.206Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-10",
    "name": "18k white gold and natural diamonds earring.",
    "slug": "18k-white-gold-and-natural-diamonds-earring-2",
    "description": "<ul>\n<li>18k white gold and natural pink round diamonds.</li>\n<li>Approximate diamond weight: 1 ct.<br>\n</li>\n<li>Clip-on with a post.<br>\n</li>\n<li>Approximate drop: 31.09 mm.</li>\n<li>Approximate width: 11.938 mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 3908.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at9.53.40AM_3.jpg?v=1785506781",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-31at9.53.40AM_2.jpg?v=1785507156"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-15T23:20:25.206Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-11",
    "name": "18k white gold and natural diamonds earring.",
    "slug": "18k-white-gold-and-natural-diamonds-earring",
    "description": "<ul>\n<li>18k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 0.2ct.</li>\n<li>Dimensions: 14.83 X 6.12 mm.</li>\n<li>Push-back.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 1667.5,
    "sale_price": 1417,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at4.33.00PM_3.jpg?v=1785357985",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at4.32.59PM.jpg?v=1785358150",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at4.33.00PM_1.jpg?v=1785358256",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at4.33.00PM_4.jpg?v=1785358605"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T22:20:25.206Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-12",
    "name": "18k yellow gold and natural diamond earrings.",
    "slug": "18k-yellow-gold-and-natural-diamond-earrings",
    "description": "<ul>\n<li>18k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 0.2ct.</li>\n<li>Dimensions: 13.80 mm.</li>\n<li>Screw-on back.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 1608.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.16PM_1.jpg?v=1785355118",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.15PM_1.jpg?v=1785354396",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.15PM.jpg?v=1785359762",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.16PM_2.jpg?v=1785354050",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.16PM_3.jpg?v=1785355187",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.16PM.jpg?v=1785355660",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.17PM_2.jpg?v=1785355582",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at3.33.17PM.jpg?v=1785354050"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T21:20:25.206Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-13",
    "name": "14k White Gold and Lab Diamond Bracelet.",
    "slug": "14k-white-gold-and-lab-diamond-bracelet",
    "description": "<ul>\n<li>14k white gold and oval, round, marquise and pear lab diamonds.<br>\n</li>\n<li>Approximate diamond weight: 5.43 ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7 inches. </span></li>\n<li>Approximate weight: 8.3 grams (depending on length).</li>\n<li>Approximate width: 3.90mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 3218.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at2.28.05PM_1.jpg?v=1785350775",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at2.28.05PM_4.jpg?v=1785351032",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at2.28.05PM.jpg?v=1785351331",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at2.28.06PM.jpg?v=1785351613"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14k White Gold and Lab Diamond Bracelet.",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-15T20:20:25.206Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-14",
    "name": "14k yellow gold and diamonds ring",
    "slug": "14k-yellow-gold-and-diamonds-ring",
    "description": "<ul>\n<li>14k yellow gold and lab emerald cut diamonds.</li>\n<li>Approximate diamond weight: 3.5 ct. total , centre- 3.01 ct and side - 0.50 ct</li>\n<li>Approximate weight: 3.2<span> grams.</span>\n</li>\n<li><span>Average clarity: VS1.</span></li>\n<li><span>Average color: E</span></li>\n<li><span>Approximate band width: 2. 08 mm.</span></li>\n<li>Approximate top dimensions: 10.86 X 7.70 mm.</li>\n<li>\n<span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span><span></span>\n</li>\n</ul>",
    "price": 2988.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-29_at_1.57.12_PM.jpg?v=1785348452",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at1.35.58PM_3_-Copy.jpg?v=1785347413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at1.35.57PM.jpg?v=1785347245",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at1.35.58PM-Copy.jpg?v=1785348322",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at1.35.58PM_1.jpg?v=1785347245",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at1.35.58PM_3.jpg?v=1785347245"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T19:20:25.206Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-15",
    "name": "14k Yellow gold and lab earrings",
    "slug": "14k-yellow-gold-and-lab-earrings",
    "description": "<ul>\n<li>14k yellow gold and lab oval earrings </li>\n<li>Approximate diamond weight: 2.08ct .</li>\n<li>Approximate measurement: 8.05 X 5.78 mm.</li>\n<li>Approximate weight: 1.26 grams. </li>\n<li>Push back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1263.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at12.42.35PM_2.jpg?v=1785344752",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at12.42.35PM_1.jpg?v=1785344913",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at12.42.34PM_4.jpg?v=1785344985",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at12.42.34PM_2_-Copy.jpg?v=1785345119",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-29_at_12.42.34_PM_6.jpg?v=1785345822"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T18:20:25.206Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-16",
    "name": "14k yellow gold and lab diamonds",
    "slug": "14k-yellow-gold-and-lab-diamonds",
    "description": "<ul>\n<li>14k yellow gold and lab radiant cut diamonds.</li>\n<li>Approximate diamond weight: 2.04 ct.</li>\n<li>Approximate measurement:  6.78 x 4.79 mm.</li>\n<li>Approximate weight: 1.48 grams. </li>\n<li>Push back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1493.85,
    "sale_price": 1270,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at11.33.36AM_1.jpg?v=1785339716",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at11.33.36AM_2.jpg?v=1785339831",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at11.33.36AM.jpg?v=1785340479",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at11.33.37AM_1.jpg?v=1785340619",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at11.33.37AM.jpg?v=1785340811"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-15T17:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-17",
    "name": "14k Yellow Gold and Lab diamonds Ring",
    "slug": "14k-yellow-gold-and-lab-diamonds-ring",
    "description": "<ul>\n<li>14k yellow gold and lab Pear diamonds.</li>\n<li>Approximate diamond weight: 7.9 ct</li>\n<li>Approximate weight: 6 grams</li>\n<li><span>Approximate width: 7.81 mm</span></li>\n<li><span>Eternity: diamonds run all the way around the ring.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2988.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at10.50.54AM.jpg?v=1785337513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at10.50.53AM_1.jpg?v=1785337058",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at10.50.53AM_2.jpg?v=1785337645",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-29at10.50.53AM.jpg?v=1785337595"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Yellow Gold and Lab diamonds Ring",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T16:20:25.207Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-18",
    "name": "14kt yellow gold and lab eternity ring",
    "slug": "14kt-yellow-gold-and-lab-eternity-ring",
    "description": "<ul>\n<li>14k yellow gold and lab marquise diamonds.</li>\n<li>Approximate diamond weight: 2.2 ct</li>\n<li>Approximate weight: 4.5 grams</li>\n<li><span>Approximate width: 0.256 mm</span></li>\n<li><span>Eternity: diamonds run all the way around the ring.</span></li>\n<li><span style=\"text-decoration: underline;\">Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2413.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at11.55.39AM.jpg?v=1785168013",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at11.55.40AM_2.jpg?v=1785168199",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at11.55.40AM_3.jpg?v=1785168319",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at11.55.40AM_4.jpg?v=1785168514",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at11.55.40AM_5.jpg?v=1785168470"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T15:20:25.207Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-19",
    "name": "14kt yellow gold and lab diamonds Engagement Ring",
    "slug": "14kt-yellow-gold-oval-diamonds",
    "description": "<ul>\n<li>14k yellow gold and lab oval , marquise, pear and round diamonds.</li>\n<li>Approximate diamond weight: 5.12 total, centre stone is 4 ct and side stone is 1.12 ct</li>\n<li>Approximate weight: 4.7 grams.</li>\n<li><span>Average clarity: VS </span></li>\n<li><span>Average color: F</span></li>\n<li>Approximate top dimensions: approx. 9.58 mm</li>\n<li>Size: 7 (please call us if you need bigger or smaller size)</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 3793.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-27_at_11.20.14_AM_5.jpg?v=1785166822",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at11.20.14AM.jpg?v=1785165958",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-27_at_11.20.13_AM_1.jpg?v=1785166108",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-27_at_11.20.13_AM_2.jpg?v=1785166245",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-07-27_at_11.20.14_AM_1.jpg?v=1785166538"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-15T14:20:25.207Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-20",
    "name": "14kt white gold lab grown round diamond",
    "slug": "14kt-white-gold-lab-grown-round-diamond",
    "description": "<ul>\n<li>14k white gold and lab round earrings </li>\n<li>Approximate diamond weight: 1.48 ct.</li>\n<li>Approximate measurement: 2.94 mm.</li>\n<li>Approximate weight: 1.8 grams. </li>\n<li>Screw back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1000.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at10.43.02AM_1.jpg?v=1785163643",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at10.43.02AM.jpg?v=1785163746",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at10.43.03AM_1.jpg?v=1785163775",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at10.43.03AM_2.jpg?v=1785163887",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-27at10.43.03AM.jpg?v=1785164158"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T13:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-21",
    "name": "14k white gold and lab multi-shape diamonds.",
    "slug": "jknjkhj",
    "description": "<ul>\n<li>14k white gold and lab multi-shape: Heart, Oval and Princess cut diamonds.</li>\n<li>Approximate diamond weight: 6ct.</li>\n<li>Approximate measurement:   12.76 x 12.07 mm.</li>\n<li>Approximate weight: 4.1 grams. </li>\n<li>Push back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 3622.5,
    "sale_price": 3079,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at4.08.43PM_1.jpg?v=1784923876",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at4.08.43PM.jpg?v=1785359172",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at4.08.44PM.jpg?v=1784927190"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T12:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-22",
    "name": "14k white gold lab princess cut stud earrings",
    "slug": "14k-white-gold-lab-princess-cut-stud-earrings",
    "description": "<ul>\n<li>14k white gold and lab round diamonds.</li>\n<li>Approximate diamond weight: 2ct.</li>\n<li>Approximate measurement:  6.61 mm.</li>\n<li>Approximate weight: 1.28 grams. </li>\n<li>Screw on back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1263.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.45.07PM.jpg?v=1784922746",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.45.08PM.jpg?v=1784922774",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.45.09PM_2.jpg?v=1784922835",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.45.09PM.jpg?v=1784922856",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.45.10PM.jpg?v=1784922881"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-15T11:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-23",
    "name": "14k white gold and lab diamond Engagement Ring",
    "slug": "14k-white-gold-and-lab-diamond-engagement-ring",
    "description": "<ul>\n<li>14k white gold and lab round diamonds.</li>\n<li>Approximate diamond weight: 2.13ct. total, center stone-2.05ct</li>\n<li>Approximate weight: 3.06<span> grams.</span>\n</li>\n<li><span>Average clarity:VS1</span></li>\n<li><span>Average color: F.</span></li>\n<li><span>IGI certified. </span></li>\n<li>Approximate top dimensions: 8 mm.</li>\n<li>Size: 7 (please call us if you need bigger or smaller size)</li>\n<li>\n<span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span><br>\n</li>\n</ul>\n<h3 data-end=\"778\" data-start=\"753\" data-section-id=\"a1k4cy\">Custom Orders Welcome</h3>\n<p data-end=\"985\" data-start=\"779\">Looking for something uniquely yours? We specialize in custom jewelry tailored to your vision, style, and budget. From timeless classics to one-of-a-kind creations, we’ll help bring your dream ring to life.</p>\n<p data-is-only-node=\"\" data-is-last-node=\"\" data-end=\"1020\" data-start=\"987\">📞 Call or text:<span> </span><strong data-is-last-node=\"\" data-end=\"1020\" data-start=\"1004\">929-689-2205</strong></p>",
    "price": 2298.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.19.53PM_2.jpg?v=1784921075",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.19.53PM_1.jpg?v=1784921164",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.19.53PM_3.jpg?v=1784921190",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.19.53PM.jpg?v=1784921209",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-24at3.19.54PM.jpg?v=1784921228"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T10:20:25.207Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-24",
    "name": "14k Yellow Gold Dumbbell Pendant with baguette and round diamonds & Gold Cuban Link Chain Set",
    "slug": "2-31ct-diamond-14k-yellow-gold-dumbbell-pendant-and-10k-gold-cuban-link-chain-set",
    "description": "<p><strong>This pendant is currently sold out.</strong><span> We are happy to create it as a custom order just for you. Please allow approximately </span><strong>4–6 weeks</strong><span> for production. If you have any questions or would like to place a custom order, please contact us at 9296892205.</span></p>\n<ul>\n<li>Charm is 14k yellow gold and natural baguette and round diamonds.</li>\n<li>Approximate diamond weight: 2.31ct.</li>\n<li>Approximate pendant length (including bail): 1.57 inches.</li>\n<li>Approximate weight: 13.2 grams (18” chain + pendant, combined).</li>\n<li>Comes with 10k yellow gold, approx. 3mm cuban link chain.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n<p><br></p>",
    "price": 5173.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_443db420-e143-4852-8079-dcbec45557db.jpg?v=1646503540",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_5b818827-b856-4283-8538-5d135dc79eec.jpg?v=1646503541",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_8d574060-5f99-436c-935d-11bb4cd1dde2.jpg?v=1646503543",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_b88c764f-36ef-4cf3-9a76-2c955e87fa41.jpg?v=1646503545",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_e1b0938f-a2d3-4130-bbc2-6a95bea0df8b.jpg?v=1646503548",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_8dff2799-388e-4cc8-88dd-b4eb7f5144f9.jpg?v=1646503551",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_3521fb3e-d825-4de2-994f-5a51fa9df91f.jpg?v=1646503678"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Yellow Gold Dumbbell Pendant with baguette and round diamonds & Gold Cuban Link Chain Set",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T09:20:25.207Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-25",
    "name": "14k white gold and lab diamond Heart Engagement Ring",
    "slug": "14k-yellow-gold-and-lab-diamond-engagement-ring-copy",
    "description": "<ul>\n<li>14k white gold and lab round diamonds.</li>\n<li>Approximate diamond weight: 3.31ct. total, center stone-2ct</li>\n<li>Approximate weight: 3.31<span> grams.</span>\n</li>\n<li><span>Average clarity:VS1</span></li>\n<li><span>Average color: F.</span></li>\n<li>Approximate top dimensions: 9.32 mm.</li>\n<li>Size: 7 (please call us if you need bigger or smaller size)</li>\n<li>\n<span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span><br>\n</li>\n</ul>\n<h3 data-section-id=\"a1k4cy\" data-start=\"753\" data-end=\"778\">Custom Orders Welcome</h3>\n<p data-start=\"779\" data-end=\"985\">Looking for something uniquely yours? We specialize in custom jewelry tailored to your vision, style, and budget. From timeless classics to one-of-a-kind creations, we’ll help bring your dream ring to life.</p>\n<p data-start=\"987\" data-end=\"1020\" data-is-last-node=\"\" data-is-only-node=\"\">📞 Call or text:<span> </span><strong data-start=\"1004\" data-end=\"1020\" data-is-last-node=\"\">929-689-2205</strong></p>",
    "price": 2528.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at2.06.42PM.jpg?v=1782930564",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at2.06.42PM_1.jpg?v=1784912375",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at2.06.42PM_2.jpg?v=1782930691",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at2.06.44PM_1.jpg?v=1782930723"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-15T08:20:25.207Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-26",
    "name": "Yellow Gold and Lab diamond Flower Earrings",
    "slug": "yellow-gold-and-lab-diamond-flower-earrings",
    "description": "<ul>\n<li>10k yellow gold and lab round diamonds.</li>\n<li>Approximate diamond weight: 1ct.</li>\n<li>Approximate diameter:  7.87mm.</li>\n<li>Approximate weight: 1.7 grams. </li>\n<li>Screw on back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.<br>\n</li>\n</ul>",
    "price": 688.85,
    "sale_price": 586,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.36.40PM.jpg?v=1782928984",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.36.40PM_1.jpg?v=1782929007",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.36.40PM_2.jpg?v=1782929032",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.36.40PM_3.jpg?v=1782929076"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Yellow Gold and Lab diamond Flower Earrings",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T07:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-27",
    "name": "14k white gold and approx.14.25ct lab diamond tennis Bracelet",
    "slug": "14k-white-gold-and-diamond-fancy-bracelet-with-oval-diamond-copy",
    "description": "<ul>\n<li>14k white gold and round lab diamond<br>\n</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 14.25ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7. </span></li>\n<li>Approximate weight: 8.92 grams (depending on length).</li>\n<li>Approximate width: 4.57mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 5173.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.28.57PM.jpg?v=1782927198",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.28.58PM_1.jpg?v=1782927281",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-07-01at1.28.58PM_2.jpg?v=1782927311"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "<ul>\n<li>14k white gold and round lab diamond<br>\n</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 14.25ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7. </span></li>\n<li>Approximate weight: 8.92 grams (depending on length).</li>\n<li>Approximate width: 4.57mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T06:20:25.207Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-28",
    "name": "14k Gold Heart Diamond  Earrings with Crown",
    "slug": "2ct-diamond-14k-gold-heart-earrings-with-crown-1",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k yellow gold and natural round and baguette diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2ct.</li>\n<li data-mce-fragment=\"1\">Dimensions: 12 x 18.5 mm.</li>\n<li data-mce-fragment=\"1\">Screw-on back.</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.</li>\n</ul>\n<p> </p>\n<p> </p>",
    "price": 1643.35,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_8287013a-a373-46c8-8d91-89e531a01a8e.jpg?v=1662066648",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_ceec909a-efa1-4e06-b710-68e26e4f2445.jpg?v=1662066648",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_b49f459a-7d1e-4ed8-a214-91723c461d37.jpg?v=1662066630",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_4d784593-ce7a-4f66-bc66-e9513abf2874.jpg?v=1662066633"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "14k Gold Heart Diamond  Earrings with Crown",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-15T05:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-29",
    "name": "14k white gold and diamond Fancy Bracelet with oval diamond",
    "slug": "14k-white-gold-and-lab-diamond-fancy-bracelet-with-oval-diamond",
    "description": "<ul>\n<li>14k white gold and oval lab diamond<br>\n</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 3.88ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7. </span></li>\n<li>Approximate weight: 11.09 grams (depending on length).</li>\n<li>Approximate width: 4.15 mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 4991,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-12at11.04.44AM.jpg?v=1781277176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-12at11.04.44AM_1.jpg?v=1781278025",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-12at11.04.44AM_2.jpg?v=1781278038",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-12at11.04.44AM_4.jpg?v=1781280201"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "<ul>\n<li>14k white gold and oval lab diamond<br>\n</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 3.88ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7. </span></li>\n<li>Approximate weight: 11.09 grams (depending on length).</li>\n<li>Approximate width: 4.15 mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T04:20:25.207Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-30",
    "name": "14k white gold and diamond Fancy Bracelet with marquise diamond",
    "slug": "14k-white-gold-and-lab-diamond-fancy-bracelet-with-marquise-diamond",
    "description": "<ul>\n<li>14k white gold and lab marquise diamond<br>\n</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 6.98ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7. </span></li>\n<li>Approximate weight: 13.11 grams (depending on length).</li>\n<li>Approximate width:  5.05mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 5899.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-06-11_at_11.53.04_AM.jpg?v=1781193322",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-11at11.40.49AM_2.jpg?v=1781193384",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-11at11.40.49AM_3.jpg?v=1781193565",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-11at11.40.49AM.jpg?v=1781193716",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-11at11.40.50AM.jpg?v=1781192632"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "<ul>\n<li>14k white gold and lab marquise diamond<br>\n</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 6.98ct at 7 inches<span> </span><span>(actual diamond weight will vary, based on selected length).</span>\n</li>\n<li><span>Size: 7. </span></li>\n<li>Approximate weight: 13.11 grams (depending on length).</li>\n<li>Approximate width:  5.05mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T03:20:25.207Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-31",
    "name": "14k yellow gold and diamond Fancy Oval Shape Earrings",
    "slug": "14k-white-gold-and-lab-diamond-hoop-earrings-copy",
    "description": "<ul>\n<li>14k yellow gold and lab round, yellow oval diamonds.</li>\n<li>Approximate diamond weight: 3.31ct.</li>\n<li>Approximate measurements:  10.68 mm. x 8.24mm</li>\n<li>Approximate weight: 3.34 grams.</li>\n<li>Comes with complimentary gold and diamond earrings.</li>\n</ul>",
    "price": 2875,
    "sale_price": 2444,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.53PM.jpg?v=1781024371",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.52PM_1.jpg?v=1781024428",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.52PM_2.jpg?v=1781024474",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.52PM.jpg?v=1781024494",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.53PM_1.jpg?v=1781024509"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-15T02:20:25.207Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-32",
    "name": "14k white gold and lab diamond Hoop Earrings",
    "slug": "14k-white-gold-and-lab-diamond-hoop-earrings",
    "description": "<ul>\n<li>14k white gold and lab baguette diamonds.</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 2.16ct.</li>\n<li>Approximate diameter:  18.69mm. </li>\n<li>Approximate weight: 4.69 grams.</li>\n<li>Comes with complimentary gold and diamond earrings.</li>\n</ul>",
    "price": 1610,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.54PM_1.jpg?v=1781022275",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.53PM_3.jpg?v=1781022283",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.54PM.jpg?v=1781022283",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-06-09at12.06.53PM_4.jpg?v=1781022284"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "<ul>\n<li>14k white gold and lab baguette diamonds.</li>\n<li>Choose your option: Lab diamond or Natural earth mined diamonds.</li>\n<li>Approximate diamond weight: 2.16ct.</li>\n<li>Approximate diameter:  18.69mm. </li>\n<li>Approximate weight: 4.69 grams.</li>\n<li>Comes with complimentary gold and diamond earrings.</li>\n</ul>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T01:20:25.208Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-33",
    "name": "14k yellow gold and diamond Flower Bracelet with pink stones",
    "slug": "14k-yellow-gold-and-diamond-flower-bracelet-with-pink-stones-copy",
    "description": "<ul>\n<li>14k yellow gold and natural round and baguette diamonds with  ruby. </li>\n<li>Approximate diamond weight: 15.33ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  35.26 grams at 7 inches (actual weight will vary, based on the length).</li>\n<li>Size: 7 inches.</li>\n<li>Approximate width: links - 7.42mm, flowers - 13.44mm.</li>\n<li>If you need longer length, please contact us at <span>+1(718) 558-6139.</span>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 10925,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-11at3.02.14PM.jpg?v=1741719784",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-11_at_3.02.14_PM_1.jpg?v=1741719794",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-11_at_3.02.14_PM_2.jpg?v=1741719798",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-11_at_3.02.14_PM_3.jpg?v=1741719803",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-11_at_3.02.14_PM_4.jpg?v=1741719809"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-15T00:20:25.208Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-34",
    "name": "Model #116613LB 40mm Rolex Submariner Watch with Two-tone Oyster Bracelet",
    "slug": "model-116613lb-40mm-rolex-submariner-watch-with-two-tone-oyster-bracelet-copy",
    "description": "<ul>\n<li>\n<span data-mce-fragment=\"1\">Pre-owned 40mm Rolex Submariner watch.</span><br>\n</li>\n<li>Bracelet: stainless steel and 18k gold oyster<span> band with fold-over clasp.</span>\n</li>\n<li>Dial:<span> vibrant blue with luminous hour markers</span>.</li>\n<li>Rolex card.</li>\n<li>Year: 2019.</li>\n<li>Mint condition. </li>\n<li>Model number: 116613LB.</li>\n<li>All market parts.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 16675,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_977d275b-68aa-4306-9e69-3c937794e4bc.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_65e5ee40-181d-4660-8bb8-8f4e2b5ef55d.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_6521cec9-a4e0-4f9e-a2e6-d127de9a7628.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_c6ccb930-be53-4d89-b8ca-0f8b7d86c3ab.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_2bea965c-9ec1-4807-8408-288cc660db62.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_83d4b680-643e-4ffc-a4d1-53667b1449d0.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_74ad0057-93f6-4660-ac32-8549de92a394.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_3d09086d-82d5-48a2-a2bd-c9c1c8274c0d.jpg?v=1642709280",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_1fdf4d0c-3a4e-4e20-b7ea-cca669c73a8e.jpg?v=1642709280"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-14T23:20:25.208Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-35",
    "name": "9.5ct Diamond and Gold Cuban Butterfly Necklace",
    "slug": "9-5ct-diamond-and-gold-cuban-butterfly-necklace",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">10k yellow gold and natural round diamonds necklace.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 9.5ct.</li>\n<li data-mce-fragment=\"1\">Approximate length: 18 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 31.3 grams.</li>\n<li data-mce-fragment=\"1\">Approximate width: links - 6mm; largest butterfly - 16.7mm.</li>\n<li data-mce-fragment=\"1\">Iced out box clasp.</li>\n</ul>\n<br>",
    "price": 6900,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_7c49cc3b-c105-4075-a3ae-87acfb743be1.jpg?v=1675899160",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_dcb851e5-57e2-4119-b277-0fa87e6cc7b6.jpg?v=1675899163",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_9db120cf-1893-40de-8e20-ca6f12354d25.jpg?v=1675899164",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_fbcb775a-3932-48d2-9e1a-0effc421df8f.heic?v=1675899166"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Men",
    "material": "9.5ct Diamond and Gold Cuban Butterfly Necklace",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T22:20:25.208Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-36",
    "name": "14k yellow gold and lab diamond Engagement Ring",
    "slug": "14k-yellow-gold-and-lab-diamond-engagement-ring-1",
    "description": "<ul>\n<li>14k yellow gold and lab round diamonds.</li>\n<li>Approximate diamond weight: 7.01ct. total</li>\n<li>Approximate weight: 4.4<span> grams.</span>\n</li>\n<li><span>Average clarity: VVS/VS.</span></li>\n<li><span>Approximate band width: 3 mm.</span></li>\n<li>Approximate top dimensions: 11 mm.</li>\n<li>\n<span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span><br>\n</li>\n</ul>\n<h3 data-section-id=\"a1k4cy\" data-start=\"753\" data-end=\"778\">Custom Orders Welcome</h3>\n<p data-start=\"779\" data-end=\"985\">Looking for something uniquely yours? We specialize in custom jewelry tailored to your vision, style, and budget. From timeless classics to one-of-a-kind creations, we’ll help bring your dream ring to life.</p>\n<p data-start=\"987\" data-end=\"1020\" data-is-last-node=\"\" data-is-only-node=\"\">📞 Call or text:<span> </span><strong data-start=\"1004\" data-end=\"1020\" data-is-last-node=\"\">929-689-2205</strong></p>",
    "price": 3047.5,
    "sale_price": 2590,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.38PM.jpg?v=1778610250",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.38PM_1.jpg?v=1778610596",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.39PM_1.jpg?v=1778610534",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.39PM_2.jpg?v=1778610476",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.39PM_3.jpg?v=1778610656",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.39PM_4.jpg?v=1778610179",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-12at2.21.39PM.jpg?v=1778610680"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T21:20:25.208Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-37",
    "name": "14k white gold and lab diamond Engagement Ring",
    "slug": "14k-white-gold-and-lab-diamond-engagement-ring-copy-1",
    "description": "<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div class=\"\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-is-intersecting=\"true\">\n<div class=\"relative w-full overflow-visible\">\n<section class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-testid=\"conversation-turn-2\" data-scroll-anchor=\"false\" data-turn=\"assistant\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-message-author-role=\"assistant\" data-message-id=\"18a64b0d-c41c-4659-a306-bf5b4138097c\" dir=\"auto\" data-message-model-slug=\"gpt-5-5\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-turn-start-message=\"true\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div class=\"\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-3\" data-is-intersecting=\"true\">\n<div class=\"relative w-full overflow-visible\">\n<section class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-3\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-3\" data-testid=\"conversation-turn-8\" data-scroll-anchor=\"false\" data-turn=\"assistant\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-message-author-role=\"assistant\" data-message-id=\"e26b9996-eac5-40d2-8213-ee118382fb83\" dir=\"auto\" data-message-model-slug=\"gpt-5-5\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-turn-start-message=\"true\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<p data-start=\"0\" data-end=\"302\">A breathtaking expression of modern luxury, this elegant round-cut engagement ring is expertly crafted in luminous 14K white gold and adorned with an IGI-certified lab-grown diamond of extraordinary brilliance and fire. Designed to captivate, it blends timeless sophistication with contemporary beauty.</p>\n<p data-start=\"304\" data-end=\"484\"><strong data-start=\"304\" data-end=\"321\">Center Stone:</strong> Round Lab-Grown Diamond, approx. 4.17 CT<br data-start=\"362\" data-end=\"365\"><strong data-start=\"365\" data-end=\"377\">Clarity:</strong> VS1<br data-start=\"381\" data-end=\"384\"><strong data-start=\"384\" data-end=\"394\" data-is-only-node=\"\">Metal:</strong> 14K White Gold<br data-start=\"409\" data-end=\"412\"><strong data-start=\"412\" data-end=\"429\">Total Weight:</strong> Approx. 4.4 grams<br data-start=\"447\" data-end=\"450\"><strong data-start=\"450\" data-end=\"468\">Certification:</strong> IGI Certified</p>\n<p data-start=\"486\" data-end=\"534\"><strong data-start=\"486\" data-end=\"506\">Available Sizes:</strong> 5–12 (including half sizes)</p>\n<p data-start=\"486\" data-end=\"534\"><strong data-start=\"0\" data-end=\"75\" data-is-only-node=\"\">Choose your option: Lab-grown diamonds or natural earth-mined diamonds.</strong></p>\n<p data-start=\"536\" data-end=\"697\">Every ring is crafted with precision and attention to detail, offering exceptional sparkle, refined craftsmanship, and timeless elegance at an exceptional value.</p>\n<p data-start=\"699\" data-end=\"862\" data-is-last-node=\"\" data-is-only-node=\"\">Custom orders are always welcome — any style, any budget. Create the ring of your dreams with a design tailored uniquely for you. Contact us at <strong data-start=\"843\" data-end=\"861\">(929) 689-2205</strong>.</p>\n</div>\n</div>\n</div>\n</div>\n<div class=\"opacity-100 transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0\">\n<div class=\"border-token-border-default mt-2 border-t py-4 text-sm\">\n<div class=\"flex flex-col justify-between gap-3 mt-3\"><br></div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>",
    "price": 2990,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.48.27PM.jpg?v=1778532605",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.48.27PM_2.jpg?v=1778532626",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.48.27PM_3.jpg?v=1778532651",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.48.27PM_5.jpg?v=1778532675"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div class=\"\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-is-intersecting=\"true\">\n<div class=\"relative w-full overflow-visible\">\n<section class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-testid=\"conversation-turn-2\" data-scroll-anchor=\"false\" data-turn=\"assistant\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-message-author-role=\"assistant\" data-message-id=\"18a64b0d-c41c-4659-a306-bf5b4138097c\" dir=\"auto\" data-message-model-slug=\"gpt-5-5\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-turn-start-message=\"true\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div class=\"\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-3\" data-is-intersecting=\"true\">\n<div class=\"relative w-full overflow-visible\">\n<section class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-3\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-3\" data-testid=\"conversation-turn-8\" data-scroll-anchor=\"false\" data-turn=\"assistant\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-message-author-role=\"assistant\" data-message-id=\"e26b9996-eac5-40d2-8213-ee118382fb83\" dir=\"auto\" data-message-model-slug=\"gpt-5-5\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-turn-start-message=\"true\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<p data-start=\"0\" data-end=\"302\">A breathtaking expression of modern luxury, this elegant round-cut engagement ring is expertly crafted in luminous 14K white gold and adorned with an IGI-certified lab-grown diamond of extraordinary brilliance and fire. Designed to captivate, it blends timeless sophistication with contemporary beauty.</p>\n<p data-start=\"304\" data-end=\"484\"><strong data-start=\"304\" data-end=\"321\">Center Stone:</strong> Round Lab-Grown Diamond, approx. 4.17 CT<br data-start=\"362\" data-end=\"365\"><strong data-start=\"365\" data-end=\"377\">Clarity:</strong> VS1<br data-start=\"381\" data-end=\"384\"><strong data-start=\"384\" data-end=\"394\" data-is-only-node=\"\">Metal:</strong> 14K White Gold<br data-start=\"409\" data-end=\"412\"><strong data-start=\"412\" data-end=\"429\">Total Weight:</strong> Approx. 4.4 grams<br data-start=\"447\" data-end=\"450\"><strong data-start=\"450\" data-end=\"468\">Certification:</strong> IGI Certified</p>\n<p data-start=\"486\" data-end=\"534\"><strong data-start=\"486\" data-end=\"506\">Available Sizes:</strong> 5–12 (including half sizes)</p>\n<p data-start=\"486\" data-end=\"534\"><strong data-start=\"0\" data-end=\"75\" data-is-only-node=\"\">Choose your option: Lab-grown diamonds or natural earth-mined diamonds.</strong></p>\n<p data-start=\"536\" data-end=\"697\">Every ring is crafted with precision and attention to detail, offering exceptional sparkle, refined craftsmanship, and timeless elegance at an exceptional value.</p>\n<p data-start=\"699\" data-end=\"862\" data-is-last-node=\"\" data-is-only-node=\"\">Custom orders are always welcome — any style, any budget. Create the ring of your dreams with a design tailored uniquely for you. Contact us at <strong data-start=\"843\" data-end=\"861\">(929) 689-2205</strong>.</p>\n</div>\n</div>\n</div>\n</div>\n<div class=\"opacity-100 transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0\">\n<div class=\"border-token-border-default mt-2 border-t py-4 text-sm\">\n<div class=\"flex flex-col justify-between gap-3 mt-3\"><br></div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-14T20:20:25.208Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-38",
    "name": "14k yellow gold and lab diamond Engagement Ring",
    "slug": "14k-white-gold-and-lab-diamond-engagement-ring-copy",
    "description": "<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div data-is-intersecting=\"true\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" class=\"\">\n<div class=\"relative w-full overflow-visible\">\n<section data-turn=\"assistant\" data-scroll-anchor=\"false\" data-testid=\"conversation-turn-2\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" dir=\"auto\" class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-turn-start-message=\"true\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-5\" dir=\"auto\" data-message-id=\"18a64b0d-c41c-4659-a306-bf5b4138097c\" data-message-author-role=\"assistant\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<p data-end=\"324\" data-start=\"0\">Experience refined elegance with this breathtaking oval-cut engagement ring, masterfully crafted in radiant 14K yellow gold and set with an IGI-certified lab-grown diamond of exceptional brilliance and fire. Designed to embody timeless romance with a modern touch, this ring offers luxurious beauty at an extraordinary value.</p>\n<h3 data-end=\"337\" data-start=\"326\" data-section-id=\"1dr5t50\">Details</h3>\n<ul data-end=\"558\" data-start=\"338\">\n<li data-end=\"386\" data-start=\"338\" data-section-id=\"1b9xb1g\">\n<strong data-end=\"357\" data-start=\"340\">Center Stone:</strong> Oval-Cut Lab-Grown Diamond</li>\n<li data-end=\"424\" data-start=\"387\" data-section-id=\"1ynswd0\">\n<strong data-end=\"406\" data-start=\"389\">Carat Weight:</strong> Approx. 2.64 CT</li>\n<li data-end=\"445\" data-start=\"425\" data-section-id=\"1kr9m0u\">\n<strong data-end=\"439\" data-start=\"427\">Clarity:</strong> VS1</li>\n<li data-end=\"475\" data-start=\"446\" data-section-id=\"1th83gq\">\n<strong data-end=\"458\" data-start=\"448\">Metal:</strong> 14K White Gold</li>\n<li data-end=\"521\" data-start=\"476\" data-section-id=\"1ccz6ux\">\n<strong data-end=\"500\" data-start=\"478\">Total Ring Weight:</strong> Approx. 3.53 grams</li>\n<li data-end=\"558\" data-start=\"522\" data-section-id=\"8ms5vu\">\n<strong data-end=\"542\" data-start=\"524\">Certification:</strong> IGI Certified</li>\n</ul>\n<h3 data-end=\"579\" data-start=\"560\" data-section-id=\"qhba7d\">Available Sizes</h3>\n<p data-end=\"613\" data-start=\"580\">Sizes 5–12, including half sizes.</p>\n<p data-end=\"751\" data-start=\"615\">Each ring is expertly crafted with precision and attention to detail, delivering remarkable sparkle, sophistication, and lasting beauty.</p>\n<h3 data-end=\"778\" data-start=\"753\" data-section-id=\"a1k4cy\">Custom Orders Welcome</h3>\n<p data-end=\"985\" data-start=\"779\">Looking for something uniquely yours? We specialize in custom jewelry tailored to your vision, style, and budget. From timeless classics to one-of-a-kind creations, we’ll help bring your dream ring to life.</p>\n<p data-is-only-node=\"\" data-is-last-node=\"\" data-end=\"1020\" data-start=\"987\">📞 Call or text: <strong data-is-last-node=\"\" data-end=\"1020\" data-start=\"1004\">929-689-2205</strong></p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>",
    "price": 2300,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.00.26PM_1.jpg?v=1778531393",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.00.26PM_2.jpg?v=1778531639",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.00.26PM_3.jpg?v=1778531661",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.00.26PM_4.jpg?v=1778531694",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.00.26PM.jpg?v=1778531728",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at4.00.27PM.jpg?v=1778531364"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div data-is-intersecting=\"true\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" class=\"\">\n<div class=\"relative w-full overflow-visible\">\n<section data-turn=\"assistant\" data-scroll-anchor=\"false\" data-testid=\"conversation-turn-2\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" dir=\"auto\" class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-turn-start-message=\"true\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-message-model-slug=\"gpt-5-5\" dir=\"auto\" data-message-id=\"18a64b0d-c41c-4659-a306-bf5b4138097c\" data-message-author-role=\"assistant\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<p data-end=\"324\" data-start=\"0\">Experience refined elegance with this breathtaking oval-cut engagement ring, masterfully crafted in radiant 14K yellow gold and set with an IGI-certified lab-grown diamond of exceptional brilliance and fire. Designed to embody timeless romance with a modern touch, this ring offers luxurious beauty at an extraordinary value.</p>\n<h3 data-end=\"337\" data-start=\"326\" data-section-id=\"1dr5t50\">Details</h3>\n<ul data-end=\"558\" data-start=\"338\">\n<li data-end=\"386\" data-start=\"338\" data-section-id=\"1b9xb1g\">\n<strong data-end=\"357\" data-start=\"340\">Center Stone:</strong> Oval-Cut Lab-Grown Diamond</li>\n<li data-end=\"424\" data-start=\"387\" data-section-id=\"1ynswd0\">\n<strong data-end=\"406\" data-start=\"389\">Carat Weight:</strong> Approx. 2.64 CT</li>\n<li data-end=\"445\" data-start=\"425\" data-section-id=\"1kr9m0u\">\n<strong data-end=\"439\" data-start=\"427\">Clarity:</strong> VS1</li>\n<li data-end=\"475\" data-start=\"446\" data-section-id=\"1th83gq\">\n<strong data-end=\"458\" data-start=\"448\">Metal:</strong> 14K White Gold</li>\n<li data-end=\"521\" data-start=\"476\" data-section-id=\"1ccz6ux\">\n<strong data-end=\"500\" data-start=\"478\">Total Ring Weight:</strong> Approx. 3.53 grams</li>\n<li data-end=\"558\" data-start=\"522\" data-section-id=\"8ms5vu\">\n<strong data-end=\"542\" data-start=\"524\">Certification:</strong> IGI Certified</li>\n</ul>\n<h3 data-end=\"579\" data-start=\"560\" data-section-id=\"qhba7d\">Available Sizes</h3>\n<p data-end=\"613\" data-start=\"580\">Sizes 5–12, including half sizes.</p>\n<p data-end=\"751\" data-start=\"615\">Each ring is expertly crafted with precision and attention to detail, delivering remarkable sparkle, sophistication, and lasting beauty.</p>\n<h3 data-end=\"778\" data-start=\"753\" data-section-id=\"a1k4cy\">Custom Orders Welcome</h3>\n<p data-end=\"985\" data-start=\"779\">Looking for something uniquely yours? We specialize in custom jewelry tailored to your vision, style, and budget. From timeless classics to one-of-a-kind creations, we’ll help bring your dream ring to life.</p>\n<p data-is-only-node=\"\" data-is-last-node=\"\" data-end=\"1020\" data-start=\"987\">📞 Call or text: <strong data-is-last-node=\"\" data-end=\"1020\" data-start=\"1004\">929-689-2205</strong></p>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T19:20:25.208Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-39",
    "name": "14k white gold and lab diamond Engagement Ring",
    "slug": "14k-yellow-gold-and-lab-diamond-engagement-ring",
    "description": "<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div class=\"\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-is-intersecting=\"true\">\n<div class=\"relative w-full overflow-visible\">\n<section class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-testid=\"conversation-turn-2\" data-scroll-anchor=\"false\" data-turn=\"assistant\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-message-author-role=\"assistant\" data-message-id=\"18a64b0d-c41c-4659-a306-bf5b4138097c\" dir=\"auto\" data-message-model-slug=\"gpt-5-5\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-turn-start-message=\"true\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<p data-start=\"0\" data-end=\"302\">A breathtaking expression of modern luxury, this elegant round-cut engagement ring is expertly crafted in luminous 14K white gold and adorned with an IGI-certified lab-grown diamond of extraordinary brilliance and fire. Designed to captivate, it blends timeless sophistication with contemporary beauty.</p>\n<p data-start=\"304\" data-end=\"555\"><strong data-start=\"304\" data-end=\"321\">Center Stone:</strong> Round Lab-Grown Diamond, approx. 5.00 CT<br data-start=\"362\" data-end=\"365\"><strong data-start=\"365\" data-end=\"377\">Clarity:</strong> VVS2<br data-start=\"382\" data-end=\"385\"><strong data-start=\"385\" data-end=\"395\" data-is-only-node=\"\">Metal:</strong> 14K White Gold<br data-start=\"410\" data-end=\"413\"><strong data-start=\"413\" data-end=\"430\">Total Weight:</strong> Approx. 4.4 grams<br data-start=\"518\" data-end=\"521\"><strong data-start=\"521\" data-end=\"539\">Certification:</strong> IGI Certified</p>\n<p data-start=\"557\" data-end=\"605\"><strong data-start=\"557\" data-end=\"577\">Available Sizes:</strong> 5–12 (including half sizes)</p>\n<p data-start=\"607\" data-end=\"732\">Every ring is crafted with precision and attention to detail, offering exceptional sparkle and luxury at an incredible value.</p>\n<p data-start=\"734\" data-end=\"859\" data-is-last-node=\"\" data-is-only-node=\"\">Custom orders are always welcome — any style, any budget. Create the ring of your dreams with a design tailored just for you.</p>\n</div>\n</div>\n</div>\n</div>\n<div class=\"opacity-100 transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0\">\n<div class=\"border-token-border-default mt-2 border-t py-4 text-sm\">\n<div class=\"flex flex-col justify-between gap-3 mt-3\"><br></div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>",
    "price": 2645,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at3.26.31PM_1.jpg?v=1778527868",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at3.26.31PM_2.jpg?v=1778527896",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at3.26.31PM_3.jpg?v=1778527938",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at3.26.31PM_4.jpg?v=1778527967",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-05-11at3.26.31PM.jpg?v=1778528001"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "<div class=\"qMYqUG_convSearchResultHighlightRoot\">\n<div class=\"\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-is-intersecting=\"true\">\n<div class=\"relative w-full overflow-visible\">\n<section class=\"text-token-text-primary w-full focus:outline-none [--shadow-height:45px] has-data-writing-block:pointer-events-none has-data-writing-block:-mt-(--shadow-height) has-data-writing-block:pt-(--shadow-height) [&amp;:has([data-writing-block])&gt;*]:pointer-events-auto R6Vx5W_threadScrollVars scroll-mb-[calc(var(--scroll-root-safe-area-inset-bottom,0px)+var(--thread-response-height))] scroll-mt-[calc(var(--header-height)+min(200px,max(70px,20svh)))]\" dir=\"auto\" data-turn-id=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-turn-id-container=\"request-WEB:191b6cb9-d02a-495d-9c7b-dbba8988b531-0\" data-testid=\"conversation-turn-2\" data-scroll-anchor=\"false\" data-turn=\"assistant\">\n<div class=\"text-base my-auto mx-auto pb-10 [--thread-content-margin:var(--thread-content-margin-xs,calc(var(--spacing)*4))] @w-sm/main:[--thread-content-margin:var(--thread-content-margin-sm,calc(var(--spacing)*6))] @w-lg/main:[--thread-content-margin:var(--thread-content-margin-lg,calc(var(--spacing)*16))] px-(--thread-content-margin)\">\n<div class=\"[--thread-content-max-width:40rem] @w-lg/main:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1 group/turn-messages focus-visible:outline-hidden relative flex w-full min-w-0 flex-col agent-turn\">\n<div class=\"flex max-w-full flex-col gap-4 grow\">\n<div data-message-author-role=\"assistant\" data-message-id=\"18a64b0d-c41c-4659-a306-bf5b4138097c\" dir=\"auto\" data-message-model-slug=\"gpt-5-5\" class=\"min-h-8 text-message relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal outline-none keyboard-focused:focus-ring [.text-message+&amp;]:mt-1\" data-turn-start-message=\"true\" tabindex=\"0\">\n<div class=\"flex w-full flex-col gap-1 empty:hidden\">\n<div class=\"markdown prose dark:prose-invert wrap-break-word w-full light markdown-new-styling\">\n<p data-start=\"0\" data-end=\"302\">A breathtaking expression of modern luxury, this elegant round-cut engagement ring is expertly crafted in luminous 14K white gold and adorned with an IGI-certified lab-grown diamond of extraordinary brilliance and fire. Designed to captivate, it blends timeless sophistication with contemporary beauty.</p>\n<p data-start=\"304\" data-end=\"555\"><strong data-start=\"304\" data-end=\"321\">Center Stone:</strong> Round Lab-Grown Diamond, approx. 5.00 CT<br data-start=\"362\" data-end=\"365\"><strong data-start=\"365\" data-end=\"377\">Clarity:</strong> VVS2<br data-start=\"382\" data-end=\"385\"><strong data-start=\"385\" data-end=\"395\" data-is-only-node=\"\">Metal:</strong> 14K White Gold<br data-start=\"410\" data-end=\"413\"><strong data-start=\"413\" data-end=\"430\">Total Weight:</strong> Approx. 4.4 grams<br data-start=\"518\" data-end=\"521\"><strong data-start=\"521\" data-end=\"539\">Certification:</strong> IGI Certified</p>\n<p data-start=\"557\" data-end=\"605\"><strong data-start=\"557\" data-end=\"577\">Available Sizes:</strong> 5–12 (including half sizes)</p>\n<p data-start=\"607\" data-end=\"732\">Every ring is crafted with precision and attention to detail, offering exceptional sparkle and luxury at an incredible value.</p>\n<p data-start=\"734\" data-end=\"859\" data-is-last-node=\"\" data-is-only-node=\"\">Custom orders are always welcome — any style, any budget. Create the ring of your dreams with a design tailored just for you.</p>\n</div>\n</div>\n</div>\n</div>\n<div class=\"opacity-100 transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0\">\n<div class=\"border-token-border-default mt-2 border-t py-4 text-sm\">\n<div class=\"flex flex-col justify-between gap-3 mt-3\"><br></div>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n</div>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T18:20:25.208Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-40",
    "name": "18K White Gold Lab Diamond Pear Shape Engagement Ring",
    "slug": "18k-white-gold-and-lab-diamond-pear-shape-engagement-ring",
    "description": "<p>A breathtaking statement of modern luxury — this pear shape engagement ring is crafted in 18K white gold and set with IGI-certified lab-grown diamonds of exceptional brilliance.</p>\n<ul>\n<li>\n<strong>Center Stone:</strong> Pear-cut lab diamond, approx. 1.59 ct | Clarity: VS1 | Color: D</li>\n<li>\n<strong>Side Diamonds:</strong> Round brilliant &amp; baguette diamonds, approx. 1.68 ct total</li>\n<li>\n<strong>Metal:</strong> 18K white gold</li>\n<li>\n<strong>Total Weight:</strong> Approx. 6 grams</li>\n<li>\n<strong>Band Width:</strong> Approx. 2.55 mm</li>\n<li>\n<strong>Top Dimensions:</strong> Approx. 14.96 mm</li>\n<li>\n<strong>Certification:</strong> IGI Certified</li>\n<li>\n<strong>Available Sizes:</strong> 5 – 12 (half sizes included)</li>\n</ul>\n<p>Custom orders welcome — any style, any budget. Contact us to create your dream ring.</p>",
    "price": 3599.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-21_at_1.56.00_PM.jpg?v=1776794873",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-21_at_1.56.00_PM_1.jpg?v=1776794873",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-21_at_1.56.00_PM_3.jpg?v=1776794873",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-21_at_1.56.00_PM_4.jpg?v=1776794873",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-21_at_1.56.01_PM.jpg?v=1776794639"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18K White Gold Lab Diamond Pear Shape Engagement Ring",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-14T17:20:25.208Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-41",
    "name": "18k white gold and diamond 2-piece set Engagement Ring",
    "slug": "18k-white-gold-and-diamond-2-piece-set-engagement-ring",
    "description": "<ul>\n<li>18k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 3.19ct. (1.27ct - center stone)<br>\n</li>\n<li>Approximate weight:<span> </span><span>  8.5 </span><span>grams (depending on size).</span>\n</li>\n<li>\n<span>Approximate top width: 6.81mm.</span><span></span>\n</li>\n<li>\n<span>Approximate band width: 3.03mm.</span><span></span>\n</li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 7590,
    "sale_price": 6452,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-13_at_2.54.58_PM_1.jpg?v=1776106657",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-04-13at2.54.58PM.jpg?v=1776106657",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-13_at_2.54.59_PM.jpg?v=1776106603",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-13_at_2.54.59_PM_1.jpg?v=1776106610",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-13_at_2.54.59_PM_2.jpg?v=1776106618",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-13_at_2.54.59_PM_3.jpg?v=1776106623",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-04-13_at_2.54.59_PM_4.jpg?v=1776106629"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T16:20:25.208Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-42",
    "name": "14k gold and diamond Wedding Band (choose your color)",
    "slug": "14k-gold-and-diamond-wedding-band-choose-your-color",
    "description": "<ul>\n<li>14k yellow or white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 2.28-2.45ct. </li>\n<li>Approximate weight:  6.1<span> </span><span>grams (depending on size).</span>\n</li>\n<li><span>Approximate band width:  mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 2990,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM_2.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.29PM.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM_3.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM_4.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM_6.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM_5.jpg?v=1773778176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-03-17at3.06.30PM_7.jpg?v=1773778176"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T15:20:25.209Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-43",
    "name": "Gold and Diamond Fancy Bracelet (choose your color)",
    "slug": "gold-and-diamond-fancy-bracelet-choose-your-color-copy-1",
    "description": "<ul>\n<li>10k yellow or rose  gold and natural round diamonds with pink or green stones. </li>\n<li>Approximate diamond weight: 0.65ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  7.9 grams at 7 inches (actual weight will vary, based on the length).<br>\n</li>\n<li>Approximate width: links - 3.61mm, flower- 12.09mm<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2899,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-27at3.05.04PM.jpg?v=1743102832",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-27_at_3.10.51_PM.jpg?v=1743102832",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-27_at_3.10.31_PM.jpg?v=1743102832",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-27_at_3.05.04_PM_1.jpg?v=1743102753",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-27_at_3.05.04_PM_2.jpg?v=1743102753",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-27_at_3.05.05_PM.jpg?v=1743102753"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Gold and Diamond Fancy Bracelet (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-14T14:20:25.209Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-44",
    "name": "Gold and Diamond LOVE pendant and Gold Cuban Link Chain Set",
    "slug": "gold-and-diamond-love-pendant-and-gold-cuban-link-chain-set-copy-2",
    "description": "<ul>\n<li>10k yellow, rose and white gold and natural round diamond pendant.</li>\n<li>Comes with a 10k yellow, rose and white gold Cuban chain.</li>\n<li>Approximate diamond weight: 1ct.</li>\n<li>Approximate pendant height (including bail):  19.86mm.</li>\n<li>Approximate weight:    10.2 grams (16\" chain + pendant).</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>\n<!---->",
    "price": 2898,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/A75A9F1C-74EF-4314-A5BE-9F2ED893A1F8.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/C76275D5-3FEE-4641-8EF8-76B37587A928.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/3C2D71CD-215C-4507-8C02-E0DC4F7E493A.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/B31AE747-A0C6-49B7-9602-B5870B787E2D.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/67D4D203-765C-4CCF-9233-F6B6EBA69E70.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/C4CC661B-22CA-4C85-838B-02889D396230.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/4599F874-0954-4FD1-A137-50528485156E.jpg?v=1721230071",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/AE27489E-CB70-44A2-9658-F159AB909D72.jpg?v=1721230111"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "Gold and Diamond LOVE pendant and Gold Cuban Link Chain Set",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T13:20:25.209Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-45",
    "name": "Gold and Diamond Twin Hearts Cuff Bracelet (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "slug": "gold-and-diamond-twin-hearts-cuff-bracelet-choose-your-color-valentine-s-day-special-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">10k yellow, white, or rose gold and natural baguette and round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 1.57ct.</li>\n<li data-mce-fragment=\"1\">Approximate top width: 15.9</li>\n<li data-mce-fragment=\"1\">Approximate weight: 13.5 grams at size 7.</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 1999,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_de8a69a2-d3f4-49f1-8f10-a75abf09e87d.jpg?v=1670541439",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_de73e524-7198-4615-80da-6ecfc9c1eb08.jpg?v=1670541440",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_98fb224e-ba3b-479f-9fc6-3d99810eeabe.jpg?v=1670541442",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_84250b50-96e1-4e3f-9d3f-973f1ed14ec6.jpg?v=1670541444",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_923b819f-1177-41e9-be85-7df2aeae31b7.jpg?v=1670541445",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_e65ac8e0-403f-46ad-a912-9bec3ceec9fa.jpg?v=1670541448",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_c80b9e12-0ab1-4e99-b54c-88445ba6d470.heic?v=1670541450"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Gold and Diamond Twin Hearts Cuff Bracelet (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T12:20:25.209Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-46",
    "name": "Gold and Diamond Twin Heart Ladies` Ring (choose a color )  (VALENTINE`S DAY SPECIAL)",
    "slug": "gold-and-diamond-twin-heart-ladies-ring-choose-a-color-valentine-s-day-special-copy",
    "description": "<p data-mce-fragment=\"1\">Sparkle with brilliance when you wear this 10k Gold Twin Heart Ladies' Diamond Ring. Crafted in elegant 10k gold and featuring a 0.75ct diamond, this ring is available in white, yellow, rose gold and white-yellow gold. A stunning piece for any occasion.<span data-mce-fragment=\"1\">Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></p>",
    "price": 1495,
    "sale_price": 1271,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/28F12F2C-F48A-4EC0-A99B-7233BDAE1E88.jpg?v=1692385723",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9658563E-68EF-42A5-9AB1-451ED3BABA24.jpg?v=1692385723",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/E5DDB970-889E-43F2-ACDD-C3274E7E40B7.jpg?v=1692385723",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/26E490FC-25A9-43E6-96D5-1CDBE7D96FBD.jpg?v=1692385723",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/F23A7983-30B4-4164-9DB5-CA1C90B121BC.jpg?v=1692384879",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/B2AFCC31-1CEB-4390-9A44-2FB43C488E85.jpg?v=1692384879",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/8D2B9802-323B-4739-A3D9-B90042499264.jpg?v=1692384881",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/3F586C38-450D-4DFF-A5DE-B763D0505C00.jpg?v=1692384882",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/E29055DD-61EA-43B9-9F4E-115BFDAA6181.jpg?v=1692384994"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "Gold and Diamond Twin Heart Ladies` Ring (choose a color )  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-14T11:20:25.209Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-47",
    "name": "14k Yellow Gold Arrow through Heart Pendant and Yellow Gold Ice Link Chain (VALENTINE`S DAY SPECIAL)",
    "slug": "14k-yellow-gold-arrow-through-heart-pendant-and-yellow-gold-ice-link-chain-valentine-s-day-special-copy-1",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k yellow gold and natural round diamond pendant.</li>\n<li data-mce-fragment=\"1\">10k yellow gold ice link chain.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 4ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail): 33.43mm.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 19.4 grams (16 inches chain + pendant combined).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 5462.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.05.27PM.jpg?v=1739052391",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.05.28PM_1.jpg?v=1739052391",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.05.28PM_2.jpg?v=1739052391",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.05.28PM.jpg?v=1739052392"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Yellow Gold Arrow through Heart Pendant and Yellow Gold Ice Link Chain (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T10:20:25.209Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-48",
    "name": "14k Gold Heart Diamond Pendant, 10k Gold 2mm Ice Link Chain (choose your color)",
    "slug": "14k-gold-heart-diamond-pendant-10k-gold-2mm-ice-link-chain-choose-your-color-valentine-s-day-special-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">Charm is 14k yellow, rose, or white gold and natural round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 1.46ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail): 1.4 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 13.7 grams (18” chain + pendant combined). Actual weight will vary, based on selected chain length.<br>\n</li>\n<li data-mce-fragment=\"1\">Comes with a 10k rose, yellow, or white gold, approx. 2mm ice link chain.<br>\n</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n<p><br></p>",
    "price": 2300,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_02142667-2602-4bca-b0fe-754499e0af93.jpg?v=1670007033",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_439608f3-4ed3-49fc-af4d-705836301e0d.jpg?v=1670007035",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_2c25f787-5383-410d-af06-cb32306b6eb5.jpg?v=1670007037",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_309fbf34-b495-476e-9bb8-f8c29bdf9535.jpg?v=1670007040",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_cd55d85f-e783-4613-89f2-bf9e174956c1.jpg?v=1670007042",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_e16c750e-ea5e-4f1e-842b-bb607c24a14b.jpg?v=1670007044",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_21c931ef-5afc-4825-8ecc-f8ab844fadec.heic?v=1670007047"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Gold Heart Diamond Pendant, 10k Gold 2mm Ice Link Chain (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T09:20:25.209Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-49",
    "name": "36mm Rolex Watch with Stainless steel oyster band",
    "slug": "36mm-rolex-watch-with-stainless-steel-oyster-band-1",
    "description": "<ul>\n<li>Preowned 36 mm Rolex Date.<br>\n</li>\n<li>Stainless steel. </li>\n<li>Automatic movement.<br>\n</li>\n<li>Stainless steel dial.</li>\n<li>Custom bezel by customer request.</li>\n<li>Diamonds are not by Rolex.</li>\n<li>Approximate diamond weight: 1.75ct.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 6095,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at6.20.09PM.jpg?v=1769212513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at6.20.10PM_2.jpg?v=1769212513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at6.20.10PM_1.jpg?v=1769212513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at6.20.10PM.jpg?v=1769210515",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-23_at_6.20.09_PM_1.jpg?v=1769210538"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-14T08:20:25.209Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-50",
    "name": "Model#1005  34mm Rolex Watch with Two-tone oyster band",
    "slug": "34mm-rolex-watch-with-two-tone-oyster-band",
    "description": "<ul>\n<li>Preowned 34 mm Rolex. </li>\n<li>Fluted bezel.</li>\n<li>Model#1005</li>\n<li>Two-tone: gold &amp; stainless steel.</li>\n<li>Automatic movement.</li>\n<li>All factory parts.<br>\n</li>\n<li>Bracelet: oyster.</li>\n<li>Model #16233</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 5520,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at5.39.20PM.jpg?v=1769208120",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at5.39.20PM_2.jpg?v=1769208120",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at5.39.20PM_3.jpg?v=1769208120",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at5.39.20PM_1.jpg?v=1769208120"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T07:20:25.209Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-51",
    "name": "Gold and Diamond Square shape Earrings (choose your color)",
    "slug": "gold-and-diamond-square-shape-earrings-choose-your-color",
    "description": "<ul>\n<li>10k yellow or white gold and natural round , baguette diamonds.</li>\n<li>Approximate diamond weight: 0.90ct.-1ct.<br>\n</li>\n<li>Approximate weight of earrings: 2.7 grams.</li>\n<li>Approximate width:  10.51mm.</li>\n<li>Screw on back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1150,
    "sale_price": 978,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-23_at_4.04.47_PM.jpg?v=1769202881",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-23_at_4.04.47_PM_1.jpg?v=1769202841",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at3.41.55PM_1.jpg?v=1769202841",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at3.41.55PM.jpg?v=1769202841",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at3.41.56PM_1.jpg?v=1769202841",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at3.41.56PM_2.jpg?v=1769202841",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at3.41.56PM_3.jpg?v=1769202841",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at3.41.59PM.jpg?v=1769202841"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Gold and Diamond Square shape Earrings (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T06:20:25.209Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-52",
    "name": "14k yellow gold and diamond Earrings",
    "slug": "14k-yellow-gold-and-diamond-earrings-1",
    "description": "<ul>\n<li>14k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 0.81ct.<br>\n</li>\n<li>Approximate weight of earrings: 2 grams.</li>\n<li>Approximate width:  9.38mm.</li>\n<li>Screw on back.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1207.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at2.17.10PM.jpg?v=1769196184",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at2.17.10PM_1.jpg?v=1769196184",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at2.17.11PM_2.jpg?v=1769196078",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-23at2.17.11PM.jpg?v=1769196078"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-14T05:20:25.209Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-53",
    "name": "Design Your Own Custom Gold & Diamond Jewelry (Any design. Any budget. Made just for you)",
    "slug": "design-your-own-custom-gold-diamond-jewelry",
    "description": "<p data-end=\"409\" data-start=\"247\"><span style=\"text-decoration: underline;\"><em><span style=\"color: rgb(0, 0, 0); text-decoration: underline;\">Price shown is for the pendant and tennis chain displayed in the picture. Final price may change depending on your selected design, size, gold type, and diamond details.</span></em></span></p>\n<p data-end=\"409\" data-start=\"247\">Design your own custom jewelry piece exactly the way you want it. We specialize in <strong data-end=\"359\" data-start=\"330\">fully custom-made jewelry</strong>, created to match your style, vision, and budget.</p>\n<h3 data-end=\"432\" data-start=\"411\">Available Options</h3>\n<ul data-end=\"651\" data-start=\"433\">\n<li data-end=\"463\" data-start=\"433\">\n<p data-end=\"463\" data-start=\"435\"><strong data-end=\"444\" data-start=\"435\">Gold:</strong> 10K, 14K, or 18K</p>\n</li>\n<li data-end=\"520\" data-start=\"464\">\n<p data-end=\"520\" data-start=\"466\"><strong data-end=\"482\" data-start=\"466\">Gold Colors:</strong> White, Yellow, Rose, or combination</p>\n</li>\n<li data-end=\"567\" data-start=\"521\">\n<p data-end=\"567\" data-start=\"523\"><strong data-end=\"536\" data-start=\"523\">Diamonds:</strong> Natural earth-mined diamonds</p>\n</li>\n<li data-end=\"651\" data-start=\"605\">\n<p data-end=\"651\" data-start=\"607\"><strong data-end=\"617\" data-start=\"607\">Sizes:</strong> Small, medium, or large designs</p>\n</li>\n</ul>\n<p data-end=\"722\" data-start=\"653\">🎁 <strong data-end=\"697\" data-start=\"656\">Free gold &amp; diamond earrings included</strong> with every custom order.</p>\n<h3 data-end=\"751\" data-start=\"724\">Unlimited Customization</h3>\n<p data-end=\"884\" data-start=\"752\">You choose the design, size, and budget. Whether you want something simple or fully iced out, <strong data-end=\"883\" data-start=\"846\">we can create any design you want</strong>.</p>\n<h3 data-end=\"910\" data-start=\"886\">Jewelry We Customize</h3>\n<ul data-end=\"1002\" data-start=\"911\">\n<li data-end=\"931\" data-start=\"911\">\n<p data-end=\"931\" data-start=\"913\">Engagement rings</p>\n</li>\n<li data-end=\"954\" data-start=\"932\">\n<p data-end=\"954\" data-start=\"934\">All types of rings<br></p>\n</li>\n<li data-end=\"976\" data-start=\"966\">\n<p data-end=\"976\" data-start=\"968\">Charms</p>\n</li>\n<li data-end=\"989\" data-start=\"977\">\n<p data-end=\"989\" data-start=\"979\">Earrings</p>\n</li>\n<li data-end=\"1002\" data-start=\"990\">\n<p data-end=\"1002\" data-start=\"992\">Pendants</p>\n</li>\n</ul>\n<h3 data-end=\"1020\" data-start=\"1004\">How to Order</h3>\n<p data-end=\"1102\" data-start=\"1021\">Send us your design idea, photo, or inspiration, and we’ll take care of the rest.</p>\n<p data-end=\"1210\" data-start=\"1104\">📞 <strong data-end=\"1128\" data-start=\"1107\">Text or WhatsApp:</strong> +1 (929) 689-2205<br data-end=\"1149\" data-start=\"1146\">Our team will contact you to confirm all details and pricing.</p>\n<p data-end=\"1260\" data-start=\"1212\">✨ <strong data-end=\"1260\" data-start=\"1214\">Any design. Any budget. Made just for you.</strong></p>",
    "price": 11040,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-21at10.55.50AM_1.jpg?v=1769014107",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-21at10.55.51AM.jpg?v=1769014130",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-21at10.55.50AM_2.jpg?v=1769014130",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-21at10.55.50AM.jpg?v=1769014130",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-21at10.56.22AM.jpg?v=1769014108"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "Design Your Own Custom Gold & Diamond Jewelry (Any design. Any budget. Made just for you)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T04:20:25.209Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-54",
    "name": "White Gold and Diamond Butterfly Bracelet with pink stones",
    "slug": "white-gold-and-diamond-butterfly-bracelet-with-pink-stones",
    "description": "<ul>\n<li>10k white gold and natural round diamonds with pink stones. </li>\n<li>Approximate diamond weight: 1.10ct at 8 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  13.3 grams at 8 inches (actual weight will vary, based on the length).<br>\n</li>\n<li>Approximate width: links - 3.44mm, butterfly- 12.36mm<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2898,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-20_at_5.40.48_PM.jpg?v=1768948939",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-20at5.18.04PM_1.jpg?v=1768948939",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-20at5.18.04PM_3.jpg?v=1768948939",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-20at5.18.04PM.jpg?v=1768948939",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-20at5.18.05PM.jpg?v=1768948939"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "White Gold and Diamond Butterfly Bracelet with pink stones",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T03:20:25.209Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-55",
    "name": "14k Gold and Diamond Twin Heart Picture Pendant and Gold Cuban Link Chain Set (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "slug": "14k-gold-and-diamond-twin-heart-picture-pendant-and-gold-cuban-link-chain-set-choose-your-color-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">Charm is 14k yellow, white gold and natural round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2.72ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail):  1.8 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 20.9 grams (18\" chain + pendant).</li>\n<li data-mce-fragment=\"1\">Comes with a 10k gold approx. 3mm cuban link chain.</li>\n<li data-mce-fragment=\"1\">A picture of your choice is included.<span data-mce-fragment=\"1\"> </span><strong data-mce-fragment=\"1\">After placing your order, please send a desired image to us +1 (646) 509-1819 (IMessage). The sooner you provide the picture, the sooner we'll be able to process your order. </strong>Please allow 5 - 10 business days for your order to be completed.</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n<p data-mce-fragment=\"1\"> </p>",
    "price": 4945,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/F4B82363-1078-4599-914F-6DA4F131AA4A.jpg?v=1705776914",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/2FD2782C-9AB2-4E85-81E6-C8E1D81F9AF7.jpg?v=1705776912",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/2575E711-378B-4E93-B899-8B2077BB31D3.jpg?v=1705776913",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/F4FC1F58-5C79-43B5-B3B6-DEB2922651EF.jpg?v=1705776915",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/1BDF39F2-45B2-4F72-B3A5-7DAE261502F1.jpg?v=1705776913",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9E9CF406-B5D4-42F0-9B51-0B54F92BF3C6.jpg?v=1705776913",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/80DE0E09-3935-494D-BCC3-A7A6C05EBD33.jpg?v=1705776914",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/D8A5F589-E021-400D-A67B-F2D81F54A150.jpg?v=1705776914"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Gold and Diamond Twin Heart Picture Pendant and Gold Cuban Link Chain Set (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-14T02:20:25.209Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-56",
    "name": "14k Gold Palm-size Key Diamond Pendant and Gold Rope Chain Set",
    "slug": "14k-gold-palm-size-key-diamond-pendant-and-gold-rope-chain-set-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k yellow, white or rose gold and natural round diamond pendant.</li>\n<li data-mce-fragment=\"1\">10k yellow, white or rose gold approx. 2.4 mm rope chain.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 1.8ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail): 2.5 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 15 - 16 grams (16\" chain + pendant).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li data-mce-fragment=\"1\">Style:</li>\n</ul>\n<p>PD26020</p>\n<p><br></p>\n<br>",
    "price": 3448.85,
    "sale_price": 2932,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_fb80115a-fe3b-4861-b12e-fb7d52ee8c15.jpg?v=1639870548",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_9f896966-6d0e-4070-9378-09b7b0cd2d27.jpg?v=1639870548",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_eb613b2c-a001-42d7-bd48-c2de54e11598.jpg?v=1639870548",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_ad770ca5-650d-4a19-86f8-7c89cd18454c.jpg?v=1639870369",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_f4d4b41c-d18f-41f2-8c78-43b6d15c8769.jpg?v=1639870372",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_b884edc5-d049-446f-a0cf-a9f9afb9fccc.jpg?v=1639870374",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_259c640b-115f-4f4c-adb0-7c7cdecc3159.jpg?v=1639870377"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Gold Palm-size Key Diamond Pendant and Gold Rope Chain Set",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T01:20:25.209Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-57",
    "name": "4 piece deal: Two-Tone Gold Twin Heart Cuff Diamond Bracelet + Two-Tone Gold Twin Heart Diamond Ring Set+ Diamond & Gold Heart Earrings + Gift from Marchello the Jeweler  (VALENTINE`S DAY SPECIAL)",
    "slug": "4-piece-deal-two-tone-gold-twin-heart-cuff-diamond-bracelet-two-tone-gold-twin-heart-diamond-ring-set-diamond-gold-heart-earrings-gift-from-marchello-the-jeweler-copy",
    "description": "<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</strong></span></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">1)Bracelet:</strong></span></p>\n<p data-mce-fragment=\"1\">10k Two-tone yellow and white gold Twin Heart Cuff Diamond Bracelet with Baguettes and Round diamonds.</p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Approximate diamond weight: 1.57ct.</span></p>\n<p data-mce-fragment=\"1\"><strong>2) Ring:</strong></p>\n<p data-mce-fragment=\"1\">10k Two-tone: yellow and white gold Twin Heart  Diamond Ring with Baguettes and Round diamonds.</p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Approximate diamond weight: 0.74ct.</span></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">3)Earrings:</strong></span></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">10k yellow gold and diamond  heart earrings.</span></p>\n<p data-mce-fragment=\"1\">Enjoy long-lasting brilliance and class with this set.<br data-mce-fragment=\"1\"></p>\n<p data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">4) </span>Comes with<span data-mce-fragment=\"1\"> </span>a surprise gift <span data-mce-fragment=\"1\">from Marchello the Jeweler. </span></p>",
    "price": 4485,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9089B455-85EA-456C-AADF-3C77D876C5B9.jpg?v=1695849005",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/433DB650-1972-4750-8D5C-DDFD1ECD32CD.jpg?v=1695849005",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/31F56525-0195-4ED6-870F-77EC35C89FBB.jpg?v=1695849005",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/C2951961-5C6C-438D-B204-E8FE5F1E5E56.jpg?v=1695849005",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/6653FCD4-A43D-4C7F-8B05-3C6C0557E498.jpg?v=1695849132",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/4DBFE68E-A112-4719-A854-AD9C1E7E5B03.jpg?v=1695849132"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "4 piece deal: Two-Tone Gold Twin Heart Cuff Diamond Bracelet + Two-Tone Gold Twin Heart Diamond Ring Set+ Diamond & Gold Heart Earrings + Gift from Marchello the Jeweler  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-14T00:20:25.209Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-58",
    "name": "3.66ct diamonds and Gold Heart Necklace with Baguette and Round Diamonds (choose your color)",
    "slug": "3-66ct-diamonds-and-gold-heart-necklace-with-baguette-and-round-diamonds-choose-your-color-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">10k  two-tone white and yellow gold and natural round, baguette diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight at 18 inches: 3.66ct. Actual diamond weight will vary, based on selected chain length.</li>\n<li data-mce-fragment=\"1\">Approximate weight at 18 inches: 27.3<span data-mce-fragment=\"1\"> grams. Actual item weight will vary, based on selected chain length.</span>\n</li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Approximate width: links -5.24 mm; largest heart is 13.02mm.</span></li>\n<li data-mce-fragment=\"1\"><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>\n<!---->",
    "price": 5520,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/941850B1-41BE-4926-860B-589F44AB83FA.jpg?v=1718830168",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9E90AB01-5C1E-41A9-B2DE-2AA0AE6CC73B.jpg?v=1718830168",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/FACE9050-AC5C-4A55-A53B-00ED8E7192CA.jpg?v=1718830063",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/E39FFDDA-A921-40C1-B588-F37A43225332.jpg?v=1718830062",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/B6845E34-552B-4E13-9659-F728DC03B78D.jpg?v=1718830062",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/32B0F74C-5E59-440F-8286-329AB8F7A5B6.jpg?v=1718830062",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/8D6A3C2E-FD67-4AF0-908F-288D5E673480.jpg?v=1718830062",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/8B481442-3294-4A58-A5DF-2CC9B2B4A6D0.jpg?v=1718830062",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/CA5C6536-71CD-4854-9089-C19DC193AA17.jpg?v=1718830111"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Women",
    "material": "3.66ct diamonds and Gold Heart Necklace with Baguette and Round Diamonds (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-13T23:20:25.209Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-59",
    "name": "Gold and Diamond Heart & Flower shaped Fancy Link Bracelet with Baguette and Round Diamonds  (VALENTINE`S DAY SPECIAL)",
    "slug": "gold-and-diamond-heart-flower-shaped-fancy-link-bracelet-with-baguette-and-round-diamonds-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">10k yellow gold and natural round diamonds</li>\n<li data-mce-fragment=\"1\">Open back. </li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 1.55ct at 7 inches  (actual diamond weight will vary, based on the length).</li>\n<li data-mce-fragment=\"1\">Approximate weight:  15.4 grams at 7 inches (actual weight will vary, based on the length).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings. </li>\n</ul>",
    "price": 3218.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-05at1.50.33PM.jpg?v=1741200715",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-05_at_1.50.33_PM_1.jpg?v=1741200723",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-05_at_1.50.33_PM_2.jpg?v=1741200728",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-03-05_at_1.50.33_PM_3.jpg?v=1741200733"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Gold and Diamond Heart & Flower shaped Fancy Link Bracelet with Baguette and Round Diamonds  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T22:20:25.210Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-60",
    "name": "14k gold and diamond Heart Pendant and Gold Ice Link Chain (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "slug": "14k-gold-and-diamond-heart-pendant-and-gold-ice-link-chain-choose-your-color-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k yellow, white and rose gold and natural round, baguette diamond pendant.</li>\n<li data-mce-fragment=\"1\">Comes with a 10k yellow, rose and white gold approx. 2mm ice link chain.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 1.63ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail): 26.69 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight:  11.7 grams (16\" chain + pendant).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>\n<!---->",
    "price": 3220,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/FEB41BA2-5CDB-4072-8442-8989CF1F0E0D.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/CAE1456D-AC92-4DC7-93AF-627315DB0E5F.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/2B33FF15-1EB8-4F63-B739-B81E87A1A1F6.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/86A978C3-3059-400C-BA8C-EFA268B4DBEA.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/F8174426-104C-48FD-A565-01497C8E3029.jpg?v=1718910827",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/E9EAF9A1-8D19-4C72-9168-409D51E86564.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9CA7E3A4-7133-4127-AB71-6B5FF7FCFCA1.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/2E1EEBB4-D8A9-472A-AF2F-4F64DEDFE011.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/885BD013-3944-478A-8653-02B8BCAB420D.jpg?v=1718910828",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/B55ECDA4-2148-4D1E-A29C-E6C271672CD9.jpg?v=1718910828"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k gold and diamond Heart Pendant and Gold Ice Link Chain (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T21:20:25.210Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-61",
    "name": "Gold and Diamond Heart Chain & Bracelet + 14k gold and diamond Earrings(choose your color)  (VALENTINE`S DAY SPECIAL)",
    "slug": "gold-and-diamond-heart-chain-bracelet-14k-gold-and-diamond-earringschoose-your-color-copy",
    "description": "<p>Look stunning with this luxurious set of jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1) Gold and Diamond Heart Necklace </strong></p>\n<p>10k two-tone: rose and white gold and tri-color gold and round &amp; baguette diamonds.</p>\n<p>Approximate diamond weight: 6.10ct</p>\n<p><span>Approximate item weight: </span><span> 30.7 </span>grams. </p>\n<p>Size: 16 inches.</p>\n<p><span><strong>2)Gold and Diamond Heart Bracelet :</strong></span></p>\n<p>10k two-tone: yellow and white or rose and white gold and round &amp; baguette diamonds.</p>\n<p>Approximate diamond weight: 3ct</p>\n<p>Size: 7 inches.</p>\n<p>Natural earth mined diamonds.</p>\n<p><strong>3) Gold &amp; diamond Heart Earrings:</strong><br></p>\n<p><span>14k yellow gold and two-tone: rose and white gold and round &amp; baguette diamond earrings.</span></p>\n<p>Approximate diamond weight: 0.61ct</p>\n<p>Approximate earrings weight: 2.34 grams.</p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Gift from Marchello the Jeweler:</strong></p>\n<p>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 7588.85,
    "sale_price": 6451,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at3.34.33PM.jpg?v=1738442235",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at3.32.55PM_1.jpg?v=1738442235",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at3.32.55PM_2.jpg?v=1738442235",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at3.32.56PM_1.jpg?v=1738442235",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at3.32.56PM.jpg?v=1738442235",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at3.32.55PM_3.jpg?v=1738442235"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Gold and Diamond Heart Chain & Bracelet + 14k gold and diamond Earrings(choose your color)  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-13T20:20:25.210Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-62",
    "name": "10k gold and diamond Heart Bangle (choose your color)",
    "slug": "10k-gold-and-diamond-heart-bangle-choose-your-color-copy-1",
    "description": "<ul>\n<li>10k white, rose and yellow and natural baguette and round diamonds.</li>\n<li>Approximate diamond weight: 2.28ct.-2.31ct.</li>\n<li>Approximate width: heart-9.47 mm.</li>\n<li>Approximate weight: 14.06grams-15.06 grams.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 3105,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-18at3.12.51PM_2.jpg?v=1742325260",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-18at3.12.51PM_4.jpg?v=1742325260",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-18at3.12.50PM.jpg?v=1742325260",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-18at3.12.51PM_1.jpg?v=1742325260",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-18at3.12.51PM_3.jpg?v=1742325260",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-03-18at3.12.51PM_5.jpg?v=1742325254"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "10k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T19:20:25.210Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-63",
    "name": "Gold and Diamond Twin Heart Bangle Bracelet (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "slug": "gold-and-diamond-twin-heart-bangle-bracelet-choose-your-color-copy",
    "description": "<ul>\n<li>10k yellow or rose gold and natural baguette, round diamonds.<br>\n</li>\n<li>Approximate diamond weight: 1.75ct.<br>\n</li>\n<li>Approximate weight: 12.2 grams.<br>\n</li>\n<li>Approximate top width: 11.63mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 2702.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.55_db30a765.jpg?v=1762547466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.56_6b9cb15e.jpg?v=1762547466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.56_9858c5ea.jpg?v=1762547466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.55_d564968d.jpg?v=1762547466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.55_327c342b.jpg?v=1762547466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.55_a6adfd3d.jpg?v=1762547466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-07at15.29.55_f70e486c.jpg?v=1762547466"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Gold and Diamond Twin Heart Bangle Bracelet (choose your color)  (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T18:20:25.210Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-64",
    "name": "Yellow Gold and Diamond Heart Necklace with Baguette and Round Diamonds (VALENTINE`S DAY SPECIAL)",
    "slug": "yellow-gold-and-diamond-heart-necklace-with-baguette-and-round-diamonds-valentine-s-day-special-copy",
    "description": "<ul>\n<li>10k yellow gold and natural baguette and round diamonds.</li>\n<li>Approximate diamond weight: 3.82ct at 16 inches. Actual diamond weight will vary based on selected chain length.</li>\n<li>Approximate weight:<span> 19.10 grams</span> at 16 inches. Actual weight will vary based on selected chain length.</li>\n<li>Size: 16 inches.</li>\n<li>\n<span>Approximate width: heart-9.52mm, chain-3.45ct.</span><br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 4600,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.18.23PM.jpg?v=1749763132",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.18.24PM_1.jpg?v=1749763132",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.18.24PM.jpg?v=1749763132"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Heart Necklace with Baguette and Round Diamonds (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-13T17:20:25.210Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-65",
    "name": "14k Yellow Gold and Diamond Heart Pendant and Yellow gold Ice Link Chain (VALENTINE`S DAY SPECIAL)",
    "slug": "14k-yellow-gold-and-diamond-heart-pendant-and-yellow-gold-ice-link-chain-valentine-s-day-special-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k yellow gold and natural round diamond pendant.</li>\n<li data-mce-fragment=\"1\">Comes with a 10k yellow gold Ice link chain.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2.84ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail): 32.85 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight:  16.9 grams (16\" chain + pendant).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>\n<!---->",
    "price": 4253.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at4.35.16PM.jpg?v=1739050608",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at4.35.16PM_1.jpg?v=1739050595",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at4.35.16PM_2.jpg?v=1739050595",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at4.35.16PM_3.jpg?v=1739050595"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Yellow Gold and Diamond Heart Pendant and Yellow gold Ice Link Chain (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T16:20:25.210Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-66",
    "name": "18k white gold and diamond Fancy Ring + 14k white gold and diamond Fancy Earrings (VALENTINE`S DAY SPECIAL)",
    "slug": "18k-white-gold-and-diamond-fancy-ring-14k-white-gold-and-diamond-fancy-earrings-valentine-s-day-special-copy-2",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1) Earrings:</strong></p>\n<p>14k white gold and natural round, pear diamonds.</p>\n<p>Approximate diamond weight: 1.25ct.</p>\n<p>Approximate measurement :  9.23 mm.</p>\n<p>Approximate weight: 1.9 grams. </p>\n<p><strong>2) Ring: </strong></p>\n<p>18k white gold Ring with round, pear diamonds. </p>\n<p>Approximate diamond weight: 0.80ct. </p>\n<p>Approximate weight: 4.4<span> </span><span>grams.</span></p>\n<p>Approximate top width:  24.42mm.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 4781.7,
    "sale_price": 4064,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_2.44.00_PM_3.jpg?v=1738784829",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_2.44.00_PM_1.jpg?v=1738784829",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_2.44.00_PM_2.jpg?v=1738784829"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T15:20:25.210Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-67",
    "name": "14k white gold and diamond Fancy Bracelet and Heart Earrings (VALENTINE`S DAY SPECIAL)",
    "slug": "14k-white-gold-and-diamond-fancy-bracelet-and-heart-earrings-valentine-s-day-special-copy",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4  piece deal:</p>\n<p><strong>1)Bracelet:</strong></p>\n<p>14k white gold &amp; round, baguette diamond bracelet.</p>\n<p>Natural earth mined diamonds. </p>\n<p>Approximate diamond weight: 1.28ct.</p>\n<p>Size: 7 inches.</p>\n<p>Approximate weight: 5.85 grams.</p>\n<p>Approximate width: 4.10mm.</p>\n<p><span><strong>2)Earrings:</strong></span></p>\n<p>14k white gold and natural round diamonds Heart Earrings.</p>\n<p>Approximate diamond weight: 0.65ct.</p>\n<p>Approximate weight:  2.69 grams.</p>\n<p>Approximate top width: 11.82 mm.</p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p>Complimentary diamond and gold  earrings. </p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> a </span>surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 3450,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.46.31_PM.jpg?v=1738788444",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.46.31_PM_1.jpg?v=1738788450",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.46.32_PM_1.jpg?v=1738788454",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.46.32_PM.jpg?v=1738788459"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-13T14:20:25.210Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-68",
    "name": "14k white gold and diamond Heart Pendant and White gold Cuban chain (XL diamonds)(VALENTINE`S DAY SPECIAL)",
    "slug": "14k-white-gold-and-diamond-heart-pendant-and-white-gold-cuban-chain-xl-diamondsvalentine-s-day-special-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k white gold and natural round diamond pendant.</li>\n<li data-mce-fragment=\"1\">Comes with a 10k white gold Cuban chain.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2.38ct.<br>\n</li>\n<li data-mce-fragment=\"1\">XL diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail):  33.04 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight:  11 grams (22\" chain + pendant).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>\n<!---->",
    "price": 3563.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.49.11PM.jpg?v=1739047899",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.49.11PM_1.jpg?v=1739047899",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.49.10PM_1.jpg?v=1739047899",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.49.10PM.jpg?v=1739047895"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T13:20:25.211Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-69",
    "name": "14k rose gold and diamond Heart Pendant and 10k white gold Ice Link chain (XL diamonds)(VALENTINE`S DAY SPECIAL)",
    "slug": "14k-rose-gold-and-diamond-heart-pendant-and-10k-white-gold-ice-link-chain-xl-diamondsvalentine-s-day-special",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k rose gold and natural round diamond pendant.</li>\n<li data-mce-fragment=\"1\">Comes with a 10k rose gold approx. 2mm ice link chain.(choose your chain length)</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2.80ct.<br>\n</li>\n<li data-mce-fragment=\"1\">XL diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail):  33.13 inches.</li>\n<li data-mce-fragment=\"1\">Approximate weight:  14.7 grams. (16\" chain + pendant).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>\n<!---->",
    "price": 4023.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.58.35PM.jpg?v=1739048357",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.58.36PM_1.jpg?v=1739048357",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at3.58.36PM.jpg?v=1739048357"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T12:20:25.211Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-70",
    "name": "14k gold and diamond Heart Pendant and Gold Ice Link chain (VALENTINE`S DAY SPECIAL) (choose your color)",
    "slug": "14k-gold-and-diamond-heart-pendant-and-gold-ice-link-chain-valentine-s-day-special-choose-your-color-copy",
    "description": "<ul>\n<li data-mce-fragment=\"1\">14k white or rose  gold and natural emerald-cut and round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2.08ct - 2.33ct.<br>\n</li>\n<li>Comes with a 10k white or rose gold ice link chain.(choose your chain length)</li>\n<li data-mce-fragment=\"1\">Diamond clarity: VS emerald-cuts and SI round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate pendant drop (including bail):  28.01mm<br>\n</li>\n<li>Approximate weight:  16.05 grams (16\" chain + pendant).<br>\n</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.<br>\n</li>\n</ul>",
    "price": 4598.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.17.00PM.jpg?v=1739053072",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.17.00PM_1.jpg?v=1739053072",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.17.01PM_2.jpg?v=1739053072",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.17.01PM_3.jpg?v=1739053072",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.17.01PM.jpg?v=1739053072",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-08at5.17.01PM_1.jpg?v=1739053072"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k gold and diamond Heart Pendant and Gold Ice Link chain (VALENTINE`S DAY SPECIAL) (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-13T11:20:25.211Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-71",
    "name": "Model #16233  36mm Rolex Watch with two-tone Jubilee Band",
    "slug": "36mm-rolex-watch-with-two-tone-jubilee-band",
    "description": "<ul>\n<li>Preowned 36 mm Rolex Datejust.</li>\n<li>Fluted bezel.</li>\n<li>Two-tone jubilee band: 18k gold &amp; stainless steel.</li>\n<li>Automatic movement.</li>\n<li>All factory parts.<br>\n</li>\n<li>White dial with Roman numerals.</li>\n<li>Model #16233</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 7532.5,
    "sale_price": 6403,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-19_at_2.32.14_PM.jpg?v=1768851248",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-19_at_2.32.14_PM_1.jpg?v=1768851248",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-19_at_2.32.14_PM_2.jpg?v=1768851248",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-19_at_2.32.14_PM_3.jpg?v=1768851248",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-19_at_2.32.14_PM_4.jpg?v=1768851248"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T10:20:25.211Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-72",
    "name": "14k white gold and diamond Fancy Tennis Bracelet",
    "slug": "14k-white-gold-and-diamond-fancy-tennis-bracelet",
    "description": "<ul>\n<li>14k white gold and natural round, baguette diamonds.</li>\n<li>Approximate diamond weight: 1.30t at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  5.8 grams at 7 inches (actual weight will vary, based on the length).<br>\n</li>\n<li>We can also order other colors, including yellow gold or rose gold. The special order takes approximately 45 days. Please text or call <strong data-start=\"228\" data-end=\"244\">929-689-2205</strong> for more information.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2530,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-19at1.30.35PM.jpg?v=1768847818",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-19at1.30.36PM.jpg?v=1768847853",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-19at1.30.36PM_1.jpg?v=1768847853",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-19at1.30.36PM_2.jpg?v=1768847853",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-19_at_1.30.35_PM_1.jpg?v=1768847853"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T09:20:25.211Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-73",
    "name": "18k rose gold and diamond Fancy Heart Ring + 18k rose gold and diamond Fancy Heart Earrings (VALENTINE`S DAY SPECIAL)",
    "slug": "18k-rose-gold-and-diamond-fancy-heart-ring-18k-rose-gold-and-diamond-fancy-heart-earrings-valentine-s-day-special-copy",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1) Earrings:</strong></p>\n<p>18k rose gold and natural princess cut, pear diamonds.</p>\n<p>Approximate diamond weight: 0.72ct.</p>\n<p>Approximate measurement :  6.58 mm.</p>\n<p>Approximate weight: 2.7 grams. </p>\n<p><strong>2) Ring: </strong></p>\n<p>18k rose gold Ring with pear, round, princess cut diamonds. </p>\n<p>Approximate diamond weight: 0.88ct. </p>\n<p>Approximate weight: <span> 5.6 </span><span>grams.</span></p>\n<p>Approximate top width:  10.71mm.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 4896.7,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-05at3.37.12PM.jpg?v=1738787887",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.37.12_PM_1.jpg?v=1738787894",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.37.12_PM_2.jpg?v=1738787899",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-02-05_at_3.37.12_PM_3.jpg?v=1738787904"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-13T08:20:25.211Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-74",
    "name": "Gold & Diamond LOVE Pendant",
    "slug": "custom-gold-diamond-name-pendant-personalized-jewelry-choose-your-color-copy",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds.<br>\n</li>\n<li>Approximate diamond weight: 1ct and 0.93ct color stone.</li>\n<li>Approximate pendant height (including bail): 25mm.</li>\n<li>Approximate pendant weight:  18.9 grams.<span>(20 inches chain + pendant combined).</span>\n</li>\n<li>10k yellow gold 2.5mm Cuban chain.</li>\n<li>.Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 4715,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.06.45PM.jpg?v=1745442467",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.06.45PM_1.jpg?v=1745442467",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.06.46PM.jpg?v=1745442457"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Gold & Diamond LOVE Pendant",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T07:20:25.211Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-75",
    "name": "18k Gold Fancy Heart Diamond Pendant Paired with 2mm Chain (choose gold color)(LIMITED EDITION)(VALENTINE`S DAY SPECIAL)",
    "slug": "18k-gold-fancy-heart-diamond-pendant-paired-with-2mm-chain-choose-gold-colorlimited-editionvalentine-s-day-special-copy",
    "description": "<p data-mce-fragment=\"1\">This elegant 1.04ct diamond 18k gold fancy heart pendant comes with a 10k gold 2mm ice link chain and is available in three different gold colors: rose, white, and yellow. The pendant measures 1.2 inches tall and features fancy diamond shapes: emerald-cut, pear shaped, marquis, and round. The purchase also comes with complimentary diamond earrings and an extra surprise from Marchello.</p>",
    "price": 4900,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_6594f2f3-3fef-4248-9697-15463c329bd1.jpg?v=1739055928",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_6f001805-8ed0-475a-a92a-09ffac59982c.jpg?v=1739055928",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_b362d0fb-4616-4f84-a81e-ea3209c74668.jpg?v=1739055928",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_dfe9a031-1b56-40d8-a20f-d89ea18b9b35.jpg?v=1739055928",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_549732bb-4627-4156-85b6-f722876d54b2.jpg?v=1688161596"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "18k Gold Fancy Heart Diamond Pendant Paired with 2mm Chain (choose gold color)(LIMITED EDITION)(VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T06:20:25.211Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-76",
    "name": "Model #116233 36mm Rolex Watch with two-tone oyster band (full factory, anniversary dial)",
    "slug": "model-116233-36mm-rolex-watch-with-two-tone-jubilee-band-full-factory-hidden-clasp-copy",
    "description": "<ul>\n<li>Preowned 36 mm Rolex Datejust.</li>\n<li>Two-tone: 18k gold &amp; stainless steel.</li>\n<li>Automatic movement.</li>\n<li>All factory parts.</li>\n<li>Bracelet: oyster.</li>\n<li>Fluted bezel.</li>\n<li>Champagne <span>anniversary</span> dial with diamonds.<br>\n</li>\n<li>Mint condition.</li>\n<li>Model #116233.</li>\n<li>Comes with papers. </li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 12075,
    "sale_price": 10264,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.01PM_2.jpg?v=1768430051",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.01PM_4.jpg?v=1768430271",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-14_at_4.49.01_PM_3.jpg?v=1768430343",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-14_at_4.49.01_PM_5.jpg?v=1768430343",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.01PM_6.jpg?v=1768430343"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-13T05:20:25.211Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-77",
    "name": "Model #116233 36mm Rolex Watch with two-tone jubilee band (full factory, hidden clasp)",
    "slug": "model-116233-36mm-rolex-watch-with-two-tone-jubilee-band-full-factory-hidden-clasp",
    "description": "<ul>\n<li>Preowned 36 mm Hidden clasp Rolex Datejust.</li>\n<li>Two-tone jubilee band: 18k gold &amp; stainless steel.</li>\n<li>Automatic movement.</li>\n<li>All factory parts.</li>\n<li>Fluted bezel.</li>\n<li>Black dial with diamonds.<br>\n</li>\n<li>Mint condition.</li>\n<li>Model #116233.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 12075,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.00PM.jpg?v=1768430015",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.00PM_2.jpg?v=1768430015",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.00PM_1.jpg?v=1768430182",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-14at4.49.00PM_3.jpg?v=1768430015",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-14_at_4.49.01_PM_1.jpg?v=1768430230",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2026-01-14_at_4.49.01_PM.jpg?v=1768430105"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T04:20:25.211Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-78",
    "name": "Gold and Diamond Butterfly Bracelet (multicolored stones, choose your color)",
    "slug": "gold-and-diamond-butterfly-bracelet-multicolored-stones-choose-your-color",
    "description": "<div class=\"x-block-description w-full relative mb-2\">\n<div class=\"\">\n<div class=\"rte pb-2\">\n<div class=\"rte\">\n<ul>\n<li>10k yellow or rose  gold and natural round diamonds with pink or dark pink stones. </li>\n<li>Approximate diamond weight: 0.70ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight: 7.9 grams at 7 inches (actual weight will vary, based on the length).<br>\n</li>\n<li>Approximate width: links -3.43 mm, butterfly- 9.56mm<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 2530,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at6.24.09PM.jpg?v=1768260356",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at6.24.08PM_2.jpg?v=1768260356",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at6.24.08PM.jpg?v=1768260356",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at6.24.08PM_1.jpg?v=1768260356"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Gold and Diamond Butterfly Bracelet (multicolored stones, choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T03:20:25.211Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-79",
    "name": "Yellow Gold and Diamond Heart Bracelet (VALENTINE`S DAY SPECIAL)",
    "slug": "yellow-gold-and-diamond-heart-bracelet",
    "description": "<ul>\n<li>10k yellow gold and natural round , baguette diamonds.</li>\n<li>Approximate diamond weight: 3.63ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  28.4 grams at 7 inches (actual weight will vary, based on the length).<br>\n</li>\n<li>Size: 7.</li>\n<li>Approximate width: links - 5.53mm, heart- 12.15mm<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 5520,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at5.19.19PM.jpg?v=1768256444",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at5.19.20PM_1.jpg?v=1768256477",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at5.19.20PM.jpg?v=1768256645",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at5.19.20PM_2.jpg?v=1768256645",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at5.19.20PM_3.jpg?v=1768256645"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Heart Bracelet (VALENTINE`S DAY SPECIAL)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-13T02:20:25.211Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-80",
    "name": "Model #6694, 34mm Rolex Watch with stainless steel oyster band",
    "slug": "36mm-rolex-watch-with-stainless-steel-oyster-band",
    "description": "<ul>\n<li>Preowned 34mm Rolex Datejust.</li>\n<li>Bracelet: oyster.<br>\n</li>\n<li>Automatic movement.</li>\n<li>Stainless steel.</li>\n<li>Custom bezel and dial by customer request.</li>\n<li>Diamonds are not set by Rolex.</li>\n<li>Pink dial with Roman numerals.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong style=\"font-size: 0.875rem;\">Disclaimer:</strong><span style=\"font-size: 0.875rem;\"> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 5002.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at3.24.57PM.jpg?v=1768249746",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at3.24.57PM_1.jpg?v=1768249746",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at3.24.57PM_3.jpg?v=1768249746",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-12at3.24.57PM_2.jpg?v=1768249746"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T01:20:25.211Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-81",
    "name": "Gold and Diamond 6mm Miami Cuban Bracelet (solid, box clasp)",
    "slug": "gold-and-diamond-5mm-miami-cuban-bracelet-solid-box-clasp-copy-1",
    "description": "<ul>\n<li>10k yellow, white, two-tone white and yellow or two-tone rose and white gold, tri-color gold and natural round diamonds.</li>\n<li>Solid.</li>\n<li>Approximate diamond weight:<span> </span><strong data-start=\"307\" data-end=\"318\"> 2.08CT</strong><span> </span>(at 7 inches, depending on length).</li>\n<li>Approximate weight:<span> 13.5</span><strong data-start=\"378\" data-end=\"392\"> grams</strong><span> </span>(at 7 inches, depending on length).</li>\n<li>\n<span>Approximate width: <strong data-start=\"451\" data-end=\"462\"> 5.66 mm</strong> (chain) – <strong data-start=\"473\" data-end=\"484\"> 6.01mm</strong> (clasp).</span><br>\n</li>\n<li><span>Diamond box clasp.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 3450,
    "sale_price": 2933,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.14PM_4.jpg?v=1767813585",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.14PM_2.jpg?v=1768246248",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.14PM_3.jpg?v=1768246248"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Men",
    "material": "Gold and Diamond 6mm Miami Cuban Bracelet (solid, box clasp)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-13T00:20:25.212Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-82",
    "name": "Gold and Diamond 6MM Miami Cuban Link Chain with Round Diamond (box clasp)",
    "slug": "gold-and-diamond-5mm-miami-cuban-link-chain-with-round-diamond-box-clasp-copy-1",
    "description": "<ul>\n<li>10k yellow, white, rose and two-tone white and yellow or two-tone rose and white gold, tri-color gold and natural round diamonds.</li>\n<li>Solid.</li>\n<li>Approximate diamond weight: 6.89<strong data-end=\"318\" data-start=\"307\">CT</strong> (at 20 inches, depending on length).<br data-end=\"358\" data-start=\"355\">Approximate weight: 36.3<strong data-end=\"392\" data-start=\"378\"> grams</strong> (at 20 inches, depending on length).<br data-end=\"432\" data-start=\"429\">Approximate width: <strong data-end=\"462\" data-start=\"451\"> 5.66 mm</strong> (chain) – <strong data-end=\"484\" data-start=\"473\"> 6.01mm</strong> (clasp).</li>\n<li><span>Diamond box clasp.</span></li>\n<li><span style=\"text-decoration: underline;\">Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 6325,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.13PM.jpg?v=1767813480",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.14PM_4.jpg?v=1767813585",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.14PM_2.jpg?v=1768246248",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-07at2.10.14PM_3.jpg?v=1768246248"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Men",
    "material": "Gold and Diamond 6MM Miami Cuban Link Chain with Round Diamond (box clasp)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-12T23:20:25.212Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-83",
    "name": "Gold and Diamond 5mm Miami Cuban Bracelet (solid, box clasp)",
    "slug": "gold-and-diamond-5mm-miami-cuban-bracelet-solid-box-clasp-copy",
    "description": "<ul>\n<li>10k yellow, white, two-tone white and yellow or two-tone rose and white gold, tri-color gold and natural round diamonds.</li>\n<li>Solid.</li>\n<li>Approximate diamond weight:<span> </span><strong data-end=\"318\" data-start=\"307\"> 2.09CT</strong><span> </span>(at 7.5 inches, depending on length).</li>\n<li>Approximate weight:<span> 10</span><strong data-end=\"392\" data-start=\"378\"> grams</strong><span> </span>(at 7.5 inches, depending on length).</li>\n<li>\n<span>Approximate width: </span><strong data-start=\"451\" data-end=\"462\">4.74 mm</strong><span> (chain) – </span><strong data-start=\"473\" data-end=\"484\">5.08 mm</strong><span> (clasp).</span><br>\n</li>\n<li><span>Diamond box clasp.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2760,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM.jpg?v=1767738309",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_4.jpg?v=1767738276",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_3.jpg?v=1767738341",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_2.jpg?v=1767738341"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Men",
    "material": "Gold and Diamond 5mm Miami Cuban Bracelet (solid, box clasp)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T22:20:25.212Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-84",
    "name": "Gold and Diamond 5MM Miami Cuban Link Chain with Round Diamond (box clasp)",
    "slug": "gold-and-diamond-5mm-miami-cuban-link-chain-with-round-diamond-box-clasp-copy",
    "description": "<ul>\n<li>10k yellow, white, two-tone white and yellow or two-tone rose and white gold, tri-color gold and natural round diamonds.</li>\n<li>Solid.</li>\n<li>Approximate diamond weight: <strong data-start=\"307\" data-end=\"318\">5.61 CT</strong> (at 22 inches, depending on length).<br data-start=\"355\" data-end=\"358\">Approximate weight: <strong data-start=\"378\" data-end=\"392\">19.3 grams</strong> (at 16 inches, depending on length).<br data-start=\"429\" data-end=\"432\">Approximate width: <strong data-start=\"451\" data-end=\"462\">4.74 mm</strong> (chain) – <strong data-start=\"473\" data-end=\"484\">5.08 mm</strong> (clasp).</li>\n<li><span>Diamond box clasp.</span></li>\n<li><span style=\"text-decoration: underline;\">Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 4542.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_6.jpg?v=1767738341",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_2.jpg?v=1767738341",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_3.jpg?v=1767738341",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM_5.jpg?v=1767738341",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2026-01-06at5.18.41PM.jpg?v=1767738309"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Men",
    "material": "Gold and Diamond 5MM Miami Cuban Link Chain with Round Diamond (box clasp)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T21:20:25.212Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-85",
    "name": "14k white gold and diamond Ladies` Ring",
    "slug": "14k-white-gold-and-diamond-ladies-ring-1",
    "description": "<ul>\n<li>14k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight:<span> 1</span>ct.</li>\n<li>Approximate item weight: <span> 3.4 grams at size 7. Actual weight will vary, based on selected ring size.</span>\n</li>\n<li><span>Approximate top width: 7.17mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 2012.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at4.06.39PM.jpg?v=1767220017",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at4.06.39PM_1.jpg?v=1767220017",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at4.06.39PM_3.jpg?v=1767220017",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at4.06.40PM_1.jpg?v=1767219955",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at4.06.40PM_2.jpg?v=1767219980",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at4.06.40PM.jpg?v=1767220007"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-12T20:20:25.212Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-86",
    "name": "18k white gold and diamond Ladies` Fancy Ring",
    "slug": "18k-white-gold-and-diamond-ladies-fancy-ring-1",
    "description": "<ul>\n<li>18k white gold and natural round, baguette, princess cut, marquise diamonds.</li>\n<li>Approximate diamond weight:<span> 1.60</span>ct.</li>\n<li>Approximate item weight: 7.5<span> grams at size 7. Actual weight will vary, based on selected ring size.</span>\n</li>\n<li><span>Approximate top width: mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3680,
    "sale_price": 3128,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at3.28.54PM_2.jpg?v=1767213095",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at3.28.54PM_1.jpg?v=1767213132",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at3.28.54PM_4.jpg?v=1767213162",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at3.28.54PM_5.jpg?v=1767213190",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at3.28.54PM.jpg?v=1767213298"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T19:20:25.212Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-87",
    "name": "14k Yellow Gold and Diamond Twin Square Ring",
    "slug": "14k-yellow-gold-and-diamond-twin-square-ring",
    "description": "<ul>\n<li>14k yellow gold and natural round, baguette diamonds.</li>\n<li>Approximate diamond weight:<span> 2.36ct.</span>\n</li>\n<li>Approximate item weight: <span> 9.5 grams at size 10.  Actual weight will vary, based on selected ring size.</span><span></span>\n</li>\n<li><span>Approximate top width: 16.88mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 2208,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at12.06.13PM_1.jpg?v=1767200908",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at12.06.13PM_3.jpg?v=1767200955",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at12.06.13PM_5.jpg?v=1767200955",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at12.06.13PM_2.jpg?v=1767200955",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at12.06.13PM_6.jpg?v=1767200908",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-31at12.06.13PM.jpg?v=1767200908"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Yellow Gold and Diamond Twin Square Ring",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T18:20:25.212Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-88",
    "name": "34mm Rolex Diamond Watch with Stainless Steel Jubilee Bracelet (custom diamond bezel, custom diamond white dial)",
    "slug": "34mm-rolex-diamond-watch-with-stainless-steel-jubilee-bracelet-custom-diamond-bezel-custom-diamond-white-dial",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">Preowned 34mm Rolex Watch.</li>\n<li data-mce-fragment=\"1\">Stainless steel.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2ct.</li>\n<li data-mce-fragment=\"1\">Bracelet: jubilee.</li>\n<li data-mce-fragment=\"1\">Automatic movement.</li>\n<li data-mce-fragment=\"1\">Mint condition.</li>\n<li data-mce-fragment=\"1\">Custom diamond white dial.<br data-mce-fragment=\"1\">\n</li>\n<li data-mce-fragment=\"1\">Custom diamond bezel.</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.</li>\n<li data-mce-fragment=\"1\">Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">Disclaimer:</strong><span data-mce-fragment=\"1\"> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 6497.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9943715D-A8AB-403F-B9A0-3BCFFAE18D76.jpg?v=1703698240",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/51721531-A7BD-4C2E-800A-356C6BC0832A.jpg?v=1703698239",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/AC9E0537-6ED9-42E4-A567-021AEF0EB8D3.jpg?v=1703698239",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/7A1F685F-B285-4D52-9E8F-B043229D8C8D.jpg?v=1703698238",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/03CB9139-43C4-49AA-81DF-CE7CD633FA09.jpg?v=1703698237",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/52DEBC12-3012-4C24-BF58-72CB071A701B.jpg?v=1703698238",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/EF0C4CD0-F54E-43E6-9DAD-13B2A056C3CD.jpg?v=1703698238",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/025AAEFD-3995-418D-BDAE-E418F6A502B9.heic?v=1703699423"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-12T17:20:25.212Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-89",
    "name": "14k gold and diamond Star Of David With Chai Pendant + Gold Cuban Chain (NEW ARRIVAL)",
    "slug": "14k-gold-and-diamond-star-of-david-with-chai-pendant-gold-cuban-chain",
    "description": "<ul>\n<li>14k yellow, white or rose gold and natural round diamonds.</li>\n<li>10k yellow, white or rose gold approx. 2.5mm cuban link chain.</li>\n<li>Approximate diamond weight: 1.5ct.</li>\n<li>Approximate pendant height (including bail): 28.09mm.</li>\n<li>Approximate weight: 8.4 grams (18 inches chain + pendant combined).</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 3294.75,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_8e675b62.jpg?v=1764793631",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_61fa4817.jpg?v=1764793631",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_bf2c2961.jpg?v=1764793631",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_6929dd74.jpg?v=1764793631",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_5bf94ac2.jpg?v=1764793631",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_b1b6273b.jpg?v=1764793631",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-12-03at15.25.23_e1e47fac.jpg?v=1764793604"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k gold and diamond Star Of David With Chai Pendant + Gold Cuban Chain (NEW ARRIVAL)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T16:20:25.212Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-90",
    "name": "Gold and Diamond Clover Ring (choose your color)",
    "slug": "gold-and-diamond-clover-ring-choose-your-color-copy",
    "description": "<ul>\n<li>10k white, rose or yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 0.98ct.</li>\n<li>Approximate weight: <span> 3.8 grams.</span>\n</li>\n<li>\n<span>Approximate top width: 15.96mm.</span><br>\n</li>\n<li>Size: 7 (You can choose a different size prices may vary depending on the size selected.)</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 1265,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at17.26.19_5bdb5b95.jpg?v=1758317403",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at17.26.20_c1c488ab.jpg?v=1758317429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at17.26.19_cb2c4c67.jpg?v=1758317447",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at17.26.19_c9a89a20.jpg?v=1758317464",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at17.26.19_d1ce6e0c.jpg?v=1758317481",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at17.26.20_3a23584d.jpg?v=1758317500",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-19_at_16.27.25_682cefda.jpg?v=1758317520"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "Gold and Diamond Clover Ring (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T15:20:25.212Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-91",
    "name": "Gold and Diamond Key & Butterfly Pendant + Gold Cuban chain (choose your color)",
    "slug": "gold-and-diamond-key-butterfly-pendant-gold-cuban-chain-choose-your-color",
    "description": "<ul>\n<li>10k yellow, white or rose gold and natural round diamonds and multicolored stone pendant.</li>\n<li>10k yellow, white or rose gold approx. 2.5mm cuban link chain.</li>\n<li>Approximate diamond weight: 0.50ct.</li>\n<li>Approximate pendant height (including bail): 43.15mm.</li>\n<li>Approximate weight: 6.9 grams (18 inches chain + pendant combined).</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 1897.5,
    "sale_price": 1613,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-24at13.18.45_d74417a2.jpg?v=1764008400",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-24at13.18.45_7c288cee.jpg?v=1764008400",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-24at13.18.45_bd5ad3cf.jpg?v=1764008400",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-24at13.18.45_cd8d48c9.jpg?v=1764008400",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-24at13.18.45_f483d831.jpg?v=1764008389"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "Gold and Diamond Key & Butterfly Pendant + Gold Cuban chain (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-12T14:20:25.212Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-92",
    "name": "Gold and Diamond Butterfly Pendant and Gold Cuban Chain (choose your color)",
    "slug": "gold-and-diamond-butterfly-pendant-and-gold-cuban-chain-choose-your-color-copy",
    "description": "<ul>\n<li>10k yellow, white or rose gold and natural round diamonds and multicolored stone pendant.</li>\n<li>10k yellow, white or rose gold approx. 2.5mm cuban link chain.</li>\n<li>Approximate diamond weight: 0.23ct.</li>\n<li>Approximate pendant height (including bail): 19.10mm.</li>\n<li>Approximate weight: 7  grams (18 inches chain + pendant combined).</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2068.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.20PM.jpg?v=1747852991",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.20PM_1.jpg?v=1747852991",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.21PM.jpg?v=1747852991",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.21PM_1.jpg?v=1747852991",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.20PM_2.jpg?v=1747852991",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.20PM_3.jpg?v=1747852991",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.38.21PM_2.jpg?v=1747852990",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/9938215F-2C3D-49B4-818D-7ABD2C0EF0CF.jpg?v=1747853480"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "Gold and Diamond Butterfly Pendant and Gold Cuban Chain (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T13:20:25.212Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-93",
    "name": "24mm Rolex Watch with two-tone oyster band + Yellow Gold and Diamond Twin Heart Bangle",
    "slug": "26mm-rolex-watch-with-two-tone-oyster-band-yellow-gold-and-diamond-twin-heart-bangle-thanksgiving-day-special",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 2 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 24mm Rolex Diamond Watch.</p>\n<p>Bracelet: oyster.</p>\n<p>Two-tone: gold and stainless steel.</p>\n<p>Custom diamond dial and bezel by customer request.</p>\n<p>Champagne dial with diamonds.</p>\n<p>Approximate diamond weight: 1.20ct.</p>\n<p>Diamonds are not set by Rolex.</p>\n<p><span>Natural earth mined di</span>amonds.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>10k yellow gold and natural round, baguette diamonds.</p>\n<p>Approximate diamond weight: 1.57ct.</p>\n<p>Approximate weight: 13 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: heart-9.38mm</p>\n<p>6 inches.</p>",
    "price": 7935,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-21at17.47.47_774dd9dc.jpg?v=1763765364",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-21at17.47.48_34253016.jpg?v=1763765342",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-21at17.47.48_60236bfe.jpg?v=1763765451",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-21at17.47.48_cde1aab1.jpg?v=1763765451",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-21at17.47.49_037cee7c.jpg?v=1763765451",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-21at17.47.48_a4791d2f.jpg?v=1763765451"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "24mm Rolex Watch with two-tone oyster band + Yellow Gold and Diamond Twin Heart Bangle",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T12:20:25.212Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-94",
    "name": "26mm Rolex Watch with Stainless Steel Jubilee Band + White Gold and Diamond Heart Bangle",
    "slug": "26mm-rolex-watch-with-stainless-steel-jubilee-band-white-gold-and-diamond-heart-bangle-thanksgiving-day-special",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 2 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 26mm Rolex Diamond Watch.</p>\n<p>Stainless steel.</p>\n<p>Bracelet: jubilee.</p>\n<p>Custom diamond dial and bezel by customer request.</p>\n<p>Mother of pearl dial.</p>\n<p>Roman numerals. </p>\n<p>Approximate diamond weight: 1ct.</p>\n<p><span>Natural earth mined di</span>amonds.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>10k white gold and natural round, baguette diamonds.</p>\n<p>Approximate diamond weight: 2.30ct.</p>\n<p>Approximate weight: 14.06 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: heart-9.32mm</p>\n<p>7 inches.</p>",
    "price": 6992,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.36.46_4493bb68.jpg?v=1763591870",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.35.46_44a29220.jpg?v=1763591902",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.35.46_93b956ac.jpg?v=1763591923",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.35.46_ad23a885.jpg?v=1763591944",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.35.46_cece1f11.jpg?v=1763591968",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.35.47_7e584546.jpg?v=1763591986",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-19at17.35.47_40e90a19.jpg?v=1763592006"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "26mm Rolex Watch with Stainless Steel Jubilee Band + White Gold and Diamond Heart Bangle",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-12T11:20:25.212Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-95",
    "name": "Yellow Gold and Diamond Ladies` Rings (choose your style)",
    "slug": "yellow-gold-and-diamond-ladies-rings-choose-your-style-thanksgiving-day-special",
    "description": "<ul>\n<li>10k yellow gold and natural baguette and round diamonds.</li>\n<li>Approximate diamond weight:<span> 0.75</span>ct.-0.78ct.</li>\n<li>Approximate item weight: 3.7<span> grams at size 7. Actual weight will vary, based on selected ring size.</span>\n</li>\n<li><span>Size: 7. If you need bigger or smaller size please call us at 9296892205.</span></li>\n<li>\n<span>Approximate top width: 18.48mm</span><span>.</span>\n</li>\n</ul>",
    "price": 1518,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at15.26.54_b11c9b6e.jpg?v=1762979744",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at15.32.33_b9416ccf.jpg?v=1762979763",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at15.32.34_7f23824c.jpg?v=1762979780",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at15.26.54_6bb0d59c.jpg?v=1762979795",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at15.26.54_d7ff6dad.jpg?v=1762979812",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at15.26.54_c2967f3a.jpg?v=1762979833"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Ladies` Rings (choose your style)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T10:20:25.213Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-96",
    "name": "14k gold and diamond Cross Pendant + Gold Cuban Chain (choose your color)",
    "slug": "14k-gold-and-diamond-cross-pendant-gold-cuban-chain-choose-your-colorthanksgiving-day-special",
    "description": "<ul>\n<li>14k yellow, rose and white gold and natural round diamonds pendant.</li>\n<li>10k yellow or rose gold cuban chain.</li>\n<li>Approximate diamond weight: 1.10ct. <br>\n</li>\n<li>Approximate pendant height (including bail): 32.71 mm.</li>\n<li>Approximate weight: 7.8 grams (18 inches chain + pendant combined).<br>\n</li>\n</ul>",
    "price": 2183.85,
    "sale_price": 1856,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-12_at_16.39.58_9b98c4f1.jpg?v=1762983839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at16.40.00_5f563cc8.jpg?v=1762983839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at16.39.59_83d45665.jpg?v=1762983839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at16.39.59_85bf1697.jpg?v=1762983839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-12_at_16.39.58_516dd922.jpg?v=1762983839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at16.39.59_5ffbc59f.jpg?v=1762983839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-12_at_16.39.58_1dc8464c.jpg?v=1762983839"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Unisex",
    "material": "14k gold and diamond Cross Pendant + Gold Cuban Chain (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T09:20:25.213Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-97",
    "name": "14k Rose Gold and Diamond Heart Earrings + Twin Heart Ring",
    "slug": "14k-rose-gold-and-diamond-heart-earrings-twin-heart-ring",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 2 piece deal:</p>\n<p><strong>1)Earrings:</strong></p>\n<p>14k rose gold and natural round, baguette diamonds.</p>\n<p>Approximate diamond weight: 0.73ct.</p>\n<p>Approximate weight: 2.5 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width:9.76 mm.</p>\n<p><span><strong>2)Ring:</strong></span></p>\n<p>14k rose gold and natural round, baguette diamond ring.</p>\n<p>Approximate diamond weight: 0.66ct. </p>\n<p>Approximate weight: 5.9<span> </span><span>grams.</span></p>\n<p><span>Size: 7. If you need bigger or smaller size call us at 9296892205.</span></p>\n<p><span>Approximate top diameter: 11.34 mm.</span><span><strong></strong></span></p>",
    "price": 2702.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.33.51_06c0a898.jpg?v=1762986890",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.33.51_e0f403ad.jpg?v=1762986890",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.33.51_3bb05d50.jpg?v=1762986890",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.33.51_9dad145f.jpg?v=1762986890",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.33.51_41af413f.jpg?v=1762986890"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Rose Gold and Diamond Heart Earrings + Twin Heart Ring",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-12T08:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-98",
    "name": "Two-tone gold and Diamond Clover Bracelet + Yellow Gold and Diamond GIFT Earrings",
    "slug": "two-tone-gold-and-diamond-clover-bracelet-yellow-gold-and-diamond-earrings-thanksgiving-day-special",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 2 piece deal:</p>\n<p><strong>1)Bracelet:</strong></p>\n<p>10k two-tone gold: yellow and white gold and natural round, baguette diamonds.</p>\n<p>Approximate diamond weight: 2.59ct.</p>\n<p>Approximate weight: 16.5 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: 10 mm.</p>\n<p>7 inches.</p>\n<p><span><strong>2)Earrings:</strong></span></p>\n<p>10k yellow gold and natural round, baguette diamond earrings.</p>\n<p>Approximate diamond weight: 0.47ct. </p>\n<p>Approximate weight: 3.6<span> </span><span>grams.</span></p>\n<p><span>Approximate top diameter: 9.56 mm.</span></p>\n<p>Earrings shown in the picture are a gift.</p>",
    "price": 3565,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-14at11.15.38_9fb8cbfd.jpg?v=1763137420",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-14at11.15.39_c16ca6ed.jpg?v=1763137420",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-14at11.15.38_6ca99bd2.jpg?v=1763137420"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Two-tone gold and Diamond Clover Bracelet + Yellow Gold and Diamond GIFT Earrings",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T07:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-99",
    "name": "14k yellow gold and diamond Men`s Ring + Earrings",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-earrings-thanksgiving-day-special",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 2 piece deal:</p>\n<p><strong>1)Ring:</strong></p>\n<p>14k yellow gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 2.74ct.</p>\n<p>Approximate weight: 9.2 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: 19.67 mm.</p>\n<p>Size: 10.</p>\n<p><span><strong>2)Earrings:</strong></span></p>\n<p>14k yellow gold and natural round diamond earrings.</p>\n<p>Approximate diamond weight: 1.16ct. </p>\n<p>Approximate weight: 3.86<span> </span><span>grams.</span></p>\n<p><span>Approximate top diameter: 10.89 mm.</span></p>",
    "price": 3450,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.35_ef60f30c.jpg?v=1762988533",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.36_8dede182.jpg?v=1762988533",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.35_fd9810ab.jpg?v=1762988533",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.35_cba9eb8a.jpg?v=1762988533",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.34_c71bd691.jpg?v=1762988533",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.35_139b76d0.jpg?v=1762988533",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-12at17.54.35_6365eccd.jpg?v=1762988533"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T06:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-100",
    "name": "14k Gold Double Halo Pear-Shaped Engagement Diamond Ring (pear-shaped solitaire center)  (choose your color)",
    "slug": "14k-gold-double-halo-pear-shaped-engagement-diamond-ring-pear-shaped-solitaire-center-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">14k yellow, white or rose gold and natural round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight:<span> 0.91-0.92</span>ct.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 3.70-3.93<span data-mce-fragment=\"1\"> grams.</span>\n</li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Approximate shank width: 2.6<span> </span>mm.</span></li>\n<li data-mce-fragment=\"1\">Approximate top dimensions: 10<span> </span>x 12.7 mm.</li>\n<li data-mce-fragment=\"1\"><span style=\"text-decoration: underline;\">Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>\n<p><br></p>",
    "price": 2875,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_afe9e244-8878-4cc6-919f-80a04d3c84b2.jpg?v=1647129852",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_4202a9cd-db16-40ef-bd62-9f7db71657ea.jpg?v=1647129854",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_5de63c4e-fb99-4447-b95b-8ad568541067.jpg?v=1647129855",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_36b695fd-fa6b-48eb-bbae-6d66602704d8.jpg?v=1647129857",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_7c1fb3bc-708d-4f37-996a-5fae6adaa08e.jpg?v=1647129861",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-17_at_16.45.52_31dd9c9d.jpg?v=1763416154",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-17_at_16.45.52_70495ccb.jpg?v=1763416232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-17_at_16.45.52_3ed5b475.jpg?v=1763416252",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-17_at_16.45.52_cf8416cb.jpg?v=1763416466"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold Double Halo Pear-Shaped Engagement Diamond Ring (pear-shaped solitaire center)  (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-12T05:20:25.213Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-101",
    "name": "Gold and Diamond Hamsa Pendant + Gold Cuban Link Chain (choose your color)",
    "slug": "gold-and-diamond-hamsa-pendant-gold-cuban-link-chain-choose-your-color-thanksgiving-day-special",
    "description": "<ul>\n<li>10k yellow, white, rose gold and natural round, baguette diamonds pendant.</li>\n<li>Approximate diamond weight: 2.70ct.-2.83ct <br>\n</li>\n<li>\n<strong data-end=\"133\" data-start=\"111\">Available Options:</strong> Pendant only, or pendant with chain (16\"–24\"). Choose your style.</li>\n<li>Approximate pendant height (including bail):  43.33 mm.</li>\n<li>Approximate weight: 12.3 grams (18 inches chain + pendant combined).</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 2990,
    "sale_price": 2542,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.47_3e9dcf39.jpg?v=1763410296",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.49_d209a3c6.jpg?v=1763410296",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.49_9f0603cc.jpg?v=1763410296",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.48_e51665f9.jpg?v=1763410296",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.48_55b149e2.jpg?v=1763410296",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.48_610fb198.jpg?v=1763410296",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-17at15.08.48_73f388e9.jpg?v=1763410296"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "Gold and Diamond Hamsa Pendant + Gold Cuban Link Chain (choose your color)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T04:20:25.213Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-102",
    "name": "Gold and Diamond Jesus Pendant + Gold Cuban Chain (choose your color)",
    "slug": "gold-and-diamond-jesus-pendant-gold-cuban-chain-choose-your-color",
    "description": "<ul>\n<li data-mce-fragment=\"1\">10k yellow, white, two-tone: rose and white gold and natural round diamonds pendant.</li>\n<li data-mce-fragment=\"1\">10k gold cuban chain 2.5mm. </li>\n<li>Approximate diamond weight: 2.66ct. <br>\n</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail):  43.75 mm.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 19 grams (18 inches chain + pendant combined).</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.<br>\n</li>\n</ul>",
    "price": 3450,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.40.50_7614a4e8.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.40.51_c4ef0deb.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.40.51_8612b4a5.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.41.19_80838ebc.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.41.19_95e802d6.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.41.19_8df16c4d.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.40.51_f8141ee7.jpg?v=1762814641",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-10at17.40.51_9895d216.jpg?v=1762814641"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Gold and Diamond Jesus Pendant + Gold Cuban Chain (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T03:20:25.213Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-103",
    "name": "Gold and Diamond Jesus Head Pendant with Multicolored Stones (Choose Your Color)",
    "slug": "gold-and-diamond-jesus-head-pendant-with-multicolored-stones-choose-your-color",
    "description": "<ul>\n<li>10k yellow or white gold and natural round diamond pendant with Multicolored Stones  (we can change the color of stones)<br>\n</li>\n<li>Approximate diamond weight: 2.60ct<br>\n</li>\n<li>Approximate pendant height (including bail):  48.41mm.</li>\n<li>Approximate weight:  16.2 grams </li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>",
    "price": 4140,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-11-05_at_15.38.25_d04e7dab.jpg?v=1762375147",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-05at15.36.34_d7d32fd8.jpg?v=1762375147",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-05at15.36.34_57700b8e.jpg?v=1762375147",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-05at15.36.34_0dfbd39a.jpg?v=1762375147",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-05at15.36.35_03c3239f.jpg?v=1762375147",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-05at15.36.35_5c89c619.jpg?v=1762375147"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Gold and Diamond Jesus Head Pendant with Multicolored Stones (Choose Your Color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-12T02:20:25.213Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-104",
    "name": "14k white gold and diamond Heart Pendant + White Gold Cuban Chain",
    "slug": "14k-white-gold-and-diamond-heart-pendant-white-gold-cuban-chain",
    "description": "<ul>\n<li>14k white gold and natural round, baguette diamond pendant.</li>\n<li>10k white gold cuban chain.</li>\n<li>Approximate diamond weight: 3ct.</li>\n<li>Approximate pendant height (including bail): 37.22mm.</li>\n<li>Approximate weight:  13.6 grams (18 inches chain + pendant combined).</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 3220,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at17.46.23_e5a74f1e.jpg?v=1762296489",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at17.46.23_c4ea5e30.jpg?v=1762296489",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at17.46.23_8879e481.jpg?v=1762296489",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at17.46.23_c291f083.jpg?v=1762296489",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at17.46.23_030db7e7.jpg?v=1762296489"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k white gold and diamond Heart Pendant + White Gold Cuban Chain",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T01:20:25.213Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-105",
    "name": "White Gold and Diamond Air Tag Pendant",
    "slug": "10k-white-gold-and-diamond-air-tag-pendant",
    "description": "<ul>\n<li>10k white gold and natural round diamonds pendant.<br>\n</li>\n<li>Approximate diamond weight: 2.51ct.</li>\n<li>Approximate pendant height (including bail): 2.5 inches</li>\n<li>Approximate weight: 28.7 grams.</li>\n<li>Chain not included. To purchase a chain, please call us at (929) 689-2205.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 4197.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at16.05.18_5957341c.jpg?v=1762290680",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at16.05.17_29be98cd.jpg?v=1762290680",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at16.05.17_97a45c39.jpg?v=1762290680",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at16.05.17_30242226.jpg?v=1762290680",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-11-04at16.05.18_645aca48.jpg?v=1762290680"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "White Gold and Diamond Air Tag Pendant",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-12T00:20:25.213Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-106",
    "name": "14k Yellow Gold and Diamond Pendant + Earrings + 14k Gold Chain",
    "slug": "14k-yellow-gold-and-diamond-pendant-earrings-14k-gold-chain",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1) Earrings:</strong></p>\n<p>14k yellow gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 0.74ct.</p>\n<p>Approximate width:  7.04mm.</p>\n<p>Approximate weight:  2.40 grams. </p>\n<p><strong>2) Pendant: </strong></p>\n<p>14k yellow gold Pendant with natural round diamonds. </p>\n<p>Approximate diamond weight: ct. </p>\n<p>Approximate weight: <span> 1.8 </span><span>grams.</span></p>\n<p>Approximate top width: 16.74 mm.</p>\n<p><strong>3) Chain: </strong></p>\n<p>14k yellow gold Franco chain</p>\n<p>16 inches (select your preferred size).</p>\n<p>Approximate gold weight: 4.1 grams.</p>\n<p><strong>4)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>5) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 2875,
    "sale_price": 2444,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at15.02.19_ceb282ed.jpg?v=1760470311",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at15.02.19_a2c987eb.jpg?v=1760470311",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at15.02.20_a020f2e1.jpg?v=1760470311",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at15.02.20_c3a90ccd.jpg?v=1760470311",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at15.02.20_2710e368.jpg?v=1760470311",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at15.02.20_1e7a0e5a.jpg?v=1760470311",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.18_c1406e97.jpg?v=1760470086",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.17_2c416b9a.jpg?v=1760470176"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Yellow Gold and Diamond Pendant + Earrings + 14k Gold Chain",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-11T23:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-107",
    "name": "18k yellow gold and diamond Ring + 14k yellow gold and diamond Earrings",
    "slug": "18k-yellow-gold-and-diamond-ring-14k-yellow-gold-and-diamond-earrings",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1) Earrings:</strong></p>\n<p>14k yellow gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 0.74ct.</p>\n<p>Approximate width:  7.04mm.</p>\n<p>Approximate weight:  2.40 grams. </p>\n<p><strong>2) Ring: </strong></p>\n<p>18k yellow gold Ring with natural round diamonds. </p>\n<p>Approximate diamond weight: 1.54ct. </p>\n<p>Approximate weight: <span> 5.28 </span><span>grams.</span></p>\n<p>Approximate top width: 8.08 mm.</p>\n<p>Size: 7</p>\n<p><strong>3&amp;4)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>5&amp;6) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 4945,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.17_40b074c4.jpg?v=1760463689",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.17_a528a574.jpg?v=1760463689",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.17_11458159.jpg?v=1760463689",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.17_7e284daa.jpg?v=1760463689",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.17_2c416b9a.jpg?v=1760470176",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.18_85527ed1.jpg?v=1760463689",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-14at13.37.18_c1406e97.jpg?v=1760470086"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T22:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-108",
    "name": "Yellow Gold Diamond Cross Ring – Multicolored Stones (choose your color)",
    "slug": "yellow-gold-diamond-cross-ring-multicolored-stones-choose-your-color-copy",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds, multicolored stones.</li>\n<li>Approximate diamond weight: 2.72ct.</li>\n<li>Approximate weight: <span> 9.1 grams.</span>\n</li>\n<li>\n<span>Approximate top width: 22.37 mm.</span><br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2875,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.33_ad1b05d2.jpg?v=1759951165",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.34_489107da.jpg?v=1759951165",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.33_a905148c.jpg?v=1759951165",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.33_23298e73.jpg?v=1759951165",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.33_8a89a094.jpg?v=1759951165",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.34_4fd4337c.jpg?v=1759951165",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.15.33_925797d7.jpg?v=1759951165"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "Yellow Gold Diamond Cross Ring – Multicolored Stones (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T21:20:25.213Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-109",
    "name": "Yellow Gold Diamond Cross Ring – Multicolored Stones (choose your color)",
    "slug": "yellow-gold-diamond-cross-ring-multicolored-stones",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds, multicolored stones.</li>\n<li>Approximate diamond weight: 2.72ct.</li>\n<li>Approximate weight: <span> 9.6 grams.</span>\n</li>\n<li>\n<span>Approximate top width: 22.46 mm.</span><br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2875,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.07_c5af7321.jpg?v=1759950306",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.09_eef31c40.jpg?v=1759950306",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.09_767bc1d0.jpg?v=1759950266",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.09_ff71d559.jpg?v=1759950266",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.09_5cd965f6.jpg?v=1759950266",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.09_916726c1.jpg?v=1759950256",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.09_c4a3db31.jpg?v=1759950256",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-10-08at15.01.08_5b4f9f40.jpg?v=1759950225"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "Yellow Gold Diamond Cross Ring – Multicolored Stones (choose your color)",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-11T20:20:25.213Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-110",
    "name": "Gold and Diamond Clover Earrings (choose your color)",
    "slug": "gold-and-diamond-clover-earrings-choose-your-color-1",
    "description": "<ul>\n<li>10k yellow, rose or gold and natural earth mined round , baguette diamonds.</li>\n<li>Approximate diamond weight: 0.47ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight: 3.5 grams.</li>\n<li>Approximate diameter: mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1265,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-22at17.08.47_adb683eb.jpg?v=1758575395",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-22at17.08.46_a7e9863d.jpg?v=1758575395",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-22at17.08.47_9062beb3.jpg?v=1758575395"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Gold and Diamond Clover Earrings (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T19:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-111",
    "name": "Gold and Diamond Clover Earrings (choose your color)",
    "slug": "gold-and-diamond-clover-earrings-choose-your-color",
    "description": "<ul>\n<li>10k yellow, rose or white gold and natural earth mined round diamonds.</li>\n<li>Approximate diamond weight: 0.56ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight:  2.1 grams.</li>\n<li>Approximate diameter: 9.74mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1150,
    "sale_price": 978,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at16.39.49_1ad03e90.jpg?v=1758314466",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at16.39.49_13915e63.jpg?v=1758317559",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at16.39.49_ca1955fd.jpg?v=1758317588",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-19at16.39.49_224466ec.jpg?v=1758317606"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Gold and Diamond Clover Earrings (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T18:20:25.213Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-112",
    "name": "41mm Iced Out Rolex Datejust Watch with Two-Tone Jubilee Band + 14K Rose Gold Diamond Ring – 4-Piece Luxury Jewelry Set",
    "slug": "41mm-rolex-iced-out-watch-with-two-tone-jubilee-band-14k-rose-gold-ring",
    "description": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/hhlyWqHeriA\" frameborder=\"0\" allowfullscreen></iframe>\n<p data-end=\"463\" data-start=\"278\">Turn heads with this luxurious and timeless jewelry set — a bold statement of style, elegance, and craftsmanship. Curated by <strong data-end=\"428\" data-start=\"403\">Marchello The Jeweler</strong>, this <strong data-end=\"453\" data-start=\"435\">4-piece bundle</strong> features:</p>\n<h3 data-end=\"510\" data-start=\"470\"><strong data-end=\"510\" data-start=\"474\">1) Rolex Watch (Preowned – 41mm)</strong></h3>\n<ul data-end=\"914\" data-start=\"511\">\n<li data-end=\"548\" data-start=\"511\">\n<p data-end=\"548\" data-start=\"513\"><strong data-end=\"523\" data-start=\"513\">Model:</strong> Rolex Datejust (41mm, preowned)</p>\n</li>\n<li data-end=\"604\" data-start=\"549\">\n<p data-end=\"604\" data-start=\"551\"><strong data-end=\"562\" data-start=\"551\">Finish:</strong> Fully iced-out with custom-set diamonds</p>\n</li>\n<li data-end=\"656\" data-start=\"605\">\n<p data-end=\"656\" data-start=\"607\"><strong data-end=\"620\" data-start=\"607\">Two-Tone:</strong> Stainless steel and 14k rose gold</p>\n</li>\n<li data-end=\"686\" data-start=\"657\">\n<p data-end=\"686\" data-start=\"659\"><strong data-end=\"668\" data-start=\"659\">Dial:</strong> Chocolate brown</p>\n</li>\n<li data-end=\"726\" data-start=\"687\">\n<p data-end=\"726\" data-start=\"689\"><strong data-end=\"702\" data-start=\"689\">Bracelet:</strong> Two-tone Jubilee band</p>\n</li>\n<li data-end=\"793\" data-start=\"727\">\n<p data-end=\"793\" data-start=\"729\"><strong data-end=\"739\" data-start=\"729\">Bezel:</strong> Custom bezel with customer-requested diamond design</p>\n</li>\n<li data-end=\"838\" data-start=\"794\">\n<p data-end=\"838\" data-start=\"796\"><strong data-end=\"815\" data-start=\"796\">Diamond Weight:</strong> Approx. 16.22 carats</p>\n</li>\n<li data-end=\"914\" data-start=\"839\">\n<p data-end=\"914\" data-start=\"841\"><strong data-end=\"849\" data-start=\"841\">Box:</strong> Comes in a premium Marchello The Jeweler box with LED lighting</p>\n</li>\n</ul>\n<p data-end=\"1189\" data-start=\"916\"><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>\n<h3 data-end=\"1217\" data-start=\"1196\"><strong data-end=\"1217\" data-start=\"1200\">2) Men's Ring</strong></h3>\n<ul data-end=\"1436\" data-start=\"1218\">\n<li data-end=\"1255\" data-start=\"1218\">\n<p data-end=\"1255\" data-start=\"1220\"><strong data-end=\"1233\" data-start=\"1220\">Material:</strong> Solid 14K Rose Gold</p>\n</li>\n<li data-end=\"1298\" data-start=\"1256\">\n<p data-end=\"1298\" data-start=\"1258\"><strong data-end=\"1269\" data-start=\"1258\">Stones:</strong> Natural round-cut diamonds</p>\n</li>\n<li data-end=\"1342\" data-start=\"1299\">\n<p data-end=\"1342\" data-start=\"1301\"><strong data-end=\"1320\" data-start=\"1301\">Diamond Weight:</strong> Approx. 2.07 carats</p>\n</li>\n<li data-end=\"1383\" data-start=\"1343\">\n<p data-end=\"1383\" data-start=\"1345\"><strong data-end=\"1362\" data-start=\"1345\">Total Weight:</strong> Approx. 7.35 grams</p>\n</li>\n<li data-end=\"1414\" data-start=\"1384\">\n<p data-end=\"1414\" data-start=\"1386\"><strong data-end=\"1396\" data-start=\"1386\">Width:</strong> Approx. 17.71mm</p>\n</li>\n<li data-end=\"1436\" data-start=\"1415\">\n<p data-end=\"1436\" data-start=\"1417\"><strong data-end=\"1431\" data-start=\"1417\">Ring Size:</strong> 10</p>\n</li>\n</ul>\n<h3 data-end=\"1468\" data-start=\"1443\"><strong data-end=\"1468\" data-start=\"1447\">3) Bonus Earrings</strong></h3>\n<ul data-end=\"1609\" data-start=\"1469\">\n<li data-end=\"1609\" data-start=\"1469\">\n<p data-end=\"1609\" data-start=\"1471\">A <strong data-end=\"1521\" data-start=\"1473\">complimentary pair of small diamond earrings</strong> to complete the look. Simple, elegant, and perfect for daily wear or special occasions.</p>\n</li>\n</ul>\n<h3 data-end=\"1643\" data-start=\"1616\"><strong data-end=\"1643\" data-start=\"1620\">4) Surprise Gift </strong></h3>\n<ul data-end=\"1763\" data-start=\"1644\">\n<li data-end=\"1763\" data-start=\"1644\">\n<p data-end=\"1763\" data-start=\"1646\">Enjoy a special <strong data-end=\"1676\" data-start=\"1662\">bonus gift</strong> included with every purchase — a token of appreciation from <strong data-end=\"1762\" data-start=\"1737\">Marchello The Jeweler</strong>.</p>\n</li>\n</ul>\n<p data-end=\"1937\" data-start=\"1770\"><strong data-end=\"1820\" data-start=\"1770\">Shine in Luxury. Stand Out with Confidence.</strong><br data-end=\"1823\" data-start=\"1820\">This exclusive 4-piece set is the ultimate package for the man who appreciates fine jewelry and timeless prestige.<strong></strong></p>\n<p data-end=\"1937\" data-start=\"1770\"><em>Price includes card processing fee.</em></p>",
    "price": 30360,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.19_4caa85d0.jpg?v=1757971372",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.17_de7a2d00.jpg?v=1757971429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.17_37e416d1.jpg?v=1757971429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.19_8d842b7b.jpg?v=1757971429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.19_e96b8a78.jpg?v=1757971429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.17_c36531c3.jpg?v=1757971429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.19_765d2940.jpg?v=1757971429",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at17.21.19_e54d5dc5.jpg?v=1757971429"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "41mm Iced Out Rolex Datejust Watch with Two-Tone Jubilee Band + 14K Rose Gold Diamond Ring – 4-Piece Luxury Jewelry Set",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-11T17:20:25.214Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-113",
    "name": "VVS/VS High Clarity Baguette Diamond Bracelet in 18K White Gold – Approx. 4.44ct",
    "slug": "vvs-vs-high-clarity-baguette-diamond-bracelet-in-18k-white-gold-approx-4-44ct",
    "description": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Bn-roZxdlhM\" frameborder=\"0\" allowfullscreen></iframe>\n<p data-start=\"385\" data-end=\"447\">Upgrade your jewelry collection with this exquisite <strong data-start=\"501\" data-end=\"521\">diamond bracelet</strong>, featuring <strong data-start=\"533\" data-end=\"573\">VVS/VS high clarity natural diamonds</strong> totaling approximately <strong data-start=\"597\" data-end=\"612\">4.44 carats</strong>. Set in luxurious <strong data-start=\"631\" data-end=\"649\">18K white gold</strong>, each <strong data-start=\"656\" data-end=\"680\">baguette-cut diamond</strong> is expertly arranged to reflect maximum brilliance and sophistication.</p>\n<h4 data-start=\"758\" data-end=\"787\"><strong data-start=\"763\" data-end=\"787\">✨ Product Highlights</strong></h4>\n<ul data-start=\"788\" data-end=\"1065\">\n<li data-start=\"788\" data-end=\"817\">\n<p data-start=\"790\" data-end=\"817\"><strong data-start=\"790\" data-end=\"800\">Metal:</strong> 18K White Gold</p>\n</li>\n<li data-start=\"818\" data-end=\"867\">\n<p data-start=\"820\" data-end=\"867\"><strong data-start=\"820\" data-end=\"845\">Total Diamond Weight:</strong> Approx. 4.44 Carats</p>\n</li>\n<li data-start=\"868\" data-end=\"912\">\n<p data-start=\"870\" data-end=\"912\"><strong data-start=\"870\" data-end=\"890\">Diamond Clarity:</strong> VVS/VS High Clarity</p>\n</li>\n<li data-start=\"913\" data-end=\"960\">\n<p data-start=\"915\" data-end=\"960\"><strong data-start=\"915\" data-end=\"932\">Diamond Type:</strong> 100% Natural, Earth-Mined</p>\n</li>\n<li data-start=\"961\" data-end=\"990\">\n<p data-start=\"963\" data-end=\"990\"><strong data-start=\"963\" data-end=\"979\">Diamond Cut:</strong> Baguette</p>\n</li>\n<li data-start=\"991\" data-end=\"1034\">\n<p data-start=\"993\" data-end=\"1034\"><strong data-start=\"993\" data-end=\"1013\">Bracelet Weight:</strong> Approx. 13.8 Grams</p>\n</li>\n<li data-start=\"1035\" data-end=\"1065\">\n<p data-start=\"1037\" data-end=\"1065\"><strong data-start=\"1037\" data-end=\"1047\">Width:</strong> Approx. 5.76 mm</p>\n</li>\n<li data-start=\"1035\" data-end=\"1065\">\n<strong>Size</strong>: 7.</li>\n</ul>\n<h4 data-start=\"1072\" data-end=\"1104\"><strong data-start=\"1077\" data-end=\"1104\">🎁 Bonus Gifts Included</strong></h4>\n<ul data-start=\"1105\" data-end=\"1198\">\n<li data-start=\"1105\" data-end=\"1149\">\n<p data-start=\"1107\" data-end=\"1149\"><strong data-start=\"1107\" data-end=\"1147\">FREE Pair of Gold &amp; Diamond Earrings</strong></p>\n</li>\n<li data-start=\"1150\" data-end=\"1198\">\n<p data-start=\"1152\" data-end=\"1198\"><strong data-start=\"1152\" data-end=\"1198\">PLUS: A Surprise Gift with Every Purchase!</strong></p>\n</li>\n</ul>\n<h3 data-start=\"1346\" data-end=\"1368\"><strong data-start=\"1350\" data-end=\"1368\">Why Choose Us?</strong></h3>\n<p data-start=\"1369\" data-end=\"1533\">✔️ Ethically Sourced Natural Diamonds<br data-start=\"1406\" data-end=\"1409\">✔️ Premium Craftsmanship &amp; Quality Guarantee<br data-start=\"1453\" data-end=\"1456\">✔️ Free Shipping &amp; Secure Checkout<br data-start=\"1490\" data-end=\"1493\">✔️ Complimentary Luxury Gift Packaging</p>\n<p data-start=\"1369\" data-end=\"1533\"><em>Price includes card processing fee.</em></p>",
    "price": 5980,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at14.08.03_38e12385.jpg?v=1757959767",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at14.08.03_2c8c12d1.jpg?v=1757959767",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at14.08.03_12a9c51d.jpg?v=1757959767",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-15at14.08.03_0f6ffeaf.jpg?v=1757959767"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "VVS/VS High Clarity Baguette Diamond Bracelet in 18K White Gold – Approx. 4.44ct",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T16:20:25.214Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-114",
    "name": "14K White Gold & Diamond Ring + Earrings Set – 3-Piece Deal",
    "slug": "14k-white-gold-and-diamond-ring-14k-gold-and-diamond-earrings",
    "description": "<p data-start=\"362\" data-end=\"651\"><strong data-start=\"362\" data-end=\"422\">Radiate elegance with this luxurious 3-piece jewelry set</strong>, crafted in <strong data-start=\"435\" data-end=\"459\">solid 14K white gold</strong> and adorned with <strong data-start=\"477\" data-end=\"510\">genuine, earth-mined diamonds</strong>. Whether you're marking a special occasion or treating yourself, this timeless set delivers brilliance, beauty, and unmatched craftsmanship.</p>\n<h4 data-start=\"658\" data-end=\"685\"><strong data-start=\"663\" data-end=\"685\">✨ What’s Included:</strong></h4>\n<p data-start=\"687\" data-end=\"716\"><strong data-start=\"687\" data-end=\"716\">💎 Diamond Heart Earrings</strong></p>\n<ul data-start=\"717\" data-end=\"907\">\n<li data-start=\"717\" data-end=\"748\">\n<p data-start=\"719\" data-end=\"748\">Crafted in <strong data-start=\"730\" data-end=\"748\">solid 14K gold</strong></p>\n</li>\n<li data-start=\"749\" data-end=\"786\">\n<p data-start=\"751\" data-end=\"786\">Set with <strong data-start=\"760\" data-end=\"786\">natural round diamonds</strong></p>\n</li>\n<li data-start=\"787\" data-end=\"827\">\n<p data-start=\"789\" data-end=\"827\"><strong data-start=\"789\" data-end=\"814\">Total diamond weight:</strong> ~0.99 carats</p>\n</li>\n<li data-start=\"828\" data-end=\"846\">\n<p data-start=\"830\" data-end=\"846\"><strong data-start=\"830\" data-end=\"840\">Width:</strong> 8.5mm</p>\n</li>\n<li data-start=\"847\" data-end=\"907\">\n<p data-start=\"849\" data-end=\"907\"><strong data-start=\"849\" data-end=\"879\">Secure screw-back closures</strong> for comfort &amp; peace of mind</p>\n</li>\n</ul>\n<p data-start=\"909\" data-end=\"938\"><strong data-start=\"909\" data-end=\"938\">💍 Diamond Statement Ring</strong></p>\n<ul data-start=\"939\" data-end=\"1186\">\n<li data-start=\"939\" data-end=\"983\">\n<p data-start=\"941\" data-end=\"983\">Made with <strong data-start=\"951\" data-end=\"983\">genuine earth-mined diamonds</strong></p>\n</li>\n<li data-start=\"984\" data-end=\"1018\">\n<p data-start=\"986\" data-end=\"1018\">Solid <strong data-start=\"992\" data-end=\"1010\">14K white gold</strong> setting</p>\n</li>\n<li data-start=\"1019\" data-end=\"1053\">\n<p data-start=\"1021\" data-end=\"1053\"><strong data-start=\"1021\" data-end=\"1040\">Diamond weight:</strong> ~1.70 carats</p>\n</li>\n<li data-start=\"1054\" data-end=\"1100\">\n<p data-start=\"1056\" data-end=\"1100\"><strong data-start=\"1056\" data-end=\"1072\">Gold weight:</strong> ~2.5g (varies by ring size)</p>\n</li>\n<li data-start=\"1101\" data-end=\"1161\">\n<p data-start=\"1103\" data-end=\"1161\"><strong data-start=\"1103\" data-end=\"1117\">Ring size:</strong> 7 <em data-start=\"1120\" data-end=\"1161\">(other sizes available; price may vary)</em></p>\n</li>\n<li data-start=\"1162\" data-end=\"1186\">\n<p data-start=\"1164\" data-end=\"1186\"><strong data-start=\"1164\" data-end=\"1178\">Top width:</strong> 13.45mm</p>\n</li>\n</ul>\n<p data-start=\"1188\" data-end=\"1215\"><strong data-start=\"1188\" data-end=\"1215\">🎁 BONUS: Surprise Gift</strong></p>\n<ul data-start=\"1216\" data-end=\"1335\">\n<li data-start=\"1216\" data-end=\"1335\">\n<p data-start=\"1218\" data-end=\"1335\">Enjoy a special thank-you gift from <strong data-start=\"1254\" data-end=\"1279\">Marchello the Jeweler</strong> with every purchase — a small token of our appreciation</p>\n</li>\n</ul>\n<h4 data-start=\"1342\" data-end=\"1369\"><strong data-start=\"1347\" data-end=\"1369\">Why You'll Love It</strong></h4>\n<ul data-start=\"1370\" data-end=\"1645\">\n<li data-start=\"1370\" data-end=\"1434\">\n<p data-start=\"1372\" data-end=\"1434\">✅ 100% <strong data-start=\"1379\" data-end=\"1412\">natural, earth-mined diamonds.</strong></p>\n</li>\n<li data-start=\"1435\" data-end=\"1481\">\n<p data-start=\"1437\" data-end=\"1481\">✅ Classic, timeless design for all occasions</p>\n</li>\n<li data-start=\"1482\" data-end=\"1546\">\n<p data-start=\"1484\" data-end=\"1546\">✅ Perfect gift for anniversaries, birthdays, or bridal jewelry</p>\n</li>\n<li data-start=\"1547\" data-end=\"1603\">\n<p data-start=\"1549\" data-end=\"1603\">✅ Lightweight, durable, and comfortable for daily wear</p>\n</li>\n<li data-start=\"1604\" data-end=\"1645\">\n<p data-start=\"1606\" data-end=\"1645\">✅ Comes gift-ready in elegant packaging</p>\n</li>\n</ul>\n<p data-start=\"1652\" data-end=\"1753\">💳 <em data-start=\"1655\" data-end=\"1700\">Prices include credit card processing fees.</em><br data-start=\"1700\" data-end=\"1703\">🚚 <em data-start=\"1706\" data-end=\"1753\">Fast &amp; secure shipping available at checkout.</em></p>\n<p data-start=\"1760\" data-end=\"1913\"><strong data-start=\"1760\" data-end=\"1872\">Add a touch of brilliance to your collection — or surprise someone special with a gift they'll never forget.</strong><br data-start=\"1872\" data-end=\"1875\">🛒 <strong data-start=\"1878\" data-end=\"1913\">Limited quantities – order now!</strong></p>",
    "price": 3507.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at16.29.11_64855380.jpg?v=1757712547",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at16.29.11_fae20909.jpg?v=1757712547",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at16.29.11_ce64e049.jpg?v=1757712547",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at16.29.11_48acf864.jpg?v=1757712547"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14K White Gold & Diamond Ring + Earrings Set – 3-Piece Deal",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T15:20:25.214Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-115",
    "name": "42mm Rolex Explorer II Watch with Stainless Steel Oyster Band – Model 226570 (2022)",
    "slug": "42mm-rolex-explorer-watch-with-stainless-steel-oyster-band",
    "description": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/tzJhC733U_w\" frameborder=\"0\" allowfullscreen></iframe>\n<h2 data-start=\"173\" data-end=\"245\"><strong data-start=\"176\" data-end=\"245\">Preowned Rolex Explorer II – 42mm Black Dial (Model 226570, 2022)</strong></h2>\n<p data-start=\"247\" data-end=\"538\">Own a piece of timeless luxury with this authentic <strong data-start=\"298\" data-end=\"319\">Rolex Explorer II</strong>, model <strong data-start=\"327\" data-end=\"337\">226570</strong>, featuring a sleek design, durable stainless steel construction, and high-performance automatic movement. This watch is perfect for collectors and those with refined taste in classic Swiss timepieces.</p>\n<h3 data-start=\"545\" data-end=\"568\"><strong data-start=\"549\" data-end=\"568\">Specifications:</strong></h3>\n<ul data-start=\"569\" data-end=\"753\">\n<li data-start=\"569\" data-end=\"592\">\n<p data-start=\"571\" data-end=\"592\"><strong data-start=\"571\" data-end=\"585\">Case Size:</strong> 42mm</p>\n</li>\n<li data-start=\"593\" data-end=\"621\">\n<p data-start=\"595\" data-end=\"621\"><strong data-start=\"595\" data-end=\"612\">Model Number:</strong> 226570</p>\n</li>\n<li data-start=\"622\" data-end=\"640\">\n<p data-start=\"624\" data-end=\"640\"><strong data-start=\"624\" data-end=\"633\">Year:</strong> 2022</p>\n</li>\n<li data-start=\"641\" data-end=\"664\">\n<p data-start=\"643\" data-end=\"664\"><strong data-start=\"643\" data-end=\"657\">Condition:</strong> Mint</p>\n</li>\n<li data-start=\"665\" data-end=\"684\">\n<p data-start=\"667\" data-end=\"684\"><strong data-start=\"667\" data-end=\"676\">Dial:</strong> Black</p>\n</li>\n<li data-start=\"685\" data-end=\"712\">\n<p data-start=\"687\" data-end=\"712\"><strong data-start=\"687\" data-end=\"700\">Movement:</strong> Automatic</p>\n</li>\n<li data-start=\"713\" data-end=\"753\">\n<p data-start=\"715\" data-end=\"753\"><strong data-start=\"715\" data-end=\"728\">Bracelet:</strong> Oyster Stainless Steel</p>\n</li>\n</ul>\n<h3 data-start=\"760\" data-end=\"791\"><strong data-start=\"764\" data-end=\"791\">Included with Purchase:</strong></h3>\n<ul data-start=\"792\" data-end=\"932\">\n<li data-start=\"792\" data-end=\"819\">\n<p data-start=\"794\" data-end=\"819\">✅ Original Rolex Papers</p>\n</li>\n<li data-start=\"820\" data-end=\"855\">\n<p data-start=\"822\" data-end=\"855\">💎 Free Gold &amp; Diamond Earrings</p>\n</li>\n<li data-start=\"856\" data-end=\"903\">\n<p data-start=\"858\" data-end=\"903\">🎁 Surprise Gift from Marchello the Jeweler</p>\n</li>\n<li data-start=\"904\" data-end=\"932\">\n<p data-start=\"906\" data-end=\"932\">💡 Premium LED Watch Box</p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><em>Price includes card processing fee.</em></span></p>",
    "price": 11960,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at14.17.21_5436a4cd.jpg?v=1757701622",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at14.17.21_3cd947f9.jpg?v=1757701622",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at14.17.22_5f574247.jpg?v=1757701604",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at14.17.22_14f35aa6.jpg?v=1757701767",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at14.17.22_635393fa.jpg?v=1757701802",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-12at14.17.22_948fe891.jpg?v=1757701802"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/tzJhC733U_w\" frameborder=\"0\" allowfullscreen></iframe>\n<h2 data-start=\"173\" data-end=\"245\"><strong data-start=\"176\" data-end=\"245\">Preowned Rolex Explorer II – 42mm Black Dial (Model 226570, 2022)</strong></h2>\n<p data-start=\"247\" data-end=\"538\">Own a piece of timeless luxury with this authentic <strong data-start=\"298\" data-end=\"319\">Rolex Explorer II</strong>, model <strong data-start=\"327\" data-end=\"337\">226570</strong>, featuring a sleek design, durable stainless steel construction, and high-performance automatic movement. This watch is perfect for collectors and those with refined taste in classic Swiss timepieces.</p>\n<h3 data-start=\"545\" data-end=\"568\"><strong data-start=\"549\" data-end=\"568\">Specifications:</strong></h3>\n<ul data-start=\"569\" data-end=\"753\">\n<li data-start=\"569\" data-end=\"592\">\n<p data-start=\"571\" data-end=\"592\"><strong data-start=\"571\" data-end=\"585\">Case Size:</strong> 42mm</p>\n</li>\n<li data-start=\"593\" data-end=\"621\">\n<p data-start=\"595\" data-end=\"621\"><strong data-start=\"595\" data-end=\"612\">Model Number:</strong> 226570</p>\n</li>\n<li data-start=\"622\" data-end=\"640\">\n<p data-start=\"624\" data-end=\"640\"><strong data-start=\"624\" data-end=\"633\">Year:</strong> 2022</p>\n</li>\n<li data-start=\"641\" data-end=\"664\">\n<p data-start=\"643\" data-end=\"664\"><strong data-start=\"643\" data-end=\"657\">Condition:</strong> Mint</p>\n</li>\n<li data-start=\"665\" data-end=\"684\">\n<p data-start=\"667\" data-end=\"684\"><strong data-start=\"667\" data-end=\"676\">Dial:</strong> Black</p>\n</li>\n<li data-start=\"685\" data-end=\"712\">\n<p data-start=\"687\" data-end=\"712\"><strong data-start=\"687\" data-end=\"700\">Movement:</strong> Automatic</p>\n</li>\n<li data-start=\"713\" data-end=\"753\">\n<p data-start=\"715\" data-end=\"753\"><strong data-start=\"715\" data-end=\"728\">Bracelet:</strong> Oyster Stainless Steel</p>\n</li>\n</ul>\n<h3 data-start=\"760\" data-end=\"791\"><strong data-start=\"764\" data-end=\"791\">Included with Purchase:</strong></h3>\n<ul data-start=\"792\" data-end=\"932\">\n<li data-start=\"792\" data-end=\"819\">\n<p data-start=\"794\" data-end=\"819\">✅ Original Rolex Papers</p>\n</li>\n<li data-start=\"820\" data-end=\"855\">\n<p data-start=\"822\" data-end=\"855\">💎 Free Gold &amp; Diamond Earrings</p>\n</li>\n<li data-start=\"856\" data-end=\"903\">\n<p data-start=\"858\" data-end=\"903\">🎁 Surprise Gift from Marchello the Jeweler</p>\n</li>\n<li data-start=\"904\" data-end=\"932\">\n<p data-start=\"906\" data-end=\"932\">💡 Premium LED Watch Box</p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><em>Price includes card processing fee.</em></span></p>",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-11T14:20:25.214Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-116",
    "name": "14k yellow gold and diamond Angel Pendant and Yellow Gold Ice Link Chain",
    "slug": "14k-yellow-gold-and-diamond-angel-pendant-and-yellow-gold-ice-link-chain-copy",
    "description": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/s2oLlw-Mxv4\" frameborder=\"0\" allowfullscreen></iframe>\n<ul>\n<li>14k yellow gold and natural round, baguette diamond pendant.</li>\n<li>Comes with a 10k yellow gold ice link chain.</li>\n<li>Approximate diamond weight: 1.83ct.<br>\n</li>\n<li>Approximate pendant height (including bail):  42.59mm.</li>\n<li>Approximate weight:  17.8 grams (16\" chain + pendant).</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n<p><em><strong data-end=\"2115\" data-start=\"2106\">Note:</strong> Prices include card processing fees. </em></p>",
    "price": 4023.85,
    "sale_price": 3420,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at5.20.24PM.jpg?v=1738448460",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at5.20.25PM.jpg?v=1738448468",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-01at5.20.25PM_1.jpg?v=1738448468"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k yellow gold and diamond Angel Pendant and Yellow Gold Ice Link Chain",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T13:20:25.214Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-117",
    "name": "18k White Gold and Diamond Pendant + White Gold Ice Link Chain + 14k White Gold and Diamond Ring | Luxury Jewelry Set",
    "slug": "18k-white-gold-and-diamond-pendant-white-gold-ice-link-chain-14k-white-gold-and-diamond-ring-luxury-jewelry-set",
    "description": "<p data-start=\"448\" data-end=\"619\"><strong data-start=\"448\" data-end=\"619\">Look stunning with this luxurious 5-piece white gold and diamond jewelry set—crafted to impress and built to shine. Perfect for special occasions or everyday elegance.</strong></p>\n<p data-start=\"621\" data-end=\"656\">This exclusive collection includes:</p>\n<p data-start=\"658\" data-end=\"697\"><strong data-start=\"658\" data-end=\"695\">1) White Gold and Diamond Pendant</strong></p>\n<ul data-start=\"698\" data-end=\"855\">\n<li data-start=\"698\" data-end=\"763\">\n<p data-start=\"700\" data-end=\"763\">Crafted from 18k white gold with round brilliant-cut diamonds</p>\n</li>\n<li data-start=\"764\" data-end=\"811\">\n<p data-start=\"766\" data-end=\"811\">Approximate diamond weight: <strong data-start=\"794\" data-end=\"809\">4.68 carats</strong></p>\n</li>\n<li data-start=\"812\" data-end=\"855\">\n<p data-start=\"814\" data-end=\"855\">Approximate pendant weight: <strong data-start=\"842\" data-end=\"855\">7.8 grams</strong></p>\n</li>\n</ul>\n<p data-start=\"857\" data-end=\"891\"><strong data-start=\"857\" data-end=\"889\">2) White Gold Ice Link Chain</strong></p>\n<ul data-start=\"892\" data-end=\"993\">\n<li data-start=\"892\" data-end=\"942\">\n<p data-start=\"894\" data-end=\"942\">10k white gold, approx. <strong data-start=\"918\" data-end=\"940\">2mm ice link chain</strong></p>\n</li>\n<li data-start=\"943\" data-end=\"993\">\n<p data-start=\"945\" data-end=\"993\">Approximate weight: <strong data-start=\"965\" data-end=\"978\">7.4 grams</strong> (at 16 inches)</p>\n</li>\n</ul>\n<p data-start=\"995\" data-end=\"1031\"><strong data-start=\"995\" data-end=\"1029\">3) White Gold and Diamond Ring</strong></p>\n<ul data-start=\"1032\" data-end=\"1191\">\n<li data-start=\"1032\" data-end=\"1101\">\n<p data-start=\"1034\" data-end=\"1101\">Made from 14k white gold with natural, earth-mined round diamonds</p>\n</li>\n<li data-start=\"1102\" data-end=\"1149\">\n<p data-start=\"1104\" data-end=\"1149\">Approximate diamond weight: <strong data-start=\"1132\" data-end=\"1147\">3.85 carats</strong></p>\n</li>\n<li data-start=\"1150\" data-end=\"1191\">\n<p data-start=\"1152\" data-end=\"1191\">Approximate ring weight: <strong data-start=\"1177\" data-end=\"1191\">15.8 grams</strong></p>\n</li>\n<li data-start=\"1150\" data-end=\"1191\"><strong data-start=\"1177\" data-end=\"1191\">Size: 10.</strong></li>\n</ul>\n<p data-start=\"1193\" data-end=\"1227\"><strong data-start=\"1193\" data-end=\"1225\">4) Diamond and Gold Earrings</strong></p>\n<ul data-start=\"1228\" data-end=\"1291\">\n<li data-start=\"1228\" data-end=\"1291\">\n<p data-start=\"1230\" data-end=\"1291\">Includes complimentary matching <strong data-start=\"1262\" data-end=\"1291\">diamond and gold earrings</strong></p>\n</li>\n</ul>\n<p data-start=\"1293\" data-end=\"1341\"><strong data-start=\"1293\" data-end=\"1339\">5) Special Gift from Marchello the Jeweler</strong></p>\n<ul data-start=\"1342\" data-end=\"1400\">\n<li data-start=\"1342\" data-end=\"1400\">\n<p data-start=\"1344\" data-end=\"1400\">Enjoy a surprise bonus gift included with your purchase!</p>\n</li>\n</ul>\n<p data-start=\"1402\" data-end=\"1559\">✨ <strong data-start=\"1404\" data-end=\"1505\">Add timeless brilliance to your collection with high-quality gold and ethically sourced diamonds.</strong> A premium gift set that embodies luxury and elegance.</p>\n<p data-start=\"1402\" data-end=\"1559\"><em>Price includes card processing fee.</em></p>",
    "price": 8740,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at11.55.17_4ffcdf11.jpg?v=1757088109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at11.55.18_faca69b3.jpg?v=1757088109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at11.55.18_331d4b6b.jpg?v=1757088109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at11.55.18_b22669db.jpg?v=1757088109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at11.55.18_13caadc2.jpg?v=1757088109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at11.55.18_8a1a7598.jpg?v=1757088109"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k White Gold and Diamond Pendant + White Gold Ice Link Chain + 14k White Gold and Diamond Ring | Luxury Jewelry Set",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T12:20:25.214Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-118",
    "name": "14K Gold Cross Pendant, Diamond Ring & 10K Cuban Chain Set – 5 Piece Jewelry Set.",
    "slug": "14k-gold-cross-pendant-diamond-ring-10k-cuban-chain-set-5-piece-jewelry-set-copy",
    "description": "<p><iframe src=\"https://www.youtube.com/embed/yYRI7VGuq2I\" height=\"400\" width=\"100%\"></iframe></p>\n<p data-start=\"284\" data-end=\"420\"><strong data-start=\"284\" data-end=\"420\">Look stunning with this luxurious 5-piece gold and diamond jewelry set — a timeless collection designed for elegance and brilliance.</strong></p>\n<p data-start=\"422\" data-end=\"482\">This premium set from <strong data-start=\"447\" data-end=\"472\">Marchello the Jeweler</strong> includes:</p>\n<p data-start=\"489\" data-end=\"511\"><strong data-start=\"489\" data-end=\"509\">1) Cross Pendant</strong></p>\n<ul data-start=\"512\" data-end=\"720\">\n<li data-start=\"512\" data-end=\"546\">\n<p data-start=\"514\" data-end=\"546\">Crafted in <strong data-start=\"525\" data-end=\"544\">14K yellow gold</strong></p>\n</li>\n<li data-start=\"547\" data-end=\"599\">\n<p data-start=\"549\" data-end=\"599\">Features natural <strong data-start=\"566\" data-end=\"597\">round and baguette diamonds</strong></p>\n</li>\n<li data-start=\"600\" data-end=\"643\">\n<p data-start=\"602\" data-end=\"643\">Approx. <strong data-start=\"610\" data-end=\"628\">diamond weight</strong>: 1.55 carats</p>\n</li>\n<li data-start=\"644\" data-end=\"686\">\n<p data-start=\"646\" data-end=\"686\">Approx. <strong data-start=\"654\" data-end=\"674\">height with bail</strong>: 2 inches</p>\n</li>\n<li data-start=\"687\" data-end=\"720\">\n<p data-start=\"689\" data-end=\"720\">Approx. <strong data-start=\"697\" data-end=\"707\">weight</strong>: 5.3 grams</p>\n</li>\n</ul>\n<p data-start=\"727\" data-end=\"747\"><strong data-start=\"727\" data-end=\"745\">2) Cuban Chain</strong></p>\n<ul data-start=\"748\" data-end=\"896\">\n<li data-start=\"748\" data-end=\"794\">\n<p data-start=\"750\" data-end=\"794\"><strong data-start=\"756\" data-end=\"792\">10K yellow gold Cuban link chain</strong></p>\n</li>\n<li data-start=\"795\" data-end=\"813\">\n<p data-start=\"797\" data-end=\"813\"><strong data-start=\"797\" data-end=\"811\">2.5mm wide</strong></p>\n</li>\n<li data-start=\"814\" data-end=\"850\">\n<p data-start=\"816\" data-end=\"850\">Choose your preferred <strong data-start=\"838\" data-end=\"848\">length</strong></p>\n</li>\n<li data-start=\"851\" data-end=\"896\">\n<p data-start=\"853\" data-end=\"896\">18-inch chain weighs approx. <strong data-start=\"882\" data-end=\"896\">4.19 grams</strong></p>\n</li>\n</ul>\n<p data-start=\"903\" data-end=\"936\"><strong data-start=\"903\" data-end=\"934\">3) Twin Square Diamond Ring</strong></p>\n<ul data-start=\"937\" data-end=\"1142\">\n<li data-start=\"937\" data-end=\"969\">\n<p data-start=\"939\" data-end=\"969\">Made with <strong data-start=\"949\" data-end=\"967\">14K white gold</strong></p>\n</li>\n<li data-start=\"970\" data-end=\"1009\">\n<p data-start=\"972\" data-end=\"1009\">Set with natural <strong data-start=\"989\" data-end=\"1007\">round, baguette diamonds</strong></p>\n</li>\n<li data-start=\"1010\" data-end=\"1053\">\n<p data-start=\"1012\" data-end=\"1053\">Approx. <strong data-start=\"1020\" data-end=\"1038\">diamond weight</strong>: 1.37 carats</p>\n</li>\n<li data-start=\"1054\" data-end=\"1099\">\n<p data-start=\"1056\" data-end=\"1099\">Approx. <strong data-start=\"1064\" data-end=\"1074\">weight</strong>: 5.8 grams (at size 7)</p>\n</li>\n<li data-start=\"1054\" data-end=\"1099\">Size: 7 (Weight and price may vary by ring size)</li>\n</ul>\n<p data-start=\"1149\" data-end=\"1187\"><strong data-start=\"1149\" data-end=\"1185\">4) Diamond Earrings – FREE Bonus</strong></p>\n<ul data-start=\"1188\" data-end=\"1274\">\n<li data-start=\"1188\" data-end=\"1231\">\n<p data-start=\"1190\" data-end=\"1231\">Complimentary <strong data-start=\"1204\" data-end=\"1229\">diamond earrings</strong></p>\n</li>\n<li data-start=\"1232\" data-end=\"1274\">\n<p data-start=\"1234\" data-end=\"1274\">A perfect match for your complete look</p>\n</li>\n</ul>\n<p data-start=\"1281\" data-end=\"1308\"><strong data-start=\"1281\" data-end=\"1306\">5) Surprise Gifts</strong></p>\n<ul data-start=\"1309\" data-end=\"1403\">\n<li data-start=\"1309\" data-end=\"1403\">\n<p data-start=\"1311\" data-end=\"1403\">Receive a s<strong data-start=\"1319\" data-end=\"1351\">urprise gift</strong> from <strong data-start=\"1357\" data-end=\"1382\">Marchello the Jeweler</strong> with every purchase!</p>\n</li>\n</ul>\n<p data-start=\"1410\" data-end=\"1585\"><strong data-start=\"1410\" data-end=\"1585\">Make a bold statement with this complete diamond jewelry set — combining expert craftsmanship, fine gold, and natural diamonds. A perfect gift for yourself or a loved one.</strong></p>\n<p data-start=\"1410\" data-end=\"1585\"><em>Note: Prices include card processing fees. </em></p>",
    "price": 3678.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at15.33.00_d9b5835d.jpg?v=1755545690",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at15.33.00_3eac5d4a.jpg?v=1755545690",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at15.33.01_eeb48da5.jpg?v=1755545690",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at15.33.01_652f323f.jpg?v=1755545690",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at15.33.01_6c699d5a.jpg?v=1755545690"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14K Gold Cross Pendant, Diamond Ring & 10K Cuban Chain Set – 5 Piece Jewelry Set.",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-11T11:20:25.214Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-119",
    "name": "10K Yellow Gold Diamond Heart Earrings & Ring Set – 3-Piece Jewelry Collection | Marchello the Jeweler",
    "slug": "10k-yellow-gold-diamond-heart-earrings-ring-set-3-piece-jewelry-collection-marchello-the-jeweler",
    "description": "<p><iframe src=\"https://www.youtube.com/embed/6m3tEthYU54\" height=\"315\" width=\"560\"></iframe></p>\n<p data-end=\"839\" data-start=\"758\"><strong data-end=\"839\" data-start=\"758\">10K Yellow Gold Diamond Ring &amp; Earrings Set – 3-Piece Fine Jewelry Collection</strong></p>\n<p data-end=\"1106\" data-start=\"841\">Look radiant with this timeless 3-piece jewelry set, expertly crafted in <strong data-end=\"941\" data-start=\"914\">genuine 10K yellow gold</strong> and featuring <strong data-end=\"991\" data-start=\"956\">authentic, earth-mined diamonds</strong>. Elegant and enduring, this set is ideal for special occasions, meaningful gifts, or a luxurious personal upgrade.</p>\n<h3 data-end=\"1134\" data-start=\"1113\"><strong data-end=\"1134\" data-start=\"1117\">Set Includes:</strong></h3>\n<h4 data-end=\"1175\" data-start=\"1141\"><strong data-end=\"1175\" data-start=\"1146\">1) Diamond Heart Earrings</strong></h4>\n<ul>\n<li data-end=\"1207\" data-start=\"1179\">Crafted in 10K yellow gold</li>\n<li data-end=\"1247\" data-start=\"1210\">Set with <strong data-end=\"1245\" data-start=\"1219\">natural round diamonds</strong>\n</li>\n<li data-end=\"1297\" data-start=\"1250\">Total diamond weight: <strong data-end=\"1295\" data-start=\"1272\">approx. 0.75 carats</strong>\n</li>\n<li data-end=\"1320\" data-start=\"1300\">Width: <strong data-end=\"1318\" data-start=\"1307\">11.25mm</strong>\n</li>\n<li data-end=\"1368\" data-start=\"1323\">\n<strong data-end=\"1341\" data-start=\"1323\">Screw-on backs</strong> for comfort and security</li>\n</ul>\n<h4 data-end=\"1399\" data-start=\"1375\"><strong data-end=\"1399\" data-start=\"1380\">2) Diamond Ring</strong></h4>\n<ul>\n<li data-end=\"1448\" data-start=\"1403\">Made with <strong data-end=\"1446\" data-start=\"1413\">natural, earth-mined diamonds</strong>\n</li>\n<li data-end=\"1487\" data-start=\"1451\">Solid 10K yellow gold construction</li>\n<li data-end=\"1530\" data-start=\"1490\">Diamond weight: <strong data-end=\"1528\" data-start=\"1506\">approx. 1 ct</strong>\n</li>\n<li data-end=\"1593\" data-start=\"1533\">Gold weight: <strong data-end=\"1567\" data-start=\"1546\">approx. 2.5 grams</strong> (may vary by ring size)</li>\n<li>Size: 7</li>\n<li data-end=\"1619\" data-start=\"1596\">Top width: <strong data-end=\"1617\" data-start=\"1607\">6.80mm</strong>\n</li>\n</ul>\n<h4 data-end=\"1651\" data-start=\"1626\"><strong data-end=\"1651\" data-start=\"1631\">3) Surprise Gift</strong></h4>\n<ul>\n<li data-end=\"1738\" data-start=\"1655\">Receive a <strong data-end=\"1685\" data-start=\"1665\">special surprise</strong> from <strong data-end=\"1716\" data-start=\"1691\">Marchello the Jeweler</strong> with every purchase</li>\n<li data-end=\"1800\" data-start=\"1741\">A token of appreciation for choosing quality and elegance</li>\n</ul>\n<h3 data-end=\"1837\" data-start=\"1807\"><strong data-end=\"1837\" data-start=\"1811\">Why Customers Love It:</strong></h3>\n<ul>\n<li data-end=\"1880\" data-start=\"1841\">Crafted with <strong data-end=\"1878\" data-start=\"1854\">real 10K yellow gold</strong>\n</li>\n<li data-end=\"1933\" data-start=\"1883\">Set with <strong data-end=\"1914\" data-start=\"1892\">authentic diamonds</strong>, not lab-created</li>\n<li data-end=\"1977\" data-start=\"1936\">Exceptional value with 3 premium pieces</li>\n<li data-end=\"2043\" data-start=\"1980\">Perfect for <strong data-end=\"2019\" data-start=\"1992\">weddings, anniversaries</strong>, or <strong data-end=\"2041\" data-start=\"2024\">special gifts</strong>\n</li>\n<li data-end=\"2099\" data-start=\"2046\">Backed by the reputation of <strong data-end=\"2099\" data-start=\"2074\">Marchello the Jeweler</strong>\n</li>\n</ul>\n<p><strong data-end=\"2115\" data-start=\"2106\">Note:</strong> Prices include card processing fees. </p>",
    "price": 3105,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.59_fc80d672.jpg?v=1757362413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.58_5c5fde13.jpg?v=1757362413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.58_c3f972e5.jpg?v=1757362413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.58_343990cc.jpg?v=1757362413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.59_9d7118ee.jpg?v=1757362413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.59_207295fe.jpg?v=1757362413",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at15.58.58_11b4f2b7.jpg?v=1757362413"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "10K Yellow Gold Diamond Heart Earrings & Ring Set – 3-Piece Jewelry Collection | Marchello the Jeweler",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T10:20:25.214Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-120",
    "name": "White Gold & Diamond Butterfly Pendant, Earrings & Franco Chain – 4-Piece Jewelry Set",
    "slug": "white-gold-and-diamond-butterfly-pendant-earrings-white-gold-franco-chain",
    "description": "<p><br></p>\n<p><strong>10K White Gold and Diamond Butterfly Pendant &amp; Earrings + 10K White Gold Franco Chain – 4-Piece Luxury Jewelry Set</strong></p>\n<p>Elevate your style with this beautifully crafted 4-piece jewelry set, made from genuine 10K white gold and natural diamonds. This elegant collection includes a diamond butterfly pendant, matching diamond earrings, a white gold Franco chain, and an exclusive surprise gift from Marchello the Jeweler.</p>\n<h3><strong>Set Includes:</strong></h3>\n<h3><strong>1) Diamond Butterfly Earrings</strong></h3>\n<ul>\n<li>\n<p>Crafted with natural round diamonds set in 10K white gold</p>\n</li>\n<li>\n<p>Approximate total diamond weight: <strong>0.30 carats</strong></p>\n</li>\n<li>\n<p>Width: <strong>9.80mm</strong></p>\n</li>\n<li>\n<p>Features <strong>screw-on backs</strong> for added security and comfort</p>\n</li>\n</ul>\n<h3><strong>2) Diamond Butterfly Pendant</strong></h3>\n<ul>\n<li>\n<p>Made with natural, earth-mined diamonds in 10K white gold</p>\n</li>\n<li>\n<p>Approximate diamond weight: <strong>0.80 carats</strong></p>\n</li>\n<li>\n<p>Gold weight: <strong>approx. 4.1 grams</strong></p>\n</li>\n<li>\n<p>Width: <strong>23.73mm</strong></p>\n</li>\n<li>\n<p>A perfect match to the earrings for a complete butterfly-themed look</p>\n</li>\n</ul>\n<h3><strong>3) 10K White Gold Franco Chain</strong></h3>\n<ul>\n<li>\n<p>Solid 10K white gold Franco chain</p>\n</li>\n<li>\n<p>Choose your preferred length (weight approx. <strong>7.4 grams at 24 inches</strong>)</p>\n</li>\n<li>\n<p>Elegant, durable, and designed to complement the butterfly pendant</p>\n</li>\n</ul>\n<h3><strong>4) Surprise Gift</strong></h3>\n<ul>\n<li>\n<p>Receive an <strong>exclusive surprise gift</strong> from Marchello the Jeweler with your purchase</p>\n</li>\n<li>\n<p>A special thank-you for shopping with us</p>\n</li>\n</ul>\n<p><em><strong>Note:</strong> Price includes credit card processing fees.</em></p>",
    "price": 3218.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at14.55.15_eede987a.jpg?v=1757357789",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at14.55.15_660edd67.jpg?v=1757357789",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at14.55.16_dc385c19.jpg?v=1757357789",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at14.55.15_c5bf4b5c.jpg?v=1757357789",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at14.55.15_c8fe3d6b.jpg?v=1757357776",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-08at14.55.15_dc061dab.jpg?v=1757357776"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "White Gold & Diamond Butterfly Pendant, Earrings & Franco Chain – 4-Piece Jewelry Set",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T09:20:25.214Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-121",
    "name": "36mm Rolex Explorer Two-Tone Oyster Watch (2022, Papers, Model 124273)",
    "slug": "36mm-rolex-explorer-two-tone-oyster-watch-2022-papers-model-124273",
    "description": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/-BNnYUg9kRc\" frameborder=\"0\" allowfullscreen></iframe>\n<p data-end=\"623\" data-start=\"384\"><strong data-end=\"444\" data-start=\"384\">Preowned 36mm Rolex Explorer Watch – Model 124273 (2022)</strong><br data-end=\"447\" data-start=\"444\">Own a piece of timeless luxury with this authentic <strong data-end=\"516\" data-start=\"498\">Rolex Explorer</strong> featuring a sleek design and high-performance movement. Ideal for collectors and those with refined taste.</p>\n<p data-end=\"646\" data-start=\"625\"><strong data-end=\"644\" data-start=\"625\">Specifications:</strong></p>\n<ul data-end=\"914\" data-start=\"647\">\n<li data-end=\"670\" data-start=\"647\">\n<p data-end=\"670\" data-start=\"649\"><strong data-end=\"663\" data-start=\"649\">Case Size:</strong> 36mm</p>\n</li>\n<li data-end=\"699\" data-start=\"671\">\n<p data-end=\"699\" data-start=\"673\"><strong data-end=\"690\" data-start=\"673\">Model Number:</strong> 124273</p>\n</li>\n<li data-end=\"718\" data-start=\"700\">\n<p data-end=\"718\" data-start=\"702\"><strong data-end=\"711\" data-start=\"702\">Year:</strong> 2022</p>\n</li>\n<li data-end=\"742\" data-start=\"719\">\n<p data-end=\"742\" data-start=\"721\"><strong data-end=\"735\" data-start=\"721\">Condition:</strong> Mint</p>\n</li>\n<li data-end=\"788\" data-start=\"743\">\n<p data-end=\"788\" data-start=\"745\"><strong data-end=\"754\" data-start=\"745\">Dial:</strong> Black dial with Arabic numerals</p>\n</li>\n<li data-end=\"816\" data-start=\"789\">\n<p data-end=\"816\" data-start=\"791\"><strong data-end=\"801\" data-start=\"791\">Bezel:</strong> Smooth bezel</p>\n</li>\n<li data-end=\"844\" data-start=\"817\">\n<p data-end=\"844\" data-start=\"819\"><strong data-end=\"832\" data-start=\"819\">Movement:</strong> Automatic</p>\n</li>\n<li data-end=\"914\" data-start=\"845\">\n<p data-end=\"914\" data-start=\"847\"><strong data-end=\"860\" data-start=\"847\">Bracelet:</strong> Two-Tone Oyster (18k yellow gold &amp; stainless steel)</p>\n</li>\n</ul>\n<p data-end=\"945\" data-start=\"916\"><strong data-end=\"943\" data-start=\"916\">Included with Purchase:</strong></p>\n<ul data-end=\"1105\" data-start=\"946\">\n<li data-end=\"975\" data-start=\"946\">\n<p data-end=\"975\" data-start=\"948\">Original <strong data-end=\"973\" data-start=\"957\">Rolex Papers</strong></p>\n</li>\n<li data-end=\"1012\" data-start=\"976\">\n<p data-end=\"1012\" data-start=\"978\">Free <strong data-end=\"1010\" data-start=\"983\">Gold &amp; Diamond Earrings</strong></p>\n</li>\n<li data-end=\"1061\" data-start=\"1013\">\n<p data-end=\"1061\" data-start=\"1015\"><strong data-end=\"1032\" data-start=\"1015\">Surprise Gift</strong> from Marchello the Jeweler</p>\n</li>\n<li data-end=\"1105\" data-start=\"1062\">\n<p data-end=\"1105\" data-start=\"1064\"><strong data-end=\"1085\" data-start=\"1064\">Premium Watch Box</strong> with LED lighting</p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><em>Price includes card processing fee.</em></span></p>",
    "price": 11500,
    "sale_price": 9775,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at12.35.05_660d740f.jpg?v=1757090227",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at12.35.05_e3a2c780.jpg?v=1757090450",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at12.35.05_cef140fb.jpg?v=1757090450",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at12.35.05_d278999e.jpg?v=1757090450",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at12.35.05_f7746278.jpg?v=1757090204"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/-BNnYUg9kRc\" frameborder=\"0\" allowfullscreen></iframe>\n<p data-end=\"623\" data-start=\"384\"><strong data-end=\"444\" data-start=\"384\">Preowned 36mm Rolex Explorer Watch – Model 124273 (2022)</strong><br data-end=\"447\" data-start=\"444\">Own a piece of timeless luxury with this authentic <strong data-end=\"516\" data-start=\"498\">Rolex Explorer</strong> featuring a sleek design and high-performance movement. Ideal for collectors and those with refined taste.</p>\n<p data-end=\"646\" data-start=\"625\"><strong data-end=\"644\" data-start=\"625\">Specifications:</strong></p>\n<ul data-end=\"914\" data-start=\"647\">\n<li data-end=\"670\" data-start=\"647\">\n<p data-end=\"670\" data-start=\"649\"><strong data-end=\"663\" data-start=\"649\">Case Size:</strong> 36mm</p>\n</li>\n<li data-end=\"699\" data-start=\"671\">\n<p data-end=\"699\" data-start=\"673\"><strong data-end=\"690\" data-start=\"673\">Model Number:</strong> 124273</p>\n</li>\n<li data-end=\"718\" data-start=\"700\">\n<p data-end=\"718\" data-start=\"702\"><strong data-end=\"711\" data-start=\"702\">Year:</strong> 2022</p>\n</li>\n<li data-end=\"742\" data-start=\"719\">\n<p data-end=\"742\" data-start=\"721\"><strong data-end=\"735\" data-start=\"721\">Condition:</strong> Mint</p>\n</li>\n<li data-end=\"788\" data-start=\"743\">\n<p data-end=\"788\" data-start=\"745\"><strong data-end=\"754\" data-start=\"745\">Dial:</strong> Black dial with Arabic numerals</p>\n</li>\n<li data-end=\"816\" data-start=\"789\">\n<p data-end=\"816\" data-start=\"791\"><strong data-end=\"801\" data-start=\"791\">Bezel:</strong> Smooth bezel</p>\n</li>\n<li data-end=\"844\" data-start=\"817\">\n<p data-end=\"844\" data-start=\"819\"><strong data-end=\"832\" data-start=\"819\">Movement:</strong> Automatic</p>\n</li>\n<li data-end=\"914\" data-start=\"845\">\n<p data-end=\"914\" data-start=\"847\"><strong data-end=\"860\" data-start=\"847\">Bracelet:</strong> Two-Tone Oyster (18k yellow gold &amp; stainless steel)</p>\n</li>\n</ul>\n<p data-end=\"945\" data-start=\"916\"><strong data-end=\"943\" data-start=\"916\">Included with Purchase:</strong></p>\n<ul data-end=\"1105\" data-start=\"946\">\n<li data-end=\"975\" data-start=\"946\">\n<p data-end=\"975\" data-start=\"948\">Original <strong data-end=\"973\" data-start=\"957\">Rolex Papers</strong></p>\n</li>\n<li data-end=\"1012\" data-start=\"976\">\n<p data-end=\"1012\" data-start=\"978\">Free <strong data-end=\"1010\" data-start=\"983\">Gold &amp; Diamond Earrings</strong></p>\n</li>\n<li data-end=\"1061\" data-start=\"1013\">\n<p data-end=\"1061\" data-start=\"1015\"><strong data-end=\"1032\" data-start=\"1015\">Surprise Gift</strong> from Marchello the Jeweler</p>\n</li>\n<li data-end=\"1105\" data-start=\"1062\">\n<p data-end=\"1105\" data-start=\"1064\"><strong data-end=\"1085\" data-start=\"1064\">Premium Watch Box</strong> with LED lighting</p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><em>Price includes card processing fee.</em></span></p>",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-11T08:20:25.214Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-122",
    "name": "31mm Rolex Datejust Watch with Two-Tone Jubilee Band",
    "slug": "31mm-rolex-datejust-watch-with-two-tone-jubilee-band-copy",
    "description": "<p data-start=\"198\" data-end=\"545\">Experience timeless elegance with this <strong data-start=\"237\" data-end=\"269\">preowned 31mm Rolex Datejust. </strong>A symbol of luxury and performance, this iconic timepiece features a stunning <strong data-start=\"396\" data-end=\"414\">champagne dial</strong>, <strong data-start=\"416\" data-end=\"440\">classic fluted bezel</strong>, and a sophisticated <strong data-start=\"462\" data-end=\"491\">two-tone Jubilee bracelet</strong> crafted from <strong data-start=\"505\" data-end=\"544\">18k yellow gold and stainless steel</strong>.</p>\n<h4 data-start=\"547\" data-end=\"569\"><strong data-start=\"552\" data-end=\"569\">Key Features:</strong></h4>\n<ul data-start=\"571\" data-end=\"761\">\n<li data-start=\"571\" data-end=\"594\">\n<p data-start=\"573\" data-end=\"594\"><strong data-start=\"573\" data-end=\"587\">Case Size:</strong> 31mm</p>\n</li>\n<li data-start=\"619\" data-end=\"642\">\n<p data-start=\"621\" data-end=\"642\"><strong data-start=\"621\" data-end=\"630\">Dial:</strong> Champagne</p>\n</li>\n<li data-start=\"643\" data-end=\"664\">\n<p data-start=\"645\" data-end=\"664\"><strong data-start=\"645\" data-end=\"655\">Bezel:</strong> Fluted</p>\n</li>\n<li data-start=\"665\" data-end=\"692\">\n<p data-start=\"667\" data-end=\"692\"><strong data-start=\"667\" data-end=\"680\">Movement:</strong> Automatic</p>\n</li>\n<li data-start=\"693\" data-end=\"761\">\n<p data-start=\"695\" data-end=\"761\"><strong data-start=\"695\" data-end=\"708\">Bracelet:</strong> Two-tone Jubilee (18k Yellow Gold &amp; Stainless Steel)</p>\n</li>\n</ul>\n<h4 data-start=\"763\" data-end=\"788\"><strong data-start=\"768\" data-end=\"788\">What’s Included:</strong></h4>\n<ul data-start=\"790\" data-end=\"912\">\n<li data-start=\"790\" data-end=\"829\">\n<p data-start=\"792\" data-end=\"829\">💎 <strong data-start=\"795\" data-end=\"827\">Free Gold &amp; Diamond Earrings</strong></p>\n</li>\n<li data-start=\"830\" data-end=\"881\">\n<p data-start=\"832\" data-end=\"881\">🎁 <strong data-start=\"835\" data-end=\"879\">Surprise Gift from Marchello the Jeweler</strong></p>\n</li>\n<li data-start=\"882\" data-end=\"912\">\n<p data-start=\"884\" data-end=\"912\">💼 <strong data-start=\"887\" data-end=\"912\">Premium LED Watch Box</strong></p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>",
    "price": 9315,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at18.05.42_7a30f403.jpg?v=1757110162",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-05_at_18.05.42_cd9795f8.jpg?v=1757110162",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at18.05.42_2d978593.jpg?v=1757110162",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-05_at_18.05.42_6037d6da.jpg?v=1757110130"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "<p data-start=\"198\" data-end=\"545\">Experience timeless elegance with this <strong data-start=\"237\" data-end=\"269\">preowned 31mm Rolex Datejust. </strong>A symbol of luxury and performance, this iconic timepiece features a stunning <strong data-start=\"396\" data-end=\"414\">champagne dial</strong>, <strong data-start=\"416\" data-end=\"440\">classic fluted bezel</strong>, and a sophisticated <strong data-start=\"462\" data-end=\"491\">two-tone Jubilee bracelet</strong> crafted from <strong data-start=\"505\" data-end=\"544\">18k yellow gold and stainless steel</strong>.</p>\n<h4 data-start=\"547\" data-end=\"569\"><strong data-start=\"552\" data-end=\"569\">Key Features:</strong></h4>\n<ul data-start=\"571\" data-end=\"761\">\n<li data-start=\"571\" data-end=\"594\">\n<p data-start=\"573\" data-end=\"594\"><strong data-start=\"573\" data-end=\"587\">Case Size:</strong> 31mm</p>\n</li>\n<li data-start=\"619\" data-end=\"642\">\n<p data-start=\"621\" data-end=\"642\"><strong data-start=\"621\" data-end=\"630\">Dial:</strong> Champagne</p>\n</li>\n<li data-start=\"643\" data-end=\"664\">\n<p data-start=\"645\" data-end=\"664\"><strong data-start=\"645\" data-end=\"655\">Bezel:</strong> Fluted</p>\n</li>\n<li data-start=\"665\" data-end=\"692\">\n<p data-start=\"667\" data-end=\"692\"><strong data-start=\"667\" data-end=\"680\">Movement:</strong> Automatic</p>\n</li>\n<li data-start=\"693\" data-end=\"761\">\n<p data-start=\"695\" data-end=\"761\"><strong data-start=\"695\" data-end=\"708\">Bracelet:</strong> Two-tone Jubilee (18k Yellow Gold &amp; Stainless Steel)</p>\n</li>\n</ul>\n<h4 data-start=\"763\" data-end=\"788\"><strong data-start=\"768\" data-end=\"788\">What’s Included:</strong></h4>\n<ul data-start=\"790\" data-end=\"912\">\n<li data-start=\"790\" data-end=\"829\">\n<p data-start=\"792\" data-end=\"829\">💎 <strong data-start=\"795\" data-end=\"827\">Free Gold &amp; Diamond Earrings</strong></p>\n</li>\n<li data-start=\"830\" data-end=\"881\">\n<p data-start=\"832\" data-end=\"881\">🎁 <strong data-start=\"835\" data-end=\"879\">Surprise Gift from Marchello the Jeweler</strong></p>\n</li>\n<li data-start=\"882\" data-end=\"912\">\n<p data-start=\"884\" data-end=\"912\">💼 <strong data-start=\"887\" data-end=\"912\">Premium LED Watch Box</strong></p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T07:20:25.214Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-123",
    "name": "31mm Rolex Datejust Watch with Two-Tone Jubilee Band",
    "slug": "31mm-rolex-datejust-watch-with-two-tone-jubilee-band",
    "description": "<p data-end=\"593\" data-start=\"216\">Discover this <strong data-end=\"268\" data-start=\"230\">preowned 31mm Rolex Datejust watch</strong> in <strong data-end=\"290\" data-start=\"272\">mint condition</strong>, featuring a luxurious <strong data-end=\"343\" data-start=\"314\">two-tone jubilee bracelet</strong> made of <strong data-end=\"391\" data-start=\"352\">18k yellow gold and stainless steel</strong>. This iconic timepiece showcases an <strong data-end=\"475\" data-start=\"428\">anniversary white dial with Arabic numerals</strong>, a classic <strong data-end=\"503\" data-start=\"487\">fluted bezel</strong>, and reliable <strong data-end=\"540\" data-start=\"518\">automatic movement</strong>, making it a perfect blend of style and performance.</p>\n<h3 data-end=\"614\" data-start=\"595\">Specifications:</h3>\n<ul data-end=\"840\" data-start=\"615\">\n<li data-end=\"638\" data-start=\"615\">\n<p data-end=\"638\" data-start=\"617\"><strong data-end=\"631\" data-start=\"617\">Case Size:</strong> 31mm</p>\n</li>\n<li data-end=\"662\" data-start=\"639\">\n<p data-end=\"662\" data-start=\"641\"><strong data-end=\"655\" data-start=\"641\">Condition:</strong> Mint</p>\n</li>\n<li data-end=\"715\" data-start=\"663\">\n<p data-end=\"715\" data-start=\"665\"><strong data-end=\"674\" data-start=\"665\">Dial:</strong> Anniversary white with Arabic numerals</p>\n</li>\n<li data-end=\"743\" data-start=\"716\">\n<p data-end=\"743\" data-start=\"718\"><strong data-end=\"728\" data-start=\"718\">Bezel:</strong> Fluted bezel</p>\n</li>\n<li data-end=\"771\" data-start=\"744\">\n<p data-end=\"771\" data-start=\"746\"><strong data-end=\"759\" data-start=\"746\">Movement:</strong> Automatic</p>\n</li>\n<li data-end=\"840\" data-start=\"772\">\n<p data-end=\"840\" data-start=\"774\"><strong data-end=\"787\" data-start=\"774\">Bracelet:</strong> Two-tone jubilee (18k yellow gold &amp; stainless steel)</p>\n</li>\n</ul>\n<h3 data-end=\"862\" data-start=\"842\">What’s Included:</h3>\n<ul data-end=\"976\" data-start=\"863\">\n<li data-end=\"899\" data-start=\"863\">\n<p data-end=\"899\" data-start=\"865\">Free <strong data-end=\"897\" data-start=\"870\">gold &amp; diamond earrings</strong></p>\n</li>\n<li data-end=\"948\" data-start=\"900\">\n<p data-end=\"948\" data-start=\"902\">Surprise gift from <strong data-end=\"946\" data-start=\"921\">Marchello the Jeweler</strong></p>\n</li>\n<li data-end=\"976\" data-start=\"949\">\n<p data-end=\"976\" data-start=\"951\">Premium <strong data-end=\"976\" data-start=\"959\">LED watch box</strong></p>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>",
    "price": 9315,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at17.48.55_df7e2c54.jpg?v=1757109122",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at17.48.55_ed5a0e0d.jpg?v=1757109122",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at17.48.56_5806eed7.jpg?v=1757109122",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-09-05at17.48.55_0e778c06.jpg?v=1757109122"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T06:20:25.214Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-124",
    "name": "40mm Rolex Milgauss Watch",
    "slug": "40mm-rolex-milgauss-watch-copy",
    "description": "<ul></ul>\n<ul>\n<li><span>Preowned 40mm Rolex Milgauss.</span></li>\n<li><span>Super mint condition.</span></li>\n<li>Guaranteed authentic.</li>\n<li>Stainless steel.</li>\n<li>Dial: black, with glow in the white hour marks.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>\n<p><span><em>Price includes card processing fee.</em></span></p>\n<p> </p>",
    "price": 9786.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_429566f5-a48b-4651-bf4c-efb86067a28f.jpg?v=1665180337",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_d9e22960-835b-45d3-94cf-fc1ca6236aee.jpg?v=1665180337",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_d4406717-6bb0-47a7-babb-e9e59e752208.jpg?v=1665180337",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_3b4dc833-4503-405e-bccc-2f6cfdae0c3b.jpg?v=1665180337",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_6d142003-f8f8-4f40-b54b-1ea77aa07d29.jpg?v=1665180229",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_1cba9ae4-7022-43b6-b331-186025b21496.heic?v=1665180213"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-11T05:20:25.215Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-125",
    "name": "14k Yellow Gold Men's Diamond Ring | 2.50ct Round Natural Diamonds | Free Earrings & Gift",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-with-round-diamonds-copy-1",
    "description": "<p data-start=\"392\" data-end=\"761\"><strong data-start=\"392\" data-end=\"422\">Bold. Luxurious. Timeless.</strong><br data-start=\"422\" data-end=\"425\">Crafted from solid <strong data-start=\"444\" data-end=\"463\">14k yellow gold</strong>, this <strong data-start=\"470\" data-end=\"492\">men’s diamond ring</strong> showcases approximately <strong data-start=\"517\" data-end=\"562\">2.50 carats of natural round-cut diamonds</strong>, making a powerful statement of style and success. With a substantial weight of <strong data-start=\"643\" data-end=\"657\">16.3 grams</strong> (depending on size) and a <strong data-start=\"684\" data-end=\"710\">bold 19.96mm top width</strong>, this ring is made for those who demand attention.</p>\n<p data-start=\"763\" data-end=\"893\">Whether you're celebrating a milestone or elevating your everyday look, this ring delivers premium craftsmanship and brilliance.</p>\n<p data-start=\"895\" data-end=\"1035\">🎁 <strong data-start=\"898\" data-end=\"914\">Bonus Offer:</strong><br data-start=\"914\" data-end=\"917\">Every purchase comes with a <strong data-start=\"945\" data-end=\"985\">FREE pair of gold &amp; diamond earrings</strong> and a <strong data-start=\"992\" data-end=\"1009\">surprise gift </strong>because you deserve more.</p>",
    "price": 3680,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.47.47PM.jpg?v=1749232128",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.47.47PM_1.jpg?v=1749232128",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.47.47PM_2.jpg?v=1749232128",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.47.47PM_3.jpg?v=1749232128"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "14k Yellow Gold Men's Diamond Ring | 2.50ct Round Natural Diamonds | Free Earrings & Gift",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T04:20:25.215Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-126",
    "name": "14k Yellow Gold Cross Pendant & Diamond Tennis Chain | 15.76ct Natural Diamonds | Free Earrings",
    "slug": "14k-yellow-gold-cross-pendant-diamond-tennis-chain-15-76ct-natural-diamonds-free-earrings",
    "description": "<p data-start=\"344\" data-end=\"632\"><strong data-start=\"344\" data-end=\"390\">Make a bold statement of faith and luxury.</strong><br data-start=\"390\" data-end=\"393\">This stunning set includes a handcrafted <strong data-start=\"434\" data-end=\"467\">14k yellow gold cross pendant</strong> featuring approximately <strong data-start=\"492\" data-end=\"537\">3.26 carats of earth-mined round diamonds</strong> and a matching <strong data-start=\"553\" data-end=\"578\">14k gold tennis chain</strong> adorned with <strong data-start=\"592\" data-end=\"631\">approx. 12.50ct of natural diamonds</strong>.</p>\n<ul data-start=\"634\" data-end=\"971\">\n<li data-start=\"634\" data-end=\"795\">\n<p data-start=\"636\" data-end=\"656\"><strong data-start=\"636\" data-end=\"656\">Pendant Details:</strong></p>\n<ul data-start=\"659\" data-end=\"795\">\n<li data-start=\"659\" data-end=\"685\">\n<p data-start=\"661\" data-end=\"685\">Metal: 14k Yellow Gold</p>\n</li>\n<li data-start=\"688\" data-end=\"722\">\n<p data-start=\"690\" data-end=\"722\">Diamond Weight: Approx. 3.26ct</p>\n</li>\n<li data-start=\"725\" data-end=\"765\">\n<p data-start=\"727\" data-end=\"765\">Height (with bail): Approx. 2 inches</p>\n</li>\n<li data-start=\"768\" data-end=\"795\">\n<p data-start=\"770\" data-end=\"795\">Weight: Approx. 6.4 grams.</p>\n</li>\n</ul>\n</li>\n<li data-start=\"797\" data-end=\"971\">\n<p data-start=\"799\" data-end=\"824\"><strong data-start=\"799\" data-end=\"824\">Tennis Chain Details:</strong></p>\n<ul data-start=\"827\" data-end=\"971\">\n<li data-start=\"827\" data-end=\"853\">\n<p data-start=\"829\" data-end=\"853\">Metal: 14k Yellow Gold</p>\n</li>\n<li data-start=\"856\" data-end=\"891\">\n<p data-start=\"858\" data-end=\"891\">Diamond Weight: Approx. 12.50ct <span>Actual diamond weight may vary.</span></p>\n</li>\n<li data-start=\"894\" data-end=\"916\">\n<p data-start=\"896\" data-end=\"916\">Width: Approx. 4mm</p>\n</li>\n<li data-start=\"919\" data-end=\"940\">\n<p data-start=\"921\" data-end=\"940\">Length: 16 inches</p>\n</li>\n<li data-start=\"943\" data-end=\"971\">\n<p data-start=\"945\" data-end=\"971\">Weight: Approx. 27.8 grams </p>\n</li>\n</ul>\n</li>\n</ul>\n<p data-start=\"973\" data-end=\"1084\">💎 <strong data-start=\"976\" data-end=\"991\">Bonus Gift:</strong> Includes a <strong data-start=\"1003\" data-end=\"1043\">FREE pair of gold &amp; diamond earrings</strong> – an added touch of luxury just for you.</p>\n<p data-start=\"1086\" data-end=\"1190\">Perfect for elevating your style or giving a meaningful gift that shines with elegance and significance.</p>\n<p data-start=\"1086\" data-end=\"1190\"><em>Price includes card processing fee.</em></p>",
    "price": 10810,
    "sale_price": 9189,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at16.58.41_fbe37021.jpg?v=1755550945",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at16.58.42_dfb26488.jpg?v=1755550945",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-18at16.58.42_3e365111.jpg?v=1755550945"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Yellow Gold Cross Pendant & Diamond Tennis Chain | 15.76ct Natural Diamonds | Free Earrings",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T03:20:25.215Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-127",
    "name": "Yellow Gold and Diamond Jesus Head Pendant approx. 2.60ct + Bracelet approx. 6.90ct | 5 Piece Jewelry Set",
    "slug": "yellow-gold-and-diamond-jesus-head-pendant-approx-2-60ct-bracelet-approx-6-90ct-5-piece-jewelry-set",
    "description": "<iframe width=\"315\" height=\"560\" src=\"https://www.youtube.com/embed/_AQ2fX53Gyk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen>\n</iframe>\n<h3 data-start=\"459\" data-end=\"485\">Look stunning with this luxurious 5-piece diamond jewelry set. This exclusive collection includes:</h3>\n<p data-start=\"586\" data-end=\"810\"><strong data-start=\"586\" data-end=\"630\">1) Yellow Gold and Diamond Jesus Pendant</strong><br data-start=\"630\" data-end=\"633\">– Crafted in 10k yellow gold with round natural diamonds<br data-start=\"689\" data-end=\"692\">– Approx. diamond weight: 2.60ct<br data-start=\"724\" data-end=\"727\">– Approx. item weight: 16.1 grams<br data-start=\"760\" data-end=\"763\">– Pendant height (including bail): 2.2 inches</p>\n<p data-start=\"812\" data-end=\"963\"><strong data-start=\"812\" data-end=\"835\">2) Cuban Link Chain</strong><br data-start=\"835\" data-end=\"838\">– 10k yellow gold, approx. 2mm wide<br data-start=\"873\" data-end=\"876\">– Approx. chain weight: 4.3 grams at 18 inches<br data-start=\"922\" data-end=\"925\">– Choose your preferred chain length</p>\n<p data-start=\"965\" data-end=\"1274\"><strong data-start=\"965\" data-end=\"988\">3) Diamond Bracelet</strong><br data-start=\"988\" data-end=\"991\">– 10k yellow gold with natural, earth-mined round diamonds<br data-start=\"1049\" data-end=\"1052\">– Approx. diamond weight: 6.90ct<br data-start=\"1084\" data-end=\"1087\">– Approx. bracelet weight: 45.1 grams at 8 inches<br data-start=\"1136\" data-end=\"1139\">– Size: 7 inches (price and weight vary by length)<br data-start=\"1204\" data-end=\"1207\">– Stone color customization available (e.g., multicolored stones)</p>\n<p data-start=\"1276\" data-end=\"1381\"><strong data-start=\"1276\" data-end=\"1320\">4) Complimentary Gold &amp; Diamond Earrings</strong><br data-start=\"1320\" data-end=\"1323\">– Complimentary small diamond and gold earrings included</p>\n<p data-start=\"1383\" data-end=\"1462\"><strong data-start=\"1383\" data-end=\"1421\">5) Gift from Marchello the Jeweler</strong><br data-start=\"1421\" data-end=\"1424\">– Comes with a special surprise gift</p>\n<p data-start=\"1383\" data-end=\"1462\">Enjoy long-lasting brilliance, bold style, and premium craftsmanship with this elegant jewelry set.</p>\n<p><span><em>Price includes card processing fee.</em></span></p>",
    "price": 12900,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-27at12.41.27_8f2e804c.jpg?v=1756315525",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-27at12.41.27_f320a4ae.jpg?v=1756312978",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-27at12.41.26_331c3317.jpg?v=1756312978",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-27at12.41.27_e9a71f5a.jpg?v=1756312978",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-27at12.41.27_3a3c05f0.jpg?v=1756312978"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "Yellow Gold and Diamond Jesus Head Pendant approx. 2.60ct + Bracelet approx. 6.90ct | 5 Piece Jewelry Set",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-11T02:20:25.215Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-128",
    "name": "Yellow Gold & Diamond Ring and Earrings Set – Luxury Jewelry | Marchello the Jeweler (choose your color)",
    "slug": "yellow-gold-and-diamond-ring-and-earrings",
    "description": "<p data-end=\"1002\" data-start=\"922\"><strong data-end=\"1002\" data-start=\"922\">10K Yellow. Rose or White Gold and Diamond Ring &amp; Earrings Set – 4-Piece Jewelry Collection</strong></p>\n<p data-end=\"1245\" data-start=\"1004\">Look radiant with this timeless 4-piece jewelry set, crafted in genuine 10K yellow, rose or white  gold and featuring natural, earth-mined diamonds. Designed for elegance and long-lasting brilliance, this luxury set is a perfect gift or personal indulgence.</p>\n<p data-end=\"1269\" data-start=\"1252\"><strong data-end=\"1269\" data-start=\"1252\">Set Includes:</strong></p>\n<p data-end=\"1301\" data-start=\"1271\"><strong data-end=\"1299\" data-start=\"1271\">1) Diamond  Earrings</strong></p>\n<ul data-end=\"1449\" data-start=\"1302\">\n<li data-end=\"1347\" data-start=\"1302\">\n<p data-end=\"1347\" data-start=\"1304\">Natural round diamonds in 10K yellow, rose or white gold</p>\n</li>\n<li data-end=\"1388\" data-start=\"1348\">\n<p data-end=\"1388\" data-start=\"1350\">Approx. total diamond weight: 0.50ct</p>\n</li>\n<li data-end=\"1407\" data-start=\"1389\">\n<p data-end=\"1407\" data-start=\"1391\">Width: 11.05mm</p>\n</li>\n<li data-end=\"1449\" data-start=\"1408\">\n<p data-end=\"1449\" data-start=\"1410\">Screw-on backs for security and comfort</p>\n</li>\n</ul>\n<p data-end=\"1472\" data-start=\"1451\"><strong data-end=\"1470\" data-start=\"1451\">2) Diamond Ring</strong></p>\n<ul data-end=\"1632\" data-start=\"1473\">\n<li data-end=\"1524\" data-start=\"1473\">\n<p data-end=\"1524\" data-start=\"1475\">Natural earth-mined diamonds in 10K yellow, rose or white gold</p>\n</li>\n<li data-end=\"1559\" data-start=\"1525\">\n<p data-end=\"1559\" data-start=\"1527\">Approx. diamond weight: 0.94ct</p>\n</li>\n<li data-end=\"1611\" data-start=\"1560\">\n<p data-end=\"1611\" data-start=\"1562\">Gold weight: approx. 3.5 grams (varies by size)</p>\n</li>\n<li data-end=\"1632\" data-start=\"1612\">\n<p data-end=\"1632\" data-start=\"1614\">Top width: 16.02mm</p>\n</li>\n<li data-end=\"1632\" data-start=\"1612\">Size: 7.</li>\n</ul>\n<p data-end=\"1657\" data-start=\"1634\"><strong data-end=\"1655\" data-start=\"1634\">3) Bonus Earrings</strong></p>\n<ul data-end=\"1757\" data-start=\"1658\">\n<li data-end=\"1707\" data-start=\"1658\">\n<p data-end=\"1707\" data-start=\"1660\">Complimentary small diamond and gold earrings</p>\n</li>\n<li data-end=\"1757\" data-start=\"1708\">\n<p data-end=\"1757\" data-start=\"1710\">Adds extra sparkle and versatility to your look</p>\n</li>\n</ul>\n<p data-end=\"1781\" data-start=\"1759\"><strong data-end=\"1779\" data-start=\"1759\">4) Surprise Gift</strong></p>\n<ul data-end=\"1859\" data-start=\"1782\">\n<li data-end=\"1859\" data-start=\"1782\">\n<p data-end=\"1859\" data-start=\"1784\">Receive an exclusive surprise from Marchello the Jeweler with your purchase. </p>\n</li>\n</ul>",
    "price": 2530,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at18.22.46_f7f069e0.jpg?v=1756160665",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-19_at_14.32.56_6acf9c39.jpg?v=1758313701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-19_at_16.27.25_682cefda.jpg?v=1758317520",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-19_at_16.25.41_707dc282.jpg?v=1758313701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at18.22.46_a050379f.jpg?v=1758313701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at18.22.47_9b0214ce.jpg?v=1758313701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at18.22.46_b462c4bb.jpg?v=1758313701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at18.22.47_0ad9af85.jpg?v=1758313701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-09-19_at_16.25.40_3b70b3ea.jpg?v=1758313701"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Yellow Gold & Diamond Ring and Earrings Set – Luxury Jewelry | Marchello the Jeweler (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T01:20:25.215Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-129",
    "name": "Rolex Datejust 41mm Model 126300 - Wimbledon Dial, Stainless Steel Jubilee Bracelet (2024, papers)",
    "slug": "rolex-datejust-41mm-model-126300-wimbledon-dial-stainless-steel-oyster-bracelet-2022-mint-condition-copy",
    "description": "<p data-end=\"798\" data-start=\"726\"><strong data-end=\"798\" data-start=\"726\">Rolex Datejust 41mm Stainless Steel - Model #126300 (Wimbledon Dial)</strong></p>\n<p data-end=\"1100\" data-start=\"800\">This stunning <strong data-end=\"853\" data-start=\"814\">pre-owned Rolex Datejust 41mm watch</strong> (Model #126300) features the iconic <strong data-end=\"908\" data-start=\"890\">Wimbledon dial</strong>, a smooth bezel, and a classic <strong data-end=\"975\" data-start=\"940\">stainless steel Jubilee bracelet</strong>. Manufactured in <strong data-end=\"1001\" data-start=\"993\">2022</strong>, this timepiece is in <strong data-end=\"1042\" data-start=\"1024\">mint condition.</strong></p>\n<ul>\n<li data-end=\"1139\" data-start=\"1104\">\n<strong data-end=\"1114\" data-start=\"1104\">Model:</strong> Rolex Datejust #126300</li>\n<li data-end=\"1163\" data-start=\"1142\">\n<strong data-end=\"1156\" data-start=\"1142\">Case Size:</strong> 41mm</li>\n<li data-end=\"1198\" data-start=\"1166\">\n<strong data-end=\"1180\" data-start=\"1166\">Condition:</strong> Pre-owned, Mint</li>\n<li data-end=\"1217\" data-start=\"1201\">\n<strong data-end=\"1210\" data-start=\"1201\">Year:</strong> 2024</li>\n<li data-end=\"1286\" data-start=\"1220\">\n<strong data-end=\"1229\" data-start=\"1220\">Dial:</strong> Wimbledon (green Roman numerals with slate background)</li>\n<li data-end=\"1327\" data-start=\"1289\">\n<strong data-end=\"1302\" data-start=\"1289\">Bracelet:</strong> Stainless steel Oyster</li>\n<li data-end=\"1349\" data-start=\"1330\">\n<strong data-end=\"1340\" data-start=\"1330\">Bezel:</strong> Smooth</li>\n<li data-end=\"1446\" data-start=\"1352\">\n<strong data-end=\"1369\" data-start=\"1352\">Box &amp; Papers:</strong> Includes official papers and premium Marchello the Jeweler LED display box</li>\n<li data-end=\"1523\" data-start=\"1449\">\n<strong data-end=\"1460\" data-start=\"1449\">Extras:</strong> Free gold &amp; diamond earrings + a surprise gift with purchase</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 14375,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-08-25_at_16.44.48_1b2146a4.jpg?v=1756155098",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.41.45_b0364203.jpg?v=1756155098",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.41.45_3bc97370.jpg?v=1756155098",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.41.45_73e816f0.jpg?v=1756155098",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.41.45_71456bd4.jpg?v=1756155098",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.41.45_ea8aaa1d.jpg?v=1756155098"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-11T00:20:25.215Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-130",
    "name": "Preowned 40mm Rolex GMT-Master II \"Sprite\" Watch – Green & Black Bezel – Model #126720VTNR",
    "slug": "preowned-40mm-rolex-gmt-master-ii-sprite-watch-green-black-bezel-model-126720vtnr-papers-copy",
    "description": "<ul>\n<li data-start=\"383\" data-end=\"491\"><strong data-start=\"383\" data-end=\"436\">Preowned 40mm Rolex GMT Master II \"Sprite\" Watch.</strong></li>\n<li data-start=\"383\" data-end=\"491\">Full factory.</li>\n<li data-start=\"383\" data-end=\"491\">Stainless steel.</li>\n<li data-start=\"383\" data-end=\"491\">Bracelet: oyster.</li>\n<li data-start=\"493\" data-end=\"597\">Dial: black with luminous dot hour markers.<br>\n</li>\n<li data-start=\"493\" data-end=\"597\">Bezel: green &amp; black Cerachrom \"Sprite\" (left-hand crown).</li>\n<li data-start=\"599\" data-end=\"636\">Automatic movement.</li>\n<li data-start=\"599\" data-end=\"636\">Mint condition.</li>\n<li data-start=\"638\" data-end=\"766\">Model # 126720VTNR.<br>\n</li>\n<li data-start=\"638\" data-end=\"766\">Comes with free gold &amp; diamond earrings.</li>\n<li data-start=\"638\" data-end=\"766\">Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p data-start=\"768\" data-end=\"1088\"><strong data-start=\"768\" data-end=\"783\">Disclaimer:</strong> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</p>",
    "price": 18055,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.08.36_b87bebdd.jpg?v=1756152622",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.08.36_7ff226e2.jpg?v=1756152622",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.08.36_0a1e9926.jpg?v=1756152622",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at16.08.36_2a701671.jpg?v=1756152622"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-10T23:20:25.215Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-131",
    "name": "Preowned 40mm Rolex GMT-Master II \"Sprite\" Watch – Green & Black Bezel – Model #126720VTNR (PAPERS)",
    "slug": "preowned-40mm-rolex-gmt-master-ii-sprite-watch-green-black-bezel-model-126720vtnr-copy",
    "description": "<ul>\n<li data-start=\"383\" data-end=\"491\"><strong data-start=\"383\" data-end=\"436\">Preowned 40mm Rolex GMT Master II \"Sprite\" Watch.</strong></li>\n<li data-start=\"383\" data-end=\"491\">Full factory.</li>\n<li data-start=\"383\" data-end=\"491\">Stainless steel.</li>\n<li data-start=\"383\" data-end=\"491\">Bracelet: jubilee.</li>\n<li data-start=\"493\" data-end=\"597\">Dial: black with luminous dot hour markers.<br>\n</li>\n<li data-start=\"493\" data-end=\"597\">Bezel: green &amp; black Cerachrom \"Sprite\" (left-hand crown).</li>\n<li data-start=\"599\" data-end=\"636\">Automatic movement.</li>\n<li data-start=\"599\" data-end=\"636\">Mint condition.</li>\n<li data-start=\"638\" data-end=\"766\">Model # 126720VTNR.</li>\n<li data-start=\"638\" data-end=\"766\">Year: 2024.</li>\n<li data-start=\"638\" data-end=\"766\">Comes with free gold &amp; diamond earrings.</li>\n<li data-start=\"638\" data-end=\"766\">Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p data-start=\"768\" data-end=\"1088\"><strong data-start=\"768\" data-end=\"783\">Disclaimer:</strong> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</p>",
    "price": 20470,
    "sale_price": 17400,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.57_c65ad8db.jpg?v=1756153099",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.56_29fb0dcb.jpg?v=1756153252",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.57_38f3149c.jpg?v=1756153252",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.57_9350372d.jpg?v=1756153252",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.57_1bf93c91.jpg?v=1756153252",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.57_29f1b8eb.jpg?v=1756153252",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-25at15.46.56_8b13e9f0.jpg?v=1756153252"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T22:20:25.215Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-132",
    "name": "14k gold and diamond Ring (choose your color)",
    "slug": "14k-gold-and-diamond-ring-choose-your-color-copy",
    "description": "<div id=\"shopify-section-product-template\" class=\"shopify-section\">\n<div class=\"product-template__container page-width\" id=\"ProductSection-product-template\" data-section-id=\"product-template\" data-section-type=\"product\" data-enable-history-state=\"true\" data-ajax-enabled=\"false\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k white, rose or yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.30ct.-1.33ct.</li>\n<li>Approximate weight: <span> 4.03grams.- 4.24 grams.</span>\n</li>\n<li>\n<span>Approximate top width: 9.38mm.</span><br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n<li><span><em>Price includes card processing fee.</em></span></li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 1700,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.15PM_6.jpg?v=1739661726",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.14PM_1.jpg?v=1739661726",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.15PM_4.jpg?v=1739661726",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.15PM.jpg?v=1739661726",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.15PM_3.jpg?v=1739661726",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.15PM_2.jpg?v=1739661726",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-02-15at6.20.14PM.jpg?v=1739661726"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T21:20:25.215Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-133",
    "name": "Pre-Owned 26mm Rolex Diamond Watch + Yellow Gold Butterfly Bracelet Set | Marchello the Jeweler",
    "slug": "pre-owned-26mm-rolex-watch-with-two-tone-jubilee-band",
    "description": "<p data-start=\"664\" data-end=\"894\"><strong data-start=\"664\" data-end=\"772\">Look stunning with this luxurious and timeless 4-piece jewelry and watch set from Marchello the Jeweler.</strong><br data-start=\"772\" data-end=\"775\">Whether you're gifting or upgrading your own collection, this elegant bundle offers unmatched sophistication and value.</p>\n<h4 data-start=\"901\" data-end=\"932\">✨ <strong data-start=\"908\" data-end=\"930\">This Set Includes:</strong>\n</h4>\n<p data-start=\"934\" data-end=\"964\"><strong data-start=\"934\" data-end=\"962\">1) Pre-Owned Rolex Watch</strong></p>\n<ul data-start=\"965\" data-end=\"1259\">\n<li data-start=\"965\" data-end=\"990\">\n<p data-start=\"967\" data-end=\"990\"><strong data-start=\"967\" data-end=\"977\">Model:</strong> 26mm Rolex</p>\n</li>\n<li data-start=\"991\" data-end=\"1039\">\n<p data-start=\"993\" data-end=\"1039\"><strong data-start=\"993\" data-end=\"1003\">Style:</strong> Two-tone (Gold &amp; Stainless Steel)</p>\n</li>\n<li data-start=\"1040\" data-end=\"1065\">\n<p data-start=\"1042\" data-end=\"1065\"><strong data-start=\"1042\" data-end=\"1055\">Bracelet:</strong> Jubilee</p>\n</li>\n<li data-start=\"1066\" data-end=\"1132\">\n<p data-start=\"1068\" data-end=\"1132\"><strong data-start=\"1068\" data-end=\"1077\">Dial:</strong> Custom diamond Roman numeral black dial (by request)</p>\n</li>\n<li data-start=\"1133\" data-end=\"1181\">\n<p data-start=\"1135\" data-end=\"1181\"><strong data-start=\"1135\" data-end=\"1145\">Bezel:</strong> Custom diamond bezel (by request)</p>\n</li>\n<li data-start=\"1182\" data-end=\"1220\">\n<p data-start=\"1184\" data-end=\"1220\"><strong data-start=\"1184\" data-end=\"1211\">Approx. Diamond Weight:</strong> 1.10ct</p>\n</li>\n<li data-start=\"1221\" data-end=\"1259\">\n<p data-start=\"1223\" data-end=\"1259\"><strong data-start=\"1223\" data-end=\"1236\">Diamonds:</strong> Natural, Earth-Mined</p>\n</li>\n<li data-start=\"1221\" data-end=\"1259\">\n<p data-start=\"1223\" data-end=\"1259\">Comes in a <strong data-start=\"1272\" data-end=\"1313\">premium Marchello The Jeweler LED box</strong> — perfect for display or gifting.</p>\n</li>\n</ul>\n<p data-start=\"1223\" data-end=\"1259\"><strong data-start=\"1351\" data-end=\"1366\">Disclaimer:</strong><br data-start=\"1366\" data-end=\"1369\">Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</p>\n<p data-start=\"1629\" data-end=\"1668\"><strong data-start=\"1629\" data-end=\"1666\">2) Yellow Gold Butterfly Bracelet</strong></p>\n<ul data-start=\"1669\" data-end=\"1900\">\n<li data-start=\"1669\" data-end=\"1702\">\n<p data-start=\"1671\" data-end=\"1702\"><strong data-start=\"1671\" data-end=\"1684\">Material:</strong> 10k Yellow Gold</p>\n</li>\n<li data-start=\"1703\" data-end=\"1743\">\n<p data-start=\"1705\" data-end=\"1743\"><strong data-start=\"1705\" data-end=\"1718\">Diamonds:</strong> Natural Round Diamonds</p>\n</li>\n<li data-start=\"1744\" data-end=\"1782\">\n<p data-start=\"1746\" data-end=\"1782\"><strong data-start=\"1746\" data-end=\"1773\">Approx. Diamond Weight:</strong> 0.70ct</p>\n</li>\n<li data-start=\"1783\" data-end=\"1841\">\n<p data-start=\"1785\" data-end=\"1841\"><strong data-start=\"1785\" data-end=\"1804\">Approx. Weight:</strong> 7.5g (varies with bracelet length)</p>\n</li>\n<li data-start=\"1842\" data-end=\"1900\">\n<p data-start=\"1844\" data-end=\"1900\"><strong data-start=\"1844\" data-end=\"1854\">Width:</strong> Links – 3.35mm | Butterfly  – 9.69mm</p>\n</li>\n</ul>\n<p data-start=\"1907\" data-end=\"1938\"><strong data-start=\"1907\" data-end=\"1936\">3) Complimentary Earrings</strong></p>\n<ul data-start=\"1939\" data-end=\"2042\">\n<li data-start=\"1939\" data-end=\"1994\">\n<p data-start=\"1941\" data-end=\"1994\">A beautiful pair of small gold and diamond earrings</p>\n</li>\n<li data-start=\"1995\" data-end=\"2042\">\n<p data-start=\"1997\" data-end=\"2042\">Elegant, subtle, and perfect for daily wear</p>\n</li>\n</ul>\n<p data-start=\"2049\" data-end=\"2071\"><strong data-start=\"2049\" data-end=\"2069\">4) Surprise Gift</strong></p>\n<ul data-start=\"2072\" data-end=\"2194\">\n<li data-start=\"2072\" data-end=\"2194\">\n<p data-start=\"2074\" data-end=\"2194\">Receive a <strong data-start=\"2084\" data-end=\"2100\">mystery gift</strong> exclusively from Marchello the Jeweler — a perfect bonus to elevate your unboxing experience!</p>\n</li>\n</ul>\n<p data-start=\"2201\" data-end=\"2230\">💎 <strong data-start=\"2204\" data-end=\"2228\">Why Choose This Set?</strong></p>\n<ul data-start=\"2231\" data-end=\"2453\">\n<li data-start=\"2231\" data-end=\"2266\">\n<p data-start=\"2233\" data-end=\"2266\">Genuine, high-quality materials<br></p>\n</li>\n<li data-start=\"2323\" data-end=\"2382\">\n<p data-start=\"2325\" data-end=\"2382\">Includes everything you need for a complete luxury look</p>\n</li>\n<li data-start=\"2383\" data-end=\"2453\">\n<p data-start=\"2385\" data-end=\"2453\">Makes a luxurious gift for anniversaries, birthdays, or milestones</p>\n</li>\n</ul>\n<p data-start=\"2460\" data-end=\"2550\"><strong data-start=\"2460\" data-end=\"2550\">Indulge in timeless elegance and elevate your jewelry game with Marchello the Jeweler.</strong></p>\n<p data-start=\"2460\" data-end=\"2550\"><em>Price includes card processing fee.</em></p>",
    "price": 6957.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at14.30.35_16308daf.jpg?v=1755714837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at14.30.35_4bdc2863.jpg?v=1755714837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at14.30.35_f9058db6.jpg?v=1755714837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at14.30.35_3b07bf36.jpg?v=1755714837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at14.30.36_1d245bb7.jpg?v=1755714837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at14.30.36_c6f3df85.jpg?v=1755714837"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "Pre-Owned 26mm Rolex Diamond Watch + Yellow Gold Butterfly Bracelet Set | Marchello the Jeweler",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-10T20:20:25.215Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-134",
    "name": "4-Piece Rose Gold Diamond Jewelry Set – Bracelet, Earrings & Gift | Marchello the Jeweler",
    "slug": "4-piece-rose-gold-diamond-jewelry-set-bracelet-earrings-gift-marchello-the-jeweler",
    "description": "<p class=\"MsoNormal\"> </p>\n<p><iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/M24PCW5Oc0w\"></iframe></p>\n<p data-start=\"212\" data-end=\"333\"><strong data-start=\"212\" data-end=\"331\">Look stunning with this luxurious and timeless 4-piece diamond jewelry set, exclusively from Marchello the Jeweler.</strong></p>\n<p data-start=\"335\" data-end=\"496\">Crafted with elegance and precision, this collection is perfect for making unforgettable impressions—whether you're gifting someone special or treating yourself.</p>\n<h4 data-start=\"503\" data-end=\"545\">✨ <strong data-start=\"510\" data-end=\"543\">Included in This 4-Piece Set:</strong>\n</h4>\n<p data-start=\"547\" data-end=\"564\"><strong data-start=\"547\" data-end=\"562\">1) Bracelet</strong></p>\n<ul data-start=\"565\" data-end=\"784\">\n<li data-start=\"565\" data-end=\"610\">\n<p data-start=\"567\" data-end=\"610\">10k Rose Gold with Natural Round Diamonds</p>\n</li>\n<li data-start=\"611\" data-end=\"649\">\n<p data-start=\"613\" data-end=\"649\">Approx. Diamond Weight: <strong data-start=\"637\" data-end=\"647\">2.59ct</strong></p>\n</li>\n<li data-start=\"650\" data-end=\"693\">\n<p data-start=\"652\" data-end=\"693\">Approx. Weight: <strong data-start=\"668\" data-end=\"678\">13.71g</strong> (7.5 inches)</p>\n</li>\n<li data-start=\"694\" data-end=\"717\">\n<p data-start=\"696\" data-end=\"717\">Width: <strong data-start=\"703\" data-end=\"715\">10.64 mm</strong></p>\n</li>\n<li data-start=\"718\" data-end=\"784\">\n<p data-start=\"720\" data-end=\"784\"><em data-start=\"720\" data-end=\"784\">Note: Weight and price vary based on selected bracelet length.</em></p>\n</li>\n</ul>\n<p data-start=\"786\" data-end=\"815\"><strong data-start=\"786\" data-end=\"813\">2) Earrings (Main Pair)</strong></p>\n<ul data-start=\"816\" data-end=\"954\">\n<li data-start=\"816\" data-end=\"861\">\n<p data-start=\"818\" data-end=\"861\">14k Rose Gold with Natural Round Diamonds</p>\n</li>\n<li data-start=\"862\" data-end=\"900\">\n<p data-start=\"864\" data-end=\"900\">Approx. Diamond Weight: <strong data-start=\"888\" data-end=\"898\">0.55ct</strong></p>\n</li>\n<li data-start=\"901\" data-end=\"930\">\n<p data-start=\"903\" data-end=\"930\">Approx. Weight: <strong data-start=\"919\" data-end=\"928\">4.37g</strong></p>\n</li>\n<li data-start=\"931\" data-end=\"954\">\n<p data-start=\"933\" data-end=\"954\">Diameter: <strong data-start=\"943\" data-end=\"954\">9.82 mm</strong></p>\n</li>\n</ul>\n<p data-start=\"956\" data-end=\"987\"><strong data-start=\"956\" data-end=\"985\">3) Complimentary Earrings</strong></p>\n<ul data-start=\"988\" data-end=\"1108\">\n<li data-start=\"988\" data-end=\"1049\">\n<p data-start=\"990\" data-end=\"1049\">A beautiful bonus pair of small gold and diamond earrings</p>\n</li>\n<li data-start=\"1050\" data-end=\"1108\">\n<p data-start=\"1052\" data-end=\"1108\">Timeless and versatile – perfect for everyday elegance</p>\n</li>\n</ul>\n<p data-start=\"1110\" data-end=\"1132\"><strong data-start=\"1110\" data-end=\"1130\">4) Surprise Gift</strong></p>\n<ul data-start=\"1133\" data-end=\"1220\">\n<li data-start=\"1133\" data-end=\"1220\">\n<p data-start=\"1135\" data-end=\"1220\">Enjoy a <strong data-start=\"1143\" data-end=\"1159\">mystery gift</strong> specially curated by <em data-start=\"1181\" data-end=\"1204\">Marchello the Jeweler</em> – just for you!</p>\n</li>\n</ul>\n<p data-start=\"1227\" data-end=\"1254\">💎 <strong data-start=\"1230\" data-end=\"1252\">Why You'll Love It</strong></p>\n<ul data-start=\"1255\" data-end=\"1428\">\n<li data-start=\"1255\" data-end=\"1305\">\n<p data-start=\"1257\" data-end=\"1305\">Premium craftsmanship &amp; high-quality materials</p>\n</li>\n<li data-start=\"1306\" data-end=\"1360\">\n<p data-start=\"1308\" data-end=\"1360\">Designed for both daily wear and special occasions</p>\n</li>\n<li data-start=\"1361\" data-end=\"1428\">\n<p data-start=\"1363\" data-end=\"1428\">Makes a stunning gift for birthdays, anniversaries, or holidays</p>\n</li>\n</ul>\n<p data-start=\"1435\" data-end=\"1552\"><strong data-start=\"1435\" data-end=\"1500\">Indulge in brilliance, elegance, and the beauty of rose gold.</strong><br data-start=\"1500\" data-end=\"1503\">Shop now and enjoy a complete jewelry experience.</p>\n<p data-start=\"1435\" data-end=\"1552\"><em>Price includes card processing fee.</em></p>\n<p><span style=\"font-size: 0.875rem;\"> </span></p>",
    "price": 3680,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at12.33.56_a0706853.jpg?v=1755707709",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at12.33.56_7a9226ff.jpg?v=1755707709",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at12.33.56_324b3b43.jpg?v=1755707709",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at12.33.57_a8e8c6e3.jpg?v=1755707709",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at12.33.56_f3b2e257.jpg?v=1755707700"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "4-Piece Rose Gold Diamond Jewelry Set – Bracelet, Earrings & Gift | Marchello the Jeweler",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T19:20:25.215Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-135",
    "name": "Rolex Datejust 41mm Model 126300 - Wimbledon Dial, Stainless Steel Oyster Bracelet (2022, Mint Condition)",
    "slug": "rolex-datejust-41mm-model-126300-wimbledon-dial-stainless-steel-oyster-bracelet-2022-mint-condition",
    "description": "<p data-start=\"726\" data-end=\"798\"><strong data-start=\"726\" data-end=\"798\">Rolex Datejust 41mm Stainless Steel - Model #126300 (Wimbledon Dial)</strong></p>\n<p data-start=\"800\" data-end=\"1100\">This stunning <strong data-start=\"814\" data-end=\"853\">pre-owned Rolex Datejust 41mm watch</strong> (Model #126300) features the iconic <strong data-start=\"890\" data-end=\"908\">Wimbledon dial</strong>, a smooth bezel, and a classic <strong data-start=\"940\" data-end=\"975\">stainless steel Oyster bracelet</strong>. Manufactured in <strong data-start=\"993\" data-end=\"1001\">2022</strong>, this timepiece is in <strong data-start=\"1024\" data-end=\"1042\">mint condition.</strong></p>\n<ul>\n<li data-start=\"1104\" data-end=\"1139\">\n<strong data-start=\"1104\" data-end=\"1114\">Model:</strong> Rolex Datejust #126300</li>\n<li data-start=\"1142\" data-end=\"1163\">\n<strong data-start=\"1142\" data-end=\"1156\">Case Size:</strong> 41mm</li>\n<li data-start=\"1166\" data-end=\"1198\">\n<strong data-start=\"1166\" data-end=\"1180\">Condition:</strong> Pre-owned, Mint</li>\n<li data-start=\"1201\" data-end=\"1217\">\n<strong data-start=\"1201\" data-end=\"1210\">Year:</strong> 2022</li>\n<li data-start=\"1220\" data-end=\"1286\">\n<strong data-start=\"1220\" data-end=\"1229\">Dial:</strong> Wimbledon (green Roman numerals with slate background)</li>\n<li data-start=\"1289\" data-end=\"1327\">\n<strong data-start=\"1289\" data-end=\"1302\">Bracelet:</strong> Stainless steel Oyster</li>\n<li data-start=\"1330\" data-end=\"1349\">\n<strong data-start=\"1330\" data-end=\"1340\">Bezel:</strong> Smooth</li>\n<li data-start=\"1352\" data-end=\"1446\">\n<strong data-start=\"1352\" data-end=\"1369\">Box &amp; Papers:</strong> Includes official papers and premium Marchello the Jeweler LED display box</li>\n<li data-start=\"1449\" data-end=\"1523\">\n<strong data-start=\"1449\" data-end=\"1460\">Extras:</strong> Free gold &amp; diamond earrings + a surprise gift with purchase</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 13225,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at18.07.17_7b6ff3cf.jpg?v=1755728027",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at18.07.18_24a8219d.jpg?v=1755728125",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at18.07.18_8f2ddf0f.jpg?v=1755728125",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-20at18.07.18_2bdd59ac.jpg?v=1755728125"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T18:20:25.216Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-136",
    "name": "18K White Gold Diamond Fancy Earrings | 2.24ct VVS/VS Clarity",
    "slug": "18k-white-gold-diamond-fancy-earrings-2-24ct-vvs-vs-clarity",
    "description": "<p data-start=\"997\" data-end=\"1276\">Discover timeless elegance with these <strong data-start=\"1035\" data-end=\"1076\">18K white gold fancy diamond earrings</strong>, crafted with a stunning combination of <strong data-start=\"1117\" data-end=\"1163\">VVS/VS clarity round and baguette diamonds</strong>. Totaling approximately <strong data-start=\"1188\" data-end=\"1203\">2.24 carats</strong>, these earrings offer a refined sparkle perfect for any luxury occasion.</p>\n<ul data-start=\"1281\" data-end=\"1569\">\n<li data-start=\"1281\" data-end=\"1316\">\n<p data-start=\"1283\" data-end=\"1316\"><strong data-start=\"1283\" data-end=\"1293\">Metal:</strong> Solid 18K White Gold</p>\n</li>\n<li data-start=\"1319\" data-end=\"1374\">\n<p data-start=\"1321\" data-end=\"1374\"><strong data-start=\"1321\" data-end=\"1334\">Diamonds:</strong> Natural, Earth-Mined (VVS/VS Clarity)</p>\n</li>\n<li data-start=\"1377\" data-end=\"1415\">\n<p data-start=\"1379\" data-end=\"1415\"><strong data-start=\"1379\" data-end=\"1398\">Diamond Weight:</strong> Approx. 2.24ct</p>\n</li>\n<li data-start=\"1418\" data-end=\"1476\">\n<p data-start=\"1420\" data-end=\"1476\"><strong data-start=\"1420\" data-end=\"1430\">Style:</strong> Fancy design with round &amp; baguette diamonds</p>\n</li>\n<li data-start=\"1479\" data-end=\"1525\">\n<p data-start=\"1481\" data-end=\"1525\"><strong data-start=\"1481\" data-end=\"1498\">Measurements:</strong> Approx. 18.74mm x 7.14mm</p>\n</li>\n<li data-start=\"1528\" data-end=\"1567\">\n<p data-start=\"1530\" data-end=\"1567\"><strong data-start=\"1530\" data-end=\"1547\">Total Weight:</strong> Approx. 9.5 grams</p>\n</li>\n</ul>\n<p data-start=\"1572\" data-end=\"1693\">Comes with a <strong data-start=\"1585\" data-end=\"1625\">free pair of gold &amp; diamond earrings</strong> and a <strong data-start=\"1632\" data-end=\"1649\">surprise gift</strong>, beautifully packaged and ready to impress.</p>",
    "price": 5750,
    "sale_price": 4888,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at16.33.37_a10b8cd7.jpg?v=1755635670",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at16.33.38_3d1da0dd.jpg?v=1755635670",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at16.33.38_95e16a7e.jpg?v=1755635670",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at16.33.38_579550d6.jpg?v=1755635670",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at16.33.38_b79a9fa6.jpg?v=1755635670"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18K White Gold Diamond Fancy Earrings | 2.24ct VVS/VS Clarity",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-10T17:20:25.218Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-137",
    "name": "Yellow Gold Diamond Cross Pendant + Cuban Chain | 2.30ct",
    "slug": "yellow-gold-diamond-cross-pendant-cuban-chain-2-30ct",
    "description": "<p class=\"MsoNormal\"><b>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! Call us at (929) 689-2205 for more info.</b></p>\n<p><iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/MAbTRC8zlMU\">\n</iframe></p>\n<p> </p>\n<p data-start=\"1074\" data-end=\"1329\">Elevate your style with this stunning <strong data-start=\"1112\" data-end=\"1145\">10K yellow gold cross pendant</strong>, featuring <strong data-start=\"1157\" data-end=\"1190\">natural, earth-mined diamonds</strong> totaling approximately <strong data-start=\"1214\" data-end=\"1229\">2.30 carats</strong>. Paired with a classic <strong data-start=\"1253\" data-end=\"1280\">yellow gold Cuban chain</strong>, this piece combines faith, fashion, and luxury.</p>\n<ul data-start=\"1334\" data-end=\"1589\">\n<li data-start=\"1334\" data-end=\"1370\">\n<p data-start=\"1336\" data-end=\"1370\"><strong data-start=\"1336\" data-end=\"1346\">Metal:</strong> 10K Yellow Gold</p>\n</li>\n<li data-start=\"1373\" data-end=\"1440\">\n<p data-start=\"1375\" data-end=\"1440\"><strong data-start=\"1375\" data-end=\"1400\">Diamond Carat Weight:</strong> Approx. 2.30ct (Natural, Earth-Mined)</p>\n</li>\n<li data-start=\"1443\" data-end=\"1497\">\n<p data-start=\"1445\" data-end=\"1497\"><strong data-start=\"1445\" data-end=\"1476\">Pendant Height (with bail):</strong> Approx. 2.5 inches</p>\n</li>\n<li data-start=\"1500\" data-end=\"1587\">\n<p data-start=\"1502\" data-end=\"1587\"><strong data-start=\"1502\" data-end=\"1541\">Total Weight (Pendant + 18” Chain):</strong> Approx. 13.5 grams (varies by chain length)</p>\n</li>\n</ul>\n<p data-start=\"1592\" data-end=\"1764\">Comes with a <strong data-start=\"1605\" data-end=\"1645\">free pair of gold &amp; diamond earrings</strong> and a <strong data-start=\"1652\" data-end=\"1669\">surprise gift</strong>, making it the perfect choice for special occasions, religious milestones, or everyday luxury.</p>",
    "price": 3563.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at15.51.02_dcb405e9.jpg?v=1755633111",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at15.51.02_dd46db05.jpg?v=1755633111",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-08-19at15.51.03_19c08966.jpg?v=1755633111"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Yellow Gold Diamond Cross Pendant + Cuban Chain | 2.30ct",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T16:20:25.218Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-138",
    "name": "VVS/vs EF color high clarity diamonds set in a 18k Gold Tennis Ladies`Bracelet with Baguette and Round Diamonds",
    "slug": "vvs-vs-ef-color-high-clarity-diamonds-set-in-a-18k-gold-tennis-ladies-bracelet-with-baguette-and-round-diamonds",
    "description": "<p data-mce-fragment=\"1\">This stunning 18K white gold tennis bracelet is crafted with 2.25ct of high-clarity VVS/VS EF color diamonds in a mesmerizing baguette and round diamond design, delivering timeless elegance. The 7-inch bracelet is light in weight (7.2gr) and comes complete with free gold and diamond earrings and a surprise gift, so you can elevate any special occasion with this piece of jewelry.</p>",
    "price": 5520,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/FF32CC0F-5C4B-4614-ACA8-0974FDF9A82A.jpg?v=1693070497",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/6268E7A5-EF60-454C-AF21-6393107092BA.jpg?v=1693070497",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/4E73E998-9F14-4806-A3F6-255757E80F22.jpg?v=1693070443",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/DF1D5D10-C80B-4684-8F13-6792183DF6A3.jpg?v=1693070443",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/CDCD2375-C3B0-4A97-9329-E60C259E43EE.jpg?v=1693071735"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "VVS/vs EF color high clarity diamonds set in a 18k Gold Tennis Ladies`Bracelet with Baguette and Round Diamonds",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T15:20:25.218Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-139",
    "name": "18K White Gold Diamond Bracelet | 2.54ct Natural Baguette & Round",
    "slug": "18k-yellow-gold-diamond-bracelet-2-54ct-natural-baguette-round",
    "description": "<p class=\"MsoNormal\"><b>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! Call us at (929) 689-2205 for more info.</b></p>\n<p><iframe title=\"Product Video\" src=\"https://www.youtube.com/embed/cGKSaqIYPnY\" height=\"560\" width=\"315\">\n</iframe></p>\n<p data-end=\"597\" data-start=\"299\">Indulge in timeless elegance with this exquisite 18K white gold bracelet, crafted with a luxurious blend of <strong data-end=\"451\" data-start=\"408\">natural baguette and round-cut diamonds</strong>. Whether you're celebrating a special occasion or upgrading your fine jewelry collection, this bracelet delivers unmatched brilliance and beauty.</p>\n<h3 data-end=\"633\" data-start=\"604\">✨ <strong data-end=\"633\" data-start=\"610\">Product Highlights:</strong>\n</h3>\n<ul data-end=\"879\" data-start=\"635\">\n<li data-end=\"665\" data-start=\"635\">\n<p data-end=\"665\" data-start=\"637\"><strong data-end=\"647\" data-start=\"637\">Metal:</strong> 18K White Gold</p>\n</li>\n<li data-end=\"715\" data-start=\"666\">\n<p data-end=\"715\" data-start=\"668\"><strong data-end=\"693\" data-start=\"668\">Diamond Total Weight:</strong> Approx. 2.54 carats</p>\n</li>\n<li data-end=\"763\" data-start=\"716\">\n<p data-end=\"763\" data-start=\"718\"><strong data-end=\"735\" data-start=\"718\">Diamond Type:</strong>  Natural, Earth-Mined</p>\n</li>\n<li data-end=\"804\" data-start=\"764\">\n<p data-end=\"804\" data-start=\"766\"><strong data-end=\"783\" data-start=\"766\">Diamond Cuts:</strong> Baguette and Round</p>\n</li>\n<li data-end=\"848\" data-start=\"805\">\n<p data-end=\"848\" data-start=\"807\"><strong data-end=\"827\" data-start=\"807\">Bracelet Weight:</strong> Approx. 14.5 grams</p>\n</li>\n<li data-end=\"879\" data-start=\"849\">\n<p data-end=\"879\" data-start=\"851\"><strong data-end=\"861\" data-start=\"851\">Width:</strong> Approx. 6.43 mm</p>\n</li>\n</ul>\n<h3 data-end=\"917\" data-start=\"886\">🎁 <strong data-end=\"917\" data-start=\"893\">Bonus Gift Included:</strong>\n</h3>\n<ul data-end=\"1011\" data-start=\"919\">\n<li data-end=\"963\" data-start=\"919\">\n<p data-end=\"963\" data-start=\"921\"><strong data-end=\"961\" data-start=\"921\">Free Pair of Gold &amp; Diamond Earrings</strong></p>\n</li>\n<li data-end=\"1011\" data-start=\"964\">\n<p data-end=\"1011\" data-start=\"966\"><strong data-end=\"1011\" data-start=\"966\">Plus: A Surprise Gift with Your Purchase!</strong></p>\n</li>\n</ul>\n<h3 data-end=\"1047\" data-start=\"1018\">✅ <strong data-end=\"1047\" data-start=\"1024\">Why You'll Love It:</strong>\n</h3>\n<ul data-end=\"1282\" data-start=\"1049\">\n<li data-end=\"1103\" data-start=\"1049\">\n<p data-end=\"1103\" data-start=\"1051\">Designed with precision for exceptional beauty and durability</p>\n</li>\n<li data-end=\"1166\" data-start=\"1104\">\n<p data-end=\"1166\" data-start=\"1106\">Perfect for anniversaries, milestone gifts, or self-reward</p>\n</li>\n<li data-end=\"1235\" data-start=\"1167\">\n<p data-end=\"1235\" data-start=\"1169\">Elegant design suitable for both daily wear and formal occasions</p>\n</li>\n<li data-end=\"1282\" data-start=\"1236\">\n<p data-end=\"1282\" data-start=\"1238\">Comes beautifully packaged and ready to gift</p>\n</li>\n</ul>\n<p data-end=\"1389\" data-start=\"1289\">🛍️ <strong data-end=\"1306\" data-start=\"1293\">Order now</strong> to enjoy overnight shipping, secure checkout, and an unforgettable unboxing experience.</p>",
    "price": 5175,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_b871e1af-2904-435e-9c03-41ea09cfde5e.jpg?v=1753222897",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_8b4bbed7-87c3-4061-b81d-f0f0b958e2e2.jpg?v=1753222897",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_4b549751-8721-4544-981f-bfb50ccde5e6.jpg?v=1753222897",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/image_9b67428d-e70d-4e4d-bb18-fdea53b71902.jpg?v=1753222897",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-22at18.05.38_4ed4eaa4.jpg?v=1753222897"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "18K White Gold Diamond Bracelet | 2.54ct Natural Baguette & Round",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-10T14:20:25.218Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-140",
    "name": "18K Yellow Gold Engagement Ring – 3.75ct Cushion Cut & Round Natural Diamonds | VS Clarity",
    "slug": "18k-yellow-gold-engagement-ring-3-75ct-cushion-cut-round-natural-diamonds-vs-clarity",
    "description": "<p class=\"MsoNormal\"><b>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! Call us at (929) 689-2205 for more info.</b></p>\n<p><iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/rpoz9JCmhKM\"></iframe></p>\n<p>Celebrate love with this luxurious <strong>18K yellow gold engagement ring</strong>, crafted with <strong>natural earth-mined diamonds</strong>. The stunning <strong>1.90ct cushion cut center stone</strong> is surrounded by brilliant round diamonds for a total carat weight of approximately <strong>3.75ct</strong>.</p>\n<p>With an average clarity of <strong>VS</strong> and a weight of <strong>8.23 grams</strong>, this handcrafted piece offers exceptional brilliance, premium craftsmanship, and timeless design.</p>\n<h4>💎 Product Details:</h4>\n<ul>\n<li>\n<strong>Gold Type:</strong> 18K Yellow Gold</li>\n<li>\n<strong>Center Stone:</strong> 1.90ct Cushion Cut Natural Diamond</li>\n<li>\n<strong>Total Diamond Weight:</strong> Approx. 3.75ct (center + round diamonds)</li>\n<li>\n<strong>Clarity:</strong> Average VS</li>\n<li>\n<strong>Metal Weight:</strong> Approx. 8.23 grams</li>\n<li>\n<strong style=\"font-size: 0.875rem;\">Top Measurement (Ring Face Size):</strong><span style=\"font-size: 0.875rem;\"> Approx. 11.70 mm x 11.62 mm</span>\n</li>\n</ul>\n<h4>🎁 Includes:</h4>\n<ul>\n<li>Complementary <strong>diamond earrings</strong>\n</li>\n<li><strong>A surprise gift</strong></li>\n</ul>\n<p><em>Perfect as an engagement ring, anniversary gift, or heirloom-quality treasure — a timeless expression of love and commitment.</em></p>",
    "price": 13800,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at15.45.12_daf37d47.jpg?v=1752868008",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at15.45.12_35a74eb2.jpg?v=1752868008",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at15.45.12_8804bede.jpg?v=1752868008",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at15.45.12_a6dc6488.jpg?v=1752868008",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at15.45.13_220b0f42.jpg?v=1752867999"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18K Yellow Gold Engagement Ring – 3.75ct Cushion Cut & Round Natural Diamonds | VS Clarity",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T13:20:25.218Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-141",
    "name": "14K White Gold Diamond Bracelet – 3.75ct Natural Round Diamonds | Elegant Fine Jewelr",
    "slug": "14k-gold-diamond-bracelet-5-15ct-natural-round-diamonds-elegant-fine-jewelry-choose-your-color-copy",
    "description": "<p><strong>14K white gold diamond bracelet</strong>, featuring approximately <strong>3.75 carats of natural round-cut diamonds</strong>. This stunning piece combines timeless elegance with radiant brilliance — perfect for anniversaries, milestone gifts, or your personal collection.</p>\n<h4>✨ Product Details:</h4>\n<ul>\n<li>\n<strong>Gold Type:</strong> 14K Solid White Gold</li>\n<li>\n<strong>Diamond Weight:</strong> Approx. 3.75 carats (Natural Round Diamonds)</li>\n<li>\n<strong>Gold Weight:</strong> Approx. 12.7 grams</li>\n<li>\n<strong>Bracelet Width:</strong> 8.42 mm</li>\n<li>\n<strong>Size:</strong> 7 inches</li>\n</ul>\n<h4>🎁 Includes:</h4>\n<ul>\n<li>Free matching <strong>gold &amp; diamond earrings</strong>\n</li>\n<li>Surprise luxury gift</li>\n</ul>",
    "price": 4485,
    "sale_price": 3812,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at14.26.48_e89c7a7c.jpg?v=1752863318",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at14.26.49_239538d4.jpg?v=1752863318",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at14.26.49_f1bbe370.jpg?v=1752863318"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14K White Gold Diamond Bracelet – 3.75ct Natural Round Diamonds | Elegant Fine Jewelr",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T12:20:25.218Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-142",
    "name": "14K Gold Diamond Bracelet | 5.15ct Natural Round Diamonds – Elegant Fine Jewelry (choose your color)",
    "slug": "14k-gold-and-diamond",
    "description": "<p class=\"MsoNormal\"><b>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! Call us at (929) 689-2205 for more info.</b></p>\n<p><iframe src=\"https://www.youtube.com/embed/gNPOIYtAz2I\" height=\"400\" width=\"100%\"></iframe></p>\n<p data-end=\"557\" data-start=\"321\">Experience luxury with our handcrafted <strong data-end=\"389\" data-start=\"360\">14K gold diamond bracelet</strong>, designed for elegance and brilliance. This timeless piece features <strong data-end=\"499\" data-start=\"458\">5.15 carats of natural round diamonds</strong>, expertly set in your choice of <strong data-end=\"556\" data-start=\"532\">yellow or white gold</strong>.</p>\n<p data-end=\"673\" data-start=\"559\">Whether you're celebrating a milestone or treating yourself, this bracelet delivers unmatched sparkle and quality.</p>\n<p data-end=\"695\" data-start=\"675\"><strong data-end=\"695\" data-start=\"675\">Product Details:</strong></p>\n<ul data-end=\"1055\" data-start=\"696\">\n<li data-end=\"739\" data-start=\"696\">\n<p data-end=\"739\" data-start=\"698\"><strong data-end=\"712\" data-start=\"698\">Gold Type:</strong> 14K Yellow or White Gold</p>\n</li>\n<li data-end=\"808\" data-start=\"740\">\n<p data-end=\"808\" data-start=\"742\"><strong data-end=\"761\" data-start=\"742\">Diamond Weight:</strong> Approx. 5.15 carats (natural round diamonds)</p>\n</li>\n<li data-end=\"855\" data-start=\"809\">\n<p data-end=\"855\" data-start=\"811\"><strong data-end=\"827\" data-start=\"811\">Gold Weight:</strong> Approx. 18.5 – 19.8 grams</p>\n</li>\n<li data-end=\"887\" data-start=\"856\">\n<p data-end=\"887\" data-start=\"858\"><strong data-end=\"877\" data-start=\"858\">Bracelet Width:</strong> 9.49 mm</p>\n</li>\n<li data-end=\"910\" data-start=\"888\">\n<p data-end=\"910\" data-start=\"890\"><strong data-end=\"899\" data-start=\"890\">Size:</strong> 7 inches</p>\n</li>\n<li data-end=\"1009\" data-start=\"911\">\n<p data-end=\"928\" data-start=\"913\"><strong data-end=\"926\" data-start=\"913\">Includes:</strong></p>\n<ul data-end=\"1009\" data-start=\"932\">\n<li data-end=\"977\" data-start=\"932\">\n<p data-end=\"977\" data-start=\"934\">Free matching <strong data-end=\"975\" data-start=\"948\">gold &amp; diamond earrings</strong></p>\n</li>\n<li data-end=\"1009\" data-start=\"981\">\n<p data-end=\"1009\" data-start=\"983\"><strong data-end=\"1007\" data-start=\"983\">Surprise gift</strong></p>\n</li>\n</ul>\n</li>\n<li data-end=\"1055\" data-start=\"1010\">\n<p data-end=\"1055\" data-start=\"1012\"><strong data-end=\"1022\" data-start=\"1012\">Style:</strong> Elegant, timeless, and luxurious</p>\n</li>\n</ul>\n<p data-end=\"1172\" data-start=\"1057\">Perfect as an anniversary gift, birthday surprise, or a sophisticated addition to your personal jewelry collection.</p>",
    "price": 4945,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at13.54.16_9f468cc1.jpg?v=1752861423",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at13.54.13_f784350d.jpg?v=1752861423",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at13.54.13_0d15bca7.jpg?v=1752861423",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at13.54.13_793319dd.jpg?v=1752861423",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-07-18at13.54.13_bed7eddc.jpg?v=1752861423"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14K Gold Diamond Bracelet | 5.15ct Natural Round Diamonds – Elegant Fine Jewelry (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-10T11:20:25.219Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-143",
    "name": "14k White gold and Diamond Earrings and Necklace",
    "slug": "14k-white-gold-and-diamond-earrings-and-necklace",
    "description": "<p><strong>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! <span>Call us at (929) 689-2205 for more info.</span></strong></p>\n<p><iframe title=\"YouTube video player\" src=\"https://www.youtube.com/embed/y-kiDQKjGDc\" height=\"315\" width=\"560\"></iframe></p>\n<p>Look stunning with this luxurious set of jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1) Gold and Diamond Fancy Necklace.</strong></p>\n<p>14k white gold and round diamonds.</p>\n<p>Approximate diamond weight: total-0.89ct, center stone-0.64ct.</p>\n<p><span>Approximate item weight: 4.2</span><span> </span>grams. at 16 inches<span><strong></strong></span></p>\n<p><strong>2) Gold &amp; diamond Round Earrings:</strong><br></p>\n<p><span>14k white gold and round diamond earrings.</span></p>\n<p>Approximate diamond weight: 1.50ct</p>\n<p>Approximate earrings weight: 4.9 grams.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Gift from Marchello the Jeweler:</strong></p>\n<p>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 4025,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-25at1.17.32PM.jpg?v=1750871884",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-25at1.17.33PM.jpg?v=1750871888",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-25at1.17.33PM_1.jpg?v=1750871888",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-25at1.17.33PM_2.jpg?v=1750871888",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-25at1.17.33PM_3.jpg?v=1750871888"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "<p><strong>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! <span>Call us at (929) 689-2205 for more info.</span></strong></p>\n<p><iframe title=\"YouTube video player\" src=\"https://www.youtube.com/embed/y-kiDQKjGDc\" height=\"315\" width=\"560\"></iframe></p>\n<p>Look stunning with this luxurious set of jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1) Gold and Diamond Fancy Necklace.</strong></p>\n<p>14k white gold and round diamonds.</p>\n<p>Approximate diamond weight: total-0.89ct, center stone-0.64ct.</p>\n<p><span>Approximate item weight: 4.2</span><span> </span>grams. at 16 inches<span><strong></strong></span></p>\n<p><strong>2) Gold &amp; diamond Round Earrings:</strong><br></p>\n<p><span>14k white gold and round diamond earrings.</span></p>\n<p>Approximate diamond weight: 1.50ct</p>\n<p>Approximate earrings weight: 4.9 grams.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Gift from Marchello the Jeweler:</strong></p>\n<p>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T10:20:25.219Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-144",
    "name": "Yellow Gold and Diamond Jesus Head Pendant + 14k Yellow Gold and Diamond Cross Pendant + Yellow Gold Cuban 2 Chains",
    "slug": "yellow-gold-and-diamond-jesus-head-pendant-14k-yellow-gold-and-diamond-cross-pendant-yellow-gold-cuban-2-chains",
    "description": "<p><strong>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! <span>Call us at (929) 689-2205 for more info.</span></strong></p>\n<p><iframe title=\"YouTube video player\" src=\"https://www.youtube.com/embed/fpil4gBuQmQ\" height=\"315\" width=\"560\"></iframe></p>\n<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 6 piece deal:</p>\n<p><strong>1)Cross pendant:</strong></p>\n<p><span>14k yellow gold and natural round, baguette diamonds pendant.</span></p>\n<p><span>Approximate diamond weight: 1.03ct.</span></p>\n<p><span>Approximate pendant height (including bail): 1.8 inch.</span></p>\n<p><span>Approximate weight:  9.8 grams ( 16 inches chain + pendant combined).</span></p>\n<p><strong>2) Jesus Head Pendant:</strong><br></p>\n<p><span>10k yellow gold and natural round and baguette diamonds pendant.</span></p>\n<p><span>Approximate diamond weight: 2.66ct.</span></p>\n<p><span>Approximate pendant height (including bail):  2 inch.</span></p>\n<p><span>Approximate weight:  16.8 grams ( 16 inches chain + pendant combined).</span></p>\n<p><strong>3&amp;4) Cuban Chain:</strong></p>\n<p><span>10k yellow gold approx. 3mm cuban 2 chains.</span></p>\n<p><strong>5) Complimentary earrings: </strong></p>\n<p><span>2 pair of complimentary diamond and gold earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>6) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 6208.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-24at5.28.52PM.jpg?v=1750800559",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-24at5.28.52PM_1.jpg?v=1750800559",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-24at5.28.52PM_2.jpg?v=1750800559",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-24at5.28.52PM_3.jpg?v=1750800559"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Jesus Head Pendant + 14k Yellow Gold and Diamond Cross Pendant + Yellow Gold Cuban 2 Chains",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T09:20:25.219Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-145",
    "name": "14k gold and diamond Bangle (choose your color)",
    "slug": "14k-gold-and-diamond-bangle-choose-your-color",
    "description": "<ul>\n<li>14k yellow or white gold and natural baguette, round diamonds.<br>\n</li>\n<li>Approximate top width: 10 mm.</li>\n<li>Size: 7 inches</li>\n<li>Approximate weight: 6 grams.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1437.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.51.23PM.jpg?v=1750456332",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.51.23PM_1.jpg?v=1750456332"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-10T08:20:25.219Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-146",
    "name": "10k yellow gold Gun Diamond Pendant",
    "slug": "14k-gold-3d-hamsa-allah-diamond-pendant-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">10k yellow gold and natural round diamonds pendant.<br>\n</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 2.99ct.</li>\n<li data-mce-fragment=\"1\">Approximate pendant height (including bail): 40.97mm.</li>\n<li data-mce-fragment=\"1\">Approximate weight: 10.8 grams . </li>\n<li data-mce-fragment=\"1\">Chain is not included.</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings.</li>\n</ul>\n<p><br></p>\n<p><br></p>",
    "price": 3218.85,
    "sale_price": 2736,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.38.14PM.jpg?v=1750455535",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.38.15PM.jpg?v=1750455535",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.38.15PM_1.jpg?v=1750455535"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "10k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T07:20:25.219Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-147",
    "name": "14k white gold and diamond Earrings",
    "slug": "14k-white-gold-and-diamond-earrings-copy-2",
    "description": "<ul>\n<li>14k white gold and natural princess cut diamonds.</li>\n<li>Approximate diamond weight: 2.50ct<br>\n</li>\n<li>Approximate earrings width: 15.60mm.</li>\n<li>Approximate weight:  8.9 grams.<br>\n</li>\n<li>Comes with a free pair of gold and diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1256.95,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.10.15PM.jpg?v=1750453846",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.10.15PM_1.jpg?v=1750453846",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at5.10.16PM.jpg?v=1750453845"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T06:20:25.219Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-148",
    "name": "14k white gold and diamond Earrings",
    "slug": "14k-white-gold-and-diamond-earrings",
    "description": "<ul>\n<li>14k white gold and natural princess cut, round diamonds.</li>\n<li>Approximate diamond weight: 1.40ct<br>\n</li>\n<li>Approximate earrings width: 17.83mm.</li>\n<li>Approximate weight:  7.9 grams.<br>\n</li>\n<li>Comes with a free pair of gold and diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 2300,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at4.54.31PM_1.jpg?v=1750452918",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at4.54.31PM_2.jpg?v=1750452918",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at4.54.31PM_3.jpg?v=1750452918",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at4.54.31PM_4.jpg?v=1750452918",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-20at4.54.31PM.jpg?v=1750452918"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-10T05:20:25.219Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-149",
    "name": "31mm Rolex Watch with Stainless Steel Oyster Band + White Gold and Diamond Twin Square Bangle + 14k White Gold and Diamond Halo Ring",
    "slug": "31mm-rolex-watch-with-stainless-steel-oyster-band-white-gold-and-diamond-twin-square-bangle-14k-white-gold-and-diamond-halo-ring",
    "description": "<p><strong>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! <span>Call us at (929) 689-2205 for more info.</span></strong></p>\n<p><iframe title=\"YouTube video player\" src=\"https://www.youtube.com/embed/YWsGhu_HRc4\" height=\"315\" width=\"560\"></iframe></p>\n<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 5 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Preowned 31mm Rolex Datejust Watch.</p>\n<p>Case Material: Stainless Steel.</p>\n<p>Bracelet: oyster. </p>\n<p>Dial: mother of pearl dial with diamonds.</p>\n<p>Custom diamond dial and bezel by customer request. </p>\n<p>Movement: Automatic.</p>\n<p>Condition: Pre-owned, excellent condition.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>10k White Gold Twin Squares Cuff Diamond Bracelet with Baguettes and Round diamonds.</p>\n<p><span>Approximate diamond weight: 1.50ct.</span></p>\n<p><span>Size: 6 inches.</span></p>\n<p><span>If you need bigger size please call at +1(718) 558-6139.</span></p>\n<p><strong>3) Ring: </strong></p>\n<p><span>14k white gold ring with natural earth mind Diamonds.</span></p>\n<p><span>Approximate diamond weight: 1ct.</span></p>\n<p><span>Size: 7.</span></p>\n<p><span>If you need bigger or smaller size please call at +1(718) 558-6139.</span></p>\n<p><span><strong>4)Earrings:</strong></span></p>\n<p>Complimentary diamond and gold earrings. </p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>5) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 10925,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-19at11.56.19AM.jpg?v=1750348635",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-19at11.56.19AM_1.jpg?v=1750348635",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-19at11.56.19AM_2.jpg?v=1750348635",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-19at11.56.20AM.jpg?v=1750348635",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-19at11.56.20AM_1.jpg?v=1750348635"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "31mm Rolex Watch with Stainless Steel Oyster Band + White Gold and Diamond Twin Square Bangle + 14k White Gold and Diamond Halo Ring",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T04:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-150",
    "name": "40mm Rolex Watch with Stainless Steel oyster band + White Gold and Diamond Cross Bracelet",
    "slug": "40mm-rolex-watch-with-stainless-steel-oyster-band-white-gold-and-diamond-cross-bracelet",
    "description": "<p><strong>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! <span>Call us at (929) 689-2205 for more info.</span></strong></p>\n<p><iframe title=\"YouTube video player\" src=\"https://www.youtube.com/embed/lM_mB8_6Hh0\" height=\"315\" width=\"560\"></iframe></p>\n<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 40mm Rolex  Diamond Watch.</p>\n<p>Stainless steel.</p>\n<p>Bracelet: oyster.</p>\n<p>Custom diamond and white gold bezel by customer request.</p>\n<p>Black dial.</p>\n<p>Approximate diamond weight: 3.80ct.</p>\n<p><span>Natural earth mined di</span>amonds.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>10k white gold and natural round, baguette diamonds.</p>\n<p>Approximate diamond weight: 2.97ct.</p>\n<p>Approximate weight: 14.99 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: links-7.14mm, cross-12.46mm.</p>\n<p>7 inches.</p>\n<p><strong>3)Earrings:</strong><br></p>\n<p><span>Complimentary diamond and gold small earrings. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 14375,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-18at3.52.24PM_3.jpg?v=1750348349",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-18at3.52.25PM_4.jpg?v=1750348355",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-18at3.52.25PM_3.jpg?v=1750348355",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-18at3.52.24PM_5.jpg?v=1750348355",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-18at3.52.24PM_4.jpg?v=1750348355"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "40mm Rolex Watch with Stainless Steel oyster band + White Gold and Diamond Cross Bracelet",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T03:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-151",
    "name": "36mm Rolex Watch with Rubber Band + Yellow Gold and Diamond Ring",
    "slug": "36mm-rolex-watch-with-rubber-band-yellow-gold-and-diamond-ring",
    "description": "<p><strong>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! <span>Call us at (929) 689-2205 for more info.</span></strong></p>\n<p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/q_xyy_ZzmWM\" title=\"YouTube video player\"></iframe></p>\n<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1)Watch:</strong></p>\n<p>Preowned 36mm Rolex Watch.</p>\n<p>Two-tone: stainless steel and gold.</p>\n<p>Rubber band.</p>\n<p>Custom diamond bezel and dial by customer request. </p>\n<p>Blue dial with roman numerals. </p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>\n<p><span><strong>2)Ring:</strong></span></p>\n<p>10k yellow gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 2.72ct.</p>\n<p>Approximate weight: 7.9 grams.</p>\n<p>Approximate ring width: 19.60mm.</p>\n<p>Size: 9.5.</p>\n<p>If you need bigger or smaller size please call us at <strong><span>+1(718) 558-6139.</span></strong></p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p><span>Complementary small earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 8625,
    "sale_price": 7331,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at4.16.19PM.jpg?v=1749845845",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at4.16.20PM.jpg?v=1749845847",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at4.16.20PM_1.jpg?v=1749845847",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at4.16.20PM_2.jpg?v=1749845847",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at4.16.20PM_3.jpg?v=1749845847"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "36mm Rolex Watch with Rubber Band + Yellow Gold and Diamond Ring",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-10T02:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-152",
    "name": "14k yellow gold and diamond Cross Pendant + Ring + Yellow Gold and Diamond Earrings + 14k Yellow Gold chain (Father`s Day Special)",
    "slug": "14k-yellow-gold-and-diamond-cross-pendant-ring-yellow-gold-and-diamond-earrings-14k-yellow-gold-chain-father-s-day-special",
    "description": "<p>Look stunning with this luxurious set of jewelry. This collection includes 6 piece deal:</p>\n<p><strong>1&amp;2)14k yellow gold and diamond Cross Pendant: </strong></p>\n<p>14k yellow gold and round &amp; baguette diamonds.</p>\n<p>Approximate diamond weight: 1.43ct</p>\n<p>Comes with 14k yellow gold approx. 2mm Cuban Chain.</p>\n<p>Approximate weight: 12.5 grams (16\" chain + pendant).</p>\n<p><span><strong>3)14k yellow gold and diamond Ring :</strong></span></p>\n<p>14k yellow gold and round &amp; baguette diamonds.</p>\n<p>Approximate weight: 8.4 grams.</p>\n<p>Natural earth mined diamonds.</p>\n<p><strong>4) Gold &amp; diamond  Earrings:</strong><br></p>\n<p><span>10k  yellow gold and round &amp; baguette diamond earrings.</span></p>\n<p>Approximate diamond weight: 0.38ct</p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>5&amp;6) Gift from Marchello the Jeweler:</strong></p>\n<p>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 5058.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at2.47.57PM.jpg?v=1749840541",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at2.47.58PM.jpg?v=1749840546",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at2.47.58PM_1.jpg?v=1749840546",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at2.47.58PM_2.jpg?v=1749840546",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at2.47.58PM_3.jpg?v=1749840546",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-13at2.47.58PM_4.jpg?v=1749840546"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "14k yellow gold and diamond Cross Pendant + Ring + Yellow Gold and Diamond Earrings + 14k Yellow Gold chain (Father`s Day Special)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T01:20:25.219Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-153",
    "name": "Yellow Gold and Diamond Star Necklace with Round Diamonds",
    "slug": "yellow-gold-and-diamond-star-necklace-with-round-diamonds",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds.<br>\n</li>\n<li>Approximate diamond weight: 8.75ct (depending on length).</li>\n<li>Approximate weight: 32.52 grams (depending on length).</li>\n<li>Approximate width: 9.76 mm.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 5750,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.34.33PM.jpg?v=1749764109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.34.33PM_1.jpg?v=1749764109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.34.33PM_2.jpg?v=1749764109",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.34.34PM.jpg?v=1749764109"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Star Necklace with Round Diamonds",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-10T00:20:25.219Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-154",
    "name": "Yellow Gold and Diamond Star Tennis Necklace",
    "slug": "yellow-gold-and-diamond-star-tennis-necklace",
    "description": "<ul>\n<li>10k yellow gold and natural round, baguette diamonds.<br>\n</li>\n<li>Approximate diamond weight: 3.13ct (depending on length).</li>\n<li>Approximate weight:  24.2 grams (depending on length).</li>\n<li>Approximate width: star-9.83mm, chain-3.23mm.</li>\n<li>Size:19 inches.</li>\n<li>If you need longer length please call at<span> </span><span>+1(718) 558-6139.</span>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 4830,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.24.54PM.jpg?v=1749763515",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.24.55PM_1.jpg?v=1749763515",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at5.24.55PM.jpg?v=1749763515"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Star Tennis Necklace",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-09T23:20:25.219Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-155",
    "name": "14k yellow gold and diamond Butterfly Necklace with round and baguette diamonds",
    "slug": "14k-yellow-gold-and-diamond-butterfly-necklace-with-round-and-baguette-diamonds",
    "description": "<ul>\n<li>14k yellow gold and natural round, baguette diamonds.<br>\n</li>\n<li>Approximate diamond weight: 5.95ct (depending on length).</li>\n<li>Approximate weight: 26 grams (depending on length).</li>\n<li>Approximate width: 5.11 mm.</li>\n<li>Size:16 inches.</li>\n<li>If you need longer length please call at <span>+1(718) 558-6139.</span>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 7475,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at2.04.05PM.jpg?v=1749762760",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at2.04.06PM_3.jpg?v=1749762765",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at2.04.06PM_1.jpg?v=1749762765",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at2.04.06PM_2.jpg?v=1749762765",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-12at2.04.06PM.jpg?v=1749762761"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T22:20:25.219Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-156",
    "name": "18k yellow gold and diamond Engagement Ring",
    "slug": "18k-yellow-gold-and-diamond-engagement-ring",
    "description": "<ul>\n<li>18k yellow gold and natural radiant cut and round diamonds.</li>\n<li>Approximate diamond weight: total-2.07ct., center stone-1.29ct.</li>\n<li>Approximate weight: <span> 4.5 grams.</span>\n</li>\n<li><span>Approximate shank width: 1.95 mm.</span></li>\n<li>Approximate top dimensions: 11.73<span> </span>x 9.98 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 7475,
    "sale_price": 6354,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-06-06_at_5.37.31_PM.jpg?v=1749245883",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at5.35.21PM.jpg?v=1749245883",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at5.35.22PM.jpg?v=1749245883",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at5.35.23PM.jpg?v=1749245883"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T21:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-157",
    "name": "18k white gold and diamond Engagement Ring with marquise and round diamonds",
    "slug": "18k-white-gold-and-diamond-engagement-ring-with-marquise-and-round-diamonds",
    "description": "<ul>\n<li>18k white gold and natural marquise and round diamonds.</li>\n<li>Approximate diamond weight: total-1.85ct., center stone-1.01ct.</li>\n<li>Approximate weight: 3.6<span> grams.</span>\n</li>\n<li><span>Approximate shank width: 1.95 mm.</span></li>\n<li>Approximate top dimensions: 15.27<span> </span>x 9.83 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 5520,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-06-06_at_5.01.06_PM.jpg?v=1749243693",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at5.00.05PM_1.jpg?v=1749243693",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at5.00.05PM_2.jpg?v=1749243693",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at5.00.05PM_3.jpg?v=1749243693"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-09T20:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-158",
    "name": "14k white gold and diamond Men`s Band",
    "slug": "14k-white-gold-and-diamond-men",
    "description": "<ul>\n<li>14k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight:<span> 0.80ct.</span>\n</li>\n<li>Approximate item weight: <span> 12 grams at size 10.  Actual weight will vary, based on selected ring size.</span><span></span>\n</li>\n<li><span>Approximate band width: 6.61mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3047.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at2.03.09PM.jpg?v=1749233022",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at2.03.09PM_1.jpg?v=1749233022",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at2.03.09PM_2.jpg?v=1749233022",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at2.03.10PM.jpg?v=1749233020"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T19:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-159",
    "name": "14k Rose Gold and Diamond Men`s Ring with Baguette and Round Diamonds",
    "slug": "14k-rose-gold-and-diamond-men-s-ring-with-baguette-and-round-diamonds",
    "description": "<ul>\n<li>14k rose gold and natural round, baguette diamonds.</li>\n<li>Approximate diamond weight:<span> 3.12ct.</span>\n</li>\n<li>Approximate item weight: <span> 12.2 grams at size 10.  Actual weight will vary, based on selected ring size.</span><span></span>\n</li>\n<li><span>Approximate top width: 18.43mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3967.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.10.52PM.jpg?v=1749229888",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.10.53PM_1.jpg?v=1749229888",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.10.53PM.jpg?v=1749229888"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Rose Gold and Diamond Men`s Ring with Baguette and Round Diamonds",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T18:20:25.219Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-160",
    "name": "14k white gold and diamond Men`s Ring with Baguette and Round Diamonds",
    "slug": "14k-white-gold-and-diamond-men-s-ring-with-baguette-and-round-diamonds",
    "description": "<ul>\n<li>14k white gold and natural round, baguette diamonds.</li>\n<li>Approximate diamond weight: 3.85ct. </li>\n<li>Approximate weight: 14.9 <span> </span><span>grams (depending on size).</span>\n</li>\n<li><span>Approximate top ring width:  15.84mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 3622.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.32.49PM.jpg?v=1749231209",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.32.50PM_1.jpg?v=1749231208",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.32.50PM_2.jpg?v=1749231209",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-06at1.32.50PM.jpg?v=1749231209"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-09T17:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-161",
    "name": "White Gold and Diamond Earrings with Princess cut and Round Diamonds",
    "slug": "white-gold-and-diamond-earrings-with-princess-cut-and-round-diamonds",
    "description": "<ul>\n<li>10k white gold and natural earth mined round, princess cut diamonds.</li>\n<li>Approximate diamond weight: 1.50ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight:  4.1 grams.</li>\n<li>Approximate diameter: 12.66mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1840,
    "sale_price": 1564,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at6.07.48PM.jpg?v=1749161302",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at6.07.49PM_1.jpg?v=1749161301",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at6.07.49PM.jpg?v=1749161302",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.29.10AM_1_77f02f66-33e4-40a4-a111-a05a490d1069.jpg?v=1749161301"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "White Gold and Diamond Earrings with Princess cut and Round Diamonds",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T16:20:25.220Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-162",
    "name": "14k yellow gold and diamond Round Earrings with baguette and round diamonds",
    "slug": "14k-yellow-gold-and-diamond-round-earrings-with-baguette-and-round-diamonds-1",
    "description": "<ul>\n<li>14k yellow gold and natural earth mined round, baguette diamonds.</li>\n<li>Approximate diamond weight: 2.30ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight:  5.9 grams.</li>\n<li>Approximate diameter: 13.32mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1955,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.42.00PM.jpg?v=1749159781",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.42.00PM_1.jpg?v=1749159781",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.42.00PM_2.jpg?v=1749159781",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.42.01PM.jpg?v=1749159789"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T15:20:25.220Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-163",
    "name": "14k white gold and diamond Earrings with Round Diamonds",
    "slug": "14k-white-gold-and-diamond-earrings-with-round-diamonds-copy",
    "description": "<ul>\n<li>14k white gold and natural earth mined round, baguette diamonds.</li>\n<li>Approximate diamond weight: 1.90ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight:  4.4 grams.</li>\n<li>Approximate dimension: 11.70mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1955,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.32.27PM.jpg?v=1749159201",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.32.27PM_1.jpg?v=1749159201",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.32.28PM_1.jpg?v=1749159197",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.32.28PM_2.jpg?v=1749159196",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.32.28PM_3.jpg?v=1749159197",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.32.28PM.jpg?v=1749159197"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-09T14:20:25.220Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-164",
    "name": "14k white gold and diamond Earrings with Round Diamonds",
    "slug": "14k-white-gold-and-diamond-earrings-with-round-diamonds-1",
    "description": "<ul>\n<li>14k white gold and natural earth mined round diamonds.</li>\n<li>Approximate diamond weight: 1.20ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight:  5.5 grams.</li>\n<li>Approximate diameter: 12.47mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1380,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.07.47PM_1.jpg?v=1749157707",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.07.47PM.jpg?v=1749157707",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at5.07.48PM.jpg?v=1749157707"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T13:20:25.220Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-165",
    "name": "34mm Rolex Watch with Stainless Steel Oyster Band",
    "slug": "34mm-rolex-watch-with-stainless-steel-oyster-band",
    "description": "<ul>\n<li data-start=\"137\" data-end=\"187\">Pre-Owned 34mm Rolex Watch.</li>\n<li data-start=\"191\" data-end=\"212\">\n<strong data-start=\"191\" data-end=\"205\">Case Size:</strong> 34mm</li>\n<li data-start=\"215\" data-end=\"246\">\n<strong data-start=\"215\" data-end=\"228\">Material:</strong> Stainless Steel</li>\n<li data-start=\"249\" data-end=\"271\">\n<strong data-start=\"249\" data-end=\"262\">Bracelet:</strong> Oyster</li>\n<li data-start=\"274\" data-end=\"299\">\n<strong data-start=\"274\" data-end=\"287\">Movement:</strong> Automatic</li>\n<li data-start=\"326\" data-end=\"422\">\n<strong data-start=\"326\" data-end=\"335\">Dial:</strong> Custom white dial with Arabic numerals and the phrase <em data-start=\"390\" data-end=\"420\">“Who cares I’m already late”</em>\n</li>\n<li data-start=\"425\" data-end=\"506\">\n<strong data-start=\"425\" data-end=\"435\">Bezel:</strong> Diamond bezel (approx. 1ct total weight) – aftermarket customization</li>\n<li><strong data-start=\"508\" data-end=\"521\">Includes:</strong></li>\n<li data-start=\"526\" data-end=\"569\">Complimentary <strong data-start=\"540\" data-end=\"567\">gold &amp; diamond earrings</strong>\n</li>\n<li data-start=\"572\" data-end=\"642\">\n<strong data-start=\"572\" data-end=\"605\">Premium Marchello The Jeweler</strong> presentation box with LED lighting</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 7935,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at3.07.50PM.jpg?v=1749150513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at3.07.50PM_1.jpg?v=1749150513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at3.07.50PM_2.jpg?v=1749150513",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at3.07.50PM_3.jpg?v=1749150513"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T12:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-166",
    "name": "41mm Pasha de Cartier Watch with two-tone bracelet (papers, original box)",
    "slug": "41mm-pasha-de-cartier-watch-with-two-tone-bracelet-papers",
    "description": "<ul>\n<li>Pre-owned 41 mm Pasha de Cartier Watch.</li>\n<li>Two-tone: 18k gold and stainless steel.</li>\n<li>Automatic winding.</li>\n<li>Smooth bezel.</li>\n<li><span>Silvered flinqué dial with Arabic numerals.</span></li>\n<li><span>Year: 2024.</span></li>\n<li><span>Comes with  original paper.</span></li>\n<li><span>Comes with original box.</span></li>\n<li>Comes with free gold &amp; diamond earrings.<br>\n</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Cartier watches and is not an authorized Cartier dealer. Addition of non-Cartier parts voids Cartier warranty: Cartier will not service watches containing non-Cartier parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 8970,
    "sale_price": 7625,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.52.38PM.jpg?v=1749149620",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.52.38PM_1.jpg?v=1749149620",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.52.38PM_2.jpg?v=1749149620",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.52.39PM.jpg?v=1749149620",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.52.39PM_1.jpg?v=1749149620"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-09T11:20:25.220Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-167",
    "name": "Model #1601  36mm Rolex Watch with Stainless Steel Jubilee Bracelet",
    "slug": "model-1601-36mm-rolex-watch-with-stainless-steel-jubilee-bracelet",
    "description": "<ul>\n<li>Pre-owned 36mm Rolex Datejust Watch.</li>\n<li>Bracelet: jubilee.</li>\n<li>Stainless steel.</li>\n<li>Red dial with Roman numerals.<br>\n</li>\n<li>Fluted bezel.</li>\n<li>Model #1601</li>\n<li>Custom dial by customer request. </li>\n<li>Automatic movement.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 5175,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.04.25PM.jpg?v=1749146713",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.04.26PM_1.jpg?v=1749146713",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.04.26PM_2.jpg?v=1749146713",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.04.26PM_3.jpg?v=1749146713",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.04.26PM_4.jpg?v=1749146713"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T10:20:25.220Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-168",
    "name": "Model number: 16030  36mm Rolex Diamond Watch with Stainless Steel Oyster Band",
    "slug": "36mm-rolex-diamond-watch-with-stainless-steel-oyster-band",
    "description": "<ul>\n<li>Pre-owned 36mm Rolex Datejust Watch.</li>\n<li>Bracelet: oyster.</li>\n<li>Stainless steel.</li>\n<li>Brown dial with Roman numerals.</li>\n<li>Approximate diamond weight: 2.40ct.</li>\n<li>Model number: 16030.</li>\n<li>Custom diamond dial and bezel by customer request.<br>\n</li>\n<li>Automatic movement.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 7992.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.12.29PM.jpg?v=1749147201",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.12.29PM_1.jpg?v=1749147201",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.12.30PM_1.jpg?v=1749147197",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.12.30PM_2.jpg?v=1749147197",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at2.12.30PM.jpg?v=1749147197"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T09:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-169",
    "name": "Yellow Gold and Diamond Jesus Pendant and Yellow Gold Cuban Chain",
    "slug": "yellow-gold-and-diamond-jesus-pendant-and-yellow-gold-cuban-chain",
    "description": "<ul>\n<li>Charm is 10k yellow gold and natural round, baguette diamonds.</li>\n<li>Approximate pendant height (including bail): 42.30mm.<br>\n</li>\n<li>Chain is 10k yellow gold cuban chain.</li>\n<li>Approximate diamond weight: 1.6ct.</li>\n<li>Approximate chain width: 2mm.<br>\n</li>\n<li>\n<strong data-start=\"59\" data-end=\"81\">Available Options:  1)</strong><strong data-start=\"86\" data-end=\"102\">Pendant Only</strong><span><span> </span>– Includes pendant. Chain not included. <span> </span></span><span><strong>2) </strong></span><strong data-start=\"147\" data-end=\"161\">With Chain</strong><span><span> </span>– Includes pendant and matching chain.</span>\n</li>\n<li>Approximate weight:  16.3 grams (pendant and 18\" chain combined). Actual weight will vary, based on selected chain length.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 4025,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.40.14PM.jpg?v=1749141830",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.40.14PM_1.jpg?v=1749141830",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.40.14PM_2.jpg?v=1749141830",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.40.15PM.jpg?v=1749141827"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "Yellow Gold and Diamond Jesus Pendant and Yellow Gold Cuban Chain",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-09T08:20:25.220Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-170",
    "name": "14k Yellow Gold and Diamond Jesus Pendant and Yellow Gold Cuban Chain",
    "slug": "14k-yellow-gold-and-diamond-jesus-pendant-and-yellow-gold-cuban-chain",
    "description": "<ul>\n<li>Charm is 14k yellow gold and natural round diamonds.</li>\n<li>Approximate pendant height (including bail): 50.70mm.<br>\n</li>\n<li>Chain is 10k yellow gold cuban chain.</li>\n<li>Approximate diamond weight: 4.20ct.</li>\n<li>Approximate chain width: 2mm.</li>\n<li>\n<strong data-start=\"59\" data-end=\"81\" style=\"font-size: 0.875rem;\">Available Options:  1)</strong><strong data-start=\"86\" data-end=\"102\" style=\"font-size: 0.875rem;\">Pendant Only</strong><span style=\"font-size: 0.875rem;\"> – Includes pendant. Chain not included.  </span><span style=\"font-size: 0.875rem;\"><strong>2) </strong></span><strong data-start=\"147\" data-end=\"161\" style=\"font-size: 0.875rem;\">With Chain</strong><span style=\"font-size: 0.875rem;\"> – Includes pendant and matching chain.</span>\n</li>\n<li>Approximate weight: 20.6 grams (pendant and 18\" chain combined). Actual weight will vary, based on selected chain length.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 5748.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.12.50PM.jpg?v=1749140015",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.12.50PM_1.jpg?v=1749140015",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.12.50PM_2.jpg?v=1749140015",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.12.50PM_3.jpg?v=1749140015"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Yellow Gold and Diamond Jesus Pendant and Yellow Gold Cuban Chain",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T07:20:25.220Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-171",
    "name": "14k Yellow Gold and Diamond Praying Hand and Yellow Gold Ice Link Chain",
    "slug": "14k-yellow-gold-and-diamond-praying-hand-and-yellow-gold-ice-link-chain",
    "description": "<li>Charm is 14k yellow gold and natural round, baguette diamonds.</li>\n<li>Approximate pendant height (including bail): 34mm.<br>\n</li>\n<li>Chain is 10k yellow gold ice link chain.</li>\n<li>Approximate diamond weight: 2.76ct.</li>\n<li>Approximate chain width: 2mm.<br>\n</li>\n<li>Approximate weight:  19.9 grams (pendant and 16\" chain combined). Actual weight will vary, based on selected chain length.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n",
    "price": 4598.85,
    "sale_price": 3909,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.31.42PM.jpg?v=1749141189",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.31.42PM_1.jpg?v=1749141189",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at12.31.42PM_2.jpg?v=1749141189"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "44444444-4444-4444-4444-444444444444",
    "gender": "Women",
    "material": "14k Yellow Gold and Diamond Praying Hand and Yellow Gold Ice Link Chain",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T06:20:25.220Z",
    "category": {
      "id": "44444444-4444-4444-4444-444444444444",
      "slug": "chains",
      "name": "Chains"
    }
  },
  {
    "id": "seed-prod-172",
    "name": "18k rose gold and diamond Ladies` Rings with round diamonds and pink sapphire",
    "slug": "18k-rose-gold-and-diamond-ladies-rings-with-round-diamonds-and-sapphire",
    "description": "<ul>\n<li>18k rose gold and natural round diamonds and pink sapphire.</li>\n<li>Approximate diamond weight: <span>0.92</span>ct.</li>\n<li>Approximate item weight: <span> 8.3 grams at size 7.  Actual weight will vary, based on selected ring size.</span><span></span>\n</li>\n<li><span>Approximate top width: 15.13mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3450,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.43.57AM.jpg?v=1749138283",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.43.57AM_1.jpg?v=1749138283",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.43.57AM_2.jpg?v=1749138283",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.43.57AM_3.jpg?v=1749138283"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-09T05:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-173",
    "name": "18k white gold and diamond Pear shape Engagement Ring",
    "slug": "18k-white-gold-and-diamond-pear-shape-ring",
    "description": "<ul>\n<li>18k white gold and natural round, pear diamonds.</li>\n<li>Approximate diamond weight:<span> total- 3.29</span>ct., center stone - 1.52ct.</li>\n<li>Approximate item weight: <span> 5.6 grams at size 6 1/4.  Actual weight will vary, based on selected ring size.</span>\n</li>\n<li>\n<span>Average color: D-center stone.</span><span></span>\n</li>\n<li><span>Average clarity: SI2- center stone.</span></li>\n<li><span>Approximate top width: 14.05mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 11500,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.29.10AM.jpg?v=1749137390",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.29.10AM_1.jpg?v=1749137390",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.29.10AM_2.jpg?v=1749137390",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-05at11.29.10AM_3.jpg?v=1749137390"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T04:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-174",
    "name": "18k white gold and diamond Ladies` Fancy Ring",
    "slug": "18k-white-gold-and-diamond-ladies-fancy-ring-copy",
    "description": "<ul>\n<li>18k white gold and natural round, princess cut, pear, marquise diamonds.</li>\n<li>Approximate diamond weight: 1.34ct.</li>\n<li>Approximate weight:  4.4 <span>grams (actual weight may vary, based on selected size).</span>\n</li>\n<li>Approximate top width: 10.23mm.</li>\n<li>Average clarity: VVS/VS.</li>\n<li>Comes with a free pair of gold &amp; diamond earrings.</li>\n</ul>",
    "price": 4600,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.49.59PM.jpg?v=1749066649",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.49.59PM_1.jpg?v=1749066649",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.49.59PM_2.jpg?v=1749066648",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.50.00PM.jpg?v=1749066631"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T03:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-175",
    "name": "18k white gold and diamond Ladies` Fancy Ring",
    "slug": "18k-white-gold-and-diamond-ladies-fancy-ring",
    "description": "<ul>\n<li>18k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.30ct.</li>\n<li>Approximate weight: 5.4 <span>grams (actual weight may vary, based on selected size).</span>\n</li>\n<li>Approximate top width: 19.62mm.</li>\n<li>Average clarity: VS.</li>\n<li>Comes with a free pair of gold &amp; diamond earrings.</li>\n</ul>",
    "price": 3335,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.29.08PM.jpg?v=1749065392",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.29.08PM_1.jpg?v=1749065392",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at3.29.08PM_2.jpg?v=1749065392"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-09T02:20:25.220Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-176",
    "name": "18k white gold and diamond Ladies` Ring with Baguette Diamonds",
    "slug": "18k-white-gold-and-diamond-ladies-ring-with-baguette-diamonds",
    "description": "<ul>\n<li>18k white gold and natural baguette diamonds.</li>\n<li>Approximate diamond weight:<span> 1.40</span>ct.</li>\n<li>Approximate item weight: <span> 4.4 grams at size 7. Actual weight will vary, based on selected ring size.</span>\n</li>\n<li><span>Approximate top width: 10.07mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3795,
    "sale_price": 3226,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-06-04_at_2.26.58_PM.jpg?v=1749061661",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at2.15.48PM_1.jpg?v=1749061661",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at2.15.48PM_2.jpg?v=1749061661",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-04at2.15.48PM_3.jpg?v=1749061661",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-06-04_at_2.15.49_PM.jpg?v=1749061661"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T01:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-177",
    "name": "36mm Rolex Watch with Stainless Steel Jubilee Band + 14k white gold and diamond Bracelet (Father`s Day Special)",
    "slug": "36mm-rolex-watch-with-stainless-steel-jubilee-band-14k-white-gold-and-diamond-bracelet-father-s-day-special",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 36mm Rolex  Diamond Watch.</p>\n<p>Stainless steel.</p>\n<p>Bracelet: jubilee.</p>\n<p>Custom diamond dial and bezel by customer request.</p>\n<p>Approximate diamond weight: 2.40ct.</p>\n<p><span>Natural earth mined di</span>amonds.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>14k white gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 8ct.</p>\n<p>Average clarity: VS.</p>\n<p>Approximate weight: 34.7 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: links-7.9mm, clover-9.73mm.</p>\n<p>8 inches.</p>\n<p><strong>3)Earrings:</strong><br></p>\n<p><span>Complimentary diamond and gold small earrings. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 13156,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.29PM.jpg?v=1748895743",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.29PM_1.jpg?v=1748895743",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.29PM_2.jpg?v=1748895743",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.30PM_1.jpg?v=1748895740",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.30PM_2.jpg?v=1748895740",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.30PM_3.jpg?v=1748895740",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at4.21.30PM.jpg?v=1748895740"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-09T00:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-178",
    "name": "14k yellow gold and diamond Men`s Band",
    "slug": "14k-yellow-gold-and-diamond-men-s-band-copy",
    "description": "<div id=\"shopify-section-product-template\" class=\"shopify-section\">\n<div class=\"product-template__container page-width\" id=\"ProductSection-product-template\" data-section-id=\"product-template\" data-section-type=\"product\" data-enable-history-state=\"true\" data-ajax-enabled=\"false\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k yellow gold and natural princess cut diamonds.</li>\n<li>Approximate diamond weight: 1.45ct. </li>\n<li>Approximate weight:  9.4 <span>grams (depending on size).</span>\n</li>\n<li><span>Approximate band width: 8.20 mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 2356.35,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at3.10.42PM_2.jpg?v=1748891481",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at3.10.42PM_1.jpg?v=1748891481",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at3.10.42PM.jpg?v=1748891481",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at3.10.42PM_3.jpg?v=1748891481"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-08T23:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-179",
    "name": "14k yellow gold and diamond Men`s Ring with Round diamonds",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-with-round-diamonds-copy",
    "description": "<div class=\"shopify-section\" id=\"shopify-section-product-template\">\n<div data-ajax-enabled=\"false\" data-enable-history-state=\"true\" data-section-type=\"product\" data-section-id=\"product-template\" id=\"ProductSection-product-template\" class=\"product-template__container page-width\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 3.29ct. </li>\n<li>Approximate weight:  15.2 <span>grams (depending on size).</span>\n</li>\n<li><span>Approximate top ring width:  19.04mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 3621.35,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.49.00PM.jpg?v=1748890181",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.49.00PM_1.jpg?v=1748890181",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.49.00PM_2.jpg?v=1748890181",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.49.00PM_3.jpg?v=1748890181"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T22:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-180",
    "name": "14k yellow gold and diamond Men`s Ring with Round diamonds",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-with-baguette-and-round-diamonds-copy-1",
    "description": "<div id=\"shopify-section-product-template\" class=\"shopify-section\">\n<div class=\"product-template__container page-width\" id=\"ProductSection-product-template\" data-section-id=\"product-template\" data-section-type=\"product\" data-enable-history-state=\"true\" data-ajax-enabled=\"false\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 5ct. </li>\n<li>Approximate weight:  18.9 <span>grams (depending on size).</span>\n</li>\n<li><span>Approximate top ring width:  19.42 mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 4656.35,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.36.10PM.jpg?v=1748889407",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.36.10PM_1.jpg?v=1748889407",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.36.11PM.jpg?v=1748889407",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.36.11PM_1.jpg?v=1748889407"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T21:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-181",
    "name": "14k yellow gold and diamond Men`s Band",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-with-baguette-and-round-diamonds-copy",
    "description": "<div id=\"shopify-section-product-template\" class=\"shopify-section\">\n<div class=\"product-template__container page-width\" id=\"ProductSection-product-template\" data-section-id=\"product-template\" data-section-type=\"product\" data-enable-history-state=\"true\" data-ajax-enabled=\"false\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k yellow gold and natural princess cut diamonds.</li>\n<li>Approximate diamond weight: 1ct. </li>\n<li>Approximate weight:  7 <span>grams (depending on size).</span>\n</li>\n<li><span>Approximate band width: 8.20 mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 2356.35,
    "sale_price": 2003,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.20.45PM.jpg?v=1748888471",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.20.46PM_1.jpg?v=1748888471",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at2.20.46PM.jpg?v=1748888471"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-08T20:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-182",
    "name": "14k yellow gold and diamond Men`s Ring with Baguette and Round diamonds",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-with-baguette-and-round-diamonds-2",
    "description": "<div id=\"shopify-section-product-template\" class=\"shopify-section\">\n<div class=\"product-template__container page-width\" id=\"ProductSection-product-template\" data-section-id=\"product-template\" data-section-type=\"product\" data-enable-history-state=\"true\" data-ajax-enabled=\"false\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k yellow gold and natural round, baguette diamonds.</li>\n<li>Approximate diamond weight: 2.43ct. </li>\n<li>Approximate weight:  9.3 <span>grams (depending on size).</span>\n</li>\n<li><span>Approximate top ring width:  17.13 mm.</span></li>\n<li>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 2587.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.56.29PM.jpg?v=1748887024",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.56.29PM_1.jpg?v=1748887024",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.56.30PM_1.jpg?v=1748887020",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.56.30PM.jpg?v=1748887020"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T19:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-183",
    "name": "14k yellow gold and diamond Earrings",
    "slug": "14k-yellow-gold-and-diamond-earrings",
    "description": "<ul>\n<li>14k yellow gold and natural earth mined round diamonds.</li>\n<li>Approximate diamond weight: 0.75ct.<br>\n</li>\n<li>Screw on back.</li>\n<li>Approximate gold weight:  4.9 grams.</li>\n<li>Approximate diameter: 11.35mm.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 1495,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.20.06PM.jpg?v=1748884849",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.20.06PM_1.jpg?v=1748884849",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.20.06PM_2.jpg?v=1748884849",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-06-02at1.20.06PM_3.jpg?v=1748884849"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T18:20:25.221Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-184",
    "name": "26mm Rolex Ladies` Watch with stainless steel jubilee band (full factory)",
    "slug": "26mm-rolex-ladies-watch-with-stainless-steel-jubilee-band-full-factory",
    "description": "<ul>\n<li>Pre-owned 26mm Rolex Datejust Watch.</li>\n<li>Bracelet: jubilee.</li>\n<li>Stainless steel.</li>\n<li>White dial with Roman numerals.</li>\n<li>Full factory.</li>\n<li>Fluted bezel.</li>\n<li>Automatic movement.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 5520,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at4.35.15PM.jpg?v=1748637399",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at4.35.15PM_1.jpg?v=1748637399",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at4.35.15PM_2.jpg?v=1748637399",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at4.36.11PM.jpg?v=1748637396"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-08T17:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-185",
    "name": "Model #6917  26mm Rolex Watch with two-tone jubilee band",
    "slug": "model-6917-26mm-rolex-watch-with-two-tone-jubilee-band",
    "description": "<ul>\n<li>Preowned  26mm Rolex Jubilee Watch.</li>\n<li>Bracelet: jubilee.</li>\n<li>Two-tone: gold and stainless steel.</li>\n<li>Fluted bezel.<br>\n</li>\n<li>Champagne dial.</li>\n<li>\n<span>Automatic movement.</span><br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>",
    "price": 5748.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at2.52.31PM_1.jpg?v=1748631216",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at2.52.30PM.jpg?v=1748631216",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at2.52.30PM_2.jpg?v=1748631216",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at2.52.31PM.jpg?v=1748631216",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at2.52.30PM_1.jpg?v=1748631216"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T16:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-186",
    "name": "Model #69173  26mm Rolex Datejust Watch with two-tone jubilee band",
    "slug": "model-69173-26mm-rolex-datejust-watch-with-two-tone-jubilee-band",
    "description": "<ul>\n<li>Pre-owned 26mm Rolex Datejust Watch.</li>\n<li>Bracelet: jubilee.</li>\n<li>Two-tone: gold and stainless steel.</li>\n<li>White dial with Arabic numerals.</li>\n<li>Full factory.</li>\n<li>Fluted bezel.</li>\n<li>Automatic movement.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 5922.5,
    "sale_price": 5034,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.55.10PM.jpg?v=1748627785",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.55.10PM_1.jpg?v=1748627785",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.55.11PM_1.jpg?v=1748627782",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.55.11PM.jpg?v=1748627782"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T15:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-187",
    "name": "26mm Rolex Ladies` Watch with two-tone jubilee band (custom diamond bezel and dial)",
    "slug": "26mm-rolex-watch-with-two-tone-jubilee-band-custom-diamond-bezel-and-dial",
    "description": "<ul>\n<li>Pre-owned 26mm Rolex Datejust Watch.</li>\n<li>Bracelet: jubilee.</li>\n<li>Two-tone: gold and stainless steel.</li>\n<li>Black dial with Roman numerals.</li>\n<li>Natural earth round  diamonds.</li>\n<li>Automatic movement.<br>\n</li>\n<li>Approximate diamond weight: 1.10ct. </li>\n<li>Custom diamond bezel and dial by customer request.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 6440,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.45.42PM.jpg?v=1748627187",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.45.43PM.jpg?v=1748627193",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.45.43PM_1.jpg?v=1748627193",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-30at1.45.43PM_2.jpg?v=1748627193"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-08T14:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-188",
    "name": "26mm Rolex Ladies` Watch with Stainless steel oyster band",
    "slug": "26mm-rolex-watch-with-stainless-steel-oyster-band",
    "description": "<ul>\n<li>Pre-owned 26mm Rolex Watch.</li>\n<li>Stainless steel oyster bracelet.</li>\n<li>Natural earth round  diamonds.</li>\n<li>Automatic movement.<br>\n</li>\n<li>Approximate diamond weight: 2ct. </li>\n<li>Custom diamond bezel and dial by customer request.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 6785,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-29at2.28.27PM.jpg?v=1748553452",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-29_at_2.28.27_PM_1.jpg?v=1748553462",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-29_at_2.28.27_PM_2.jpg?v=1748553467",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-29_at_2.28.27_PM_3.jpg?v=1748553472"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T13:20:25.221Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-189",
    "name": "18k gold and diamond Cross Pendant and 14k gold Cuban chain (choose your color)",
    "slug": "18k-gold-and-diamond-cross-pendant-and-14k-gold-cuban-chain",
    "description": "<ul>\n<li>18k white, yellow, rose gold and natural round, pear, marquise  diamond and pink sapphire pendant.</li>\n<li>Comes with a 14k white, yellow, rose gold cuban chain.</li>\n<li>Approximate diamond weight: 1.99ct-2.76ct.<br>\n</li>\n<li>Approximate pendant height (including bail):  35.71mm.</li>\n<li>Approximate weight:  9.8 grams (20\" chain + pendant).</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>",
    "price": 5060,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at5.08.52PM.jpg?v=1748467428",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_5.08.52_PM_1.jpg?v=1748467438",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_5.08.52_PM_2.jpg?v=1748467444",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_5.08.52_PM_3.jpg?v=1748467449",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_5.08.52_PM_4.jpg?v=1748467453"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T12:20:25.221Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-190",
    "name": "Iced out 40mm Rolex Diamond Watch with Stainless Steel Oyster Bracelet",
    "slug": "iced-out-40mm-rolex-diamond-watch-with-stainless-steel-oyster-bracelet-copy",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">Preowned 41 mm Rolex Watch.</li>\n<li data-mce-fragment=\"1\">Stainless steel oyster bracelet.</li>\n<li data-mce-fragment=\"1\">Round and baguette diamonds.</li>\n<li data-mce-fragment=\"1\">Automatic movement.</li>\n<li data-mce-fragment=\"1\">Iced out.</li>\n<li data-mce-fragment=\"1\">Custom diamond bezel and diamonds by customer request.</li>\n<li data-mce-fragment=\"1\">Mint condition.</li>\n<li data-mce-fragment=\"1\">Milgauss green dial.</li>\n<li data-mce-fragment=\"1\">Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n<li data-mce-fragment=\"1\">Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p data-mce-fragment=\"1\"><strong data-mce-fragment=\"1\">Disclaimer:</strong><span data-mce-fragment=\"1\"> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 34500,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_2.56.56_PM_1.jpg?v=1748458751",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_2.56.56_PM.jpg?v=1748458751",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/160EC027-9947-4678-80BE-157B4B139183.jpg?v=1748458751",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/0E42922A-B4D2-42ED-A33C-3C9837DC64FB.jpg?v=1748458751",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/D70D2B93-8C50-485F-9584-64B54B27686A.jpg?v=1748458751",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/22B07170-D955-43EC-9CFB-25042B2C81C4.jpg?v=1748458751"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-08T11:20:25.221Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-191",
    "name": "14k yellow gold and diamond Flower Bracelet",
    "slug": "10k-yellow-gold-and-diamond-cross-bracelet-copy-1",
    "description": "<ul>\n<li>14k yellow gold and natural round, baguette diamonds.<br>\n</li>\n<li>Approximate diamond weight: 15.33ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:   35.4 grams at 7 inches (actual weight will vary, based on the length).</li>\n<li>Approximate width: link- 7.07mm, flower - 13.38mm.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 10925,
    "sale_price": 9286,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at2.25.40PM.jpg?v=1748456804",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at2.25.40PM_1.jpg?v=1748456804",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at2.25.40PM_2.jpg?v=1748456804",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_2.25.40_PM_3.jpg?v=1748456846"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T10:20:25.221Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-192",
    "name": "10k rose gold and diamond Cross Bracelet",
    "slug": "10k-yellow-gold-and-diamond-cross-bracelet-copy",
    "description": "<ul>\n<li>10k rose gold and natural round diamonds.<br>\n</li>\n<li>Approximate diamond weight: 10.75ct at 8.5 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:   75.2 grams at 8.5 inches (actual weight will vary, based on the length).</li>\n<li>Solid.</li>\n<li>Approximate width: links - 8.40mm, cross - 23.43mm.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 10925,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at1.36.51PM.jpg?v=1748454430",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at1.36.52PM_1.jpg?v=1748454430",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at1.36.52PM_2.jpg?v=1748454430",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at1.36.52PM_3.jpg?v=1748454430",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at1.36.52PM.jpg?v=1748454430"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "10k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T09:20:25.221Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-193",
    "name": "10k yellow gold and diamond Cross Bracelet",
    "slug": "10k-yellow-gold-and-diamond-cross-bracelet",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds.<br>\n</li>\n<li>Approximate diamond weight: 4.95ct at 8 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:   40.3 grams at 8 inches (actual weight will vary, based on the length).</li>\n<li>Approximate width: links - 7.77mm, cross - 19.54mm.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 7245,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at1.36.53PM.jpg?v=1748453884",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_1.36.53_PM_1.jpg?v=1748453898",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_1.36.53_PM_2.jpg?v=1748453903",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_1.36.53_PM_3.jpg?v=1748453907",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-28_at_1.36.53_PM_4.jpg?v=1748453911"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "10k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-08T08:20:25.222Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-194",
    "name": "Model #116900 40mm Rolex Air-King Watch with Stainless steel Oyster Band",
    "slug": "model-116900-40mm-rolex-air-king-watch-with-stainless-steel-oyster-band",
    "description": "<ul>\n<li>Preowned 40mm Rolex Air-King Watch.</li>\n<li>Stainless steel.</li>\n<li>Bracelet: oyster.</li>\n<li>Full factory. </li>\n<li>Automatic movement.</li>\n<li>Smooth bezel.</li>\n<li>Mint condition.</li>\n<li> Black dial with Arabic numerals. <br>\n</li>\n<li>Year: 2023.</li>\n<li>Model number: 116900.</li>\n<li>Comes with Rolex original card.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 10925,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at12.13.49PM.jpg?v=1748448881",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at12.13.49PM_1.jpg?v=1748448881",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at12.13.50PM_1.jpg?v=1748448879",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at12.13.50PM_2.jpg?v=1748448879",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at12.13.50PM.jpg?v=1748448879"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T07:20:25.222Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-195",
    "name": "34mm Rolex Watch with Stainless Steel Jubilee Band",
    "slug": "34mm-rolex-watch-with-stainless-steel-jubilee-band",
    "description": "<ul>\n<li>Preowned 34 mm Rolex Datejust with diamonds on bezel and dial.</li>\n<li>Stainless steel.</li>\n<li>Bracelet: jubilee.</li>\n<li>Approximate diamond weight: 2ct.</li>\n<li>Automatic movement.<br>\n</li>\n<li>Custom diamond bezel and dial by customer request. </li>\n<li>Mother of pearl pink dial with diamond Roman numerals.<br>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 5635,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.40.58AM.jpg?v=1748447226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.40.58AM_4.jpg?v=1748447226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.40.58AM_1.jpg?v=1748447226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.40.58AM_2.jpg?v=1748447226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.40.58AM_3.jpg?v=1748447226"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T06:20:25.222Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-196",
    "name": "Model # 126710GRNR 40mm Rolex GMT-Master II 'Bruce Wayne' Watch with stainless steel jubilee band (Rolex original card)",
    "slug": "model-126710grnr-40mm-rolex-gmt-master-ii-bruce-wayne-watch-with-stainless-steel-jubilee-band",
    "description": "<ul>\n<li>Preowned 40mm Rolex GMT-Master II 'Bruce Wayne' Watch .</li>\n<li>Full factory. </li>\n<li>Stainless steel.</li>\n<li>Bracelet: jubilee.<br>\n</li>\n<li>Dial: black<span> with luminous hour markers</span>.<br>\n</li>\n<li>Automatic movement.</li>\n<li>Mint condition.<br>\n</li>\n<li>Model # 126710GRNR</li>\n<li>Comes with Rolex papers.</li>\n<li>Comes with free gold &amp; diamond earrings.<br>\n</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 23230,
    "sale_price": 19746,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.02.36AM_65de62bb-bba2-496e-82b1-1f3f36b6e9c9.jpg?v=1748447203",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.02.36AM_4_0759a639-1296-49a4-9fb2-c1f84d1b95c9.jpg?v=1748447203",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.02.36AM_1_3e77fed2-360d-4846-9874-2f75d7885c2b.jpg?v=1748447203",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.02.36AM_2_e1019f61-eb80-4353-9cfb-cb3a44717787.jpg?v=1748447203",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-28at11.02.36AM_3_deeba3d9-84b2-4664-98b9-61a98994cb25.jpg?v=1748447203"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-08T05:20:25.222Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-197",
    "name": "36mm Rolex Datejust Watch with Brown Rubber Band (factory dial)",
    "slug": "36mm-rolex-watch-with-brown-rubber-band",
    "description": "<ul>\n<li>Preowned 36 mm Rolex Datejust Watch. <br>\n</li>\n<li>Custom  brown rubber band.<br>\n</li>\n<li>Automatic movement.</li>\n<li>Mint condition.</li>\n<li>Champagne factory dial with diamonds.</li>\n<li>Fluted bezel.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 6785,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-27at4.16.31PM.jpg?v=1748377092",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-27at4.16.32PM.jpg?v=1748377092",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-27at4.16.32PM_1.jpg?v=1748377092",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-27at4.16.32PM_2.jpg?v=1748377092"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T04:20:25.222Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-198",
    "name": "36mm Rolex Watch with stainless steel jubilee band",
    "slug": "36mm-rolex-watch-with-stainless-steel-jubilee-band",
    "description": "<ul>\n<li>Preowned 36 mm Rolex Datejust with aftermarket diamonds on dial,  bezel and band.</li>\n<li>Stainless steel.</li>\n<li>Bracelet: jubilee.</li>\n<li>Approximate diamond weight: 4ct.<br>\n</li>\n<li>Automatic movement.</li>\n<li>Mint condition.</li>\n<li>Dark grey dial with diamonds.</li>\n<li>Custom diamond dial and bezel by customer request. </li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 8312.2,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at4.39.29PM.jpg?v=1748032875",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at4.39.30PM.jpg?v=1748032884",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at4.39.30PM_1.jpg?v=1748032884",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at4.39.30PM_2.jpg?v=1748032884"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T03:20:25.222Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-199",
    "name": "14k rose gold and diamond Ring",
    "slug": "14k-rose-gold-and-diamond-ring",
    "description": "<ul>\n<li>14k rose gold and natural round diamonds.</li>\n<li>Approximate diamond weight:<span> 5.50</span>ct.</li>\n<li>Approximate weight: 13.2<span> grams.</span>\n</li>\n<li>Approximate top dimensions: 21 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 5750,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at2.58.26PM.jpg?v=1748026745",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at2.58.26PM_1.jpg?v=1748026745",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at2.58.25PM.jpg?v=1748026745",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at2.58.26PM_2.jpg?v=1748026743",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-23at2.58.26PM_3.jpg?v=1748026743"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-08T02:20:25.222Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-200",
    "name": "Yellow Gold and Diamond Cuban Bracelet",
    "slug": "yellow-gold-and-diamond-cuban-bracelet",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds.</li>\n<li>Solid.</li>\n<li>Approximate diamond weight: 4.28ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  38.01 grams at 7 inches (actual weight will vary, based on the length).</li>\n<li>Approximate width: links - 9.85mm, box clasp - 11.50mm.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 6095,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-22at5.21.45PM.jpg?v=1747948980",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-22at5.21.45PM_1.jpg?v=1747948980",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-22at5.21.45PM_2.jpg?v=1747948980",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-22at5.21.45PM_3.jpg?v=1747948980"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "Yellow Gold and Diamond Cuban Bracelet",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T01:20:25.222Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-201",
    "name": "14k gold and diamond Cross Pendant and Gold Cuban Chain (choose your color)",
    "slug": "14k-gold-and-diamond-cross-pendant-and-gold-cuban-chain-choose-your-color",
    "description": "<ul>\n<li>14k white, yellow, rose gold and natural round, baguette diamond pendant.</li>\n<li>Comes with a 10k white, yellow, rose gold cuban chain.</li>\n<li>Approximate diamond weight: 0.96ct-1ct.<br>\n</li>\n<li>Approximate pendant height (including bail):  41.52mm.</li>\n<li>Approximate weight:  9.6 grams (18\" chain + pendant).</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>",
    "price": 2530,
    "sale_price": 2151,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.37PM.jpg?v=1747862803",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.38PM.jpg?v=1747862807",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.38PM_1.jpg?v=1747862807",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.38PM_2.jpg?v=1747862807",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.38PM_3.jpg?v=1747862807",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.39PM_1.jpg?v=1747862804",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at5.25.39PM.jpg?v=1747862804"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "14k gold and diamond Cross Pendant and Gold Cuban Chain (choose your color)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-08T00:20:25.223Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-202",
    "name": "18k white gold and diamond Bracelet",
    "slug": "18k-white-gold-and-diamond-bracelet",
    "description": "<ul>\n<li>18k white gold and natural round black diamonds.</li>\n<li>Approximate diamond weight: 9.90ct at 7 inches (actual diamond weight will vary, based on selected length).</li>\n<li>Approximate weight:  13.3 grams at 7 inches (actual weight will vary, based on the length).</li>\n<li>Size: 7 inches.<br>\n</li>\n<li>If you need longer length, please contact us at<span> </span><span>+1(929) 689 2205</span>\n</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 4600,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.22.52PM_1.jpg?v=1747851824",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-21at2.22.52PM.jpg?v=1747851824"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-07T23:20:25.223Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-203",
    "name": "36mm Rolex Watch with stainless steel jubilee band + White Gold and Diamond Bracelet + Ring",
    "slug": "36mm-rolex-watch-with-stainless-steel-jubilee-band-white-gold-and-diamond-bracelet-ring",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 36mm Rolex Diamond Watch.</p>\n<p>Custom diamond blue dial with Roman numerals.</p>\n<p>Custom diamond bezel.</p>\n<p>Custom diamonds by customer request.</p>\n<p>Stainless steel.</p>\n<p>Bracelet: jubilee.</p>\n<p><span>Natural earth mined di</span>amonds.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>10k white gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 5ct.</p>\n<p>Approximate weight: 20 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: 9mm.</p>\n<p>Size: 7 inches.</p>\n<p><strong>3) Ring:</strong></p>\n<p>10k white gold and natural round diamonds with multicolored stones. </p>\n<p><span>Approximate diamond weight: 2.5ct</span></p>\n<p><span>Size: 9 (if you need resizing please text at 929 689 2205)</span></p>\n<p><strong>4)Earrings:</strong><br></p>\n<p><span>Complimentary diamond and gold small earrings. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>5)</span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 14375,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.10PM.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.10PM_1.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.11PM.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.11PM_1.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.11PM_2.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.11PM_3.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.11PM_4.jpg?v=1747759232",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-20at12.39.11PM_5.jpg?v=1747759232"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "36mm Rolex Watch with stainless steel jubilee band + White Gold and Diamond Bracelet + Ring",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T22:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-204",
    "name": "34mm Rolex Watch with two-tone gold oyster band + 14k yellow gold and diamond Bracelet + 18k gold and diamond Ring",
    "slug": "34mm-rolex-watch-with-two-tone-gold-oyster-band-14k-yellow-gold-and-diamond-bracelet-18k-gold-and-diamond-ring",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 34mm Rolex Diamond Watch.</p>\n<p>Custom diamond red dial.</p>\n<p>Custom diamond bezel.</p>\n<p>Custom diamonds by customer request.</p>\n<p>Two-tone: gold and stainless steel.</p>\n<p>Bracelet: oyster.</p>\n<p><span>Natural earth mined di</span>amonds.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p>14k yellow gold and natural round, baguette diamonds.</p>\n<p>Approximate diamond weight: 15.33ct.</p>\n<p>Approximate weight: 35.4 grams.<span> </span><span>Actual weight will vary based on selected bracelet length.</span></p>\n<p>Width: links-7.39mm, flower-15.13mm.</p>\n<p>Size: 7 inches.</p>\n<p><strong>3) Ring:</strong></p>\n<p>18k gold and natural sapphire, ruby, emerald and round diamonds.</p>\n<p>Approximate weight:  5.3 <span>grams (depending on size).</span><br></p>\n<p><span>Approximate ring width:  18.65 mm.</span></p>\n<p><span>Approximate diamond weight: diamond 0.22ct, ruby-1.25</span></p>\n<p><span>Size: 7.</span></p>\n<p><strong>4)Earrings:</strong><br></p>\n<p><span>Complimentary diamond and gold small earrings. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>5)</span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 20125,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at5.41.20PM.jpg?v=1747431762",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at5.41.20PM_1.jpg?v=1747431762",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at5.41.20PM_4.jpg?v=1747431762",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at5.41.20PM_2.jpg?v=1747431762",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at5.41.20PM_3.jpg?v=1747431762"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T21:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-205",
    "name": "36mm Rolex Diamond Watch with Two-Tone Jubilee Band + Yellow Gold and Diamond  Ring",
    "slug": "36mm-rolex-diamond-watch-with-two-tone-jubilee-band-yellow-gold-and-diamond-ring",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1)Watch:</strong></p>\n<p>Preowned Rolex Watch <br></p>\n<p>Two-tone: stainless steel and gold.</p>\n<p>Iced out.</p>\n<p>Bracelet: jubilee.</p>\n<p>Custom gold and diamond bezel.</p>\n<p>Custom diamonds by customer request. <br></p>\n<p>Approximate diamond weight: 8ct. </p>\n<p>Dark red dial with roman numerals. </p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>\n<p><span><strong>2)Ring:</strong></span></p>\n<p>10k yellow gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 2.50ct.</p>\n<p>Approximate weight: 9.3 grams.</p>\n<p>Approximate ring width: 22.61mm.</p>\n<p>Size: 10.</p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p><span>Complementary small earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 13156,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-16_at_5.44.52_PM.jpg?v=1747431993",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-16_at_4.01.20_PM_1.jpg?v=1747431993",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at4.01.22PM_3.jpg?v=1747431993",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at4.01.22PM_4.jpg?v=1747431993",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at4.01.22PM_5.jpg?v=1747431993"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "36mm Rolex Diamond Watch with Two-Tone Jubilee Band + Yellow Gold and Diamond  Ring",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-07T20:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-206",
    "name": "14k Rose Gold and Diamond Cross Pendant + 10k Rose Gold and Diamond Earrings",
    "slug": "14k-rose-gold-and-diamond-cross-pendant-10k-rose-gold-and-diamond-earrings",
    "description": "<p class=\"MsoNormal\"><b>Subscribe. Save. Smile. Get 10% off when you follow us on YouTube! Call us at (929) 689-2205 for more info.</b></p>\n<p><iframe title=\"YouTube video player\" src=\"https://www.youtube.com/embed/T7rcYwGvPKc\" height=\"315\" width=\"560\"></iframe></p>\n<p>Look stunning with this luxurious set of jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Rose Gold and Diamond Cross Pendant </strong></p>\n<p>14k rose  gold and round, baguette diamonds.</p>\n<p>Approximate diamond weight:<span> 1.24</span>ct</p>\n<p><span>Approximate item weight: 9.6</span><span>  grams. </span></p>\n<p>Approximate pendant height (including bail): 1.98 inches.</p>\n<p>Bail clearance: 5.3mm.</p>\n<p><span><strong>2) Chain :</strong></span></p>\n<p>10k rose gold approx.2mm ice link chain.</p>\n<p>Approximate chain weight: 7.8 grams. </p>\n<p>Choose your chain length. </p>\n<p><strong>3) Complimentary gold &amp; diamond Earrings:</strong><br></p>\n<p><span>10k rose gold and baguette, diamond earrings.</span></p>\n<p>Approximate width: 7.85mm.</p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Gift from Marchello the Jeweler:</strong></p>\n<p>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 4425.2,
    "sale_price": 3761,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at2.19.07PM.jpg?v=1747419613",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at2.19.07PM_1.jpg?v=1747419613",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at2.19.07PM_2.jpg?v=1747419613",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at2.19.07PM_3.jpg?v=1747419613",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-16at2.19.08PM.jpg?v=1747419610"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "14k Rose Gold and Diamond Cross Pendant + 10k Rose Gold and Diamond Earrings",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T19:20:25.223Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-207",
    "name": "Santos 100 XL Cartier Two-tone gold Watch Iced out",
    "slug": "santos-100-xl-cartier-two-tone-gold-watch-iced-out",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1)Watch:</strong></p>\n<p>Preowned Santos de Cartier.<br></p>\n<p>Two-tone: stainless steel and gold.</p>\n<p>Iced out.</p>\n<p>XL custom gold and diamond bezel.</p>\n<p>Custom XL diamonds by customer request. <br></p>\n<p>Approximate diamond weight: 30.09ct. </p>\n<p>White dial with roman numerals. </p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Cartier watches and is not an authorized Cartier dealer. Addition of non-Cartier parts voids Cartier warranty: Cartier will not service watches containing non-Cartier parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>\n<p><span><strong>2)Ring:</strong></span></p>\n<p>14k yellow gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 5ct.</p>\n<p>Approximate weight: 11.9 grams.</p>\n<p>Approximate ring width: 20.94mm.</p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p><span>Complementary small earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 31050,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at5.39.24PM.jpg?v=1747259184",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at5.39.26PM.jpg?v=1747259187",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at5.39.26PM_1.jpg?v=1747259187",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at5.39.26PM_2.jpg?v=1747259187",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at5.39.26PM_3.jpg?v=1747259187"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T18:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-208",
    "name": "18k white gold and diamond Ring and Earrings",
    "slug": "18k-white-gold-and-diamond-ring-and-earrings",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1) Ring:</strong></p>\n<p>18k white gold and natural round diamonds.</p>\n<p>Approximate diamond weight: 1.47ct.</p>\n<p>Approximate width:  11.51mm.</p>\n<p>Approximate weight:  6.9 grams. </p>\n<p>Size: 7</p>\n<p><strong>2) Earrings: </strong></p>\n<p>18k yellow gold Earrings with Round, Baguette Diamonds. </p>\n<p>Approximate diamond weight: 0.44 ct. </p>\n<p>Approximate weight: <span> 3 </span><span>grams.</span></p>\n<p>Approximate top width: 9.33 mm.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 4186,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at1.56.35PM.jpg?v=1747245453",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at1.56.35PM_1.jpg?v=1747245453",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at1.56.35PM_2.jpg?v=1747245453",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at1.56.36PM_1.jpg?v=1747245450",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-14at1.56.36PM.jpg?v=1747245450"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-07T17:20:25.223Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-209",
    "name": "Silver and Diamond  Fuck Ring with round diamonds (choose your style)",
    "slug": "yellow-gold-and-diamond-men-s-ring-with-round-diamonds-copy",
    "description": "<ul>\n<li>Silver and natural round diamonds.</li>\n<li>Approximate diamond weight: ct.</li>\n<li>Approximate weight: 10 <span>grams.</span>\n</li>\n<li>Approximate ring width: 12.88 mm.<br>\n</li>\n<li>Size: 10</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 920,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.39.09PM.jpg?v=1747172532",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.39.09PM_1.jpg?v=1747172395",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.39.09PM_2.jpg?v=1747172395",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.39.09PM_3.jpg?v=1747172395",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.39.09PM_4.jpg?v=1747172395",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.39.09PM_5.jpg?v=1747172395"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T16:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-210",
    "name": "Yellow gold and Diamond Fuck Ring with round diamonds",
    "slug": "yellow-gold-and-diamond-men-s-ring-with-round-diamonds",
    "description": "<ul>\n<li>10k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: ct.</li>\n<li>Approximate weight: 11 <span>grams.</span>\n</li>\n<li>Approximate ring width: 13.15 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2012.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.28.40PM.jpg?v=1747171763",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.28.41PM.jpg?v=1747171763",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.28.40PM_1.jpg?v=1747171763",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-13at5.28.41PM_1.jpg?v=1747171763"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "10k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T15:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-211",
    "name": "14k White Gold Men's Ring with Princess Cut Diamonds",
    "slug": "14k-white-gold-mens-ring-with-princess-cut-diamonds",
    "description": "<ul>\n<li>14k white gold and natural princess cut diamonds.</li>\n<li>Approximate diamond weight: 1.50ct.</li>\n<li>Approximate weight: 17.9 <span>grams.</span>\n</li>\n<li>Approximate top width: 13.35 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2702.5,
    "sale_price": 2297,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.38.58_PM_1.jpg?v=1747079215",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.00_PM.jpg?v=1747079215",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.34.26_PM_2.jpg?v=1747079215",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.34.26_PM_3.jpg?v=1747079215"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k White Gold Men's Ring with Princess Cut Diamonds",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-07T14:20:25.223Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-212",
    "name": "14k Horse-shoe Yellow Gold Men's Ring with XL Round Diamonds",
    "slug": "14k-horse-shoe-yellow-gold-mens-ring-with-xl-round-diamonds",
    "description": "<ul>\n<li>14k yellow gold and natural Extra Large round diamonds.</li>\n<li>Approximate diamond weight: 3ct.</li>\n<li>Approximate weight: 21.7<span>grams.</span>\n</li>\n<li>Approximate top width: 21.42 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 4370,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.44.28_PM_3.jpg?v=1747079183",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.23.42_PM_1.jpg?v=1747079183",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.23.42_PM_2.jpg?v=1747079183",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.23.42_PM_3.jpg?v=1747079183",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.44.28_PM_4.jpg?v=1747079102"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Horse-shoe Yellow Gold Men's Ring with XL Round Diamonds",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T13:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-213",
    "name": "14k White Gold and Diamond Men's Lion Ring",
    "slug": "14k-white-gold-and-diamond-mens-lion-ring",
    "description": "<ul>\n<li>14k White gold and natural round diamonds and Rubies</li>\n<li>Approximate diamond weight: 1ct.</li>\n<li>Approximate weight: 16.3<span>grams.</span>\n</li>\n<li>Approximate top width: 23.70 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2932.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.44.28_PM_1.jpg?v=1747079164",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.15.48_PM_1.jpg?v=1747079164",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.15.48_PM_2.jpg?v=1747079164",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.44.28_PM_2.jpg?v=1747079102"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k White Gold and Diamond Men's Lion Ring",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T12:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-214",
    "name": "14k YellowGold and Diamond Men's Ring",
    "slug": "14k-yellowgold-and-diamond-mens-ring",
    "description": "<ul>\n<li>14k yellow gold and natural round and Baguette diamonds.</li>\n<li>Approximate diamond weight: 2.50ct.</li>\n<li>Approximate weight: 14.2<span>grams.</span>\n</li>\n<li>Approximate top width: 21 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 3392.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.44.28_PM.jpg?v=1747079139",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.04.16_PM.jpg?v=1747079139",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.04.16_PM_1.jpg?v=1747079139",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_2.04.16_PM_2.jpg?v=1747079139"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k YellowGold and Diamond Men's Ring",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-07T11:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-215",
    "name": "14k White Gold and Diamond Men's Ring with Princess and Baguette Cuts",
    "slug": "14k-white-gold-and-diamond-mens-ring-with-princess-and-baguette-cuts",
    "description": "<ul>\n<li>14k White gold and natural Princess, Baguette and Round diamonds.</li>\n<li>Approximate diamond weight: 0.83ct.</li>\n<li>Approximate weight: 13.7 <span>grams.</span>\n</li>\n<li>Approximate top width: 17.5 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2817.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.44.17_PM.jpg?v=1747079116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_1.13.30_PM.jpg?v=1747079116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_1.13.30_PM_1.jpg?v=1747079116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_1.13.30_PM_2.jpg?v=1747079116"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k White Gold and Diamond Men's Ring with Princess and Baguette Cuts",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T10:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-216",
    "name": "14k Yellow Gold and Diamond Men`s Ring with Round Diamonds",
    "slug": "14k-yellow-gold-and-diamond-men-s-ring-with-round-diamonds-13",
    "description": "<ul>\n<li>14k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 2.25ct.</li>\n<li>Approximate weight: 12.6 <span>grams.</span>\n</li>\n<li>Approximate top Length: 19.30 mm.</li>\n<li>Approximate top Width : 26mm</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2817.5,
    "sale_price": 2395,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.00_PM_5.jpg?v=1747078912",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.59.16_PM_1.jpg?v=1747078912",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.59.16_PM_2.jpg?v=1747078912",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.59.16_PM_3.jpg?v=1747078912",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.01_PM.jpg?v=1747078821"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Yellow Gold and Diamond Men`s Ring with Round Diamonds",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T09:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-217",
    "name": "Gold and Diamond RIng with Diamonds and Multi-Colored Stones",
    "slug": "gold-and-diamond-ring-with-diamonds-and-multi-colored-stones",
    "description": "<ul>\n<li>Yellow gold and natural round diamonds with multi-colored stones.</li>\n<li>Approximate diamond weight: 2.15ct.</li>\n<li>Approximate weight: 7.8<span>grams.</span>\n</li>\n<li><span>Approximate band width: 6 mm.</span></li>\n<li>Approximate top diameter: 19.50mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>\n<p> </p>",
    "price": 2875,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.38.57_PM.jpg?v=1747078842",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.38.57_PM_1.jpg?v=1747078842",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.22.28_PM_1.jpg?v=1747078842",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.22.28_PM_2.jpg?v=1747078842",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.22.28_PM_3.jpg?v=1747078842"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "Gold and Diamond RIng with Diamonds and Multi-Colored Stones",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-07T08:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-218",
    "name": "14k Whitegold Men's Ring with Princess Cut Diamonds",
    "slug": "14k-whitegold-mens-ring-with-princess-cut-diamonds",
    "description": "<ul>\n<li>14k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.50ct.</li>\n<li>Approximate weight: 13.1<span>grams.</span>\n</li>\n<li><span>Approximate band width: 4.35 mm.</span></li>\n<li>Approximate top diameter: 17.21 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>\n<p> </p>",
    "price": 3162.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.00_PM_3.jpg?v=1747078867",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.00_PM_4.jpg?v=1747078867",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.03.57_PM_1.jpg?v=1747078867",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.03.57_PM_2.jpg?v=1747078867",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_12.03.57_PM_3.jpg?v=1747078867"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T07:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-219",
    "name": "14k Gold Men’s Cake Diamond Ring with 22k Coin",
    "slug": "14k-gold-men-s-cake-diamond-ring-with-22k-coin",
    "description": "<ul>\n<li>14k YellowGold and natural round diamonds.</li>\n<li>Approximate diamond weight: 0.20ct.</li>\n<li>22k Coin in Center.</li>\n<li>Approximate weight: 18.8 <span>grams.</span>\n</li>\n<li>Approximate top diameter: 23 mm.</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>\n<p> </p>",
    "price": 3162.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.00_PM_1.jpg?v=1747078891",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_11.30.16_AM_1.jpg?v=1747078891",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-12_at_3.39.00_PM_2.jpg?v=1747078891",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_11.30.16_AM_2.jpg?v=1747078891",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-10_at_11.30.16_AM_3.jpg?v=1747078891"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold Men’s Cake Diamond Ring with 22k Coin",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T06:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-220",
    "name": "14k Rose Gold Cross Pendant with Round Diamonds and Gold Cuban Link Chain Set",
    "slug": "14k-rose-gold-cross-pendant-with-round-diamonds-and-gold-cuban-link-chain-set",
    "description": "<ul>\n<li>Charm is 14k yellow or white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 2.24ct.<br>\n</li>\n<li>Approximate weight: 6.8 grams ( pendant only).</li>\n<li>Comes with a 10k gold, approx. 3mm cuban link chain.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>",
    "price": 3908.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-03at4.37.17PM.jpg?v=1746304824",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_4.37.17_PM_2.jpg?v=1746304837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_4.37.17_PM_1.jpg?v=1746304843"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Rose Gold Cross Pendant with Round Diamonds and Gold Cuban Link Chain Set",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-07T05:20:25.224Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-221",
    "name": "14k Gold Cross Pendant with Extra Large Round Diamonds and Gold Cuban Link Chain Set",
    "slug": "14k-gold-cross-pendant-with-extra-large-round-diamonds-and-gold-cuban-link-chain-set",
    "description": "<div id=\"shopify-section-product-template\" class=\"shopify-section\">\n<div class=\"product-template__container page-width\" id=\"ProductSection-product-template\" data-section-id=\"product-template\" data-section-type=\"product\" data-enable-history-state=\"true\" data-ajax-enabled=\"false\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>Charm is 14k yellow or white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 3.26ct.<br>\n</li>\n<li>Approximate weight: 6.8 grams ( pendant only).</li>\n<li>Comes with a 10k gold, approx. 3mm cuban link chain.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>\n<div id=\"shopify-section-product-recommendations\" class=\"shopify-section\">\n<div class=\"page-width\" data-product-id=\"9837741146416\" data-section-id=\"product-recommendations\" data-section-type=\"product-recommendations\">\n<div class=\"product-recommendations__inner\">\n<div class=\"section-header text-center\">\n<h2>You may also like</h2>\n</div>\n</div>\n</div>\n</div>",
    "price": 4025,
    "sale_price": 3421,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-03at2.48.01PM.jpg?v=1746304088",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_2.48.01_PM_1.jpg?v=1746304100"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Gold Cross Pendant with Extra Large Round Diamonds and Gold Cuban Link Chain Set",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T04:20:25.224Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-222",
    "name": "14k Gold Cross Pendant with Round and Pear Shape Diamonds and Gold Cuban Link Chain Set (choose your color)",
    "slug": "14k-gold-cross-pendant-with-round-and-pear-shape-diamonds-and-gold-cuban-link-chain-set",
    "description": "<ul>\n<li>Charm is 14k yellow or white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.54ct.<br>\n</li>\n<li>Approximate weight: 2.9 grams ( pendant only).</li>\n<li>Comes with a 10k gold, approx. 3mm cuban link chain.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 2760,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-03at1.49.43PM_4.jpg?v=1746300547",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.43_PM.jpg?v=1746295532",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.43_PM_1.jpg?v=1746295539",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.43_PM_2.jpg?v=1746295545",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.43_PM_3.jpg?v=1746295550",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.43_PM_5.jpg?v=1746295556",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.43_PM_6.jpg?v=1746295560",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.49.44_PM.jpg?v=1746295564"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Gold Cross Pendant with Round and Pear Shape Diamonds and Gold Cuban Link Chain Set (choose your color)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T03:20:25.224Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-223",
    "name": "14k Gold and Diamond Fancy Cross Paired with Gold Cuban Link Chain (choose gold color)",
    "slug": "14k-gold-and-diamond-fancy-cross-paired-with-gold-cuban-link-chain-choose-gold-color",
    "description": "<ul>\n<li>Charm is 14k yellow or rose gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 2.14ct.</li>\n<li>Approximate pendant height (including bail): 2.2 inches.<br>\n</li>\n<li>Approximate weight: 3.6 grams (Pendant only).</li>\n<li>Comes with a 10k gold, approx. 3mm cuban link chain.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 3450,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_7.jpg?v=1746294753",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_1.jpg?v=1746294753",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_2.jpg?v=1746294753",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_6.jpg?v=1746293012",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_3.jpg?v=1746292993",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-03at1.15.02PM.jpg?v=1746292974",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_4.jpg?v=1746293000",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-05-03_at_1.15.02_PM_5.jpg?v=1746293007"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Men",
    "material": "14k Gold and Diamond Fancy Cross Paired with Gold Cuban Link Chain (choose gold color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-07T02:20:25.224Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-224",
    "name": "41mm Rolex Iced out Watch with two-tone jubilee band + 14k Rose Gold and diamond Ring + Earrings",
    "slug": "41mm-rolex-iced-out-watch-with-two-tone-jubilee-band-14k-rose-gold-and-diamond-ring-earrings",
    "description": "<div class=\"shopify-section\" id=\"shopify-section-product-template\">\n<div data-ajax-enabled=\"false\" data-enable-history-state=\"true\" data-section-type=\"product\" data-section-id=\"product-template\" id=\"ProductSection-product-template\" class=\"product-template__container page-width\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 41mm Rolex Datejust Watch.</p>\n<p>Bracelet: jubilee.</p>\n<p>Two-tone: 18k rose gold and stainless steel.</p>\n<p>Iced out. </p>\n<p>Custom diamonds by customer request. </p>\n<p>Approximate diamond weight: 23ct.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Ring:</strong></span></p>\n<p><span>14k rose gold Cake ring with natural earth mind Diamonds.</span></p>\n<p><span>Approximate diamond weight: 2.10ct.</span></p>\n<p><span>Approximate gold weight: 11.1 grams.</span></p>\n<p><span>Solid.</span></p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p><span>14k rose gold earrings with natural earth mind Diamonds.</span></p>\n<p><span>Approximate diamond weight: 1.17ct.</span></p>\n<p><span>Approximate top width :  11.54mm. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>",
    "price": 28106,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.32.29PM.jpg?v=1746124521",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.32.29PM_1.jpg?v=1746124521",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.32.29PM_2.jpg?v=1746124521",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.32.29PM_3.jpg?v=1746124521"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "41mm Rolex Iced out Watch with two-tone jubilee band + 14k Rose Gold and diamond Ring + Earrings",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T01:20:25.224Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-225",
    "name": "Gold and Diamond LOVE pendant and Tennis Diamond Chain (choose your color)",
    "slug": "gold-and-diamond-love-pendant-and-tennis-diamond-chain-choose-your-color",
    "description": "<ul>\n<li>10k yellow, rose and white gold and natural round diamond pendant.</li>\n<li>Comes with a 10k white, yellow, two-tone: rose and white gold and diamond tennis chain.</li>\n<li>Approximate pendant diamond weight: 1 ct.<br>\n</li>\n<li>Approximate chain diamond weight: 1.36 ct.</li>\n<li>Approximate pendant height (including bail):  22.49mm.</li>\n<li>Approximate weight:   24.2 grams (16\" chain + pendant).</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift</li>\n</ul>",
    "price": 5175,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.30PM_3.jpg?v=1746122701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.30PM.jpg?v=1746122701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.29PM.jpg?v=1746122701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.29PM_1.jpg?v=1746122701",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.30PM_1.jpg?v=1746122699",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.30PM_2.jpg?v=1746122699",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.30PM_4.jpg?v=1746122699",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-05-01at2.03.30PM_5.jpg?v=1746122699"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Gold and Diamond LOVE pendant and Tennis Diamond Chain (choose your color)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-07T00:20:25.224Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-226",
    "name": "36mm Rolex Presidential Watch 18k gold Day-Date",
    "slug": "36mm-rolex-presidential-watch-18k-gold-day-date",
    "description": "<ul>\n<li>Preowned 36 mm Rolex Presidential Watch. </li>\n<li>18k gold. <br>\n</li>\n<li>Automatic movement.<br>\n</li>\n<li>Custom diamonds by customer request. </li>\n<li>Day-date.</li>\n<li>Double-quick.</li>\n<li>Approximate weight: 126.1 grams.</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n<li>Comes in a premium Marchello The Jeweler box with LED lighting.</li>\n</ul>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of non-Rolex parts voids Rolex warranty: Rolex will not service watches containing non-Rolex parts. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year.</span></p>",
    "price": 18572.5,
    "sale_price": 15787,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at2.49.31PM.jpg?v=1746036581",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at2.49.31PM_1.jpg?v=1746036581",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at2.49.31PM_2.jpg?v=1746036581",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at2.49.31PM_3.jpg?v=1746036581"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-06T23:20:25.224Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-227",
    "name": "Full factory 29mm Cartier Watch + 14k Yellow Gold and Diamond Fancy Bangle + Earrings",
    "slug": "full-factory-29mm-cartier-watch-14k-yellow-gold-and-diamond-fancy-bangle-earrings",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 29mm Cartier Watch </p>\n<p>Full factory.</p>\n<p>18k yellow gold. </p>\n<p><span>Roman numerals.</span></p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Cartier watches and is not an authorized Cartier dealer. Addition of aftermarket diamonds voids Cartier warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p><span>14k Ladies` Bangle Bracelet solitaire Marquee diamonds approx.2.81ct of all natural earth mine diamonds.</span></p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p><span>14k gold ladies` earrings with approx.0.76ct of all natural real earth mine round and marquee diamonds. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 23000,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at1.49.05PM.jpg?v=1745949044",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at1.49.05PM_1.jpg?v=1745949044",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-29at1.49.05PM_2.jpg?v=1745949044"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Full factory 29mm Cartier Watch + 14k Yellow Gold and Diamond Fancy Bangle + Earrings",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T22:20:25.224Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-228",
    "name": "14K 3 Piece Bridal set Ladies Engagement Ring with Round Diamonds",
    "slug": "14k-3-piece-bridal-set-ladies-engagement-ring-with-round-diamonds",
    "description": "<div class=\"shopify-section\" id=\"shopify-section-product-template\">\n<div data-ajax-enabled=\"false\" data-enable-history-state=\"true\" data-section-type=\"product\" data-section-id=\"product-template\" id=\"ProductSection-product-template\" class=\"product-template__container page-width\">\n<div class=\"grid product-single product-single--medium-image\">\n<div class=\"grid__item medium-up--one-half\">\n<div class=\"product-single__description rte\">\n<ul>\n<li>14k white gold and round diamonds.</li>\n<li>3 rings set.</li>\n<li>Approximate total diamond weight: 2.50ct.<br>\n</li>\n<li>Approximate weight:  8.6 grams at size 6.5(three rings combined).</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>\n</div>\n<ul class=\"social-sharing\"></ul>\n</div>\n</div>\n</div>\n</div>\n<div class=\"shopify-section\" id=\"shopify-section-product-recommendations\">\n<div data-section-type=\"product-recommendations\" data-section-id=\"product-recommendations\" data-product-id=\"9246687363376\" class=\"page-width\">\n<div class=\"product-recommendations__inner\">\n<div class=\"section-header text-center\">\n<h2><br></h2>\n</div>\n</div>\n</div>\n</div>",
    "price": 2875,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-26at2.43.15PM_3.jpg?v=1745693405",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.43.15_PM_2.jpg?v=1745693441",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.43.15_PM_4.jpg?v=1745693425",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.43.15_PM_1.jpg?v=1745693447",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.43.15_PM.jpg?v=1745693454"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T21:20:25.224Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-229",
    "name": "14k White Gold Ladies Ring with Round Diamonds",
    "slug": "14k-white-gold-ladies-ring-with-round-diamonds",
    "description": "<ul>\n<li> 14k white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 1.60ct.</li>\n<li>Approximate weight: 5.2  grams.</li>\n<li>Approximate top width:  10.6mm.<br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2300,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-26at2.20.51PM_3.jpg?v=1745692441",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.20.51_PM_2.jpg?v=1745692464",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.20.51_PM_1.jpg?v=1745692470",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_2.20.51_PM.jpg?v=1745692484"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k White Gold Ladies Ring with Round Diamonds",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-06T20:20:25.225Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-230",
    "name": "14K Yellowgold Pear Shape Ring with Round Diamonds",
    "slug": "14k-yellowgold-pear-shape-ring-with-round-diamonds",
    "description": "<ul>\n<li>14k yellow gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 3 row band - 1.69ct.</li>\n<li>Approximate weight:<span> 3.8grams at size 7</span><span></span>\n</li>\n<li>Size: 7 (alterations available, please text us on 646.509.1819)</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2300,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-26at1.41.54PM.jpg?v=1745689352",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_1.41.54_PM_1.jpg?v=1745689362",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_1.41.54_PM_2.jpg?v=1745689368",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_1.41.54_PM_3.jpg?v=1745689373"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T19:20:25.225Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-231",
    "name": "14k Yellowgold 2 Piece Bridal Engagement Ring and Wedding Band Round and Baguette Diamonds",
    "slug": "14k-yellowgold-2-piece-bridal-engagement-ring-and-wedding-band-round-and-baguette-diamonds",
    "description": "<ul>\n<li>14k yellow gold and earth-mined round diamonds.</li>\n<li>2 rings set: engagement ring and wedding band.</li>\n<li>Approximate total diamond weight: 0.94ct.<br>\n</li>\n<li>Engagement ring top<span> </span>dimensions: 10.7mm</li>\n<li>Approximate weight: 5.8 grams at size 11. Actual weight will vary, based on selected rings size.</li>\n<li>Comes with free gold &amp; diamond earrings and a surprise gift.</li>\n</ul>",
    "price": 2068.85,
    "sale_price": 1759,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_1.18.18_PM_2.jpg?v=1745688308",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-26at1.18.18PM.jpg?v=1745688290",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_1.18.18_PM_1.jpg?v=1745688302",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_1.18.18_PM_3.jpg?v=1745688312"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T18:20:25.225Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-232",
    "name": "14K Yellowgold Ladies Ring Round and Baguette Diamonds",
    "slug": "14k-yellowgold-ladies-ring-round-and-baguette-diamonds",
    "description": "<ul>\n<li>14k yellowgold and natural baguette and round diamonds.</li>\n<li>Approximate diamond weight:<span> 1.14</span>ct.</li>\n<li>Approximate item weight: 5.6 <span>grams at size 7. Actual weight will vary, based on selected ring size.</span>\n</li>\n<li><span>Approximate top width: 10.89mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 1725,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-26at12.59.08PM.jpg?v=1745687018",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_12.59.07_PM_1.jpg?v=1745687031",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsApp_Image_2025-04-26_at_12.59.07_PM.jpg?v=1745687037"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-06T17:20:25.225Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-233",
    "name": "Authentic Rolex Box",
    "slug": "authentic-rolex-box-1111-copy",
    "description": "Authentic Rolex Box",
    "price": 287.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/IMG_8312.heic?v=1745611112",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/IMG_8311.heic?v=1745611213",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/IMG_8313.heic?v=1745611213"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T16:20:25.225Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-234",
    "name": "Shipping Protection",
    "slug": "shipping-protection",
    "description": "Shipping Protection",
    "price": 5.75,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/shipping-protection.png?v=1745524808"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Unisex",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T15:20:25.225Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-235",
    "name": "36mm Rolex Watch with two-tone jubilee band + Gold and Diamond Clover Bracelet + Earrings",
    "slug": "36mm-rolex-watch-with-two-tone-jubilee-band-gold-and-diamond-clover-bracelet-earrings",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 36mm Rolex  Diamond Watch.</p>\n<p>Two-tone: 18k gold and stainless steel.</p>\n<p>Bracelet:  jubilee.</p>\n<p>Custom diamond blue dial and diamond bezel by customer request.</p>\n<p>Approximate diamond weight: 3ct.</p>\n<p><span>Natural earth mined di</span>amonds on dial and bezel.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p><span>10k two-tone: yellow and  white gold clover shaped bangle with 1.53ct of baguettes and round diamonds</span></p>\n<p>Size: 7 inches </p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p><span>10k yellow gold and  diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 10166,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at3.09.11PM.jpg?v=1745521839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at3.09.11PM_1.jpg?v=1745521839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at3.09.11PM_2.jpg?v=1745521839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at3.09.12PM.jpg?v=1745521839",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at3.09.12PM_1.jpg?v=1745521837",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at3.09.12PM_2.jpg?v=1745521837"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Men",
    "material": "36mm Rolex Watch with two-tone jubilee band + Gold and Diamond Clover Bracelet + Earrings",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-06T14:20:25.225Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-236",
    "name": "Two-tone Gold and diamond Clover shape Necklace and Yellow Gold and Diamond Earrings (Mother`s Day Special)",
    "slug": "two-tone-gold-and-diamond-clover-shape-necklace-and-yellow-gold-and-diamond-earrings-mother-s-day-special",
    "description": "<p>Look stunning with this luxurious set of jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1) Gold and Diamond Flower Necklace </strong></p>\n<p>10k two-tone: yellow and white gold and round &amp; baguette diamonds.</p>\n<p>Approximate diamond weight: 4.83 ct at 16 inches. </p>\n<p><span>Approximate item weight: 38.9</span><span> </span>grams. at 16 inches<span><strong></strong></span></p>\n<p><strong>2) Gold &amp; diamond Flower Earrings:</strong><br></p>\n<p><span>10k yellow gold and round &amp; baguette diamond earrings.</span></p>\n<p>Approximate diamond weight: 0.47ct</p>\n<p>Approximate earrings weight: 3.6 grams.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond earrings.</span></p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><strong>4) Gift from Marchello the Jeweler:</strong></p>\n<p>Comes with a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 5980,
    "sale_price": 5083,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at1.09.11PM.jpg?v=1745516116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at1.09.12PM.jpg?v=1745516116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-24at1.09.13PM.jpg?v=1745516116"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "Two-tone Gold and diamond Clover shape Necklace and Yellow Gold and Diamond Earrings (Mother`s Day Special)",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T13:20:25.225Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-237",
    "name": "VVS/vs high clarity diamonds set in a 18k White Gold Ladies Ring and Earrings",
    "slug": "vvs-vs-high-clarity-diamonds-set-in-a-18k-white-gold-ladies-ring-and-earrings",
    "description": "<p><span>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</span></p>\n<p><strong>1) Earrings:</strong></p>\n<p>18k white gold and natural marquise, baguette and round diamonds.</p>\n<p>Approximate diamond weight: 2.85ct.</p>\n<p>Approximate diameter: 16.81mm.</p>\n<p>Screw on back.</p>\n<p><strong>2) Ring: </strong></p>\n<p>18k White Gold and VVS/ VS clarity  diamonds Ring with Round, marquise and Baguette Diamonds. </p>\n<p>Approximate diamond weight: 2.33ct. </p>\n<p>Approximate weight:  8.6 <span>grams (depending on size).</span></p>\n<p>Approximate top width: 18.07mm.</p>\n<p><strong>3)Earrings</strong><strong>:</strong><br></p>\n<p><span>Complimentary diamond and gold small earrings. </span></p>\n<p>Enjoy long-lasting brilliance and class with this set.</p>\n<p><strong>4) Comes with a surprise gift from Marchello the Jeweler. </strong></p>",
    "price": 11500,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.29.31PM.jpg?v=1745443808",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.29.32PM.jpg?v=1745443816",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.29.32PM_2.jpg?v=1745443816",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.29.32PM_1.jpg?v=1745443816"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "22222222-2222-2222-2222-222222222222",
    "gender": "Women",
    "material": "VVS/vs high clarity diamonds set in a 18k White Gold Ladies Ring and Earrings",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T12:20:25.225Z",
    "category": {
      "id": "22222222-2222-2222-2222-222222222222",
      "slug": "earrings",
      "name": "Earrings"
    }
  },
  {
    "id": "seed-prod-238",
    "name": "Custom Gold & Diamond Name Pendant – Personalized Jewelry (choose your color)",
    "slug": "custom-gold-diamond-name-pendant-personalized-jewelry-choose-your-color",
    "description": "<ul>\n<li>10k white, rose and yellow gold and natural round diamonds.<br>\n</li>\n<li>Approximate diamond weight: ct.</li>\n<li>Approximate pendant height (including bail): 25mm.</li>\n<li>Approximate weight:  14.2 grams.</li>\n<li>Only pendant.</li>\n<li>If you want to get chain please text: +1(929) 689-2205.</li>\n<li>Send Us the Name You Want: +1(929) 689-2205</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 3999,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.06.45PM.jpg?v=1745442467",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.06.45PM_1.jpg?v=1745442467",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-23at5.06.46PM.jpg?v=1745442457"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "Custom Gold & Diamond Name Pendant – Personalized Jewelry (choose your color)",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-06T11:20:25.225Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-239",
    "name": "Serpenti Tubogas Ladies` Bvlgari Watch (PAPERS)",
    "slug": "serpenti-tubogas-ladies-bvlgari-watch-copy-1",
    "description": "<p> </p>\n<p>Experience the sophistication and elegance of the pre-owned Bvlgari Serpenti Tubogas Ladies` Watch. Featuring a 35 mm stainless steel case and bezel adorned with a white guilloché dial, and a double spiral bracelet complete with papers. As a special offer, each purchase includes a complimentary pair of gold and diamond earrings and an exclusive gift. Elevate your style with this classic timepiece.</p>\n<p>Disclaimer: Marchello the Jeweler Inc. is an independent seller of preowned Bvlgari watches and is not an authorized Bvlgari dealer. Marchello the Jeweler Inc. stands as the sole warrantor of these watches for one year. Note: Diamonds were not set by Bvlgari.</p>\n<p> </p>",
    "price": 9200,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at6.16.17PM.jpg?v=1745360226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at6.16.18PM_1.jpg?v=1745360226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at6.16.18PM.jpg?v=1745360226"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T10:20:25.225Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-240",
    "name": "Serpenti Tubogas Ladies` Bvlgari Watch",
    "slug": "serpenti-tubogas-ladies-bvlgari-watch-copy",
    "description": "<p>Experience the refinement and class of the pre-owned Bvlgari Serpenti Tubogas Ladies` Watch. Boasting a 35 mm stainless steel case and bezel adorned with, a white guilloché dial, and a double spiral bracelet. As a bonus, each purchase includes a complimentary pair of gold and diamond earrings and a special surprise gift. Elevate your fashion with this timeless timepiece.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Bvlgari watches and is not an authorized Bvlgari dealer. Marchello the Jeweler Inc. is the sole warrantor of such watches for one year. Diamonds not set by Bvlgari.</span></p>",
    "price": 8337.5,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at6.16.17PM.jpg?v=1745360226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at6.16.18PM_1.jpg?v=1745360226",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at6.16.18PM.jpg?v=1745360226"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T09:20:25.225Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-241",
    "name": "36mm Two-tone Cartier + 14k two-tone gold and diamond twin heart Bangle",
    "slug": "41mm-two-tone-rolex-xxl-bezel-14k-two-tone-gold-and-diamond-bangle-copy",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Pre-owned 36 mm Cartier Balon De Bleu watch.</p>\n<p>18k Rose gold and stainless steel.</p>\n<p>Automatic winding.</p>\n<p>Mint condition.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p><span>14k two-tone: yellow and white gold and natural round, baguette diamonds.</span></p>\n<p><span>Approximate diamond weight: 1.57ct. </span></p>\n<p><span>Approximate weight:  13 grams.</span></p>\n<p><span>Size: 7 inches.</span></p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p>Complimentary diamond and gold earrings. </p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 9200,
    "sale_price": 7820,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.35.53PM.jpg?v=1745354199",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.35.53PM_1.jpg?v=1745354199",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.35.54PM.jpg?v=1745354180"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "66666666-6666-6666-6666-666666666666",
    "gender": "Men",
    "material": "18k Gold",
    "is_bestseller": true,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-06T08:20:25.225Z",
    "category": {
      "id": "66666666-6666-6666-6666-666666666666",
      "slug": "bracelets",
      "name": "Bracelets"
    }
  },
  {
    "id": "seed-prod-242",
    "name": "41mm Two-tone Rolex & XXL Bezel + 14k two-tone gold and diamond Bangle",
    "slug": "41mm-two-tone-rolex-xxl-bezel-14k-two-tone-gold-and-diamond-bangle",
    "description": "<p>Look stunning with this luxurious set of timeless jewelry. This collection includes 4 piece deal:</p>\n<p><strong>1)Watch:</strong></p>\n<p>Preowned 41mm Rolex Datejust Watch.</p>\n<p>Two-tone Oyster Diamond Bracelet.</p>\n<p>Mint condition.</p>\n<p>Large diamond bezel with round and baguette diamonds.</p>\n<p><span>Approximate diamond weight: 9.50ct</span></p>\n<p>Black dial with Arabic numerals.</p>\n<p>Movement: Automatic.</p>\n<p>Comes in a premium Marchello The Jeweler box with LED lighting.</p>\n<p><strong>Disclaimer:</strong><span> Marchello the Jeweler Inc. is an independent seller of preowned Rolex watches and is not an authorized Rolex dealer. Addition of aftermarket diamonds voids Rolex warranty. Marchello the Jeweler Inc. is the sole warrantor of these watches for one year.</span></p>\n<p><span><strong>2)Bracelet:</strong></span></p>\n<p><span>14k two-tone: yellow and white gold and natural round, baguette diamonds.</span></p>\n<p><span>Approximate diamond weight: 5ct. </span></p>\n<p><span>Approximate weight:  17.4 grams.</span></p>\n<p><span>Size: 7 inches.</span></p>\n<p><span><strong>3)Earrings:</strong></span></p>\n<p>Complimentary diamond and gold earrings. </p>\n<p>Enjoy long-lasting brilliance and class with this set.<br></p>\n<p><span>4) </span>Comes with<span> </span>a surprise gift <span>from Marchello the Jeweler. </span></p>",
    "price": 21528,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.20.15PM.jpg?v=1745353293",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.20.15PM_1.jpg?v=1745353293",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.20.15PM_2.jpg?v=1745353293",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-22at4.20.15PM_3.jpg?v=1745353293"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "55555555-5555-5555-5555-555555555555",
    "gender": "Men",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T07:20:25.225Z",
    "category": {
      "id": "55555555-5555-5555-5555-555555555555",
      "slug": "watches",
      "name": "Watches"
    }
  },
  {
    "id": "seed-prod-243",
    "name": "Gemologist Certified Appraisal Paper (For Insurance Per Item)",
    "slug": "appraisal-papers-for-insurance",
    "description": "Gemologist Certified Appraisal Paper (For Insurance Per Item)",
    "price": 113.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/Screenshot_2025-04-18_at_4.54.57_PM.png?v=1745009764"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Unisex",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T06:20:25.225Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-244",
    "name": "14k two-tone gold and diamond Pear Shape Rosary Ring",
    "slug": "14k-two-tone-gold-and-diamond-pear-shape-rosary-ring",
    "description": "<ul>\n<li>14k two-tone rose and white gold and natural round diamonds.</li>\n<li>Approximate diamond weight: 0.75ct.</li>\n<li>Approximate item weight: <span> 3.7 grams.</span>\n</li>\n<li>\n<span>Approximate top width: 12.40 mm.</span><br>\n</li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings and a surprise gift.</span></li>\n</ul>",
    "price": 2068.85,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-16at11.11.36AM_1.jpg?v=1744816512",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-16at11.11.36AM.jpg?v=1744816512",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-16at11.11.36AM_2.jpg?v=1744816512",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-16at11.11.37AM.jpg?v=1744816512"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-06T05:20:25.226Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-245",
    "name": "VVS/vs high clarity diamonds set in a 18k White Gold Fancy Ring (limited edition)",
    "slug": "3-48ct-diamond-18k-white-gold-fancy-ladies-ring-limited-edition",
    "description": "<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\">18k white gold and natural baguette &amp; round diamonds.</li>\n<li data-mce-fragment=\"1\">Approximate diamond weight: 3.48ct.</li>\n<li data-mce-fragment=\"1\">VVS / VS clarity diamonds, E-F color.</li>\n<li data-mce-fragment=\"1\">Approximate item weight: 15.9 grams.</li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Approximate shank width: 4.5 mm.</span></li>\n<li data-mce-fragment=\"1\">Top width: 21 mm.</li>\n<li data-mce-fragment=\"1\"><span style=\"text-decoration: underline;\">Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>\n<br>",
    "price": 11500,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_1a8221eb-6d79-432a-89be-7524ac36153e.jpg?v=1660767992",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_01fc1476-d6c3-4ced-8386-2fe4bf96d771.jpg?v=1660767994",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_62f3201c-2f79-4163-a340-34e1ebbfeb42.jpg?v=1660767995",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_1e89e695-e0a9-4b41-ae02-7aab8daded0f.jpg?v=1660767997",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_f78c07b5-157b-4dd1-8ab0-f72ccd9c8417.jpg?v=1660767999",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_2224aca9-c3c7-4250-bfc6-d5aee521f173.jpg?v=1660768001",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/products/image_18089242-a7a0-4bde-9f1e-b2fd2c70270e.jpg?v=1660768003"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "VVS/vs high clarity diamonds set in a 18k White Gold Fancy Ring (limited edition)",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T04:20:25.226Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-246",
    "name": "White gold and diamond Cross Pendant and White gold Ice Link Chain",
    "slug": "white-gold-and-diamond-cross-pendant-and-white-gold-ice-link-chain",
    "description": "<ul>\n<li>10k  white gold and natural baguette and round diamonds pendant.</li>\n<li>10k white  gold Ice  link chain.</li>\n<li>Approximate diamond weight: 2.50ct.</li>\n<li>Approximate pendant height (including bail): 53.30mm.</li>\n<li>Approximate weight:  25 grams (22 inches chain + pendant combined).</li>\n<li>Comes with free gold &amp; diamond earrings.</li>\n</ul>",
    "price": 4368.85,
    "sale_price": 3714,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at6.53.02PM.jpg?v=1743893604",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at6.53.03PM_1.jpg?v=1743893604",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at6.53.03PM.jpg?v=1743893604"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "33333333-3333-3333-3333-333333333333",
    "gender": "Women",
    "material": "10k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T03:20:25.226Z",
    "category": {
      "id": "33333333-3333-3333-3333-333333333333",
      "slug": "pendants",
      "name": "Pendants"
    }
  },
  {
    "id": "seed-prod-247",
    "name": "14k yellow gold and diamond Band with Round diamonds",
    "slug": "14k-white-gold-and-diamond-band-with-round-diamonds-copy-2",
    "description": "<ul>\n<li>14k yellow gold with natural round diamonds.</li>\n<li>Approximate diamond weight: 1.46ct.<br>\n</li>\n<li>Approximate item weight: 4.9 grams at size 8 .  Actual weight will vary, based on selected ring size.</li>\n<li><span>Approximate band width: 8.33mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 2011.35,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at6.44.25PM.jpg?v=1744123181",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at6.44.25PM_1.jpg?v=1744123181",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at6.44.26PM.jpg?v=1743893136"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": true,
    "created_at": "2026-08-06T02:20:25.226Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-248",
    "name": "14k white gold and diamond Band with Round diamonds (LIMITED EDITION)",
    "slug": "14k-white-gold-and-diamond-band-with-round-diamonds-copy-1",
    "description": "<ul>\n<li>14k white gold with natural round diamonds.</li>\n<li>Approximate diamond weight: 1.65ct.<br>\n</li>\n<li>Approximate item weight: 14.4 grams at size 7.  Actual weight will vary, based on selected ring size.</li>\n<li><span>Approximate band width: 9.6mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 3565,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.57.10PM.jpg?v=1743890735",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.57.10PM_1.jpg?v=1743890735",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.57.10PM_2.jpg?v=1743890735",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.57.11PM.jpg?v=1743890732"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T01:20:25.226Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-249",
    "name": "14k white gold and diamond Band with Round diamonds",
    "slug": "14k-white-gold-and-diamond-band-with-round-diamonds-copy",
    "description": "<ul>\n<li>14k white gold with natural round and princess cut diamonds.</li>\n<li>Approximate diamond weight: 0.90ct.<br>\n</li>\n<li>Approximate item weight: 6.7 grams at size 7.  Actual weight will vary, based on selected ring size.</li>\n<li><span>Approximate band width: 10.23mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 1840,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.51.59PM.jpg?v=1743890116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.51.59PM_1.jpg?v=1743890116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.51.59PM_2.jpg?v=1743890116",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.51.59PM_3.jpg?v=1743890116"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": true,
    "is_featured": false,
    "is_new": false,
    "created_at": "2026-08-06T00:20:25.226Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  },
  {
    "id": "seed-prod-250",
    "name": "14k white gold and diamond Band with Round diamonds",
    "slug": "white-gold-and-diamond-band-with-round-diamonds-copy",
    "description": "<ul>\n<li>14k white gold with natural round diamonds.</li>\n<li>Approximate diamond weight: 1ct.<br>\n</li>\n<li>Approximate item weight: 6.2 grams at size 13.  Actual weight will vary, based on selected ring size.</li>\n<li><span>Approximate band width: 8.9mm.</span></li>\n<li><span>Comes with a free pair of gold &amp; diamond earrings.</span></li>\n</ul>",
    "price": 1840,
    "sale_price": null,
    "images": [
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.48.45PM.jpg?v=1743889754",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.48.46PM_1.jpg?v=1743889754",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.48.46PM_2.jpg?v=1743889754",
      "https://cdn.shopify.com/s/files/1/0255/6044/9109/files/WhatsAppImage2025-04-05at5.48.46PM.jpg?v=1743889754"
    ],
    "is_published": true,
    "stock": 10,
    "category_id": "11111111-1111-1111-1111-111111111111",
    "gender": "Women",
    "material": "14k Gold",
    "is_bestseller": false,
    "is_featured": true,
    "is_new": false,
    "created_at": "2026-08-05T23:20:25.226Z",
    "category": {
      "id": "11111111-1111-1111-1111-111111111111",
      "slug": "rings",
      "name": "Rings"
    }
  }
];
