const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  button: {
    backgroundColor: theme.primaryColor,
    color: theme.lightColor,
    borderRadius: '4px',
    fontFamily: theme.primaryFont,
    padding: '16px 14px 14px',
    border: 'none',
    fontWeight: 600,
    letterSpacing: 1.5,
    '&:hover': {
      cursor: 'pointer',
    }
  }
}))

export default useStyles