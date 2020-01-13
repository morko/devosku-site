import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "./index.scss";

const FeatureGrid = ({ gridItems, className = "featured" }) => (
  <div className={`columns margin-top-0 ${className}`}>
    {gridItems.map((item, i) => {
      return (
        <div
          key={item.text}
          className="column is-half has-text-centered featured-item-wrapper"
        >
          <div className="featured-item">
            <div className="has-text-centered title">
              <h1>{item.title}</h1>
            </div>

            <div className="has-text-centered image" >
              <PreviewCompatibleImage imageInfo={item} />
            </div>

            <div className="has-text-centered text">
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.title,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
