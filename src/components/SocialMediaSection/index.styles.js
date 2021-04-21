const { createUseStyles } = require('react-jss')

const useStyles = createUseStyles((theme) => ({
  socialMediaSection: {
    height: `calc(100vh - (${theme.headerHeight}px + ${theme.jumbotronHeight}px))`,
    minHeight: 100,
    maxHeight: 200,
    marginBottom: 30,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  link: {
    color: theme.darkColor,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginRight: 60,
    transition: 'color .25s, transform .25s',
    '& svg': {
      marginRight: 10,
      width: '50px !important',
    },
    '&:hover': {
      color: theme.primaryColor,
      transform: 'translateY(-5px)',
    },
  },
}))

export default useStyles
