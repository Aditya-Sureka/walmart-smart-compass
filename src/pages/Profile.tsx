
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, MapPin, Edit, Save, Shield, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Apartment 4B',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    notifications: true,
    promotions: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSwitchChange = (name: string, value: boolean) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <h1 className="ml-8 text-2xl font-bold text-gray-900">My Profile</h1>
            </div>
            <Button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              variant={isEditing ? "default" : "outline"}
            >
              {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {formData.firstName} {formData.lastName}
                </h2>
                <p className="text-gray-600 mb-4">{formData.email}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {formData.city}, {formData.state}
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-1" />
                    {formData.phone}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Address Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">Order Notifications</Label>
                    <p className="text-sm text-gray-500">Receive updates about your orders</p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(value) => handleSwitchChange('notifications', value)}
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="promotions">Promotional Emails</Label>
                    <p className="text-sm text-gray-500">Receive deals and offers</p>
                  </div>
                  <Switch
                    id="promotions"
                    checked={formData.promotions}
                    onCheckedChange={(value) => handleSwitchChange('promotions', value)}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
