const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  footer: {
    padding: '20px 0',
    backgroundColor: theme.textColor
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      color: theme.backgroundColor,
      textDecoration: 'none',
    },
    '& ul': {
      color: theme.backgroundColor,
      listStyleType: 'none'
    },
  },
}))

export default useStyles