type Field = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
};

export const FilterField: Field[] = [
  {
    name: "countFilter",
    type: "range",
    placeholder: "Max Count",
    value: "",
  },
  {
    name: "priceFilter",
    type: "range",
    placeholder: "price",
    value: "",
  },

  {
    name: "titleFilter",
    type: "text",
    placeholder: "Filter by Title",
    value: "",
  },
  {
    name: "descriptionFilter",
    type: "text",
    placeholder: "Filter by Description",
    value: "",
  },
];
