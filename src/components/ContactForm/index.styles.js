import { createUseStyles } from 'react-jss'
import tinycolor from 'tinycolor2'

const useStyles = createUseStyles((theme) => ({
  contactForm: {},
  senderInfo: {
    marginBottom: '2rem',
    border: 0,
    padding: 0,
  },

  field: {
    '& label': {
      display: 'block',
      marginBottom: '.25rem',
    },
    '& input': {
      width: '50%',
      marginBottom: '.5rem',
    },
    '& textarea': {
      width: '100%',
      minHeight: '15rem',
      marginBottom: '2rem',
      resize: 'vertical',
    },
  },

  securityAnswers: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2rem',

    '& input': {
      display: 'none',
    },

    '& label:hover, & label:focus': {
      cursor: 'pointer',
      outline: `2px ${tinycolor(theme.primaryColor).setAlpha(0.3).toRgbString()} solid`,
      backgroundColor: tinycolor(theme.primaryColor).setAlpha(0.2).toRgbString(),
    },

    '& label': {
      boxSizing: 'border-box',
      marginRight: '1rem',
      padding: 10,
      borderRadius: '10px',
      height: 80,
      width: 80,
    },
    
    '& img': {
      height: 60,
      width: 60,
    }
  },

  selectedAnswer: {
    outline: `2px ${tinycolor(theme.primaryColor).setAlpha(0.3).toRgbString()} solid`,
    backgroundColor: tinycolor(theme.primaryColor).setAlpha(0.2).toRgbString(),
  },

  submittedBox: {
    border: '2px #8eabb5 solid',
    backgroundColor: '#bee5f2',
    padding: '10px 15px 10px 15px',
    borderRadius: 3,
    marginBottom: '2rem',
    '& p': {
      margin: '0.5rem 0 0.5rem 0',
    }
  },

  errorBox: {
    border: '2px #ff5353 solid',
    backgroundColor: '#fd7a7a',
    padding: '10px 15px 10px 15px',
    borderRadius: 3,
    marginBottom: '2rem',
    '& p': {
      margin: '0.5rem 0 0.5rem 0',
    },
    animation: '$popupBox 1s ease-out forwards'
  },

  '@keyframes popupBox': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    }
  },

  '@media screen and (max-width: 700px)': {
    field: {
      '& input': {
        width: '100%',
      },
    }
  }
}))

export default useStyles