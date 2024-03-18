import { USERS_LOCAL_STORAGE_KEY } from "../constants/constants";
import { UserType, productType } from "../types/types";

export const dateFormat = (date: Date | string): string => {
  let d: Date;

  if (typeof date === "string") {
    d = new Date(date);
  } else {
    d = date;
  }

  const day: string = ("0" + d.getDate()).slice(-2);
  const month: string = ("0" + (d.getMonth() + 1)).slice(-2);
  const year: number = d.getFullYear();
  const hours: string = ("0" + d.getHours()).slice(-2);
  const minutes: string = ("0" + d.getMinutes()).slice(-2);
  const seconds: string = ("0" + d.getSeconds()).slice(-2);

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

export const convertBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      resolve(base64String.split(",")[1]);
    };
    reader.onerror = (error) => reject(error);
  });
};

export function getUserInfoFromLocalStorage() {
  const userInfoString = localStorage.getItem(USERS_LOCAL_STORAGE_KEY);
  if (!userInfoString) {
    return null;
  }
  return JSON.parse(userInfoString) as UserType;
}

export const filterProducts = (
  products: productType[] | undefined,
  searchQuery: string
): productType[] => {
  if (!products) {
    return [];
  }

  return products?.filter(
    (product) =>
      product?.title &&
      typeof product.title === "string" &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const sortProducts = (
  products: productType[],
  sortBy: "title" | "price"
): productType[] => {
  return products.slice().sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "price") {
      return a.price - b.price;
    }
    return 0;
  });
};

// export const filterData = (
//   data: productType[]   //[key: string]: string | number;,
//   filters: { [key: string]: string |number}
// ) => {
//   return data.filter((item) => {
//     for (const key in filters) {
//       if (filters[key] !== "" && String(item[key]) !== filters[key]) {
//         return false;
//       }
//     }
//     return true;
//   });
// };
