const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  '@global': {
    html: {
      overflowX: 'hidden',
    },
    body: {
      backgroundColor: theme.backgroundColor,
    },
    h1: {
      fontSize: '4em',
      fontFamily: theme.primaryFont,
    },
    'h2,h3,h4,h5,h6': {
      fontFamily: theme.secondaryFont,
    },
    'body,ul,a,p,input': {
      fontFamily: theme.tertiaryFont,
    }
  }
}));

export default useStyles;