function ShinyButton({ className = '', children, ...props }) {
  return (
    <button className={`shiny-button ${className}`.trim()} {...props}>
      <span className="shiny-button__content">{children}</span>
    </button>
  )
}

export default ShinyButton
