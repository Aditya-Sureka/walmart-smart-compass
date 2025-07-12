
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrderSuccess = () => {
  const orderNumber = `WM${Date.now().toString().slice(-8)}`;
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-medium">
              Order Number: <span className="font-bold">{orderNumber}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5" />
                <span>Order Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date</span>
                <span className="font-medium">{new Date().toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">Confirmed</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Delivery Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-medium">{estimatedDelivery}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Type</span>
                <span className="font-medium">Standard Delivery</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Cost</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm">
                  📧 Order confirmation and tracking details have been sent to your email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mb-2">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Order Placed</span>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                  <Package className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium">Processing</span>
                <span className="text-xs text-gray-500">1-2 hours</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                  <Truck className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium">Shipped</span>
                <span className="text-xs text-gray-500">1-2 days</span>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                  <Home className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-sm font-medium">Delivered</span>
                <span className="text-xs text-gray-500">3-5 days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/orders">
            <Button variant="outline" className="w-full sm:w-auto">
              Track Order
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default OrderSuccess;
