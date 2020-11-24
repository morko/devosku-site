const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  project: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '10px',
  },
  title: {
    marginTop: 0,
    marginBottom: '20px',
    color: theme.primaryColor,
  },
  text: {
    color: theme.textColor,
  },
  textbox: {
    padding: '0 20px 20px 20px',
  },
  imagebox: {
    padding: '0 40px 40px 40px',
    flex: '1 1 100%',
    marginLeft: '30px',
    alignSelf: 'stretch',
    backgroundColor: theme.backgroundColor,
    '& div': {
      borderRadius: '2px',
    }
  },
  dots: {
    marginBottom: '20px',

    '& > span': {
      display: 'inline-block',
      width: '12px',
      height: '5px',
      borderRadius: '2px',
    },
    '& > span:nth-child(1)': {
      backgroundColor: theme.primaryColor,
    },
    '& > span:nth-child(2)': {
      backgroundColor: theme.tertiaryColor,
      marginLeft: '4px',
    },
    '& > span:nth-child(3)': {
      backgroundColor: theme.primaryColor,
      marginLeft: '4px',
    },
  },
  [`@media screen and (min-width: ${theme.maxPageWidth}px)`]: {
    project: {
      backgroundColor: theme.lightColor,
      marginLeft: 'calc(50% - 50vw)',
      marginRight: 'calc(50% - 50vw)',
      paddingLeft: 'calc(50vw - 50%)',
      paddingRight: 'calc(50vw - 50%)',
      minHeight: '100vh',
      borderRadius: 0,
    },
    textbox: {
      padding: '20px 20px 20px 0',
    }
  },
}))

export default useStyles