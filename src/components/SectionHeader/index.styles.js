const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  sectionHeader: {
    borderBottom: `4px solid ${theme.textColor}`,
    marginBottom: '40px',
    marginRight: 'calc(50% - 50vw)',
    paddingBottom: '8px',
  },
  icon: {
    color: theme.textColor,
    '& svg': {
      width: '2em',
      height: '2em',
    }
  },
  text: {
    color: theme.textColor,
    marginLeft: '16px',
    fontFamily: theme.primaryFont,
    fontSize: '1.75em',
    fontWeight: 600,
  },
}))

export default useStyles