import React, { useEffect, useState } from 'react'
import useStyles from './Loader.styles'
import Logo from './Logo'

const Loader = (props) => {
  const { children } = props

  const classes = useStyles();

  const [loading, setLoading] = useState(true)
  const [removeLoader, setRemoveLoader] = useState(false)

  useEffect(() => {
    const htmlEl = document.querySelector('html')

    const interval = setInterval(() => {
      if (typeof htmlEl.className === 'string' && htmlEl.className.includes('wf-active')) {
        setRemoveLoader(true)
        clearInterval(interval)
      }
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!removeLoader) return;
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [removeLoader])

  return (
    <>
      {loading ? (
        <div id="loading" className={classes.container}>
          <Logo className={(removeLoader ? classes.fadeOut : classes.fadeIn)}/>
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default Loader
