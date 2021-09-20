const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  project: {
    marginTop: '70px',
    marginBottom: '130px',
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
    padding: 0,
    flex: '1 1 100%',
  },
  imagebox: {
    padding: '0',
    flex: '1 1 100%',
    marginLeft: '30px',
    alignSelf: 'stretch',
    backgroundColor: theme.backgroundColor,
    '& img': {
      borderRadius: '5px',
    }
  },
  mobileImage: {
    width: '100%',
  },
  desktopImage: {
    width: '100%',
    position: 'sticky',
    top: 100,
  },
  link: {
    wordBreak: 'break-all',
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
      paddingRight: 20,
    }
  },
  '@media screen and (max-width: 900px)': {
    project: {
      marginTop: '40px',
      marginBottom: '80px',
    },
  },
}))

export default useStyles