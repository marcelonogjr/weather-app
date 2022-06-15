import { useRef, useEffect } from 'react';

const useHorizontalScroll = () => {
  const elementRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const divElement = elementRef.current;
    if (divElement) {
      const onWheel = (event: WheelEvent) => {
        if (event.deltaY === 0) return;
        if (
          !(divElement.scrollLeft === 0 && event.deltaY < 0) &&
          !(divElement.scrollWidth - divElement.clientWidth - Math.round(divElement.scrollLeft) === 0 && 
              event.deltaY > 0)
        ) {
          event.preventDefault();
        }
        divElement.scrollTo({
          left: divElement.scrollLeft + event.deltaY,
        });
      };
      divElement.addEventListener('wheel', onWheel);
      return () => divElement.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elementRef;
};

export default useHorizontalScroll;
