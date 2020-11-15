const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  button: {
    backgroundColor: theme.primaryColor,
    color: theme.lightColor,
    borderRadius: '5px',
    fontFamily: theme.secondaryFont,
    padding: '12px 10px 10px',
    border: 'none',
    fontWeight: 600,
  }
}))

export default useStyles