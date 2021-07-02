import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../themes/light-theme'
import { ThemeProvider, jss } from 'react-jss'
import Project from '../../components/Project'

const ProjectPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  // Set JSS to inject the CSS into the preview iframe.
  let iframe = document.querySelector('#preview-pane')
  if (iframe) {
    jss.setup({ insertionPoint: iframe.contentDocument.head.firstChild })
  }

  if (data) {
    return (
      <ThemeProvider theme={theme}>
        <Project
          title={data.title}
          description={data.description}
          featuredImage={data.featuredImage}
          technologies={data.technologies}
          links={data.links}
          html={data.body}
        />
      </ThemeProvider>
    )
  } else {
    return <div>Loading...</div>
  }
}

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ProjectPreview
