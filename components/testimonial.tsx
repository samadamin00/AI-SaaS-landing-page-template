import { testimonialsData } from '@/appData/testimonial'
import { FC, SVGProps } from 'react'
import SectionHeading from './section-heading'

const StarIcon: FC<SVGProps<SVGSVGElement>> = ({
  fill = 'currentColor',
  stroke = '#FFB800',
  ...props
}) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      stroke={stroke}
      {...props}
    >
      <path
        d="M9.10264 3.58103C9.46948 2.83787 10.5292 2.83787 10.8961 3.58103L12.3419 6.51016C12.4874 6.80501 12.7686 7.00947 13.094 7.05702L16.3289 7.52985C17.1488 7.6497 17.4756 8.65754 16.882 9.2357L14.5428 11.5141C14.3069 11.7438 14.1993 12.075 14.2549 12.3995L14.8068 15.617C14.9469 16.434 14.0893 17.057 13.3557 16.6712L10.4648 15.1508C10.1734 14.9976 9.82528 14.9976 9.5339 15.1508L6.64298 16.6712C5.90935 17.057 5.0518 16.434 5.19192 15.617L5.74377 12.3995C5.79943 12.075 5.69177 11.7438 5.45589 11.5141L3.1167 9.2357C2.5231 8.65754 2.84988 7.6497 3.6698 7.52985L6.90472 7.05702C7.23007 7.00947 7.51125 6.80501 7.65679 6.51016L9.10264 3.58103Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    </svg>
  )
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, feedback, image, stars },
}) => {
  return (
    <div className="flex max-w-full shrink-0 flex-col items-center justify-between gap-4 rounded-2xl border border-[#eee] bg-[#f4f4f4] p-8 text-center sm:max-w-[425px]">
      <p className="text-center leading-8 text-[#0d1a3b] before:content-['“'] after:content-['”']">
        {feedback}
      </p>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 5 }, (_, idx) => (
          <StarIcon key={idx} className={idx < stars ? 'text-[#ffa800]' : 'text-transparent'} />
        ))}
      </div>
      <div>
        <img src={image} alt={name} width={50} height={50} className="mx-auto rounded-full" />
        <p className="text-lg font-semibold text-[#0d1a3b]">{name}</p>
        <p className="text-sm text-[#0d1a3b]/60">{title}</p>
      </div>
    </div>
  )
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[]
}

const TestimonialSection: FC<TestimonialSectionProps> = ({ testimonials = testimonialsData }) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Loved by creators and teams everywhere"
          subtitle="Real stories from people who use our product every day"
        />

        <div className="grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
