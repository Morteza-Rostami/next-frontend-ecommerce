import { useEffect, useRef, useState } from "react";

const useIntersect = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // change this to 0.3 for 30px from the top
      }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [myRef]);

  useEffect(() => {
    if (isIntersecting) {
      // run your code here
      console.log(myRef)
    }
  }, [isIntersecting]);

  return [
    myRef,
  ]
}

export default useIntersect;