const { createUseStyles } = require("react-jss");

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
    animation: 'fadeInUp 2s',
    animationFillMode: 'forwards',
  },
  subtitle: {
    fontFamily: theme.secondaryFont,
    fontWeight: 400,
    marginTop: '50px',
    fontSize: '1.125em',
    opacity: 0,
    animation: 'fadeInUp 2s',
    animationFillMode: 'forwards',
    animationDelay: '0.5s',
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
    animation: 'fadeInUp 2s',
    animationFillMode: 'forwards',
    animationDelay: '1s',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  illustration: {
    zIndex: 1000,
    height: '100%',
    position: 'relative',
    top: 0,
    right: -100
  },
  '@media (max-width: 1060px)': {
    title: {
      fontSize: '3em',
    },
    subtitle: {
      fontSize: '1em',
    },
    illustration: {
      width: '60%',
      height: 'auto',

    }
  },
  '@media (max-width: 900px)': {
    illustration: {
      display: 'none !important'
    },
    textbox: {
      maxWidth: '100%',
      alignSelf: 'center',
      textAlign: 'center',
      alignItems: 'center',
    }
  },
}))

export default useStyles