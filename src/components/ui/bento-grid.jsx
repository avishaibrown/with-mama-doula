function BentoGrid({ className = '', children }) {
  return <div className={`bento-grid ${className}`.trim()}>{children}</div>
}

function BentoCard({ className = '', children }) {
  return <article className={`bento-card ${className}`.trim()}>{children}</article>
}

export { BentoCard, BentoGrid }
