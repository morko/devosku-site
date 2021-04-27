import { createUseStyles } from 'react-jss'
import tinycolor from 'tinycolor2'

const useStyles = createUseStyles((theme) => ({
  header: {
    backgroundColor: theme.backgroundColor,
    height: theme.headerHeight,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,

    '&.fixed': {
      position: 'fixed',
      height: theme.fixedHeaderHeight,
      boxShadow: '0 8px 6px -6px rgba(0,0,0,0.4)',
      top: -theme.fixedHeaderHeight,
    },
    '&.fixed.hide': {
      transition: 'transform .5s',
      transform: 'translateY(0)',
    },
    '&.fixed.show': {
      transition: 'transform .5s',
      transform: 'translateY(100%)',
    }
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },


  link: {
    textDecoration: 'none',
    color: theme.primaryColor,
    fontFamily: theme.secondaryFont,
    background: 'none',
    border: 'none',
    transition: 'color 250ms',

    '&:hover': {
      cursor: 'pointer',
      color: tinycolor(theme.primaryColor).brighten(20).toHexString(),
    },
    '&:focus': {
      outline: 'none',
    }
  },

  brand: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    background: 'none',
    border: 0,
    '&:hover': {
      cursor: 'pointer',
    }
  },

  logo: {
    height: 60,
    width: 60,

    '.fixed &': {
      height: 40,
      width: 40,
    }
  },

  title: {
    fontSize: '2em',
    lineHeight: 1,
    margin: '0 0 0 20px',

    '& > span:first-child': {
      color: theme.primaryColor,
    },

    '& > span:last-child': {
      color: theme.secondaryColor,
      marginLeft: '1px',
    },

    '.fixed &': {
      fontSize: '1.5em',
    },

  },

  menu: {
    marginLeft: 'auto',
    '& ul': {
      display: 'flex',
      listStyleType: 'none',
    },
    '& li': {
      marginLeft: '40px',
    },
  },

  mobileMenu: {
    position: 'absolute',
    right: 0,
    top: theme.headerHeight,
    width: '50%',
    backgroundColor: theme.backgroundColor,
    transform: 'translateX(100%)',
    transition: 'transform 250ms',
    boxShadow: 'none',
    '.fixed &': {
      position: 'fixed',
      top: theme.fixedHeaderHeight,
    },
    '.hide &': {
      transform: 'translateX(100%) !important',
      boxShadow: 'none !important',
    },
    '&.mobileMenuOpen': {
      transform: 'translateX(0)',
      boxShadow: '-3px 6px 6px 0px rgba(0,0,0,0.4)',
    }
  },

  mobileMenuButton: {
    display: 'none',
    marginLeft: 'auto',
    height: '100%',
    width: '40px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 0,
    zIndex: 99,

    '& span': {
      display: 'block',
      width: '60%',
      height: '2px',
      backgroundColor: theme.primaryColor,
      margin: '3px 0',
      transition: 'all 0.2s',
    },

    '&.mobileMenuOpen': {
      /* Rotate first bar */
      '& span:nth-child(1)': {
        transform: 'rotate(-45deg) translate(-3.5px, 3.5px)',
      },
      /* Fade out the second bar */
      '& span:nth-child(2)': {
        opacity: 0,
      },
      /* Rotate last bar */
      '& span:nth-child(3)': {
        transform: 'rotate(45deg) translate(-3.5px, -3.5px)',
      },
    },
  },

  '@media (max-width: 900px)': {
    menu: {
      display: 'none',
    },
    mobileMenuButton: {
      display: 'block',
    },
    mobileMenu: {
      '&.mobileMenuOpen': {
        display: 'block',
      }
    }
  },
}))

export default useStyles
