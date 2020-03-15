import React from "react";

import "./Footer.scss";

interface FooterProps {
  title: string;
}

const Footer: React.FunctionComponent<FooterProps> = ({ title }) => (
  <footer>{title}</footer>
);

export default Footer;
