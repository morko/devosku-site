import { useState, useEffect, useRef, useCallback } from 'react'
import throttle from 'lodash/throttle'

function useScrollTresholds(tresholds) {
  if (!tresholds || Object.keys(tresholds).length <= 0) {
    throw new TypeError('invalid arguments')
  }
  const [activeTresholds, setActiveTresholds] = useState({})
  const tresholdsRef = useRef(tresholds)

  const updateActiveTresholds = useCallback((scrollPosition) => {
    const tresholds = tresholdsRef.current
    const newActiveTresholds = {}

    Object.entries(tresholds).forEach(([key, treshold]) => {
      if (treshold <= scrollPosition) {
        newActiveTresholds[key] = true
      } else {
        newActiveTresholds[key] = false
      }
    })
    setActiveTresholds(newActiveTresholds)
  }, [tresholdsRef])

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset

    function handleScroll() {
      lastScrollPosition = window.pageYOffset
      updateActiveTresholds(lastScrollPosition)
    }

    const throttledhandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledhandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledhandleScroll)
    }
  }, [updateActiveTresholds])

  return activeTresholds
}

export default useScrollTresholds
