import type { Product } from "@/lib/routes";

// Helper function to get all images for a product (excluding PNG icons)
const getProductImages = (asin: string, count: number = 9): string[] => {
  const images: string[] = [];
  for (let i = 1; i <= count; i++) {
    // Skip imagem_02 which is usually a PNG icon, and imagem_09 which might be a video thumbnail
    if (i === 2 || i === 9) continue;
    images.push(`/products/${asin}/imagem_${String(i).padStart(2, '0')}.jpg`);
  }
  return images;
};

export const productsData: Product[] = [
  {
    id: 1,
    name: "Misolin Womens Slipper Memory Foam Fluffy Slip-on",
    description: "Memory foam fluffy slip-on house slippers with faux suede fur lining and anti-skid sole. Perfect for indoor and outdoor use.",
    price: "3.25",
    imageUrl: "/products/B07FT8F3PK/imagem_01.jpg",
    altText: "Misolin Womens Slipper Memory Foam Fluffy Slip-on House Faux Suede Fur Lined Anti-Skid Sole",
    amazonUrl: "https://amzn.to/4qWgglk",
    asin: "B07FT8F3PK",
    rating: 4.5,
    reviews: 17890,
    images: getProductImages("B07FT8F3PK", 9)
  },
  {
    id: 2,
    name: "RockDove Men's Original Two-Tone Memory Foam Slipper",
    description: "Original two-tone memory foam slippers for men. Comfortable and stylish design perfect for home use.",
    price: "3.25",
    imageUrl: "/products/B07LCK4PT1/imagem_01.jpg",
    altText: "RockDove Men's Original Two-Tone Memory Foam Slipper",
    amazonUrl: "https://amzn.to/4pHWSaQ",
    asin: "B07LCK4PT1",
    rating: 4.5,
    reviews: 180938,
    images: getProductImages("B07LCK4PT1", 9)
  },
  {
    id: 3,
    name: "Snug Leaves Men's Faux Wool Slippers",
    description: "Comfy warm winter house shoes with elastic gores. Perfect for keeping your feet warm during cold seasons.",
    price: "3.25",
    imageUrl: "/products/B07VVPMH1N/imagem_01.jpg",
    altText: "Snug Leaves Men's Faux Wool Slippers Comfy Warm Winter House Shoes with Elastic Gores",
    amazonUrl: "https://amzn.to/45eUQYt",
    asin: "B07VVPMH1N",
    rating: 4.6,
    reviews: 8602,
    images: getProductImages("B07VVPMH1N", 9)
  },
  {
    id: 4,
    name: "VeraCosy Ladies' Warm Knitted Faux Suede Memory Foam Moc Slippers",
    description: "Warm knitted faux suede memory foam moc slippers. Comfortable and cozy design for everyday wear.",
    price: "3.25",
    imageUrl: "/products/B08CGQDRP9/imagem_01.jpg",
    altText: "VeraCosy Ladies' Warm Knitted Faux Suede Memory Foam Moc Slippers",
    amazonUrl: "https://amzn.to/3Z46Atv",
    asin: "B08CGQDRP9",
    rating: 4.6,
    reviews: 3947,
    images: getProductImages("B08CGQDRP9", 9)
  },
  {
    id: 5,
    name: "EverFoams Women's Mule Slippers Comfy Warm Shearling",
    description: "Lightweight breathable memory foam anti-slip house shoes. Perfect combination of comfort and style.",
    price: "3.25",
    imageUrl: "/products/B096TNWPSB/imagem_01.jpg",
    altText: "EverFoams Women's Mule Slippers Comfy Warm Shearling Lightweight Breathable Memory Foam Anti-Slip House Shoes",
    amazonUrl: "https://amzn.to/4pIuW6E",
    asin: "B096TNWPSB",
    rating: 4.4,
    reviews: 996,
    images: getProductImages("B096TNWPSB", 9)
  },
  {
    id: 6,
    name: "EverFoams Women's Cosy Alpine Shearling Memory Foam Slippers",
    description: "Cosy alpine shearling memory foam slippers. Slip-ons that provide ultimate comfort and warmth.",
    price: "3.25",
    imageUrl: "/products/B0BYNYWKC7/imagem_01.jpg",
    altText: "EverFoams Women's Cosy Alpine Shearling Memory Foam Slippers",
    amazonUrl: "https://amzn.to/4pIxy4q",
    asin: "B0BYNYWKC7",
    rating: 4.6,
    reviews: 7226,
    images: getProductImages("B0BYNYWKC7", 9)
  },
  {
    id: 7,
    name: "VeraCosy Men's Corduroy Scuff Slippers",
    description: "Soft comfy memory foam non-slip indoor house shoes. Corduroy design for a classic look.",
    price: "3.25",
    imageUrl: "/products/B0CLGL7F1Q/imagem_01.jpg",
    altText: "VeraCosy Men's Corduroy Scuff Slippers Soft Comfy Memory Foam Non-slip Indoor House Shoes",
    amazonUrl: "https://amzn.to/4qrvIWQ",
    asin: "B0CLGL7F1Q",
    rating: 4.3,
    reviews: 2566,
    images: getProductImages("B0CLGL7F1Q", 9)
  },
  {
    id: 8,
    name: "Misolin Slippers Women Ladies Clouds Bootie Corduroy",
    description: "Warm cozy memory foam winter anti-slip house shoes. Perfect for indoor and outdoor use.",
    price: "3.25",
    imageUrl: "/products/B0DK52Y2YM/imagem_01.jpg",
    altText: "Misolin Slippers Women Ladies Clouds Bootie Corduroy Warm with Cozy Memory Foam Winter Anti-Slip House Shoes",
    amazonUrl: "https://amzn.to/4r15RVH",
    asin: "B0DK52Y2YM",
    rating: 4.6,
    reviews: 1344,
    images: getProductImages("B0DK52Y2YM", 9)
  },
  {
    id: 9,
    name: "Amazon Essentials Women's Faux Fur Cosy Slippers",
    description: "Faux fur cozy slippers for women. Comfortable and stylish design perfect for home relaxation.",
    price: "3.25",
    imageUrl: "/products/B0F7M47KBT/imagem_01.jpg",
    altText: "Amazon Essentials Women's Faux Fur Cosy Slippers",
    amazonUrl: "https://amzn.to/3NOODwh",
    asin: "B0F7M47KBT",
    rating: 4.5,
    reviews: 45,
    images: getProductImages("B0F7M47KBT", 8)
  },
  {
    id: 10,
    name: "COFACE Women's Ladies Memory Foam House Slippers",
    description: "Warm cozy slip on fuzzy winter shoes with indoor outdoor rubber sole. Memory foam for ultimate comfort.",
    price: "3.25",
    imageUrl: "/products/B0FHWGC9WQ/imagem_01.jpg",
    altText: "COFACE Women's Ladies Memory Foam House Slippers Warm Cozy Slip On Fuzzy Winter Shoes",
    amazonUrl: "https://amzn.to/4jL96OJ",
    asin: "B0FHWGC9WQ",
    rating: 4.0,
    reviews: 56,
    images: getProductImages("B0FHWGC9WQ", 8)
  },
  {
    id: 11,
    name: "RockDove Women's Felt Mule Slippers",
    description: "Cozy fleece lined felt mule slippers for women. Comfortable and warm design perfect for home use.",
    price: "3.25",
    imageUrl: "/products/B0DS237RY9/imagem_01.jpg",
    altText: "RockDove Women's Felt Mule Slippers Cozy Fleece Lined",
    amazonUrl: "https://amzn.to/45jyGEp",
    asin: "B0DS237RY9",
    rating: 4.5,
    reviews: 0,
    images: getProductImages("B0DS237RY9", 9)
  },
  {
    id: 12,
    name: "COFACE Mens Memory Foam Slippers Slip On Warm Fluffy",
    description: "Warm fluffy house indoor/outdoor shoes with anti-skid sole. Memory foam for ultimate comfort.",
    price: "3.25",
    imageUrl: "/products/B089R72D5Y/imagem_01.jpg",
    altText: "COFACE Mens Memory Foam Slippers Slip On Warm Fluffy House Indoor/Outdoor Shoes With Anti-skid Sole",
    amazonUrl: "https://amzn.to/4r2C13e",
    asin: "B089R72D5Y",
    rating: 4.4,
    reviews: 14165,
    images: getProductImages("B089R72D5Y", 9)
  },
  {
    id: 13,
    name: "MERRIMAC Men's Slip-on Slippers Comfy Memory Foam",
    description: "Non-slip indoor house shoes with memory foam. Comfortable and durable design for everyday use.",
    price: "3.25",
    imageUrl: "/products/B08GC98F4H/imagem_01.jpg",
    altText: "MERRIMAC Men's Slip-on Slippers Comfy Memory Foam Non-slip Indoor House Shoes",
    amazonUrl: "https://amzn.to/4qsVJFq",
    asin: "B08GC98F4H",
    rating: 4.5,
    reviews: 6409,
    images: getProductImages("B08GC98F4H", 9)
  },
  {
    id: 14,
    name: "VeraCosy Men's Classic Moccasin Slippers",
    description: "Soft faux suede memory foam closed-back indoor house shoes. Classic moccasin design with modern comfort.",
    price: "3.25",
    imageUrl: "/products/B0982R3RQT/imagem_01.jpg",
    altText: "VeraCosy Men's Classic Moccasin Slippers Soft Faux Suede Memory Foam Closed-back Indoor House Shoes",
    amazonUrl: "https://amzn.to/4sJtcNp",
    asin: "B0982R3RQT",
    rating: 4.6,
    reviews: 2460,
    images: getProductImages("B0982R3RQT", 9)
  },
  {
    id: 15,
    name: "EverFoams Women's Bootie Slippers Warm Soft Comfy",
    description: "Memory foam non-slip indoor house shoes with fluffy collar. Warm and cozy design perfect for winter.",
    price: "3.25",
    imageUrl: "/products/B0BJZJRHBJ/imagem_01.jpg",
    altText: "EverFoams Women's Bootie Slippers Warm Soft Comfy Memory Foam Non-slip Indoor House Shoes with Fluffy Collar",
    amazonUrl: "https://amzn.to/45R4oJp",
    asin: "B0BJZJRHBJ",
    rating: 4.6,
    reviews: 9524,
    images: getProductImages("B0BJZJRHBJ", 9)
  },
  {
    id: 16,
    name: "COFACE Mens Cozy Memory Foam Scuff Slippers",
    description: "Casual slip on warm house indoor/outdoor shoes. Felt sandal slippers with memory foam for comfort.",
    price: "3.25",
    imageUrl: "/products/B0CQ4Z79NC/imagem_01.jpg",
    altText: "COFACE Mens Cozy Memory Foam Scuff Slippers Casual Slip On Warm House Indoor/Outdoor Shoes Felt Sandal Slippers",
    amazonUrl: "https://amzn.to/3YKF6Zx",
    asin: "B0CQ4Z79NC",
    rating: 4.3,
    reviews: 666,
    images: getProductImages("B0CQ4Z79NC", 9)
  }
];
