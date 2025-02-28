import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-lg mx-auto relative">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full px-5 py-3 pl-12 rounded-full shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch className="absolute left-4 top-3 text-gray-500" />
    </div>
  );
};

export default SearchBar;
