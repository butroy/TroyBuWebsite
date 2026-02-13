import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export default function HeroSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-6 text-left text-base font-medium tracking-wide text-blue-600 sm:text-2xl">
          Bioelectronic Medicine Researcher &amp; Medical Device Engineer
        </p>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Text */}
          <div>
            <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Engineering Medicine through{' '}
              <span className="text-blue-600">Neurotechnology</span> and {' '}
              <span className="text-blue-600">AI </span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-black sm:text-2xl">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/projects">View My Work</Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/hero.png"
              alt="Yifeng (Troy) Bu"
              className="w-full max-w-md rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
