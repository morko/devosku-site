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
    margin: '10px 60px 10px 0',
    transition: 'color .25s, transform .25s',
    '& svg': {
      marginRight: 20,
      width: '50px !important',
    },
    '&:hover': {
      color: theme.primaryColor,
      transform: 'translateY(-5px)',
    },
  },
  '@media (max-width: 500px)': {
    socialMediaSection: {
      padding: '20px 0 20px 0',
    },
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    link: {
      margin: '10px 0 10px 0',
      '& svg': {
        width: '40px !important',
      },
    }
  }
}))

export default useStyles
