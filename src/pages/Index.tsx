
import React, { useState, useEffect } from 'react';
import { MapPin, Cloud, TrendingUp, Accessibility, ShoppingCart, Bell, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import WeatherSuggestions from '@/components/WeatherSuggestions';
import TrendingSuggestions from '@/components/TrendingSuggestions';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import NotificationCenter from '@/components/NotificationCenter';
import SearchBar from '@/components/SearchBar';
import OffersSection from '@/components/OffersSection';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const { getTotalItems } = useCart();
  const [location, setLocation] = useState({ city: 'Mumbai', country: 'India' });
  const [weather, setWeather] = useState({ condition: 'Rainy', temp: 28, icon: '🌧️' });
  const [accessibleMode, setAccessibleMode] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [notifications, setNotifications] = useState([
    "Mocha Cold Brew is trending in your area! ☕",
    "Rain expected today - check our umbrella collection 🌂",
    "Festival season deals are live! 🎉",
    "Flash sale on electronics - 50% off! ⚡",
    "New arrivals in ethnic wear collection 👗"
  ]);

  const categories = ['Electronics', 'Clothing', 'Groceries', 'Home Decor', 'Sports', 'Books'];

  // Mock product database for search
  const allProducts = [
    { id: 1, name: 'Smart TV 55"', category: 'Electronics', price: '₹45,999', image: '📺' },
    { id: 2, name: 'Wireless Headphones', category: 'Electronics', price: '₹2,999', image: '🎧' },
    { id: 3, name: 'Cotton T-Shirt', category: 'Clothing', price: '₹599', image: '👕' },
    { id: 4, name: 'Jeans', category: 'Clothing', price: '₹1,299', image: '👖' },
    { id: 5, name: 'Rice 5kg', category: 'Groceries', price: '₹299', image: '🍚' },
    { id: 6, name: 'Cooking Oil', category: 'Groceries', price: '₹199', image: '🛢️' },
    { id: 7, name: 'Table Lamp', category: 'Home Decor', price: '₹899', image: '💡' },
    { id: 8, name: 'Wall Clock', category: 'Home Decor', price: '₹799', image: '🕐' },
  ];

  const handleSearch = (query: string, category: string) => {
    let filtered = allProducts;
    
    if (category !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    setSearchResults(filtered);
    setShowSearchResults(query.length > 0 || category !== 'all');
  };

  const addToCart = (productName: string, productData: any) => {
    console.log(`Adding ${productName} to cart`, productData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-blue-600">Walmart</div>
              <Badge variant="secondary" className="bg-green-100 text-green-800 animate-pulse">
                SmartAssist
              </Badge>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Accessibility Toggle */}
              <div className="flex items-center space-x-2">
                <Accessibility className="h-4 w-4 text-gray-600" />
                <Switch 
                  id="accessible-mode" 
                  checked={accessibleMode}
                  onCheckedChange={setAccessibleMode}
                />
                <Label htmlFor="accessible-mode" className="text-sm">
                  Accessible
                </Label>
              </div>
              
              {/* Notifications */}
              <NotificationCenter notifications={notifications} />
              
              {/* Profile */}
              <Link to="/profile">
                <Button variant="outline" size="icon" className="hover:bg-blue-50 transition-colors">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
              
              {/* Cart */}
              <Link to="/cart">
                <Button variant="outline" className="relative hover:bg-green-50 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-green-500 animate-bounce">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Location & Weather Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">{location.city}, {location.country}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{weather.icon}</span>
                <span>{weather.condition} • {weather.temp}°C</span>
              </div>
            </div>
            <div className="text-sm opacity-90">
              Personalized for you based on location & trends
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Accessibility Panel */}
        {accessibleMode && (
          <div className="mb-8 animate-fade-in">
            <AccessibilityPanel />
          </div>
        )}

        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Welcome to Your Personalized Shopping Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Discover products tailored to your location, weather, and trending preferences. 
            We make shopping smarter and more inclusive for everyone.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in">
          <SearchBar onSearch={handleSearch} categories={categories} />
          
          {/* Search Results */}
          {showSearchResults && (
            <div className="mt-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">
                Search Results ({searchResults.length} items found)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {searchResults.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-all duration-200 hover-scale">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">{product.image}</div>
                        <h4 className="font-medium mb-1">{product.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                        <p className="text-lg font-bold text-green-600 mb-3">{product.price}</p>
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Link to="/orders">
            <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">📦</div>
                <span className="font-medium">My Orders</span>
              </CardContent>
            </Card>
          </Link>
          <Link to="/cart">
            <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🛒</div>
                <span className="font-medium">Cart ({getTotalItems()})</span>
              </CardContent>
            </Card>
          </Link>
          <Link to="/profile">
            <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">👤</div>
                <span className="font-medium">Profile</span>
              </CardContent>
            </Card>
          </Link>
          <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale">
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">💳</div>
              <span className="font-medium">Offers</span>
            </CardContent>
          </Card>
        </div>

        {/* Offers Section */}
        <div className="mb-12 animate-fade-in">
          <OffersSection />
        </div>

        {/* Suggestions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Weather-Based Suggestions */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Cloud className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Weather-Based Suggestions</h2>
            </div>
            <WeatherSuggestions weather={weather} onAddToCart={addToCart} />
          </div>

          {/* Trending Suggestions */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Trending Near You</h2>
            </div>
            <TrendingSuggestions location={location} onAddToCart={addToCart} />
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Walmart SmartAssist?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Location-Aware</h4>
              <p className="text-gray-600">
                Get product suggestions based on your location and local weather conditions.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Trend-Powered</h4>
              <p className="text-gray-600">
                Discover what's popular in your area and stay ahead of local trends.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Accessibility className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Fully Accessible</h4>
              <p className="text-gray-600">
                Designed with accessibility in mind, including sign language support.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
