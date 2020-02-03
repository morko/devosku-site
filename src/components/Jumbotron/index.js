import React, { useRef } from 'react'

import './index.scss'

/**
 * Page hero or jumbotron.
 *
 * @param {object} props - Props
 * @param {string} props.className - Additional class names.
 * @param {string} props.type - Possible options are full, medium, small.
 * @param {object | string} props.image - Background image.
 */
export default function Jumbotron({
  className = '',
  type = 'full',
  image,
  children,
  backgroundOverlay,
  overlayImage,
  showScroll,
}) {

  const scrollDownRef = useRef(null);

  const bgOverlayStyle = {
    backgroundColor: `rgba(0,0,0,${backgroundOverlay})`,
  }
  if (overlayImage) {
    bgOverlayStyle.backgroundImage = `url(${
      !!overlayImage.childImageSharp
        ? overlayImage.childImageSharp.fluid.src
        : overlayImage
    })`
  }

  function handleScrollDown(e) {
    const pageYOffset = window.pageYOffset;
    const parent = scrollDownRef.current.parentElement;
    const nextElement = parent ? parent.nextSibling : null;
    const rect = nextElement ? nextElement.getBoundingClientRect() : null;
    if (rect) {
      window.scroll({
        left: 0,
        top: rect.y + pageYOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      className={`jumbotron ${className} ${type}`}
      style={
        image && {
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }
      }
    >
      {backgroundOverlay && (
        <div style={bgOverlayStyle} className="background-overlay"></div>
      )}
      <div className="jumbotron-content">{children}</div>
      {showScroll && (
        <button className="scroll-down" ref={scrollDownRef} onClick={handleScrollDown}>
          <span></span>
          <span></span>
          <span></span>Scroll Down
        </button>
      )}
    </section>
  )
}

/**
 * The title inside the hero.
 *
 * @param {object} props - Props
 * @param {string} props.className - Additional class names.
 * @param {string} props.position - Possible options are top, center, bottom.
 */
export function JumboTitle({ className = '', children, position = 'center' }) {
  return (
    <div className={`jumbo-title ${className} ${position}`}>
      <h1>{children}</h1>
    </div>
  )
}
