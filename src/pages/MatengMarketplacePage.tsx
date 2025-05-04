
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Star, Tag, Truck, Shield, CreditCard, Filter, Search } from "lucide-react";

const MatengMarketplacePage = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Handcrafted Wooden Bowl",
      price: 39.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Artisan Crafts",
      category: "Home Decor"
    },
    {
      id: 2,
      name: "Organic Honey (500ml)",
      price: 12.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587049352851-8d4b134c01fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Nature's Bounty",
      category: "Food & Beverages"
    },
    {
      id: 3,
      name: "Handmade Leather Wallet",
      price: 45.00,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Craftsman Leather",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Aromatic Scented Candle",
      price: 18.50,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1603006905393-91a96fc2477c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Zen Home",
      category: "Home Decor"
    },
    {
      id: 5,
      name: "Organic Fruit Basket",
      price: 24.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Fresh Farms",
      category: "Food & Beverages"
    },
    {
      id: 6,
      name: "Hand-painted Ceramic Mug",
      price: 15.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Artistic Ceramics",
      category: "Kitchen & Dining"
    },
    {
      id: 7,
      name: "Vintage Style Clock",
      price: 29.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Antique Treasures",
      category: "Home Decor"
    },
    {
      id: 8,
      name: "Pure Essential Oils Set",
      price: 34.50,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      seller: "Natural Wellness",
      category: "Health & Beauty"
    }
  ];

  // Sample categories
  const categories = [
    "All Categories",
    "Home Decor",
    "Food & Beverages",
    "Accessories",
    "Kitchen & Dining",
    "Health & Beauty",
    "Handcrafts"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mateng Marketplace</h1>
              <p className="text-xl text-gray-100 mb-8">
                A vibrant digital marketplace connecting local vendors, artisans, and service providers with community members.
                Shop local, support small businesses, and discover unique products.
              </p>
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                <a href="#products">Start Shopping</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search for products, services, vendors..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateng-marketplace"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
              
              <div className="flex items-center">
                <Button variant="outline" className="flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-mateng-marketplace hover:bg-mateng-marketplace/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover unique items from local artisans and vendors in your community
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="text-yellow-400 mr-1" size={16} fill="currentColor" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      <span className="text-sm text-gray-500">{product.seller}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-mateng-marketplace hover:bg-mateng-marketplace/90 flex items-center justify-center">
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-mateng-marketplace hover:bg-mateng-marketplace/90">
                Load More Products
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Shop with Mateng Marketplace</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="text-mateng-marketplace w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Local Vendor Showcase</h3>
                <p className="text-gray-600 text-sm">
                  Discover unique products from verified local businesses and artisans.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="text-mateng-marketplace w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Secure Transactions</h3>
                <p className="text-gray-600 text-sm">
                  Shop with confidence with our secure payment processing system.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Truck className="text-mateng-marketplace w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Fast Local Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Get your purchases quickly with our efficient local delivery service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-mateng-marketplace w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Buyer Protection</h3>
                <p className="text-gray-600 text-sm">
                  Shop with peace of mind knowing your purchases are protected.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Become a Seller */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4">Become a Seller</h2>
                  <p className="text-gray-600 mb-6">
                    Join our marketplace to reach more customers and grow your business. Our platform provides the tools and resources you need to succeed.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 rounded-full p-1">
                        <Tag className="text-mateng-marketplace w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">Easy Listing Management</h3>
                        <p className="text-sm text-gray-500">Simple tools to manage your product inventory</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 rounded-full p-1">
                        <CreditCard className="text-mateng-marketplace w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">Fast Payments</h3>
                        <p className="text-sm text-gray-500">Receive your earnings quickly and securely</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 rounded-full p-1">
                        <Truck className="text-mateng-marketplace w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">Delivery Integration</h3>
                        <p className="text-sm text-gray-500">Connect with our delivery network for order fulfillment</p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-mateng-marketplace hover:bg-mateng-marketplace/90">
                    Apply to Sell
                  </Button>
                </div>
                <div className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                }}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-mateng-marketplace text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Shopping Local?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community marketplace today and discover unique products from local vendors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
              <Button variant="secondary" size="lg" className="text-mateng-marketplace">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MatengMarketplacePage;
