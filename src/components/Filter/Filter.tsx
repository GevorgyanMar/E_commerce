import React, { FC, useState, useCallback } from "react";
import { FilterOptions } from "../../types/types";
import { filteredProductsAction } from "../../redux/productSlices/action";
import { useDispatch } from "react-redux";
import { FilterField } from "./FilterFild";

const Filter: FC = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<FilterOptions>({
    countFilter: 0,
    priceFilter: 0,
    titleFilter: "",
    descriptionFilter: "",
  });

  const applyFilter = useCallback(() => {
    dispatch(filteredProductsAction(filters));
  }, [dispatch, filters]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    },
    []
  );
  return (
    <div className="filter-flex">
      {FilterField.map(({ type, name, placeholder, value }) => (
        <div className="G-input" key={name}>
          {type === "range" ? <label htmlFor={name}>{name}</label> : null}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={filters[name as keyof FilterOptions]}
            onChange={handleFilterChange}
          />
        </div>
      ))}
      <button className="G-btn" onClick={applyFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
