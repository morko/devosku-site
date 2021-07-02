import { useCallback, useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

function useScrollDirection() {
  const [scrollingDown, setScrollingDown] = useState(false)

  const updateScrollDirection = useCallback(
    (prevScrollPosition, scrollPosition) => {
      if (prevScrollPosition < scrollPosition) {
        setScrollingDown(true)
      } else {
        setScrollingDown(false)
      }
    },
    [setScrollingDown]
  )

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset
    let prevScrollPosition = 0

    function handleScroll() {
      prevScrollPosition = lastScrollPosition
      lastScrollPosition = window.pageYOffset
      updateScrollDirection(prevScrollPosition, lastScrollPosition)
    }

    const throttledhandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledhandleScroll)
    return () => {
      window.removeEventListener('scroll', throttledhandleScroll)
    }
  }, [updateScrollDirection])

  return scrollingDown
}

export default useScrollDirection