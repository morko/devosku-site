import { createUseStyles } from 'react-jss'
import tinycolor from 'tinycolor2'

const useStyles = createUseStyles((theme) => ({
  button: {
    position: 'relative',
    backgroundColor: (props) =>
      props.loading
        ? tinycolor(theme.primaryColor).lighten(40).toHexString()
        : theme.primaryColor,
    color: theme.lightColor,
    borderRadius: '4px',
    fontFamily: theme.primaryFont,
    padding: '0.9rem 0.85rem 0.85rem',
    border: 'none',
    fontWeight: 600,
    letterSpacing: 1.5,
    transition: 'backgroundColor 1s',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: tinycolor(theme.primaryColor).lighten(10).toHexString(),
    },
  },
  loaderWrapper: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export default useStyles
