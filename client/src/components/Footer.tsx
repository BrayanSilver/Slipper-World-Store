import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Slipper World</h3>
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

          <div>
            <h4 className="font-bold text-foreground mb-4">Stay Cozy</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for updates on our newest fluffy arrivals.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full px-4 py-2 rounded-xl bg-secondary/30 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-bold hover:brightness-95 transition-all">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Slipper World. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> for cozy feet everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
