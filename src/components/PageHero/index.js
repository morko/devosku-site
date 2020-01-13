import React from "react";

import "./index.scss";
export default function PageHero({ className, image, children }) {
  return (
    <header
      className={`page-hero ${className}`}
      style={
        image && {
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }
      }
    >
      {children}
    </header>
  );
}
