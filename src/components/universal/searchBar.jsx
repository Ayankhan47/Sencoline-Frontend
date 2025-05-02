import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  // const [query, setQuery] = useState('');
  // const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

  //   if (query.trim()) {
  //     navigate(`/search?q=${encodeURIComponent(query)}`);
  //   }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-xl"
    >
      <input
        type="text"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Something……"
        className="w-[24em] px-5 py-3 border border-gray-300 rounded-l-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 p-3 rounded-r-full text-white hover:bg-blue-700"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;