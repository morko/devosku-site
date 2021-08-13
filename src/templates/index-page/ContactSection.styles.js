import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  container: {
    marginBottom: '80px',
  },
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