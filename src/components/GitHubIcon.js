import React from 'react'
import PropTypes from 'prop-types'

import githubBlack from '../img/github-icon-black.svg'
import githubWhite from '../img/github-icon-white.svg'

export default function GitHubIcon({ invert, href }) {
  if (href) {
    return (
      <a
        className="navbar-item"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="github-icon icon">
          <img src={invert ? githubWhite : githubBlack} alt="Github" />
        </span>
      </a>
    )
  } else {
    return (
      <span className="github-icon icon">
        <img src={invert ? githubWhite : githubBlack} alt="Github" />
      </span>
    )
  }
}

GitHubIcon.propTypes = {
  invert: PropTypes.bool,
  href: PropTypes.string,
}
