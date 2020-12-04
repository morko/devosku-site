const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  skillCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '40px',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: theme.darkColor,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    minWidth: '100px',
    marginBottom: '20px',
    flex: '1 1 25%',
  },
  icon: {
    width: '64px',
    height: '64px',
    marginBottom: '20px',
    color: theme.primaryColor,
  },
  title: {
    fontSize: '1.125rem',
    color: theme.lightColor,
  },
}))

export default useStyles