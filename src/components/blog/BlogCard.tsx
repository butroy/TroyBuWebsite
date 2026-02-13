import Link from 'next/link';
import Tag from '@/components/ui/Tag';
import { BlogPost } from '@/types';

export default function BlogCard({ slug, frontmatter, readingTime }: BlogPost) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="flex flex-col sm:flex-row gap-6 rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-shadow hover:shadow-md">
        {frontmatter.image && (
          <div className="flex-shrink-0 sm:order-last">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="h-48 w-full sm:h-36 sm:w-64 rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-3 text-sm text-black">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&middot;</span>
            <span>{readingTime}</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-black">
            {frontmatter.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-black">
            {frontmatter.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
