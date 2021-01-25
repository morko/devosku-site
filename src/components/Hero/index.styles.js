const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  title: {
    fontFamily: theme.primaryFont,
    fontSize: '3.5em',
    fontWeight: 400,
    lineHeight: '1.2',
    textTransform: 'uppercase'
  },
  subtitle: {
    fontWeight: 400,
    marginBottom: '50px',
  },
  textbox: {
    maxWidth: '430px',
    alignSelf: 'flex-start',
    zIndex: 1,
    marginTop: '60px',
    animation: 'fadeIn 2s',
    color: theme.lightColor,
  },
  illustration: {
    position: 'absolute',
    top: `-${theme.headerHeight}`,
    right: -120,
    width: theme.maxPageWidth,
  },
  '@media (max-width: 970px)': {
    illustration: {
      width: 200,
      right: 20,
      top: 0,
    },
    textbox: {
      alignSelf: 'center',
      textAlign: 'center'
    }
  },
  '@media (max-width: 640px)': {
    illustration: {
      display: 'none !important'
    },
  },
  callToAction: {
    marginBottom: '30px'
  }
}))

export default useStyles