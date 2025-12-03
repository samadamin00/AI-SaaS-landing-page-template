'use client'
import { LayoutIcon, PackageIcon, ZapIcon } from 'lucide-react'
import { useEffect, useState, type JSX } from 'react'
import SectionHeading from './section-heading'

export const statsData = [
  {
    value: 0,
    endValue: 1160,
    icon: <PackageIcon className="h-7 w-7" />,
    label: 'Websites Generated',
    delay: 0,
    description: 'Beautiful, responsive websites created instantly with AI',
  },
  {
    value: 0,
    endValue: 342,
    icon: <LayoutIcon className="h-7 w-7" />,
    label: 'Businesses Onboarded',
    delay: 200,
    description: 'Brands and creators launching faster with AI automation',
  },
  {
    value: 0,
    endValue: 90,
    icon: <ZapIcon className="h-7 w-7" />,
    label: 'Time Saved (%)',
    delay: 400,
    description: 'Skip coding and designing — let AI handle everything in minutes',
  },
]

interface StatProps {
  icon: JSX.Element
  label: string
  value: number
  endValue: number
  delay: number
  description: string
}

const StatsCard = ({ icon, label, endValue, delay, description }: StatProps) => {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 2000
      const startTime = Date.now()

      const animate = () => {
        const elapsedTime = Date.now() - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        setCurrentValue(Math.floor(progress * endValue))
        if (progress < 1) requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [endValue, delay])

  return (
    <div className="group relative transform overflow-hidden rounded-xl border border-[#EBEEF7] bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute top-0 right-0 left-0 h-20 bg-[#f4f4f4]" />

      <div className="relative z-10 flex flex-col items-center p-6 pt-8">
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="rounded-full bg-purple-100 p-3 text-[#933FE1] transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-200">
            {icon}
          </div>
          <span className="bg-[#933FE1] bg-clip-text text-5xl font-bold text-transparent">
            {currentValue < 10 ? `0${currentValue}` : currentValue}
          </span>
        </div>

        <div className="mt-2 w-full border-t border-[#EBEEF7] pt-4">
          <p className="mb-1 text-lg font-semibold text-[#191F33]">{label}</p>
          {description && <p className="text-sm text-[#464D61]">{description}</p>}
        </div>
      </div>
    </div>
  )
}

type StatItem = {
  icon: JSX.Element
  label: string
  value: number
  endValue: number
  delay: number
  description: string
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState<StatItem[]>(statsData)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const newStats = stats.map((stat) => ({
        ...stat,
        value: stat.endValue,
      }))
      const timeout = setTimeout(() => setStats(newStats), 100)
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  return (
    <section
      id="stats-section"
      className="mx-auto max-w-5xl px-3 py-24"
      aria-label="Key metrics and statistics"
    >
      <SectionHeading
        badge="Why Creators Love Our AI Builder"
        title="Build Faster, Smarter & More Beautiful Websites with AI"
        subtitle="Our AI-powered platform automates design, layout, content, and branding — helping you launch stunning websites in minutes instead of weeks."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              animationDelay: `${index * 200}ms`,
              animationFillMode: 'forwards',
              animationDuration: '0.8s',
            }}
          >
            <StatsCard {...stat} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
