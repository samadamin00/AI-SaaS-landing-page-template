import { ArrowUpRight, Flag, Globe, GlobeIcon } from 'lucide-react'

const title = 'Create Stunning Websites Instantly with AI'

const description =
  'Build high-quality, conversion-focused websites in minutes — no coding, no design skills needed. Just describe your idea, and our AI does the rest.'

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden rounded-3xl bg-[#F1F0FB] px-4 py-16">
      {/* --- BACKGROUND DECORATION START --- */}

      {/* 1. Dot Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* 2. Animated Gradient Blobs (Purple & Blue to match brand) */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-400/30 blur-[100px] filter transition-all duration-1000" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-400/30 blur-[100px] filter transition-all delay-700 duration-1000" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-pulse-light mb-3 inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-[#E07A5F]">
          <span className="mr-2 rounded-full bg-[#E07A5F] px-2 py-0.5 text-xs text-white">New</span>
          We just launched our AI Website Builder 2.0
        </div>

        <h1 className="mb-4 text-4xl leading-snug font-bold text-[#2F4550] md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug">
          {title}
        </h1>

        <p className="mx-auto mb-20 max-w-3xl text-lg text-[#2F4550]/80 md:text-xl">
          {description}
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 px-5 sm:flex-row">
          <a
            href="javascript:void(0)"
            className="flex items-center justify-center rounded-full bg-[#FDE1D3] px-6 py-2 font-semibold text-[#2F4550] hover:bg-[#FDE1D3]/90"
          >
            <ArrowUpRight className="mr-2" size={18} />
            Start Creating with AI
          </a>

          <a
            href="javascript:void(0)"
            className="flex items-center justify-center rounded-full bg-[#D3E4FD] px-6 py-2 font-semibold text-[#2F4550] hover:bg-[#D3E4FD]/90"
          >
            <Globe className="mr-2" size={18} />
            See AI-Generated Websites
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center space-x-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-sm">
            <GlobeIcon color="#3D8690" size="18" />
            <span className="text-sm font-medium text-[#2F4550]">
              Trusted by clients in 12+ countries
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
