import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, MousePointerClick, PenTool, Search, Share2 } from 'lucide-react'
import React from 'react'
import SectionHeading from './section-heading'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  span?: string
  children?: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  span,
  children,
}) => {
  return (
    <div
      className={`group relative flex min-h-80 flex-col justify-between overflow-hidden border border-zinc-200 bg-white p-4 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-500/10 sm:p-6 lg:p-8 ${span}`}
    >
      <div className="relative z-10 h-full">
        <div className="mb-6 flex items-start justify-between lg:mb-9">
          <div className="flex h-12 w-12 items-center justify-center border border-gray-200 bg-gray-100">
            <Icon className="h-6 w-6 text-gray-600" />
          </div>

          <div className="border border-gray-200 bg-[#f4f4f4] p-2 opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5 text-neutral-400" />
          </div>
        </div>

        <div className="mb-6 lg:mb-9">
          <h2 className="mb-2 text-xl font-bold text-zinc-900 sm:text-2xl">{title}</h2>
          <p className="max-w-sm text-sm leading-5 text-zinc-600 sm:text-base lg:max-w-md lg:leading-6">
            {description}
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AI Website Builder"
          title="Everything you need to build websites instantly"
          subtitle="Automate your website creation with AI — from design to content and branding, all done in minutes without any coding."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <ServiceCard
            title="AI Website Generation"
            description="Generate fully responsive, modern websites instantly by simply describing your idea."
            icon={Search}
            span="md:col-span-2"
          >
            <div className="absolute right-0 bottom-0 flex items-end gap-2 opacity-50 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 sm:right-3 sm:bottom-6 md:bottom-3 lg:right-6 lg:bottom-6">
              <div className="h-5 w-8 bg-blue-200/50 group-hover:h-8 group-hover:bg-blue-200"></div>
              <div className="h-10 w-8 bg-blue-300/50 group-hover:h-12 group-hover:bg-blue-300"></div>
              <div className="h-15 w-8 bg-blue-400/50 group-hover:h-18 group-hover:bg-blue-400"></div>
            </div>
          </ServiceCard>

          {/* Card 2 */}
          <ServiceCard
            title="Smart AI Design"
            description="Our AI automatically chooses colors, typography, layouts, and components for a polished look."
            icon={Share2}
          >
            <div className="mt-auto space-y-3">
              <div className="w-fit bg-zinc-100 px-3 py-2 text-xs text-zinc-500 transition-transform group-hover:-translate-y-1">
                Color palette suggestions ✔️
              </div>
              <div className="ml-auto w-fit bg-orange-500 px-3 py-2 text-xs text-white transition-transform group-hover:-translate-y-1">
                Layouts optimized 🚀
              </div>
            </div>
          </ServiceCard>

          {/* Card 3 */}
          <ServiceCard
            title="One-Click Publishing"
            description="Launch your website instantly on a fast, secure hosting environment with a single click."
            icon={MousePointerClick}
          >
            <div className="relative mt-auto flex h-24 w-full items-center justify-center overflow-hidden border border-zinc-100 bg-zinc-50">
              <div className="border border-purple-100 bg-white px-4 py-2 text-xs font-bold text-purple-600">
                Publish Now
              </div>
              <div className="absolute top-1/2 left-1/2 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-100">
                <MousePointerClick className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </ServiceCard>

          {/* Card 4 */}
          <ServiceCard
            title="AI Content & SEO"
            description="Automatically generate website copy, meta tags, and SEO-friendly content tailored to your brand."
            icon={PenTool}
            span="md:col-span-2"
          >
            <div className="absolute right-0 bottom-0 w-22 space-y-2 opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:right-3 sm:bottom-6 md:bottom-3 lg:right-6 lg:bottom-6">
              <div className="flex gap-2">
                <div className="h-2 w-full bg-green-200"></div>
                <div className="h-2 w-1/3 bg-green-300"></div>
              </div>
              <div className="h-2 w-3/4 bg-green-100"></div>
              <div className="h-2 w-5/6 bg-green-200"></div>

              <div className="mt-2 flex gap-2">
                <div className="h-8 w-8 bg-green-100"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-full bg-green-200"></div>
                  <div className="h-2 w-1/2 bg-green-100"></div>
                </div>
              </div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
