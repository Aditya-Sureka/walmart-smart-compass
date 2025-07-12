
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Umbrella, Thermometer, Snowflake, Sun } from 'lucide-react';

interface WeatherSuggestionsProps {
  weather: {
    condition: string;
    temp: number;
    icon: string;
  };
  onAddToCart: (productName: string) => void;
}

const WeatherSuggestions: React.FC<WeatherSuggestionsProps> = ({ weather, onAddToCart }) => {
  const getWeatherProducts = () => {
    const { condition, temp } = weather;
    
    if (condition.toLowerCase().includes('rain')) {
      return [
        {
          id: 1,
          name: "Premium Umbrella",
          price: "₹899",
          image: "🌂",
          description: "Stay dry with our wind-resistant umbrella",
          badge: "Weather Essential"
        },
        {
          id: 2,
          name: "Waterproof Jacket",
          price: "₹2,499",
          image: "🧥",
          description: "Lightweight, breathable rain protection",
          badge: "Trending"
        },
        {
          id: 3,
          name: "Rain Boots",
          price: "₹1,299",
          image: "👢",
          description: "Comfortable waterproof footwear",
          badge: "Best Seller"
        }
      ];
    } else if (temp > 30) {
      return [
        {
          id: 1,
          name: "Portable AC",
          price: "₹25,999",
          image: "❄️",
          description: "Energy-efficient cooling solution",
          badge: "Summer Essential"
        },
        {
          id: 2,
          name: "Cotton T-Shirts",
          price: "₹699",
          image: "👕",
          description: "Breathable, comfortable summer wear",
          badge: "Comfort"
        },
        {
          id: 3,
          name: "Water Bottle",
          price: "₹399",
          image: "💧",
          description: "Insulated steel water bottle",
          badge: "Hydration"
        }
      ];
    } else {
      return [
        {
          id: 1,
          name: "Warm Blanket",
          price: "₹1,899",
          image: "🛏️",
          description: "Cozy fleece blanket for comfort",
          badge: "Comfort"
        },
        {
          id: 2,
          name: "Hot Beverages",
          price: "₹299",
          image: "☕",
          description: "Premium tea and coffee collection",
          badge: "Warming"
        },
        {
          id: 3,
          name: "Sweater",
          price: "₹1,599",
          image: "🧶",
          description: "Soft wool blend sweater",
          badge: "Cozy"
        }
      ];
    }
  };

  const products = getWeatherProducts();

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{product.image}</span>
                  <div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {product.badge}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                <Button 
                  onClick={() => onAddToCart(product.name)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 text-blue-700">
            <Thermometer className="h-5 w-5" />
            <span className="font-medium">
              Perfect for {weather.condition.toLowerCase()} weather at {weather.temp}°C
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherSuggestions;
