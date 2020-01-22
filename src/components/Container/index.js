import React from 'react'
import './index.scss'

export default function Container({ children, className = '' }) {
  return <div className={`container ${className}`}>{children}</div>
}
