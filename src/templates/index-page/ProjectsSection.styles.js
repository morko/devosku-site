const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  projects: {
    position: 'relative',
    marginBottom: '80px',
  },
  header: {},
  progressBar: {
    position: 'absolute',
    top: 0,
    left: '-100px',
  }
}))

export default useStyles