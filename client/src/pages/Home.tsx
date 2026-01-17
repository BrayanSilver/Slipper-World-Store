import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, ShieldCheck, Heart } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const { data: products, isLoading } = useProducts();
  const [location] = useLocation();

  useEffect(() => {
    // Se houver hash na URL, faz scroll para a seção
    if (location.includes("#")) {
      const hash = location.split("#")[1];
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Comfortable Slippers UK | Pantufas & Fluffy House Shoes | Slipper World</title>
          <meta name="description" content="Shop the UK's best comfortable slippers, pantufas, and fluffy house shoes. Premium memory foam slippers, cozy flip flops, and warm indoor footwear. Free UK delivery on comfortable slippers. Find your perfect pair of pantufas today!" />
          <meta name="keywords" content="comfortable slippers UK, pantufas, fluffy slippers, memory foam slippers, house shoes, indoor slippers, cozy slippers, warm slippers, comfortable flip flops, slippers for women, slippers for men, best slippers UK, cheap slippers, luxury slippers, anti-slip slippers, winter slippers, plush slippers, soft slippers, comfortable footwear, home shoes, bedroom slippers, lounge slippers, chinelos confortáveis, pantufas confortáveis" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://slipperworld.co.uk/" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Comfortable Slippers UK | Pantufas & Fluffy House Shoes | Slipper World" />
          <meta property="og:description" content="Shop the UK's best comfortable slippers, pantufas, and fluffy house shoes. Premium memory foam slippers with free UK delivery." />
          <meta property="og:url" content="https://slipperworld.co.uk/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://slipperworld.co.uk/products/B0BYNYWKC7/imagem_01.jpg" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:site_name" content="Slipper World UK" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Comfortable Slippers UK | Pantufas & Fluffy House Shoes" />
          <meta name="twitter:description" content="Shop the UK's best comfortable slippers, pantufas, and fluffy house shoes. Premium memory foam slippers with free UK delivery." />
          <meta name="twitter:image" content="https://slipperworld.co.uk/products/B0BYNYWKC7/imagem_01.jpg" />
          
          {/* Schema.org for CollectionPage */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Comfortable Slippers Collection - Slipper World UK",
              "description": "Browse our collection of comfortable slippers, pantufas, and fluffy house shoes. Premium memory foam slippers for men and women with free UK delivery.",
              "url": "https://slipperworld.co.uk/",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": products?.map((product, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Product",
                    "name": product.name,
                    "description": product.description,
                    "image": product.imageUrl,
                    "url": `https://slipperworld.co.uk/product/${product.id}`,
                    "offers": {
                      "@type": "Offer",
                      "price": product.price,
                      "priceCurrency": "GBP",
                      "availability": "https://schema.org/InStock",
                      "url": product.amazonUrl
                    },
                    "aggregateRating": product.rating ? {
                      "@type": "AggregateRating",
                      "ratingValue": product.rating,
                      "reviewCount": product.reviews || 0
                    } : undefined
                  }
                })).filter(Boolean) || []
              }
            })}
          </script>
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
                    Comfortable Slippers & <br/>
                    <span className="text-primary relative inline-block">
                      Pantufas UK
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                    Discover the UK's best comfortable slippers and pantufas. Our fluffy house shoes and cozy chinelos confortáveis feature premium memory foam for ultimate comfort. Perfect for relaxing at home with the softest, most comfortable slippers available.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#shop" 
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector("#shop");
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="px-8 py-4 bg-foreground text-white rounded-2xl font-bold text-lg hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-foreground/20"
                    >
                      Shop Slippers <ArrowRight size={20} />
                    </a>
                    <a 
                      href="#about" 
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector("#about");
                        if (element) {
                          const headerOffset = 100;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="px-8 py-4 bg-white text-foreground rounded-2xl font-bold text-lg hover:bg-secondary/50 transition-all flex items-center justify-center gap-2 border border-border shadow-sm"
                    >
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
                         src="/products/B0BYNYWKC7/imagem_01.jpg" 
                         alt="Comfortable fluffy slippers and pantufas from Slipper World UK - Premium memory foam house shoes"
                         className="object-cover w-full h-full"
                         loading="eager"
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
                    <h3 className="font-bold text-lg">Shipping</h3>
                    <p className="text-muted-foreground text-sm">Depending on product</p>
                    <p className="text-muted-foreground text-sm mt-1">Choose different colors and sizes.</p>
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
                <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">Comfortable Slippers & Pantufas for Every Home</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Browse our extensive collection of comfortable slippers, pantufas, and fluffy house shoes. From memory foam slippers to cozy chinelos confortáveis, we offer the UK's best selection of comfortable indoor footwear. Each pair is designed to provide ultimate comfort and warmth for your feet.
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
                       src="/products/B07FT8F3PK/imagem_01.jpg" 
                       alt="Comfortable slippers and pantufas collection - Slipper World UK cozy home footwear" 
                       className="w-full h-full object-cover"
                       loading="lazy"
                     />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-0" />
                </div>
                
                <div>
                  <h2 className="font-display text-4xl font-bold text-foreground mb-6">The Slipper World Mission: Comfortable Slippers & Pantufas for Everyone</h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      We believe that the moment you step into your home, you should feel an immediate sense of relief and comfort. That's why we started Slipper World - to bring you the UK's best comfortable slippers and pantufas.
                    </p>
                    <p>
                      Our comfortable slippers and pantufas aren't just shoes; they're a hug for your feet. We source the softest, most durable materials including premium memory foam to ensure that cozy feeling lasts step after step. Every pair of our fluffy house shoes is designed to be the most comfortable slippers you'll ever own.
                    </p>
                    <p>
                      Whether you're working from home, enjoying a lazy Sunday, or just need to warm up on a cold night, we've got the perfect pair of comfortable slippers or pantufas waiting for you. Our collection includes everything from cozy chinelos confortáveis to luxurious memory foam slippers, all available with free UK delivery.
                    </p>
                  </div>
                  <div className="mt-8">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                      alt="Signature" 
                      className="h-12 opacity-60" 
                    />
                    <p className="mt-2 font-bold text-sm text-foreground">Founder, Slipper World Store</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
