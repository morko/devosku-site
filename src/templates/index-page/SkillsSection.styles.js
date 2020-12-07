const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => ({
  projects: {
    marginBottom: '80px',
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
    '& svg': {
      marginRight: '20px'
    }
  },
  skillGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > div:last-child': {
      marginRight: 0
    },
  },
  '@media screen and (max-width: 359px)': {
    skillGrid: {
      '& > div': {
        marginRight: 0
      },
    }
  },
  '@media screen and (min-width: 400px) and (max-width: 839px)': {
    skillGrid: {
      '& > div:nth-child(2n)': {
        marginRight: 0
      },
    }
  },
  '@media screen and (min-width: 840px)': {
    skillGrid: {
      '& > div:nth-child(3n)': {
        marginRight: 0
      },
    }
  },
}))

export default useStyles