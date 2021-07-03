const { createUseStyles } = require('react-jss')

const useStyles = createUseStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    height: theme.jumbotronHeight,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(53, 37, 21)',
    marginTop: theme.headerHeight,
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  '@media screen and (max-width: 900px)': {
    backgroundContainer: {
      backgroundAttachment: 'scroll',
    },
  }
}))

export default useStyles
