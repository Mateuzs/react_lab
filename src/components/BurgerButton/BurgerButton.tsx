import React, { FunctionComponent } from "react";

import "./BurgerButton.scss";

interface BurgerButtonProps {
  open: boolean;
  setOpen: Function;
}

const BurgerButton: FunctionComponent<BurgerButtonProps> = ({
  open,
  setOpen,
}) => {
  return (
    <button
      aria-label="menu button"
      className="burger-button"
      onClick={() => setOpen(!open)}
    >
      <div
        className="burger-button__bar"
        style={
          open ? { transform: "rotate(45deg)" } : { transform: "rotate(0)" }
        }
      />
      <div
        className="burger-button__bar"
        style={
          open
            ? { opacity: "0", transform: "translateX(20px)" }
            : { opacity: "1", transform: "translateX(0)" }
        }
      />
      <div
        className="burger-button__bar"
        style={
          open ? { transform: "rotate(-45deg)" } : { transform: "rotate(0)" }
        }
      />
    </button>
  );
};

export default BurgerButton;
