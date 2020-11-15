const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  project: {
    marginBottom: '20px',
    backgroundColor: '#E3E3E3',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginTop: 0,
    color: theme.primaryColor,
  },
  text: {
    color: theme.textColor,
  },
  textbox: {
  },
  imagebox: {
    flex: '1 1 100%',
    marginLeft: '30px',
  },
}))

export default useStyles