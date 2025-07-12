
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, MapPin } from 'lucide-react';

interface TrendingSuggestionsProps {
  location: {
    city: string;
    country: string;
  };
  onAddToCart: (productName: string) => void;
}

const TrendingSuggestions: React.FC<TrendingSuggestionsProps> = ({ location, onAddToCart }) => {
  const getTrendingProducts = () => {
    return [
      {
        id: 1,
        name: "Mocha Cold Brew",
        price: "₹199",
        image: "☕",
        description: "Viral coffee trend hitting Mumbai",
        badge: "🔥 Trending",
        trendScore: 95
      },
      {
        id: 2,
        name: "Festive Decorations",
        price: "₹1,499",
        image: "🎉",
        description: "Perfect for upcoming festivals",
        badge: "🎊 Festival",
        trendScore: 87
      },
      {
        id: 3,
        name: "Ethnic Wear",
        price: "₹2,999",
        image: "👗",
        description: "Traditional outfits in high demand",
        badge: "👑 Premium",
        trendScore: 92
      },
      {
        id: 4,
        name: "Smart Fitness Band",
        price: "₹3,499",
        image: "⌚",
        description: "Health tracking made simple",
        badge: "💪 Wellness",
        trendScore: 78
      }
    ];
  };

  const products = getTrendingProducts();

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{product.image}</span>
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {product.badge}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <TrendingUp className="h-3 w-3" />
                    <span>{product.trendScore}%</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">{product.price}</span>
                <Button 
                  onClick={() => onAddToCart(product.name)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-green-700">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">
                Popular in {location.city}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Based on local trends</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingSuggestions;
