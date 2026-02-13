import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import EducationTimeline from '@/components/about/EducationTimeline';
import SkillsGrid from '@/components/about/SkillsGrid';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about my background in bioelectronic medicine, education, and research interests.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading>
        About Me
      </SectionHeading>

      {/* Bio Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <p className="leading-relaxed text-black">
            I&apos;m an Electrical Engineering Ph.D. specializing in{' '}
            <span className="font-semibold text-black">medical devices</span> and{' '}
            <span className="font-semibold text-black">signal processing</span>, working
            at the intersection of electrical engineering, neuroscience, physiology, and AI
            to advance next-generation healthcare technology.
          </p>
          <p className="leading-relaxed text-black">
            My research focuses on developing innovative{' '}
            <span className="font-semibold text-black">wearable medical devices</span>{' '}
            that non-invasively capture autonomic neurograph (ANG) activity and physiological
            biomarkers. Currently, I&apos;m working toward{' '}
            <span className="font-semibold text-black">FDA 510(k) clearance</span> for
            technologies that could transform how we monitor and treat conditions related
            to inflammation and mental health.
          </p>
          <p className="leading-relaxed text-black">
            I bring a multidisciplinary perspective spanning electrical engineering, machine
            learning, and biomedical engineering — combining rigorous technical expertise with
            a deep understanding of clinical needs. I&apos;m also at the forefront of
            integrating cutting-edge{' '}
            <span className="font-semibold text-black">AI tools</span> into practical
            clinical applications.
          </p>

          {/* Core Philosophy */}
          <div className="mt-6 rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-black">
              Core Philosophy
            </h3>
            <div className="flex flex-wrap justify-left gap-3">
              {[
                'Life-long Learner',
                'Open-minded Collaborator',
                'Mission Driven',
                'System Thinker',
                'Detail Oriented',
              ].map((value) => (
                <span
                  key={value}
                  className="whitespace-nowrap rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <img
            src="/images/selfie.png"
            alt="Yifeng (Troy) Bu"
            className="h-64 w-64 rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Education & Skills */}
      <div className="grid gap-12 lg:grid-cols-2">
        <EducationTimeline />
        <SkillsGrid />
      </div>
    </div>
  );
}
