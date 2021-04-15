const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  sectionHeader: {
    position: 'relative',
    borderBottom: `4px solid ${theme.textColor}`,
    marginBottom: '40px',
    marginRight: 'calc(50% - 50vw)',
    paddingBottom: '8px',
    opacity: 0,
    transform: 'translateX(200px)',
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
    height: '50%',
    zIndex: -1,
  },
  text: {
    color: theme.textColor,
    marginLeft: '16px',
    fontFamily: theme.primaryFont,
    fontSize: '2.75em',
    fontWeight: 600,
  },
}))

export default useStyles