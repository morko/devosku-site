const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  project: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '10px',
    color: theme.textColor,
  },
  title: {
    marginTop: 0,
    marginBottom: '20px',
    textDecoration: 'none',
    color: theme.primaryColor,
    '&:hover': {
      color: theme.secondaryColor,
    },
  },
  description: {
    paddingLeft: '20px',
    borderLeft: `3px solid ${theme.textColor}`,
    fontStyle: 'italic',
  },
  text: {
    color: theme.textColor,
  },
  technologies: {},
  textbox: {
    padding: '0 20px 20px 20px',
    flex: '1 1 100%',
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
    lineHeight: 0,

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
      marginLeft: 'calc(50% - 50vw)',
      marginRight: 'calc(50% - 50vw)',
      paddingLeft: 'calc(50vw - 50%)',
      paddingRight: 'calc(50vw - 50%)',
      borderRadius: 0,
    },
    textbox: {
      padding: '0 20px 20px 0',
    }
  },
}))

export default useStyles