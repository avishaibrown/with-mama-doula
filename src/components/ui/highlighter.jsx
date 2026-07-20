import { useEffect, useRef } from 'react'

function Highlighter({
  action = 'underline',
  color = '#c8a75d',
  children,
  className = '',
  revealOnScroll = false,
}) {
  const highlighterRef = useRef(null)

  useEffect(() => {
    if (!revealOnScroll) return undefined

    const element = highlighterRef.current
    if (!element) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) {
      element.style.setProperty('--highlight-progress', '100%')
      return undefined
    }

    let frameId = 0

    const updateProgress = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const start = viewportHeight * 0.86
      const end = viewportHeight * 0.34
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))

      element.style.setProperty('--highlight-progress', `${(progress * 100).toFixed(1)}%`)
      frameId = 0
    }

    const scheduleUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [revealOnScroll])

  return (
    <span
      ref={highlighterRef}
      className={`highlighter highlighter-${action} ${revealOnScroll ? 'highlighter-scroll' : ''} ${className}`.trim()}
      style={{ '--highlighter-color': color }}
    >
      {children}
    </span>
  )
}

export default Highlighter
