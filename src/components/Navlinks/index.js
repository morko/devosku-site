import React from 'react'
import { scrollToId } from '../../utils'
import useStyles from './index.styles'
import { useTheme } from 'react-jss'

const Navlinks = (props) => {
  const { addHomeLink = false } = props
  const theme = useTheme()
  const classes = useStyles({
    theme,
  })

  return (
    <>
      {addHomeLink &&
      <li>
        <button
          className={classes.link}
          onClick={(event) => window.scrollTo(0, 0)}
        >
          Home
        </button>
      </li>
      }
      <li>
        <button
          className={classes.link}
          onClick={() => scrollToId('my-projects')}
        >
          My Projects
        </button>
      </li>
      <li>
        <button
          className={classes.link}
          onClick={() => scrollToId('my-skills')}
        >
          My Skills
        </button>
      </li>
    </>
  )
}

export default Navlinks