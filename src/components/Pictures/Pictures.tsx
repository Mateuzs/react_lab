import React from "react";
import LazyLoad from "react-lazyload";

import EDGE from "../../assets/EDGE.png";
import IE11 from "../../assets/IE11.png";
import CHROME from "../../assets/CHROME.png";
import FIREFOX from "../../assets/FIREFOX.png";
import OPERA from "../../assets/OPERA.png";
import SAFARI from "../../assets/SAFARI.png";
import YANDEX from "../../assets/YANDEX.png";
import IOS_CHROME from "../../assets/IOS CHROME.png";
import ANDROID from "../../assets/ANDROID.png";

import "./Pictures.scss";

const Pictures = () => {
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
    <div className="pictures-container">
      <h1 className="pictures-header">Application Compatibility</h1>

      <ul>{pictureElements}</ul>
    </div>
  );
};

export default Pictures;
