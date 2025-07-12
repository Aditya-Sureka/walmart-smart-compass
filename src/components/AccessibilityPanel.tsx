
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Mic, Volume2, Hand, MessageSquare, Play, Square } from 'lucide-react';

const AccessibilityPanel: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [signLanguageActive, setSignLanguageActive] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate sign language detection
      setTimeout(() => {
        setSignLanguageActive(true);
      }, 1000);
    } else {
      setSignLanguageActive(false);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Hand className="h-8 w-8 text-purple-600" />
          <div>
            <CardTitle className="text-xl text-purple-900">
              Accessibility Features
            </CardTitle>
            <CardDescription className="text-purple-700">
              Sign language support and voice assistance
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sign Language Recognition */}
        <div className="bg-white rounded-lg p-4 border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Sign Language Recognition</span>
            </div>
            <Badge variant={signLanguageActive ? "default" : "secondary"}>
              {signLanguageActive ? "Active" : "Ready"}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-32">
              {isRecording ? (
                <div className="text-center">
                  <div className="animate-pulse text-red-500 mb-2">
                    <Camera className="h-8 w-8 mx-auto" />
                  </div>
                  <span className="text-sm text-gray-600">Camera Active</span>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Camera className="h-8 w-8 mx-auto mb-2" />
                  <span className="text-sm">Camera Ready</span>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={toggleRecording}
                className={`w-full ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                {isRecording ? (
                  <>
                    <Square className="h-4 w-4 mr-2" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start Sign Recognition
                  </>
                )}
              </Button>
              
              {signLanguageActive && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-green-700">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm font-medium">Detected: "Hello, help me find products"</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Voice Features */}
        <div className="bg-white rounded-lg p-4 border border-purple-100">
          <div className="flex items-center space-x-2 mb-4">
            <Volume2 className="h-5 w-5 text-purple-600" />
            <span className="font-medium">Voice Features</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start">
              <Mic className="h-4 w-4 mr-2" />
              Voice Commands
            </Button>
            <Button variant="outline" className="justify-start">
              <Volume2 className="h-4 w-4 mr-2" />
              Text-to-Speech
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-4 border border-purple-100">
          <h4 className="font-medium mb-3">Common Sign Language Queries</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Badge variant="outline" className="justify-center py-2">
              👋 "Hello"
            </Badge>
            <Badge variant="outline" className="justify-center py-2">
              🛒 "Shopping"
            </Badge>
            <Badge variant="outline" className="justify-center py-2">
              ❓ "Help"
            </Badge>
            <Badge variant="outline" className="justify-center py-2">
              💰 "Price"
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessibilityPanel;
