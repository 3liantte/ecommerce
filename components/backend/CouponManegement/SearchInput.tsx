import React from "react";
import { Search } from "lucide-react";

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center border space-x-2 px-3 p-2  rounded-lg focus-within:ring-2 focus-within:ring-green-500">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search by Name"
        className="border-none outline-none text-slate-900 dark:text-slate-900  px-2 py-1 w-full rounded-md"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
