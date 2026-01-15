import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, ShieldCheck, Heart } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Slipper World - The Coziest Fluffy Slippers & Flip Flops</title>
          <meta name="description" content="Discover ultimate comfort at Slipper World. Shop our collection of cute, fluffy slippers, warm house shoes, and cozy flip flops. Perfect for relaxing at home." />
          <meta name="keywords" content="slippers, flip flops, fluffy slippers, cute slippers, warm slippers, house shoes, pantufas, comfort footwear, aesthetic shoes" />
        </Helmet>

        <Navigation />

        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Blob Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[80px] opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="inline-block px-4 py-2 rounded-full bg-white text-primary font-bold text-sm shadow-sm mb-6 border border-primary/20">
                    ✨ New Winter Collection
                  </span>
                  <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6">
                    Step into <br/>
                    <span className="text-primary relative inline-block">
                      Pure Comfort
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                    Treat your feet to the softest, cutest, and most comfortable slippers. Designed to make every step at home feel like walking on clouds.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#shop" className="px-8 py-4 bg-foreground text-white rounded-2xl font-bold text-lg hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-foreground/20">
                      Shop Slippers <ArrowRight size={20} />
                    </a>
                    <a href="#about" className="px-8 py-4 bg-white text-foreground rounded-2xl font-bold text-lg hover:bg-secondary/50 transition-all flex items-center justify-center gap-2 border border-border shadow-sm">
                      Our Story
                    </a>
                  </div>

                  <div className="mt-12 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                           {/* Using placeholder avatars, in real app use user images */}
                           <div className="w-full h-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{i}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex text-yellow-400 mb-0.5">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">Loved by 10,000+ happy feet</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative hidden lg:block"
                >
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl soft-shadow transform hover:-translate-y-2 transition-transform duration-500">
                    {/* Placeholder for Hero Image - warm, cozy aesthetic */}
                    <div className="aspect-[4/5] bg-secondary/50 relative">
                       <img 
                         src="https://images.unsplash.com/photo-1574620583733-47124f5a34e5?q=80&w=1000&auto=format&fit=crop" 
                         alt="Cozy person wearing slippers with coffee"
                         className="object-cover w-full h-full"
                       />
                       {/* Floating badge */}
                       <div className="absolute top-8 left-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg flex items-center gap-3">
                         <div className="bg-green-100 p-2 rounded-full text-green-600">
                           <ShieldCheck size={24} />
                         </div>
                         <div>
                           <p className="font-bold text-sm">100% Cotton</p>
                           <p className="text-xs text-muted-foreground">Premium Quality</p>
                         </div>
                       </div>
                    </div>
                  </div>
                  {/* Decorative circle behind */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-[3.5rem] -z-10 blur-xl opacity-60" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Strip */}
          <section className="py-12 bg-white border-y border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/20 transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Free Shipping</h3>
                    <p className="text-muted-foreground text-sm">On all orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/20 transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-full bg-accent/40 flex items-center justify-center text-accent-foreground">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Made with Love</h3>
                    <p className="text-muted-foreground text-sm">Ethically sourced materials</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-secondary/20 transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Best Rated</h3>
                    <p className="text-muted-foreground text-sm">5-star comfort guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Grid */}
          <section id="shop" className="py-24 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Collection</span>
                <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">Find Your Perfect Pair</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From fluffy slides to warm booties, our collection is designed to keep you cozy all year round.
                </p>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="bg-white rounded-3xl h-[400px] animate-pulse border border-border/50" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
              
              {!isLoading && (!products || products.length === 0) && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">Our shelves are being restocked with coziness! Check back soon.</p>
                </div>
              )}

              <div className="mt-16 text-center">
                <button className="px-8 py-3 bg-white border-2 border-foreground text-foreground rounded-xl font-bold hover:bg-foreground hover:text-white transition-all duration-300">
                  View All Products
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                   <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl max-w-md mx-auto relative z-10">
                     <img 
                       src="https://pixabay.com/get/g1e652f25c71dc73ad00c4b842a060cb7afcc3177f10224122b737bcfa94d3346cb698fecf82a87e7347814fe6480541b3abba6a32a50c5340ca5fabec9c52dba_1280.png" 
                       alt="Cozy home atmosphere" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-0" />
                </div>
                
                <div>
                  <h2 className="font-display text-4xl font-bold text-foreground mb-6">The Slipper World Mission</h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      We believe that the moment you step into your home, you should feel an immediate sense of relief and comfort. That's why we started Slipper World.
                    </p>
                    <p>
                      Our "pantufas" aren't just shoes; they're a hug for your feet. We source the softest, most durable materials to ensure that cozy feeling lasts step after step.
                    </p>
                    <p>
                      Whether you're working from home, enjoying a lazy Sunday, or just need to warm up on a cold night, we've got the perfect pair waiting for you.
                    </p>
                  </div>
                  <div className="mt-8">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                      alt="Signature" 
                      className="h-12 opacity-60" 
                    />
                    <p className="mt-2 font-bold text-sm text-foreground">Founder, Slipper World</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter / CTA */}
          <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto bg-foreground rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-20" />
              
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ready to get cozy?</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                  Join our cozy club and get 10% off your first order of fluffy goodness.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all"
                  />
                  <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-white hover:text-foreground transition-all">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
