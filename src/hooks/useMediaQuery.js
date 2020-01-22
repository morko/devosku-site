/**
 * Hook to handle the media queries in React.
 */

import { useState, useEffect } from 'react'

const queries = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px)',
  desktop: '(min-width: 1024px)',
  widescreen: '(min-width: 1216px)',
  fullhd: '(min-width: 1408px)',
}

const medias = Object.keys(queries)
let mediaQueryLists = {}
medias.forEach(media => {
  mediaQueryLists[media] = matchMedia(queries[media])
})

const useMediaQuery = () => {
  const [queryMatch, setQueryMatch] = useState(null)

  const findMatch = () => {
    let match
    medias.forEach(media => {
      if (mediaQueryLists[media].matches) match = media
    })
    return match
  }

  useEffect(() => {
    if (window.matchMedia) {
      setQueryMatch(findMatch())

      const handleQueryChange = () => {
        setQueryMatch(findMatch())
      }
      medias.forEach(media => {
        mediaQueryLists[media].addListener(handleQueryChange)
      })

      return () => {
        medias.forEach(media => {
          mediaQueryLists[media].removeListener(handleQueryChange)
        })
      }
    }
  }, [])

  return queryMatch
}

export default useMediaQuery
