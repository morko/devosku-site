import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  skillCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 40px -20px',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: theme.lightColor,
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    minWidth: '120px',
    marginBottom: '20px',
  },
  icon: {
    width: '64px',
    height: '64px',
    marginBottom: '20px',
    color: theme.primaryColor,
  },
  title: {
    fontSize: '1.125rem',
    color: theme.textColor,
  },
}))

export default useStyles
