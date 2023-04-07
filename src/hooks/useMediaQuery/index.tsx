import { useEffect, useRef, useState } from "react";

export function useMediaQuery(queryString: string) {
  const [matches, setMatches] = useState(false);
  const matchesRef = useRef<boolean>();

  useEffect(() => {
    const watcher = () => {
      const query = window.matchMedia(queryString);
      matchesRef.current = query.matches;

      if (matchesRef.current !== matches) {
        setMatches(matchesRef.current);
      }
    };

    window.addEventListener("resize", watcher);
    return () => window.removeEventListener("resize", watcher);
  });

  return matches;
}
