import { Link } from "react-router-dom";
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Discover the Latest Tech Products
            </h1>
            <p className="text-lg text-gray-300">
              Shop the newest gadgets, electronics, and accessories from top brands. Free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" variant="default" className="bg-white text-gray-900 hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="secondary" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1768987439370-bd60d3d0b28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMHRlY2hub2xvZ3klMjBlY29tbWVyY2V8ZW58MXx8fHwxNzcxOTA2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Shopping"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
