import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data)

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        description={data.description}
        headline={data.headline}
        featuredServices={data.featuredServices}
        featuredTechnologies={data.featuredTechnologies}
        intro={data.intro}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
