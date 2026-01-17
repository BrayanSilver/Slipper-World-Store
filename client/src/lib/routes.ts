import { z } from 'zod';

// Product type definition (simplified, without drizzle dependency)
export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  altText: string;
  amazonUrl?: string;
  asin?: string;
  rating?: number;
  reviews?: number;
  images?: string[]; // Array de todas as imagens do produto
};

export const api = {
  products: {
    list: {
      method: 'GET' as const,
      path: '/api/products',
      responses: {
        200: z.array(z.object({
          id: z.number(),
          name: z.string(),
          description: z.string(),
          price: z.string(),
          imageUrl: z.string(),
          altText: z.string(),
        })),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/products/:id',
      responses: {
        200: z.object({
          id: z.number(),
          name: z.string(),
          description: z.string(),
          price: z.string(),
          imageUrl: z.string(),
          altText: z.string(),
        }),
        404: z.object({ message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
