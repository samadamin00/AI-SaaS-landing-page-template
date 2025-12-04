import { Layers, Lightbulb, Rocket } from 'lucide-react'
import React from 'react'
import SectionHeading from './section-heading'

export interface FeatureCardProps {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({ id, title, description, icon }) => {
  return (
    <div className="group relative border border-gray-200 p-8 transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="flex justify-between">
        {/* Icon Container */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm border border-gray-200 bg-[#f4f4f4] p-3 text-gray-400">
          {icon}
        </div>

        {/* Decorative Number */}
        <div className="text-6xl font-bold text-slate-500 opacity-[0.12] transition-opacity select-none group-hover:opacity-10">
          0{id}
        </div>
      </div>

      <h4 className="mb-3 text-xl font-bold text-slate-600 transition-colors group-hover:text-black">
        {title}
      </h4>

      <p className="leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}

const FeatureSection = () => {
  const features: FeatureCardProps[] = [
    {
      id: 1,
      title: 'AI Website Generation',
      description:
        'Describe your idea once and let AI generate a complete, responsive website with modern layouts and clean structure.',
      icon: <Lightbulb size={28} />,
    },
    {
      id: 2,
      title: 'Smart Design Engine',
      description:
        'Our AI automatically chooses colors, typography, spacing, and components for a beautiful, consistent design.',
      icon: <Layers size={28} />,
    },
    {
      id: 3,
      title: 'One-Click Publishing',
      description:
        'Launch your site instantly on a blazing-fast cloud hosting environment — and update anything with a single click.',
      icon: <Rocket size={28} />,
    },
  ]

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Our AI Builder"
          title="AI-powered features that help you build websites that convert"
          subtitle="Every feature is designed to automate the hard work — from layout to content — so you can launch beautiful, high-performing websites in minutes."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
