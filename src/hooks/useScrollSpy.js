import { useEffect, useState } from 'react';

// Returns the id of the section currently crossing the middle of the viewport.
const useScrollSpy = (ids, initial = ids[0]) => {
  const [activeId, setActiveId] = useState(initial);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

export default useScrollSpy;
