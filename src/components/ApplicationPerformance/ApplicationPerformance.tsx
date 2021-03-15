import React from "react";
import LazyLoad from "react-lazyload";

import ACCESSIBILITY from "../../assets/ACCESSIBILITY.webp";
import SEO from "../../assets/SEO.webp";
import TEST from "../../assets/TEST.webp";
import LIGHTHOUSE from "../../assets/LIGHTHOUSE.webp";
import BEST_PRACTICES from "../../assets/BEST PRACTICES.webp";

import "./ApplicationPerformance.scss";

const ApplicationPerformance = () => {
  const pictureUrls = [
    { url: LIGHTHOUSE, alt: "Application performance achieved" },
    { url: ACCESSIBILITY, alt: "Accessibility of application." },
    { url: SEO, alt: "SEO of application" },
    { url: BEST_PRACTICES, alt: "Best Practices of application development" },
    { url: TEST, alt: "Test resources used in lighthouse test" },
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
    <div className="application-performance-container">
      <h1 className="application-performance-header">
        Application Performance
      </h1>
      <span className="application-performance-description">
        The page represents tests results of application performance.
        Performance has been performed by Google Chrome Lighthouse tests. It
        takes into consideration four main pieces of application aspects:
        PERFORMANCE, ACCESSIBILITY, SEO, BEST PRACTICES. Together they show how
        fast, responsive and reliable web application is.
        <br />
        <br />
        Below there is a detailed report of Lighthouse test with used resources.
        All of the test parts have proper description showing the meaning.
      </span>

      <ul>{pictureElements}</ul>
    </div>
  );
};

export default ApplicationPerformance;
