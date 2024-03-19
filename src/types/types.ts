export type UserType = {
  [key: string]: string | null | undefined;
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  password: string;
  phone: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type productType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  count: number;
  price: number;
};

export type OrderType = {
  id: number;
  userId: number;
  date: string;
  items: productType[];
};

export type FilterOptions = {
  countFilter: number;
  priceFilter: number;
  titleFilter: string;
  descriptionFilter: string;
};
