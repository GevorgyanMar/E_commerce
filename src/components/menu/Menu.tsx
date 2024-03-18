import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { routerItems } from "../../router/routerItems";
import useFetchCards from "../../hooks/useFetchCards";

const Menu: FC = () => {
  const { cardData } = useFetchCards();
  return (
    <div className="menu-bar">
      <ul>
        {routerItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              {item.label === "Shopping cart" ? (
                <>
                  <span className="card-length">{cardData.length}</span>
                  {item.label}
                </>
              ) : (
                item.label
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
