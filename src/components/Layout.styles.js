const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  page: {
    animation: '$fadeIn 0.5s',
  },
  loader: {
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
  '@global': {
    html: {
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
      fontSize: '18px',
      color: theme.textColor,
      scrollPaddingTop: theme.fixedHeaderHeight + 10 + 'px',
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
      fontSize: '2.25em',
      fontWeight: 300,
    },
    h4: {
      fontSize: '1.75em',
      fontWeight: 300,
    },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: theme.primaryFont,
    },
    'body,ul,a,p,input': {
      fontFamily: theme.secondaryFont,
    },
    '@media screen and (max-width: 550px)': {
      h1: {
        fontSize: '2.75em',
      },
      h2: {
        fontSize: '2.25em',
      },
      h3: {
        fontSize: '1.75em',
        fontWeight: 300,
      },
      h4: {
        fontSize: '1.5em',
        fontWeight: 300,
      },
    },
    label: {
      fontFamily: theme.secondaryFont,
    },
    'input,textarea,fieldset': {
      fontFamily: theme.secondaryFont,
      borderRadius: 3,
      border: `1px ${theme.secondaryColor} solid`,
      padding: 10,
      boxSizing: 'border-box',
    },
    'input:focus,textarea:focus': {
      outline: `1px ${theme.primaryColor} solid`,
    },
  }
}));

export default useStyles;
