import React from "react";
import "./Header.scss";

interface HeaderProps {
  title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  title
}: HeaderProps) => <header>{title}</header>;

export default Header;
