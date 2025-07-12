
import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  onSearch: (query: string, category: string) => void;
  categories: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    onSearch('', 'all');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="relative">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl transition-all duration-200"
            />
          </div>
          
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-3 border-2 border-gray-200 hover:border-blue-500 rounded-xl transition-all duration-200"
          >
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200"
          >
            Search
          </Button>
        </div>

        {isExpanded && (
          <div className="mt-4 p-4 bg-white border-2 border-gray-200 rounded-xl shadow-lg animate-fade-in">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {(searchQuery || selectedCategory !== 'all') && (
                <Button variant="ghost" onClick={clearSearch} className="text-gray-500 hover:text-gray-700">
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {(searchQuery || selectedCategory !== 'all') && (
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {searchQuery && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Search: "{searchQuery}"
            </Badge>
          )}
          {selectedCategory !== 'all' && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Category: {selectedCategory}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
