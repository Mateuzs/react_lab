import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./Menu.scss";

interface MenuProps {
  open: boolean;
  setOpen: Function;
}

const Menu: FunctionComponent<MenuProps> = ({ open, setOpen }) => {
  return (
    <div
      className="burger-menu"
      style={
        open
          ? { transform: "translateX(0)" }
          : { transform: "translateX(-100%)" }
      }
    >
      <Link className="burger-menu__option" to="/">
        Home
      </Link>
      <Link className="burger-menu__option" to="/drag">
        Drag Component
      </Link>
      <Link className="burger-menu__option" to="/api-calls">
        Api Calls
      </Link>
      <Link className="burger-menu__option" to="/browser-compatibility">
        Browser Compatibility
      </Link>
      <Link className="burger-menu__option" to="/application-performance">
        Application Performance
      </Link>
    </div>
  );
};

export default Menu;
