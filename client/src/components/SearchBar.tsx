import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex gap-2 p-2 bg-white rounded-lg shadow-md">
        <div className="flex-1 flex items-center px-4 border-r">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job title or keywords"
            className="w-full ml-2 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex-1 flex items-center px-4">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full ml-2 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}