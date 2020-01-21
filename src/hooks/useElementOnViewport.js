import { useState, useEffect } from "react";

function isElementOnViewport(el) {
  const rect = el.getBoundingClientRect();
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewportHeight &&
    rect.right <= viewportWidth
  ) {
    return true;
  }
  return false;
}

export default function useElementOnViewport(element) {
  const defaultState =
    !element || !element.current ? false : isElementOnViewport(element.current);
  const [isOnViewport, setIsOnViewport] = useState(defaultState);

  function checkElement() {
    if (!element || !element.current) return;
    if (isElementOnViewport(element.current)) {
      setIsOnViewport(true);
    } else {
      setIsOnViewport(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", checkElement);
    return () => {
      window.removeEventListener("scroll", checkElement);
    };
  }, [element]);
  return isOnViewport;
}
