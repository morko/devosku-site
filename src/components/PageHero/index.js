import React from 'react'

export default function PageHero({image, children}) {
  return (
    <div
      className="page-hero full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }), linear-gradient(90deg, rgba(222,255,222,1) 0%, rgba(0,0,0,1) 100%)`,
        backgroundPosition: 'top left',
        backgroundAttachment: 'fixed',
        height: '100vh'
      }}
    >
      {children}

    </div>
  )
}
