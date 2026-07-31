import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** 0 to 1, how much of the section must be visible before it triggers */
  threshold?: number;
  /** replay the animation every time the section re-enters the viewport */
  once?: boolean;
}

function ScrollReveal({ children, threshold = 0.2, once = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sample several ratios instead of one exact number, and shrink the
    // effective viewport a bit on top/bottom. This makes the callback fire
    // reliably every time the section crosses in/out of view, no matter
    // how fast the scroll is or which direction it's going.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, threshold, 0.5, 1],
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-75 translate-y-24'
      }`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;