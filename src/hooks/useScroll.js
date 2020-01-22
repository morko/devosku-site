import { useState, useEffect, useRef } from 'react'
import throttle from 'lodash/throttle'

function useScroll(tresholds) {
  if (!tresholds || Object.keys(tresholds).length <= 0) {
    throw new TypeError('invalid arguments')
  }
  const [activeTresholds, setActiveTresholds] = useState({})
  const [scrollingDown, setScrollingDown] = useState(true)
  const tresholdsRef = useRef(tresholds)

  useEffect(() => {
    const tresholds = tresholdsRef.current
    function updateActiveTresholds(scrollPosition) {
      const newActiveTresholds = {}
      Object.entries(tresholds).forEach(([key, treshold]) => {
        if (treshold <= scrollPosition) {
          newActiveTresholds[key] = true
        } else {
          newActiveTresholds[key] = false
        }
      })
      setActiveTresholds(newActiveTresholds)
    }

    function updateScrollDirection(prevScrollPosition, scrollPosition) {
      if (prevScrollPosition < scrollPosition) {
        setScrollingDown(true)
      } else {
        setScrollingDown(false)
      }
    }

    let lastScrollPosition = window.pageYOffset
    let prevScrollPosition = 0

    function handleScroll() {
      prevScrollPosition = lastScrollPosition
      lastScrollPosition = window.pageYOffset
      updateScrollDirection(prevScrollPosition, lastScrollPosition)
      updateActiveTresholds(lastScrollPosition)
    }

    const throttledhandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledhandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledhandleScroll)
    }
  }, [tresholdsRef])

  return [activeTresholds, scrollingDown]
}

export default useScroll
