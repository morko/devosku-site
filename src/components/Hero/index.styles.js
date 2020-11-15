const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
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
    marginTop: '30px',
  },
  illustration: {
    position: 'absolute',
    top: 0,
    right: -40,
    maxWidth: '80%'
  },
  callToAction: {
    marginBottom: '30px'
  }
}))

export default useStyles