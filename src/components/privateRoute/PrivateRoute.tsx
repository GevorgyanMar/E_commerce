import React, { FC, ReactNode } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getUserInfoFromLocalStorage } from "../../utilities/utilities";
type props = {
  children: ReactNode;
};

const PrivateRoutes: FC = () => {
  const user = getUserInfoFromLocalStorage();
  return user?.id ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
