import React, { useState } from "react";
import { productType } from "../../types/types";

interface Props {
  products: productType[];
  onSearch: (query: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="G-input">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
