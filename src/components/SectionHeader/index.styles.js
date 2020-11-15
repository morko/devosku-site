const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  sectionHeader: {
    borderBottom: `8px solid #1e1e1e`,
    marginBottom: '20px',
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
    fontFamily: theme.secondaryFont,
    fontSize: '1.75em',
    fontWeight: 600,
  },
}))

export default useStyles