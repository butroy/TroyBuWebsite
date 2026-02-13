import { skills } from '@/data/skills';
import SectionHeading from '@/components/ui/SectionHeading';
import Tag from '@/components/ui/Tag';

export default function SkillsGrid() {
  return (
    <div>
      <SectionHeading>Skills &amp; Expertise</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((category) => (
          <div
            key={category.category}
            className="rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-black">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
