import Tag from '@/components/ui/Tag';
import { Project } from '@/types';

export default function ProjectCard({ title, description, tags, image, timeline, link }: Project) {
  const content = (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md">
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {timeline && (
          <p className="mb-1 text-sm font-medium text-blue-600">{timeline}</p>
        )}
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-black">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
