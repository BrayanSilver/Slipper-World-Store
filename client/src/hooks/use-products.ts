import { useQuery } from "@tanstack/react-query";
import { api, buildUrl, type Product } from "@/lib/routes";
import { productsData } from "@/data/products";

export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      // Simulate a small delay for realistic loading
      await new Promise(resolve => setTimeout(resolve, 500));
      return productsData;
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: [api.products.get.path, id],
    queryFn: async () => {
      // Simulate a small delay for realistic loading
      await new Promise(resolve => setTimeout(resolve, 300));
      const product = productsData.find(p => p.id === id);
      return product || null;
    },
  });
}
