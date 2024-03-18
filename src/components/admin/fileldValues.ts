interface ProductField {
  name: string;
  type: string;
  placeholder: string;
  value: string;
}

export const productFields: ProductField[] = [
  {
    name: "title",
    type: "text",
    placeholder: "Title",
    value: "",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Description",
    value: "",
  },
  {
    name: "imageUrl",
    type: "file",
    placeholder: "",
    value: "",
  },
  {
    name: "count",
    type: "number",
    placeholder: "",
    value: "",
  },
  {
    name: "price",
    type: "number",
    placeholder: "",
    value: "",
  },
];
