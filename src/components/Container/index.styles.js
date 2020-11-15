const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  container: {
    maxWidth: 960,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px',
  }
}))

export default useStyles