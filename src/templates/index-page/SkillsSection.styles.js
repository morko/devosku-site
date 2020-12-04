const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  projects: {
    marginBottom: '80px',
  },
  header: {},
  skillGrid: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}))

export default useStyles