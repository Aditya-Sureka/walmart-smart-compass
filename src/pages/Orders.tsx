
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Eye, Download, Clock, CheckCircle, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/contexts/CartContext';

const Orders = () => {
  const { orderHistory } = useCart();

  // Mock some default orders if history is empty
  const mockOrders = [
    {
      id: `WM${Date.now().toString().slice(-8)}`,
      date: new Date().toLocaleDateString('en-IN'),
      status: 'Confirmed',
      total: 4999,
      items: [
        { name: 'Smart Fitness Band', quantity: 1, price: '₹3,499' },
        { name: 'Mocha Cold Brew', quantity: 2, price: '₹199' }
      ],
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    },
    {
      id: `WM${(Date.now() - 86400000).toString().slice(-8)}`,
      date: new Date(Date.now() - 86400000).toLocaleDateString('en-IN'),
      status: 'Shipped',
      total: 2499,
      items: [
        { name: 'Ethnic Wear', quantity: 1, price: '₹2,999' }
      ],
      estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    }
  ];

  // Convert order history to display format
  const displayOrders = [
    ...orderHistory.map(order => ({
      id: order.id,
      date: order.date,
      status: order.status,
      total: order.total,
      items: order.items,
      estimatedDelivery: order.status === 'Delivered' ? 'Delivered' : 
        new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    })),
    ...mockOrders
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Shipped':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <Clock className="h-4 w-4" />;
      case 'Shipped':
        return <Truck className="h-4 w-4" />;
      case 'Delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="ml-8 text-2xl font-bold text-gray-900">My Orders</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {displayOrders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                Showing {displayOrders.length} order{displayOrders.length > 1 ? 's' : ''}
              </p>
              <Badge className="bg-green-100 text-green-800">
                Order History Updated
              </Badge>
            </div>
            
            {displayOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <p className="text-gray-600 text-sm">Placed on {order.date}</p>
                    </div>
                    <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1 border`}>
                      {getStatusIcon(order.status)}
                      <span>{order.status}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Order Items */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Items Ordered:</h4>
                    <div className="space-y-2">
                      {Array.isArray(order.items) ? order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                          <span className="text-sm">{item.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                            <span className="text-sm font-medium">{typeof item.price === 'string' ? item.price : `₹${item.price}`}</span>
                          </div>
                        </div>
                      )) : (
                        <div className="text-sm text-gray-600">Order details not available</div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Total Amount</h4>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{typeof order.total === 'number' ? order.total.toLocaleString('en-IN') : order.total}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Items</h4>
                      <p className="text-lg">
                        {Array.isArray(order.items) ? 
                          order.items.reduce((sum, item) => sum + (item.quantity || 1), 0) :
                          1
                        } item{Array.isArray(order.items) && order.items.length > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        {order.status === 'Delivered' ? 'Delivered On' : 'Expected Delivery'}
                      </h4>
                      <p className="text-lg">{order.estimatedDelivery}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" className="w-full hover:bg-blue-50">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" className="w-full hover:bg-green-50">
                        <Download className="h-4 w-4 mr-2" />
                        Download Invoice
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Orders;
