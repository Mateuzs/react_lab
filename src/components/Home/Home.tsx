import React, { FunctionComponent } from "react";

import "./Home.scss";

interface HomeProps {
  title: string;
}

const Home: FunctionComponent<HomeProps> = ({ title }) => <main>{title}</main>;

export default Home;
