import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  footer: {
    padding: '40px 0',
    backgroundColor: theme.textColor,
    color: '#adadad'
  },
  footerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: theme.primaryColor,
      textDecoration: 'none',
    },
    '& ul': {
      padding: 0,
      listStyleType: 'none',
    },
  },
  logo: {
    height: 128,
    width: 128,
  },
  column: {
    flex: '1 1 0',
    textAlign: 'center',
  },
  columnLeft: {
    flex: '0 1 20%',
    textAlign: 'left',
  },
  columnRight: {
    flex: '0 1 20%',
    textAlign: 'right',
  },
  columnHeader: {
    color: theme.lightColor,
    textDecoration: 'underline',
  },
  '@media screen and (max-width: 800px)': {
    footerInner: {
      flexDirection: 'column',
    },
    column: {
      textAlign: 'center !important',
    },
  }
}))

export default useStyles
