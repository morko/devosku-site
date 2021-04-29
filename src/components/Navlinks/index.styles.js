import { createUseStyles } from 'react-jss'
import tinycolor from 'tinycolor2'

const useStyles = createUseStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.primaryColor,
    fontFamily: theme.secondaryFont,
    background: 'none',
    border: 'none',
    transition: 'color 250ms',
    padding: 0,

    '&:hover': {
      cursor: 'pointer',
      color: tinycolor(theme.primaryColor).brighten(20).toHexString(),
    },
    '&:focus': {
      outline: 'none',
    }
  },
}))

export default useStyles