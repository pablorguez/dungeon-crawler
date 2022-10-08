import { useEffect, useState } from 'react';

export const useMountTransition = (isMounted: boolean) => {
  const [hasTransitioned, setHasTransitioned] = useState(false);

  useEffect(() => {
    if (isMounted && !hasTransitioned) {
      setHasTransitioned(true);
    }
  }, [isMounted, hasTransitioned]);

  return hasTransitioned;
};
