import React, { FunctionComponent } from "react";

import "./Home.scss";

interface HomeProps {
  title: string;
}

const Home: FunctionComponent<HomeProps> = ({ title }) => (
  <main>
    <h1>{title}</h1>
    <span className="home-description">
      Welcome to the React Lab Website!
      <br /> <br />
      This is an SPA (single page application) written with cutting-edge react
      technology with newest hooks feature. Deployed to Netlify provides best
      quality, speed, and high user experience.
      <br /> <br />
      The main purpose of the website is to present some react features and
      functionality as well as the whole architecture of such project building.
      A lot of topic are hidden but crucial in web development.
      <br /> <br />
      Best features and benefits: <br /> <br /> - React Library <br /> - React
      hooks used for handling state <br /> - Lazy loading of images to speed up
      responsiveness <br /> - Deployment and hosting on Netlify platform.
      <br /> - written in typescript for better stability
      <br /> - yarn manager used for better dependencies handling
      <br /> - codebase stored in Github for better CI / CD and semantic
      versioning
      <br /> - HTTPS ans SSL protocols used
      <br /> - Asynchronous calls for data fetching
      <br /> - error handling with soft falling background
      <br /> - style transformation for better animation (menu button)
      <br /> - responsive design principle for supporting many devices
      <br /> <br />
      Application provides a few endpoints with specific features:
      <br />
      <br />
      <i>
        <b>DRAG COMPONENT</b>
      </i>
      <br />
      <br />
      Shows how to handle drag and drop components with dynamic and low
      performance impact. Such technology is used in apps like Jira, Trello etc.
      <br />
      <br />
      <i>
        <b>API CALLS</b>
      </i>
      <br />
      <br />
      Shows how to use HTTPS SSL calls to external servers to fetch data in real
      time, using axios library. Proivdes error handling and soft fallback in
      case of server no responding.
      <br />
      <br />
      <i>
        <b>BROWSER COMPATIBILITY</b>
      </i>
      <br />
      <br />
      Shows results of responsive web design principle. Such approach allows to
      provide application works on many browsers and many different devices with
      different screens. It's important to support as many devices as possible
      to gather maximum customers. Really important part of web development.
      <br />
      <br />
      <i>
        <b>APPLICATION PERFORMANCE</b>
      </i>
      <br />
      <br />
      Shows hidden part of web application. Critical part of web development.
      It's important to provide a fast and reliable application which is able to
      scale in the future. App should be efficient in weak devices and poor
      network as well. The page shows results of lighthouse test verifying app
      performance.
      <br />
      <br />
      Feel free to travel accross the website and experient with the features!
      <br />
      All the best!
      <br />
      <br />
      Mateusz
    </span>
  </main>
);

export default Home;
