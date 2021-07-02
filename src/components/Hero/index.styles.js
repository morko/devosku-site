import { createUseStyles } from 'react-jss'
import tinycolor from 'tinycolor2'

const useStyles = createUseStyles((theme) => ({
  textbox: {
    height: '100%',
    alignSelf: 'flex-start',
    zIndex: 1,
    color: theme.lightColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: theme.primaryFont,
    fontSize: '3.5em',
    fontWeight: 400,
    lineHeight: '1.2',
    margin: 0,
    opacity: 0,
    animation: '$heroText 2s',
    animationFillMode: 'forwards',
  },
  subtitle: {
    fontFamily: theme.secondaryFont,
    fontWeight: 300,
    marginTop: '25px',
    fontSize: '1.125em',
    opacity: 0,
    animation: '$heroText 2s',
    animationFillMode: 'forwards',
    animationDelay: '0.25s',
  },
  callToAction: {
    marginTop: '50px',
    backgroundColor: theme.primaryColor,
    color: theme.lightColor,
    borderRadius: '4px',
    fontFamily: theme.primaryFont,
    padding: '16px 14px 14px',
    border: 'none',
    fontWeight: 600,
    letterSpacing: 1.5,
    lineHeight: 1,
    textDecoration: 'none',
    opacity: 0,
    animation: '$heroText 2s',
    animationFillMode: 'forwards',
    animationDelay: '0.5s',
    transition: 'background-color 250ms',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: tinycolor(theme.primaryColor).lighten(10).toHexString(),
    },
  },
  illustration: {
    zIndex: 1000,
    height: '100%',
    position: 'relative',
    top: 0,
    right: -100,
  },
  '@media (max-width: 1060px)': {
    title: {
      fontSize: '3em',
    },
    subtitle: {
      fontSize: '1em',
    },
    illustration: {
      height: '84%',
    },
  },
  '@media (max-width: 900px)': {
    illustration: {
      display: 'none !important',
    },
    textbox: {
      maxWidth: '100%',
      alignSelf: 'center',
      textAlign: 'center',
      alignItems: 'center',
    },
  },
  '@keyframes heroText': {
    from: {
      opacity: 0,
      transform: 'translateX(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    }
  },
}))

export default useStyles
