import React, { FC } from "react";

interface SortProps {
  handleSort: (sortBy: "title" | "price") => void;
}

const Sort: FC<SortProps> = ({ handleSort }) => {
  return (
    <div className="sort-buttons">
      <button onClick={() => handleSort("title")}>Sort by Title</button>
      <button onClick={() => handleSort("price")}>Sort by Price</button>
    </div>
  );
};

export default Sort;
