// @flow
import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useLoadIssues } from '../hooks/useLoadIssues';

export function IssueLoader() {
  const loadIssues = useLoadIssues();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const isEnd = await loadIssues();
        if (isEnd === false) observer.observe(entry.target);
      }
    },
    [loadIssues]
  );

  useEffect(() => {
    if (divRef.current !== null) {
      observerRef.current = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observerRef.current.observe(divRef.current);
      return () => observerRef.current?.disconnect();
    }
  }, [onIntersect]);

  return <div ref={divRef}>불러오기</div>;
}
