import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import type { Product } from "@shared/schema";
import { useState } from "react";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-secondary/30">
        <img
          src={product.imageUrl}
          alt={product.altText}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Floating Action Buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="p-2.5 bg-white rounded-full shadow-lg text-gray-500 hover:text-red-500 hover:scale-110 transition-all">
            <Heart size={18} fill="currentColor" className="opacity-20 hover:opacity-100" />
          </button>
        </div>

        {/* Quick Add Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button className="w-full py-3 bg-white/90 backdrop-blur-sm rounded-xl font-semibold text-foreground shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
            <ShoppingBag size={18} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-foreground">
            ${Number(product.price).toFixed(2)}
          </span>
          <Link href={`/product/${product.id}`} className="text-sm font-semibold text-primary underline decoration-2 underline-offset-4 hover:text-primary-foreground transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
