import { Helmet, HelmetProvider } from "react-helmet-async";
import { useRoute } from "wouter";
import { useProduct } from "@/hooks/use-products";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Star, 
  Truck, 
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const productId = params ? parseInt(params.id) : null;
  const { data: product, isLoading } = useProduct(productId || 0);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get all product images from the product data
  const productImages = product ? (product.images || [product.imageUrl]) : [];

  if (isLoading) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="aspect-square bg-secondary/30 rounded-3xl animate-pulse" />
                <div className="space-y-6">
                  <div className="h-8 bg-secondary/30 rounded animate-pulse" />
                  <div className="h-6 bg-secondary/30 rounded animate-pulse w-1/3" />
                  <div className="h-32 bg-secondary/30 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  if (!product) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                <ArrowLeft size={20} />
                Back to Home
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>{product.name} | Comfortable Slippers UK | Slipper World</title>
          <meta name="description" content={`${product.description} Shop comfortable slippers and pantufas in the UK. Premium memory foam, fluffy design, and cozy comfort. Free UK delivery. Rated ${product.rating || '4.5'} stars with ${product.reviews?.toLocaleString() || 'thousands'} reviews.`} />
          <meta name="keywords" content={`${product.name}, comfortable slippers UK, pantufas, fluffy slippers, memory foam slippers, house shoes, ${product.name.toLowerCase()}, cozy slippers, warm slippers, indoor slippers, comfortable footwear, chinelos confortáveis, pantufas confortáveis`} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={`https://slipperworld.co.uk/product/${product.id}`} />
          
          {/* Open Graph */}
          <meta property="og:title" content={`${product.name} | Comfortable Slippers UK`} />
          <meta property="og:description" content={`${product.description} Shop comfortable slippers and pantufas in the UK. Premium memory foam with free UK delivery.`} />
          <meta property="og:url" content={`https://slipperworld.co.uk/product/${product.id}`} />
          <meta property="og:type" content="product" />
          <meta property="og:image" content={`https://slipperworld.co.uk${product.imageUrl}`} />
          <meta property="og:image:alt" content={product.altText || product.name} />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:site_name" content="Slipper World UK" />
          
          {/* Product Open Graph */}
          <meta property="product:price:amount" content={product.price} />
          <meta property="product:price:currency" content="GBP" />
          <meta property="product:availability" content="in stock" />
          <meta property="product:condition" content="new" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${product.name} | Comfortable Slippers UK`} />
          <meta name="twitter:description" content={`${product.description} Shop comfortable slippers and pantufas in the UK.`} />
          <meta name="twitter:image" content={`https://slipperworld.co.uk${product.imageUrl}`} />
          <meta name="twitter:image:alt" content={product.altText || product.name} />
          
          {/* Schema.org Product Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": product.name,
              "description": product.description,
              "image": productImages.map(img => `https://slipperworld.co.uk${img}`),
              "brand": {
                "@type": "Brand",
                "name": product.name.split(' ')[0] || "Slipper World"
              },
              "offers": {
                "@type": "Offer",
                "url": product.amazonUrl,
                "priceCurrency": "GBP",
                "price": product.price,
                "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "seller": {
                  "@type": "Organization",
                  "name": "Amazon UK"
                },
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "GBP"
                  },
                  "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "GB"
                  }
                }
              },
              "aggregateRating": product.rating ? {
                "@type": "AggregateRating",
                "ratingValue": product.rating.toString(),
                "reviewCount": (product.reviews || 0).toString(),
                "bestRating": "5",
                "worstRating": "1"
              } : undefined,
              "sku": product.asin,
              "mpn": product.asin,
              "category": "Footwear > Slippers",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Material",
                  "value": "Memory Foam, Faux Suede, Plush"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Type",
                  "value": "House Shoes / Indoor Slippers"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Comfort Level",
                  "value": "Ultra Comfortable"
                }
              ]
            })}
          </script>
          
          {/* BreadcrumbList Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://slipperworld.co.uk/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://slipperworld.co.uk/#shop"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": product.name,
                  "item": `https://slipperworld.co.uk/product/${product.id}`
                }
              ]
            })}
          </script>
        </Helmet>

        <Navigation />

        <main>
          {/* Breadcrumb */}
          <section className="pt-24 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft size={18} />
                <span className="text-sm font-medium">Back to Products</span>
              </Link>
            </div>
          </section>

          {/* Product Details */}
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Image Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-square rounded-3xl overflow-hidden bg-secondary/30 relative group"
                  >
                    <img
                      src={productImages[selectedImage]}
                      alt={product.altText || `${product.name} - Comfortable Slippers UK | Slipper World`}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      width="800"
                      height="800"
                    />
                  </motion.div>

                  {/* Thumbnail Images */}
                  {productImages.length > 1 && (
                    <div className="grid grid-cols-4 gap-4">
                      {productImages.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                            selectedImage === index
                              ? "border-primary shadow-lg scale-105"
                              : "border-transparent hover:border-primary/50"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${product.name} - View ${index + 1} | Comfortable Slippers UK`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width="200"
                            height="200"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i <= Math.floor(product.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {product.rating ? `${product.rating} out of 5` : ""} 
                        {product.reviews ? ` (${product.reviews.toLocaleString()} reviews)` : ""}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="prose prose-sm max-w-none"
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-muted-foreground mt-4">
                      Experience the ultimate in comfort with our premium collection. Each pair is carefully crafted 
                      with the softest materials to ensure your feet feel pampered all day long. Perfect for lounging 
                      at home, these slippers combine style and functionality in one cozy package.
                    </p>
                  </motion.div>

                  {/* Buy Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4 pt-6"
                  >
                    <a
                      href={product.amazonUrl || "#"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-foreground text-white rounded-2xl font-bold text-lg hover:bg-foreground/90 transition-all flex items-center justify-center gap-3 shadow-lg"
                    >
                      Product Details and Buy
                    </a>
                    <div className="text-center">
                      <a
                        href={product.amazonUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Link da Amazon
                      </a>
                    </div>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="pt-6 border-t border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Truck size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Shipping</p>
                        <p className="text-xs text-muted-foreground">Depending on product</p>
                      </div>
                    </div>
                  </motion.div>

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
