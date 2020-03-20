import React, {
  FunctionComponent,
  useState,
  useRef,
  MutableRefObject
} from "react";
import "./Header.scss";
import { BurgerButton, Menu } from "../";
import { useOnClickOutside } from "../../hooks";

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <header>
      <div ref={ref} className="menu__wrapper">
        <BurgerButton open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
