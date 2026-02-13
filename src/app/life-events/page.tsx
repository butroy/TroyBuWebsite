import type { Metadata } from 'next';
import TimelineItem from '@/components/life-events/TimelineItem';
import { timeline } from '@/data/timeline';

export const metadata: Metadata = {
  title: 'Life Events',
  description:
    'A timeline of key milestones in my academic career and personal journey.',
};

export default function LifeEventsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black">Life Events</h2>
        <p className="mt-3 text-justify text-lg italic text-blue-600">
          &ldquo;Life is not measured by the number of breaths we take, but by the moments that take our breath away.&rdquo;
        </p>
        <p className="mt-1 text-right text-sm text-black">
          — Dr. Maya Angelou
        </p>
      </div>

      {/* Legend */}
      <div className="mb-10 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 text-sm text-black">
          <span className="h-3 w-3 rounded-full bg-blue-500" />
          Education
        </div>
        <div className="flex items-center gap-2 text-sm text-black">
          <span className="h-3 w-3 rounded-full bg-green-500" />
          Career
        </div>
        <div className="flex items-center gap-2 text-sm text-black">
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          Achievement
        </div>
        <div className="flex items-center gap-2 text-sm text-black">
          <span className="h-3 w-3 rounded-full bg-purple-500" />
          Personal
        </div>
      </div>

      <div>
        {timeline.map((event, idx) => (
          <TimelineItem key={idx} {...event} />
        ))}
      </div>
    </div>
  );
}
