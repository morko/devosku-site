import React, { useRef } from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'

const SectionProgressBar = React.forwardRef((props, ref) => {
  const { className, height = 200, percent = 0, dots, hide = false } = props

  const theme = useTheme()
  const classes = useStyles({ height, percent, hide, theme })

  const dotRefs = useRef([])

  function handleDotClick(refIndex, dotClickHandler) {
    dotRefs.current[refIndex].current.blur()
    if (dotClickHandler) {
      dotClickHandler()
    }
  }

  function createDots() {
    if (!dots) return ''

    return dots.map((data, i) => {
      const offsetTop = data.percent * height
      const isPassed =
        Math.round(percent * 100) / 100 >= Math.round(data.percent * 100) / 100
      const cls = `${classes.dot}${isPassed ? ' passed' : ''}`

      dotRefs.current[i] = React.createRef()

      return (
        <button
          key={data.percent}
          ref={dotRefs.current[i]}
          className={cls}
          style={{ top: offsetTop }}
          onClick={() => handleDotClick(i, data.onClick)}
        >
          <span className="dotLabel">{data.label}</span>
        </button>
      )
    })
  }

  return (
    <div
      className={`${classes.sectionProgressBar} ${className || ''}`}
      ref={ref}
    >
      {createDots()}
    </div>
  )
})

export default SectionProgressBar
