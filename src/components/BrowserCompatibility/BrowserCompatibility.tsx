import React from "react";
import LazyLoad from "react-lazyload";

import EDGE from "../../assets/EDGE.webp";
import IE11 from "../../assets/IE11.webp";
import CHROME from "../../assets/CHROME.webp";
import FIREFOX from "../../assets/FIREFOX.webp";
import OPERA from "../../assets/OPERA.webp";
import SAFARI from "../../assets/SAFARI.webp";
import YANDEX from "../../assets/YANDEX.webp";
import IOS_CHROME from "../../assets/IOS CHROME.webp";
import ANDROID from "../../assets/ANDROID.webp";

import "./BrowserCompatibility.scss";

const BrowserCompatibility = () => {
  const pictureUrls = [
    { url: EDGE, alt: "App displayed in EDGE browser" },
    { url: IE11, alt: "App displayed in IE11 browser" },
    { url: CHROME, alt: "App displayed in CHROME browser" },
    { url: FIREFOX, alt: "App displayed in FIREFOX browser" },
    { url: OPERA, alt: "App displayed in OPERA browser" },
    { url: SAFARI, alt: "App displayed in SAFARI browser" },
    { url: YANDEX, alt: "App displayed in YANDEX browser" },
    { url: IOS_CHROME, alt: "App displayed in IOS CHROME browser" },
    { url: ANDROID, alt: "App displayed in ANDROID CHROME browser" },
  ];

  const pictureElements = pictureUrls.map(({ url, alt }, i) => {
    return (
      <li className="picture" key={i}>
        <h2>{alt}</h2>
        <LazyLoad height={200}>
          <img src={url} alt={alt}></img>
        </LazyLoad>
      </li>
    );
  });

  return (
    <div className="browser-compatibility-container">
      <h1 className="browser-compatibility-header">Browser Compatibility</h1>
      <span className="browser-compatibility-description">
        The page represents tests results of application working in different
        environments. Developed with resposive design principle works properly
        and with satisfied accessibility on desktop and mobile browsers.
        <br />
        <br />
        Below there are example of working application in most popular browsers
        and mobile devices.
      </span>

      <ul>{pictureElements}</ul>
    </div>
  );
};

export default BrowserCompatibility;
