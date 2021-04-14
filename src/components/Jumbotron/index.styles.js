const { createUseStyles } = require('react-jss')

const useStyles = createUseStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(53, 37, 21)',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: ({backgroundImg}) => `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    opacity: 0.5,
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
