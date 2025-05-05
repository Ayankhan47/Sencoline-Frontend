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
    <div className='py-1 px-2 border border-gray-400 rounded-4xl'>

    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-xl"
      >
      <input
        type="text"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Something……"
        className="w-[24em] px-5 py-3 outline-none"
        />
      <button
        type="submit"
        className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700"
        aria-label="Search"
        >
        <Search className="w-5 h-5" />
      </button>
    </form>
        </div>
  );
};

export default SearchBar;