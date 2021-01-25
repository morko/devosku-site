const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  page: {
    animation: 'fadeIn 0.5s',
  },
  '@global': {
    html: {
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
    },
    body: {
      backgroundColor: theme.backgroundColor,
      letterSpacing: '1.4px',
      lineHeight: '1.5'
    },
    h1: {
      fontSize: '4em',
      fontFamily: theme.primaryFont,
    },
    h2: {
      fontSize: '2.75em',
    },
    'h2,h3,h4,h5,h6': {
      fontFamily: theme.secondaryFont,
    },
    'body,ul,a,p,input': {
      fontFamily: theme.tertiaryFont,
    },
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      }
    },
  }
}));

export default useStyles;
