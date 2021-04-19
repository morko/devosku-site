import tinycolor from 'tinycolor2'
const { createUseStyles } = require("react-jss");

const useStyles = createUseStyles((theme) => {
  return {
    sectionProgressBar: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: tinycolor(theme.primaryColor).lighten(40).toHexString(),
      width: 6,
      height: (props) => props.height,
      borderRadius: '10px',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        borderRadius: '10px',
        top: 0,
        left: 0,
        backgroundColor: theme.primaryColor,
        height: (props) => props.percent * props.height,
      }
    },
    dot: {
      display: 'flex',
      position: 'absolute',
      left: 3,
      height: 10,
      width: 10,
      transform: 'translate(-50%, -50%)',
      transition: 'transform .25s',

      '&.passed:after': {
        backgroundColor: theme.primaryColor,
      },

      '&:hover': {
        transform: 'translate(-50%, -50%) scale(1.25)',
        cursor: 'pointer',
      },

      '&:after': {
        content: '""',
        height: 10,
        width: 10,
        borderRadius: '50%',
        backgroundColor: tinycolor(theme.primaryColor).lighten(40).toHexString(),
      },

      // Styling for the text.
      '& span': {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: 'translate(-100%, -2px)',
        lineHeight: 1,
        fontSize: '.75rem',
        color: tinycolor(theme.darkColor).lighten(20).toHexString(),
        paddingRight: '10px',
      },

    },
  }
})

export default useStyles