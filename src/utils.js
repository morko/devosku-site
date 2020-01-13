/**
 * Searches for [hl]foo[/hl] inside text and transforms it to
 * <span style="color: color;"></span>
 * @param {string} text - text to highlight
 * @param {string} color - color to highlight with
 */
export function textHighlight(text, color) {
  if (!text || !color) {
    return text;
  }
  const pattern = /\[hl\]([\s\S]+?)\[\/hl\]/g;
  const match = text.match(pattern);
  if (!match || match.length < 1) {
    return text;
  }
  const hlText = text.replace(
    pattern,
    `<span style="color: ${color};">$1</span>`
  );
  return hlText;
}
