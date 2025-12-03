import PromoBanner from '@/components/cta'
import Faq from '@/components/faq'
import FeatureSection from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import PricingSection from '@/components/pricing'
import ServicesSection from '@/components/services'
import StatsSection from '@/components/stats'
import TestimonialSection from '@/components/testimonial'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection />
      <FeatureSection />
      <ServicesSection />
      <TestimonialSection />
      <PricingSection />
      <Faq />
      <PromoBanner />
      <Footer />
    </main>
  )
}
