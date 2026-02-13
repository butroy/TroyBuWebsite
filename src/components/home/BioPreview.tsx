import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BioPreview() {
  return (
    <section className="bg-gray-50/60 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-black">About Me</h2>
        <div className="grid gap-10 md:grid-cols-5">
          {/* Bio text — 3 columns */}
          <div className="space-y-4 md:col-span-3">
            <p className="leading-relaxed text-black">
              I&apos;m an Electrical Engineering Ph.D. specializing in{' '}
              <span className="font-semibold text-black">medical devices</span> and{' '}
              <span className="font-semibold text-black">signal processing</span> at the
              intersection of engineering, neuroscience, and AI to advance next-generation healthcare technology.
            </p>
            <p className="leading-relaxed text-black">
              My work develops next-generation{' '}
              <span className="font-semibold text-black">wearable medical devices</span>{' '}
              that non-invasively capture autonomic neurography (ANG) and physiological
              biomarkers—currently pursuing{' '}
              <span className="font-semibold text-black">FDA 510(k) clearance</span> for
              technologies addressing inflammation and mental health.
            </p>
            <p className="leading-relaxed text-black">
              I combine expertise in electrical engineering, machine learning, and biomedical
              engineering with a focus on translating cutting-edge{' '}
              <span className="font-semibold text-black">AI tools</span> into clinical
              applications that improve patient outcomes.
            </p>
            <div className="pt-2">
              <Button href="/about" variant="secondary">
                Read More About Me
              </Button>
            </div>
          </div>

          {/* Core Philosophy — 2 columns */}
          <div className="md:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
                Core Philosophy
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  'Life-long Learner',
                  'Open-minded Collaborator',
                  'Mission Driven',
                  'System Thinker',
                  'Detail Oriented',
                ].map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3"
                  >
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
