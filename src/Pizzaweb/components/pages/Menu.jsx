import React from "react";

import MenuList from "../../Helper/MenuList";
import ProMenuList from "./MenuList";
import "../menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu">
        <h1 className="menuTitle">Our Menu</h1>
      </h1>
      <div className="menuList">
        {MenuList.map((Menuitem, index) => {
          return (
            <ProMenuList
              key={index}
              image={Menuitem.Image}
              name={Menuitem.Name}
              price={Menuitem.Price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
