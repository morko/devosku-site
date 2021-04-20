const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  page: {
    animation: 'fadeIn 0.5s',
  },
  '@global': {
    html: {
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
      fontSize: '18px',
      color: theme.textColor,
    },
    body: {
      backgroundColor: theme.backgroundColor,
      letterSpacing: '1.5px',
      lineHeight: '1.5'
    },
    h1: {
      fontSize: '4em',
    },
    h2: {
      fontSize: '2.75em',
    },
    h3: {
      fontSize: '2em',
      fontWeight: 300,
    },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: theme.primaryFont,
    },
    'body,ul,a,p,input': {
      fontFamily: theme.secondaryFont,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(40px)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      }
    },
    '@keyframes fadeInLeft': {
      from: {
        opacity: 0,
        transform: 'translateX(40px)',
      },
      to: {
        opacity: 1,
        transform: 'translateX(0)',
      }
    },
  }
}));

export default useStyles;
