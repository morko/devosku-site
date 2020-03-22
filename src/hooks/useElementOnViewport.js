import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

function isElementOnViewport(el) {
  const rect = el.getBoundingClientRect()
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewportHeight &&
    rect.right <= viewportWidth
  ) {
    return true
  }
  return false
}

/**
 *
 * Checks if the element is on viewport.
 *
 * @param {React.Ref} element - Ref containing the element to check on.
 * @param {boolean} [once=false] - If this is true the return value will be set
 *    to true once and never touched again.
 * @return {boolean} - Is the element on viewport.
 */
export default function useElementOnViewport(element, once = false) {
  const defaultState =
    !element || !element.current ? false : isElementOnViewport(element.current)
  const [isOnViewport, setIsOnViewport] = useState(defaultState)

  useEffect(() => {
    const throttledCheckElement = throttle(checkElement, 200)
    function checkElement() {
      if (!element || !element.current) return
      if (isElementOnViewport(element.current)) {
        setIsOnViewport(true)
        if (once) {
          window.removeEventListener('scroll', throttledCheckElement)
        }
      } else {
        setIsOnViewport(false)
      }
    }
    window.addEventListener('scroll', throttledCheckElement)
    return () => {
      window.removeEventListener('scroll', throttledCheckElement)
    }
  }, [element, setIsOnViewport, once])
  return isOnViewport
}
