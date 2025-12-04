import React from 'react'

type SectionHeadingProps = {
  badge?: string
  title: React.ReactNode
  subtitle?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      {badge && (
        <span className="mb-4 inline-block bg-[#f4f4f4] px-4 py-1.5 text-sm font-semibold text-neutral-700">
          {badge}
        </span>
      )}

      <h2 className="mb-6 text-3xl font-bold text-[#191a33] md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-[#464D61]">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
