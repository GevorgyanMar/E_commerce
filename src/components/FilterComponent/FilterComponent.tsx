import React, { useState } from "react";
import { productType } from "../../types/types";

interface Props {
  products: productType[];
}

const FilterComponent: React.FC<Props> = ({ products }) => {
  return <div className="filter-container"></div>;
};

export default FilterComponent;
