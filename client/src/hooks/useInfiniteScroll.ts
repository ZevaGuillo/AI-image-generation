import { useState, useCallback, useEffect, useRef } from 'react';
import { onSetSkip } from '../store/gallery/gallerySlice';
import { useAppDispatch } from './useRedux';

export const useInfiniteScroll = () => {
    const dispatch = useAppDispatch();
    
    const loadMoreRef = useRef<HTMLDivElement>(null);
  
    const handleObserver = useCallback((entries:any) => {
      const [target] = entries;
      if (target.isIntersecting) {
        dispatch(onSetSkip());
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
  
    return { loadMoreRef };
  }
  
  export default useInfiniteScroll;