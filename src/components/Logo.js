import React from 'react'

export default function Logo({ color1 = '#b3cf36', color2 = '#94aa2a', color3 = '#6b7b1f'}) {
  return (
    <svg width="128" height="128" version="1.1" viewBox="0 0 33.867 33.867" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-50.271 -63.373)">
        <g fill={color1}>
          <rect x="55.562" y="77.633" width="11.906" height="3.5649"/>
          <rect x="55.562" y="90.11" width="11.906" height="4.484"/>
          <rect transform="rotate(90)" x="77.633" y="-56.503" width="16.961" height="3.5672"/>
        </g>
        <g fill={color2}>
          <rect transform="rotate(90)" x="63.373" y="-68.988" width="31.221" height="3.5672"/>
          <rect x="65.421" y="63.373" width="14.269" height="3.5649"/>
          <rect transform="rotate(90)" x="63.373" y="-81.473" width="31.221" height="3.5672"/>
        </g>
        <rect x="52.935" y="93.675" width="28.538" height="3.5649" fill={color3}/>
      </g>
    </svg>
  )
}
