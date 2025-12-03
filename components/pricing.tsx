import { ArrowUpRight, CheckCircle, EclipseIcon, PlaneIcon } from 'lucide-react'
import SectionHeading from './section-heading'

interface PricingCardProps {
  title: string
  description: string
  price: string
  features: string[]
  cta: string
  icon: React.ReactNode
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  cta,
  icon,
}) => {
  return (
    <div className="">
      <div className="rounded-2xl border border-stone-200">
        <div className="flex gap-4 p-6">
          {icon}
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 p-6">
        <div className="border-b border-b-gray-200 pb-6">
          <p className="mb-6 text-3xl font-bold text-gray-900">
            {price}
            {title === 'Full Access' && (
              <span className="text-base font-medium text-stone-400"> /one-time</span>
            )}
          </p>

          <a
            href="#"
            className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-[#D8E0F0] bg-transparent px-4 py-2 font-medium text-[#7D8592] transition duration-300 ease-in-out hover:bg-[#e4ecfc] disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-200 disabled:text-gray-500"
          >
            {cta}
            <ArrowUpRight className="h-6 w-5" />
          </a>
        </div>
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircle className="mt-0.5 mr-2 size-5 text-gray-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const PricingSection = () => {
  const pricingOptions = [
    {
      title: 'Starter Plan',
      description: 'Perfect for creators launching their first AI-generated website',
      price: '$9/mo',
      features: [
        '1 AI-generated website',
        'Unlimited edits & regenerations',
        'Drag-and-drop customization',
        'AI copywriting assistant',
        'Basic analytics dashboard',
      ],
      cta: 'Start Free Trial',
      icon: <PlaneIcon className="size-8 text-gray-600" />,
    },
    {
      title: 'Pro Creator',
      description: 'Best for businesses wanting advanced AI design & automation',
      price: '$29/mo',
      features: [
        'Up to 5 websites',
        'Advanced Smart Design Engine',
        'SEO-optimized AI content',
        'Custom domain support',
        'Performance & speed optimization',
        'Priority AI generation speed',
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      icon: <EclipseIcon className="size-8 text-gray-600" />,
    },
    {
      title: 'Agency Suite',
      description: 'For teams, agencies, and power-users building multiple sites at scale',
      price: '$79/mo',
      features: [
        'Unlimited websites',
        'Team collaboration tools',
        'White-label editor & branding',
        'AI automations & workflows',
        'Advanced analytics & heatmaps',
        'Dedicated success manager',
      ],
      cta: 'Get Agency Access',
      icon: <EclipseIcon className="size-8 text-gray-600" />,
    },
  ]

  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 md:px-6">
        <SectionHeading
          title="Pricing"
          subtitle="Launch faster with our flexible pricing plans for every stage of your project"
        />

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
