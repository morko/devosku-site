import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './index.scss'

const Features = ({ gridItems, className = '' }) => {
  return (
    <div className={`features ${className}`}>
      {gridItems.map((item, i) => {
        return (
          <div key={item.text} className="feature">
            <div className="overlay" />

            <div className="title">
              <h1>{item.title}</h1>
            </div>

            <div className="image">
              <PreviewCompatibleImage imageInfo={item} />
            </div>

            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        )
      })}
    </div>
  )
}

Features.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.title,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Features
