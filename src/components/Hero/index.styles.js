const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  title: {
    fontFamily: theme.primaryFont,
    fontSize: '3.5em',
    fontWeight: 400,
    lineHeight: '1.2',
    margin: 0,
  },
  subtitle: {
    fontFamily: theme.secondaryFont,
    fontWeight: 400,
    marginTop: '50px',
    fontSize: '1.125em',
  },
  textbox: {
    maxWidth: '450px',
    height: '100%',
    alignSelf: 'flex-start',
    zIndex: 1,
    animation: 'fadeInUp 2s',
    color: theme.lightColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  illustration: {
    position: 'absolute',
    top: `-${theme.headerHeight}`,
    right: -120,
    width: theme.maxPageWidth,
  },
  '@media (max-width: 1032px)': {
    illustration: {
      width: 900,
      top: `calc(-${theme.headerHeight} + 70px)`,
    },
    textbox: {
      maxWidth: '390px',
    },
    title: {
      fontSize: '3em',
    },
  },
  '@media (max-width: 900px)': {
    illustration: {
      display: 'none !important'
    },
    textbox: {
      alignSelf: 'center',
      textAlign: 'center',
      alignItems: 'center',
    }
  },
  callToAction: {
    marginTop: '50px'
  }
}))

export default useStyles