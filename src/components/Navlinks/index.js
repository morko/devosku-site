import React from 'react'
import Navlink from './Navlink'

const Navlinks = (props) => {
  const { addHomeLink = false, onClick } = props

  return (
    <>
      {addHomeLink && (
        <li>
          <Navlink scrollToPosition={0} onClick={onClick}>
            Home
          </Navlink>
        </li>
      )}
      <li>
        <Navlink scrollToPosition="my-projects" onClick={onClick}>
          My Projects
        </Navlink>
      </li>
      <li>
        <Navlink scrollToPosition="my-skills" onClick={onClick}>
          My Skills
        </Navlink>
      </li>
    </>
  )
}

export default Navlinks
