import { useState, useCallback, useEffect, useRef } from 'react';

export const useInfiniteScroll = () => {
    const [skip, setSkip] = useState(0);
    const loadMoreRef = useRef<HTMLDivElement>(null);
  
    const handleObserver = useCallback((entries:any) => {
      const [target] = entries;
      if (target.isIntersecting) {
        setSkip((prev)=>prev+10);
      }
    }, []);
  
    useEffect(() => {
      const option = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };
  
      const observer = new IntersectionObserver(handleObserver, option);
  
      if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    }, [handleObserver]);
  
    return { loadMoreRef, skip };
  }
  
  export default useInfiniteScroll;