const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    zIndex: 3,
  },
  title: {
    fontFamily: theme.primaryFont,
    fontSize: '3em',
    fontWeight: 400,
  },
  subtitle: {
    fontWeight: 400,
    marginBottom: '50px',
  },
  textbox: {
    maxWidth: '430px',
    alignSelf: 'flex-start',
    zIndex: 1,
    marginTop: '80px',
    animation: 'fadeIn 2s'
  },
  illustration: {
    position: 'absolute',
    top: `-${theme.headerHeight}`,
    right: -40,
    width: theme.maxPageWidth + 40,
  },
  '@media (max-width: 900px)': {
    illustration: {
      opacity: 0.3,
    }
  },
  '@media (max-width: 600px)': {
    illustration: {
      display: 'none',
    }
  },
  callToAction: {
    marginBottom: '30px'
  }
}))

export default useStyles