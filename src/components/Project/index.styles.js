const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  project: {
    marginTop: '70px',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '10px',
    color: theme.textColor,
  },
  title: {
    marginTop: 0,
    marginBottom: '50px',
    textDecoration: 'none',
    color: theme.secondaryColor,
    transition: 'color .25s',
    lineHeight: 1,
    fontWeight: 100,
  },
  description: {
    paddingLeft: '20px',
    borderLeft: `3px solid ${theme.textColor}`,
    fontStyle: 'italic',
    margin: '30px 0',
  },
  text: {
    color: theme.textColor,
  },
  technologies: {},
  textbox: {
    padding: '0 20px 20px 20px',
    flex: '1 1 100%',
    opacity: 0,
    transform: 'translateY(40px)',
  },
  imagebox: {
    padding: '0',
    flex: '1 1 100%',
    marginLeft: '30px',
    alignSelf: 'stretch',
    backgroundColor: theme.backgroundColor,
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