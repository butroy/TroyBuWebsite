import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>
          Featured Projects and Experiences
        </SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
