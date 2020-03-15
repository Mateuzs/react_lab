import React from "react";

import "./Main.scss";

interface MainProps {
  title: string;
}

const Main: React.FunctionComponent<MainProps> = ({ title }) => (
  <main>{title}</main>
);

export default Main;
