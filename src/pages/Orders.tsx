
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Eye, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Orders = () => {
  // Mock order data
  const orders = [
    {
      id: `WM${Date.now().toString().slice(-8)}`,
      date: new Date().toLocaleDateString('en-IN'),
      status: 'Confirmed',
      total: 4999,
      items: 3,
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    },
    {
      id: `WM${(Date.now() - 86400000).toString().slice(-8)}`,
      date: new Date(Date.now() - 86400000).toLocaleDateString('en-IN'),
      status: 'Shipped',
      total: 2499,
      items: 2,
      estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN')
    },
    {
      id: `WM${(Date.now() - 172800000).toString().slice(-8)}`,
      date: new Date(Date.now() - 172800000).toLocaleDateString('en-IN'),
      status: 'Delivered',
      total: 1599,
      items: 1,
      estimatedDelivery: 'Delivered'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-yellow-100 text-yellow-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="ml-8 text-2xl font-bold text-gray-900">My Orders</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {orders.length === 0 ? (
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
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <p className="text-gray-600 text-sm">Placed on {order.date}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Total Amount</h4>
                      <p className="text-2xl font-bold text-green-600">₹{order.total.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Items</h4>
                      <p className="text-lg">{order.items} item{order.items > 1 ? 's' : ''}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        {order.status === 'Delivered' ? 'Delivered On' : 'Expected Delivery'}
                      </h4>
                      <p className="text-lg">{order.estimatedDelivery}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" className="w-full">
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
