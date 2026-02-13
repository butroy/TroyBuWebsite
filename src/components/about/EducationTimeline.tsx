import { education } from '@/data/education';
import SectionHeading from '@/components/ui/SectionHeading';

export default function EducationTimeline() {
  return (
    <div>
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="relative border-l-2 border-blue-400 pl-6"
          >
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-blue-600 bg-white" />
            <p className="text-sm font-medium text-blue-600">{edu.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-black">
              {edu.degree}
            </h3>
            <p className="text-sm text-black">{edu.institution}</p>
            {edu.description && (
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-black">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
