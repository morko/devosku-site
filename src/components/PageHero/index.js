import React from "react";

import "./index.scss";
/**
 * Page hero or jumbotron.
 * 
 * @param {object} props - Props
 * @param {string} props.className - Additional class names.
 * @param {string} props.type - Possible options are full, medium, small.
 * @param {object | string} props.image - Background image.
 */
export default function PageHero({
  className = "",
  type = "full",
  image,
  children
}) {
  return (
    <header
      className={`page-hero ${className} ${type}`}
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

/**
 * The title inside the hero.
 * 
 * @param {object} props - Props
 * @param {string} props.className - Additional class names.
 * @param {string} props.position - Possible options are top, center, bottom.
 */
export function HeroTitle({ className = "", children, position="center" }) {
  return <div className={`hero-title ${className} ${position}`}><h1>{children}</h1></div>;
}
