import theme from './themes/light-theme'

/**
 * Searches for [hl]foo[/hl] inside text and transforms it to
 * <span style="color: color;"></span>
 * @param {string} text - text to highlight
 * @param {string} color - color to highlight with
 */
export function textHighlight(text, color) {
  if (!text || !color) {
    return text
  }
  const pattern = /\[hl\]([\s\S]+?)\[\/hl\]/g
  const match = text.match(pattern)
  if (!match || match.length < 1) {
    return text
  }
  const hlText = text.replace(
    pattern,
    `<span style="color: ${color};">$1</span>`
  )
  return hlText
}

/**
 * Scrolls the viewport into the element if it exists. Requires the element
 * to have an id set.
 * @param {string} id id of the element
 */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) {
    return
  }
  const rect = el.getBoundingClientRect()
  window.scrollTo(0, rect.top + window.scrollY - theme.fixedHeaderHeight - 10)
}