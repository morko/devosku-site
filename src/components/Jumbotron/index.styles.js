const { createUseStyles } = require('react-jss')

const useStyles = createUseStyles((theme) => ({
  jumbotron: {
    minHeight: ({ variant }) => {
      if (variant === 'full') {
        return `calc(100vh - ${theme.headerHeight})`
      }
      if (variant === 'half') {
        return `calc(50vh - ${theme.headerHeight})`
      }
    },
    display: 'flex',
    flexDirection: 'row',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
}))

export default useStyles
