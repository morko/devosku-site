import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../themes/light-theme'
import { ThemeProvider, jss } from 'react-jss'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  // Set JSS to inject the CSS into the preview iframe.
  let iframe = document.querySelector('#preview-pane')
  if (iframe) {
    jss.setup({ insertionPoint: iframe.contentDocument.head.firstChild })
  }

  if (data) {
    return (
      <ThemeProvider theme={theme}>
        <IndexPageTemplate
          title={data.title}
          description={data.description}
          headline={data.headline}
        />
      </ThemeProvider>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
