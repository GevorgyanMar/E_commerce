import React, { FC } from "react";
import Navigate from "../router/Navigate";
import "../assets/globalStyle.scss";
import Menu from "../components/menu/Menu";
import { getUserInfoFromLocalStorage } from "../utilities/utilities";

const App: FC = () => {
  const user = getUserInfoFromLocalStorage();
  return (
    <div>
      {user && user && <Menu />}
      <Navigate />
    </div>
  );
};

export default App;
