import React from "react";

import "./index.scss";
export default function PageHero({ image, children }) {
  return (
    <div
      className="page-hero full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      {children}
    </div>
  );
}
