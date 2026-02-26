import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Truck, 
  Headphones, 
  Award,
  Users,
  Globe,
  Heart
} from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">About TechShop</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Trusted Tech Partner
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the latest technology products with exceptional service and competitive prices.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, TechShop started with a simple mission: making cutting-edge technology accessible to everyone. What began as a small online store has grown into a trusted destination for tech enthusiasts worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that technology should enhance lives, not complicate them. That's why we carefully curate every product in our collection, ensuring only the best makes it to our shelves.
          </p>
          <p className="text-gray-600">
            Today, we serve thousands of customers across the globe, offering premium tech products with a commitment to quality, transparency, and customer satisfaction.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
            <Globe className="h-32 w-32 text-white opacity-50" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-gray-700" />
            <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-gray-700" />
            <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
            <div className="text-sm text-gray-600">Products Sold</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Globe className="h-8 w-8 mx-auto mb-3 text-gray-700" />
            <div className="text-3xl font-bold text-gray-900 mb-1">30+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 mx-auto mb-3 text-gray-700" />
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every product we sell undergoes rigorous quality checks. We partner only with trusted brands and manufacturers who share our commitment to excellence.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. From personalized recommendations to responsive support, we prioritize your needs at every step.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Technology never stops evolving, and neither do we. We're constantly updating our catalog with the latest innovations and trending products.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose TechShop</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="h-10 w-10 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-600">
                Free shipping on orders over $50 with express delivery options available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-10 w-10 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-sm text-gray-600">
                Shop with confidence using our secure payment methods and data protection.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Headphones className="h-10 w-10 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">
                Our dedicated support team is always available to assist you.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-10 w-10 mx-auto mb-4 text-gray-700" />
              <h3 className="font-semibold text-gray-900 mb-2">Warranty Protection</h3>
              <p className="text-sm text-gray-600">
                All products come with manufacturer warranty for your peace of mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gray-900 text-white overflow-hidden">
        <CardContent className="p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our amazing collection of tech products and find exactly what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Browse Products
            </a>
            <a href="/categories" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Shop by Category
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
