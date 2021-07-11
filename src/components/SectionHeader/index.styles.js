const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  sectionHeader: {
    position: 'relative',
    marginBottom: '40px',
    marginRight: 'calc(50% - 50vw)',
    paddingBottom: '8px',
    overflow: 'hidden',
  },
  icon: {
    color: theme.textColor,
    '& svg': {
      marginBottom: '-3px',
      width: '3em',
      height: '3em',
    }
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
    backgroundColor: theme.primaryColor,
    width: '5rem',
    height: '2rem',
    zIndex: -1,
  },
  text: {
    color: theme.textColor,
    margin: '0 0 0 16px',
    fontFamily: theme.primaryFont,
    fontWeight: 600,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 4,
    width: '100%',
    backgroundColor: theme.textColor,
    opacity: 0,
    transform: 'translateX(200px)',
  },
  '@media screen and (max-width: 550px)': {
    background: {
      width: '4rem',
    }
  }
}))

export default useStyles