import { motion } from "framer-motion";
import type { Product } from "@/lib/routes";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer"
      >
        <div className="aspect-[4/5] relative overflow-hidden bg-secondary/30">
          <img
            src={product.imageUrl}
            alt={product.altText || `${product.name} - Comfortable Slippers UK | Slipper World`}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            loading="lazy"
            width="400"
            height="500"
          />
        </div>

        <div className="p-5">
          <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
