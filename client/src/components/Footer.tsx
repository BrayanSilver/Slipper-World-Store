import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Slipper World Store</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bringing coziness to your toes, one fluffy step at a time. The softest, warmest slippers for your home sanctuary.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fluffy Slippers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cozy Flip Flops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Slipper World Store. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> for cozy feet everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
