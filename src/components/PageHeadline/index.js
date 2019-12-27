import React from 'react'

import './index.scss'

export default function PageHeadline({ title, subheading, image }) {
  return (
    <div
      className="page-headline full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }), linear-gradient(90deg, rgba(222,255,222,1) 0%, rgba(0,0,0,1) 100%)`,
      }}
    >
      <div className="page-headline-title-container">
        <h1 className="page-headline-title has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen" >
          {title}
        </h1>
        <h3
          className="page-headline-subheading has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
  )
}
