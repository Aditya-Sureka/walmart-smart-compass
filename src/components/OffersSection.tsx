
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Percent, Gift, Zap } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";

const OffersSection = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const offers = [
    {
      id: 101,
      title: "Flash Sale - 50% Off Electronics",
      description: "Limited time offer on smartphones, laptops, and accessories",
      discount: "50% OFF",
      timeLeft: "2h 30m",
      image: "📱",
      category: "Electronics",
      originalPrice: "₹19,999",
      salePrice: "₹9,999",
      type: "flash"
    },
    {
      id: 102,
      title: "Buy 2 Get 1 Free - Groceries",
      description: "Mix and match from our grocery collection",
      discount: "33% OFF",
      timeLeft: "1 day",
      image: "🛒",
      category: "Groceries",
      originalPrice: "₹1,500",
      salePrice: "₹1,000",
      type: "bogo"
    },
    {
      id: 103,
      title: "Festive Special - Home Decor",
      description: "Brighten your home with festive decorations",
      discount: "40% OFF",
      timeLeft: "5 days",
      image: "🎊",
      category: "Home Decor",
      originalPrice: "₹2,999",
      salePrice: "₹1,799",
      type: "festival"
    },
    {
      id: 104,
      title: "Weekend Deal - Fashion",
      description: "Trendy clothing and accessories for the season",
      discount: "35% OFF",
      timeLeft: "This weekend",
      image: "👕",
      category: "Fashion",
      originalPrice: "₹3,499",
      salePrice: "₹2,274",
      type: "weekend"
    }
  ];

  const getOfferIcon = (type: string) => {
    switch (type) {
      case 'flash': return <Zap className="h-4 w-4" />;
      case 'bogo': return <Gift className="h-4 w-4" />;
      case 'festival': return <Percent className="h-4 w-4" />;
      default: return <Timer className="h-4 w-4" />;
    }
  };

  const getOfferColor = (type: string) => {
    switch (type) {
      case 'flash': return 'bg-red-100 text-red-800 border-red-200';
      case 'bogo': return 'bg-green-100 text-green-800 border-green-200';
      case 'festival': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const handleClaimOffer = (offer: any) => {
    const offerItem = {
      id: offer.id,
      name: offer.title,
      price: offer.salePrice,
      image: offer.image,
      description: offer.description,
      category: offer.category
    };
    
    addItem(offerItem);
    toast({
      title: "Offer Added to Cart!",
      description: `${offer.title} has been added with ${offer.discount} discount.`,
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <Percent className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
            <p className="text-gray-600">Limited time deals just for you</p>
          </div>
        </div>
        <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
          🔥 Hot Deals
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${getOfferColor(offer.type)} overflow-hidden`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-2">{offer.image}</div>
                <Badge className={`${getOfferColor(offer.type)} flex items-center space-x-1`}>
                  {getOfferIcon(offer.type)}
                  <span>{offer.discount}</span>
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{offer.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{offer.description}</p>
              
              <div className="flex items-center space-x-2 text-sm">
                <Timer className="h-4 w-4 text-orange-500" />
                <span className="font-medium text-orange-600">Ends in {offer.timeLeft}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-green-600">{offer.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                </div>
                
                <Button 
                  onClick={() => handleClaimOffer(offer)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium transition-all duration-200"
                >
                  Claim Offer
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
