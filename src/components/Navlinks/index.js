import React from 'react'
import Navlink from './Navlink'

const Navlinks = (props) => {
  const { addHomeLink = false, onClick } = props

  return (
    <>
      {addHomeLink && (
        <li>
          <Navlink
            to="/"
            onClick={(e) => {
              window.scrollTo(0, 0)
              onClick && onClick(e)
            }}
          >
            Home
          </Navlink>
        </li>
      )}
      <li>
        <Navlink to="/#my-projects" elementId="my-projects" onClick={onClick}>
          My Projects
        </Navlink>
      </li>
      <li>
        <Navlink to="/#my-skills" elementId="my-skills" onClick={onClick}>
          My Skills
        </Navlink>
      </li>
      <li>
        <Navlink to="/#contact-me" elementId="contact-me" onClick={onClick}>
          Contact Me
        </Navlink>
      </li>
    </>
  )
}

export default Navlinks
