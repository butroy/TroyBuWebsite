import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import PublicationCard from '@/components/projects/PublicationCard';
import PatentCard from '@/components/projects/PatentCard';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { patents } from '@/data/patents';

export const metadata: Metadata = {
  title: 'Projects & Publications',
  description:
    'Projects and academic publications.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading subtitle="">
        Projects and Experiences
      </SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...projects].sort((a, b) => {
          const yearA = parseInt(a.timeline?.match(/\d{4}(?!.*\d{4})/)?.[0] ?? '0');
          const yearB = parseInt(b.timeline?.match(/\d{4}(?!.*\d{4})/)?.[0] ?? '0');
          return yearB - yearA;
        }).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading subtitle="">
          Publications
        </SectionHeading>
        <div className="max-h-[32rem] space-y-4 overflow-y-scroll pr-2">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} {...pub} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading subtitle="">
          Patents
        </SectionHeading>
        <div className="space-y-4">
          {patents.map((patent) => (
            <PatentCard key={patent.title} {...patent} />
          ))}
        </div>
      </div>
    </div>
  );
}
