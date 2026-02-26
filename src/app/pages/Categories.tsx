import { useState } from 'react';
import { Link } from 'react-router';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Headphones, 
  Watch, 
  Laptop, 
  Camera, 
  Smartphone, 
  Gamepad2,
  Grid3X3
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  Audio: <Headphones className="h-8 w-8" />,
  Wearables: <Watch className="h-8 w-8" />,
  Computers: <Laptop className="h-8 w-8" />,
  Photography: <Camera className="h-8 w-8" />,
  Mobile: <Smartphone className="h-8 w-8" />,
  Gaming: <Gamepad2 className="h-8 w-8" />,
};

const categoryDescriptions: Record<string, string> = {
  Audio: 'Premium headphones, earbuds, and speakers',
  Wearables: 'Smart watches and fitness trackers',
  Computers: 'Laptops, desktops, and accessories',
  Photography: 'Professional cameras and gear',
  Mobile: 'Latest smartphones and tablets',
  Gaming: 'Gaming equipment and accessories',
};

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    if (category === 'All') return products.length;
    return products.filter(p => p.category === category).length;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of tech products across different categories
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {categories.map((category) => (
          <Card 
            key={category}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedCategory === category 
                ? 'ring-2 ring-gray-900 bg-gray-50' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <CardContent className="p-4 text-center">
              <div className="flex justify-center mb-3">
                {category === 'All' ? (
                  <Grid3X3 className="h-8 w-8 text-gray-700" />
                ) : (
                  <div className="text-gray-700">
                    {categoryIcons[category]}
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category}</h3>
              <Badge variant="secondary" className="text-xs">
                {getCategoryCount(category)} products
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Products Grid */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        </h2>
        <p className="text-gray-600 mb-6">
          {selectedCategory === 'All' 
            ? 'Browse our complete collection'
            : categoryDescriptions[selectedCategory] || ''}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No products found in this category.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setSelectedCategory('All')}
          >
            View All Products
          </Button>
        </div>
      )}

      {/* Quick Links */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 text-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="text-gray-300 mb-6">
              Browse our complete product catalog or contact our support team for personalized assistance.
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button variant="secondary">
                  View All Products
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-100">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help choosing?</h3>
            <p className="text-gray-600 mb-6">
              Our experts are here to help you find the perfect tech for your needs.
            </p>
            <Button variant="default" className="bg-gray-900">
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
