import { useState, useEffect } from 'react';

let lastScrollPosition = window.pageYOffset;
let prevScrollPosition = 0;
let ticking = false;

function useScroll(tresholds) {
  if (!tresholds || Object.keys(tresholds).length <= 0) {
    throw new TypeError('invalid arguments');
  }
  const [activeTresholds, setActiveTresholds] = useState({});
  const [scrollingDown, setScrollingDown] = useState(true);

  useEffect(() => {
    function updateActiveTresholds(scrollPosition) {
      const newActiveTresholds = {};
      let activeTresholdsChanged = false;
      Object.entries(tresholds).forEach(([key, treshold]) => {
        if (treshold <= scrollPosition) {
          newActiveTresholds[key] = true;
        } else {
          newActiveTresholds[key] = false;
        }
        if (newActiveTresholds[key] !== activeTresholds[key]) {
          activeTresholdsChanged = true;
        }
      });
      if (activeTresholdsChanged) {
        setActiveTresholds(newActiveTresholds);
      }
    }
    function updateScrollDirection(prevScrollPosition, scrollPosition) {
      if (prevScrollPosition < scrollPosition) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    }

    function handleScroll() {
      prevScrollPosition = lastScrollPosition;
      lastScrollPosition = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateScrollDirection(prevScrollPosition, lastScrollPosition);
          updateActiveTresholds(lastScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTresholds, tresholds]);
  return [activeTresholds, scrollingDown];
}

export default useScroll;
