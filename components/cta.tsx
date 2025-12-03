import { Megaphone } from 'lucide-react'

const PromoBanner = () => {
  return (
    <section className="mx-auto my-12 max-w-5xl px-3">
      <div className="relative rounded-xl bg-[#F4F4F4] p-7 md:grid md:grid-cols-2 md:rounded-l-xl md:rounded-r-none md:p-12">
        <div className="max-w-lg">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Let’s Create Your Website in Minutes with AI
          </h2>

          <p className="text-md mb-6 leading-7 font-medium text-[#464D61] md:text-lg">
            No design skills? No problem. Our AI builds stunning, responsive websites tailored to
            your brand — fast, easy, and stress-free.
          </p>

          <a
            href="https://www.flexyui.com"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#24CC63] px-5 py-2 text-sm font-medium text-white transition hover:bg-green-600"
          >
            <Megaphone size={18} />
            <span>Start Building for Free</span>
          </a>
        </div>

        <div
          className="absolute right-0 hidden h-full w-2/5 bg-[#24CC63] md:block"
          style={{
            clipPath: 'polygon(0 0, 10% 100%, 100% 100%, 100% 0)',
          }}
        ></div>
      </div>
    </section>
  )
}

export default PromoBanner
