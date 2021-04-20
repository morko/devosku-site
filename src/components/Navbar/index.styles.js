import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  root: {
    backgroundColor: theme.backgroundColor,
    height: theme.headerHeight,
    display: 'flex',
    alignItems: 'center',
  },

  link: {
    position: 'relative',
    zIndex: 999,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  brand: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },

  logo: {
    height: 60,
    width: 60,
  },

  title: {
    fontSize: '2em',
    marginLeft: '20px',
    '& > span:first-child': {
      color: theme.primaryColor,
    },
    '& > span:last-child': {
      color: theme.secondaryColor,
      marginLeft: '1px',
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
    '& a': {
      textDecoration: 'none',
      color: theme.primaryColor,
      fontFamily: theme.secondaryFont,
    },
  },

  mobileMenu: {
    display: 'none',
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
    /* Rotate first bar */
    '& span:nth-child(1)': {
      transform: ({ mobileMenuOpen }) => mobileMenuOpen && 'rotate(-45deg) translate(-5.5px, 5.5px)',
    },
    /* Fade out the second bar */
    '& span:nth-child(2)': {
      opacity: ({ mobileMenuOpen }) => mobileMenuOpen && 0,
    },
    /* Rotate last bar */
    '& span:nth-child(3)': {
      transform: ({ mobileMenuOpen }) => mobileMenuOpen && 'rotate(45deg) translate(-5.5px, -5.5px)',
    },
  },
}))

export default useStyles
