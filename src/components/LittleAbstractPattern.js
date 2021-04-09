import React from 'react'
import { useTheme } from 'react-jss'

export default function LittleAbstractPattern() {
  const theme = useTheme()

  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96 0L2.14577e-06 96V0L96 0Z"
        fill={theme.primaryColor}
      />
      <path d="M48 48V96H96V48H48Z" fill={theme.darkColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0L1.07288e-06 48V0L48 0Z"
        fill={theme.darkColor}
      />
    </svg>
  )
}
