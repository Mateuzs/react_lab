import React, { FunctionComponent } from "react";

import "./Footer.scss";

interface FooterProps {
  title: string;
}

const Footer: FunctionComponent<FooterProps> = ({ title }) => (
  <footer>{title}</footer>
);

export default Footer;
