import { TimelineEvent } from '@/types';

const categoryColors: Record<TimelineEvent['category'], string> = {
  career: 'border-green-500 bg-green-500',
  education: 'border-blue-500 bg-blue-500',
  personal: 'border-purple-500 bg-purple-500',
  achievement: 'border-yellow-500 bg-yellow-500',
};

const categoryLabels: Record<TimelineEvent['category'], string> = {
  career: 'Career',
  education: 'Education',
  personal: 'Personal',
  achievement: 'Achievement',
};

export default function TimelineItem({
  year,
  title,
  description,
  category,
}: TimelineEvent) {
  const dotColor = categoryColors[category];

  return (
    <div className="relative border-l-2 border-gray-400 pl-6 pb-8 last:pb-0">
      <div
        className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 ${dotColor}`}
      />
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-black">{year}</span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-black">
          {categoryLabels[category]}
        </span>
      </div>
      <h3 className="mt-1 text-base font-semibold text-black">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-black">{description}</p>
    </div>
  );
}
