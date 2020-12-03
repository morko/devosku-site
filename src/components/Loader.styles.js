const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  fadeIn: {
    opacity: 1,
    animation: '$fadeIn 1s'
  },
  fadeOut: {
    opacity: 0,
    animation: '$fadeOut 0.5s'
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    }
  },
  '@keyframes fadeOut': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    }
  },
}));

export default useStyles;
