import { useEffect, useMemo, useRef, useState } from 'react'

function AnimatedList({ className = '', delay = 140, children }) {
  const items = useMemo(() => (Array.isArray(children) ? children : [children]), [children])
  const listRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = listRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.35,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={listRef} className={`animated-list ${className}`.trim()}>
      {items.map((child, index) => (
        <div
          className={`animated-list-item ${isVisible ? 'is-visible' : ''}`}
          key={child?.key ?? index}
          style={{ '--animated-list-delay': `${index * delay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default AnimatedList
