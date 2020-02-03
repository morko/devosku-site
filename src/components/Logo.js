import React from 'react'
import { color1 as c1, color2 as c2 } from '../scss/_variables.module.scss'

export default function Logo({
  color1 = c2,
  color2 = c1,
  className = 'Logo',
}) {
  return (
    <svg
      className={className}
      version="1.1"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g id="rightBox" fill={color2}>
          <rect x="50" width="10" height="100" />
          <rect x="90" width="10" height="100" />
          <rect x="50" width="50" height="10" />
        </g>
        <g id="leftBox" fill={color1}>
          <rect y="50" width="50" height="10" />
          <rect y="90" width="100" height="10" />
          <rect y="50" width="10" height="50" />
        </g>
      </g>
    </svg>
  )
}
