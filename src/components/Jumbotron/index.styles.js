const { createUseStyles } = require('react-jss')

const useStyles = createUseStyles((theme) => ({
  jumbotron: {
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.darkColor,
    marginBottom: '75px',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    position: 'relative',
  },
}))

export default useStyles
