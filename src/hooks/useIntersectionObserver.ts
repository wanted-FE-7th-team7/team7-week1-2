import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  setPage: Dispatch<SetStateAction<number>>
) => {
  const [observationTarget, setObservationTarget] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPage(prev => prev + 1);
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};
