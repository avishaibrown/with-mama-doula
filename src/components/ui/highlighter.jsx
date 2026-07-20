function Highlighter({
  action = 'underline',
  color = '#c8a75d',
  children,
  className = '',
}) {
  return (
    <span
      className={`highlighter highlighter-${action} ${className}`.trim()}
      style={{ '--highlighter-color': color }}
    >
      {children}
    </span>
  )
}

export default Highlighter
