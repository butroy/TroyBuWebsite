'use client';

import { useState } from 'react';
import BlogCard from '@/components/blog/BlogCard';
import { BlogPost } from '@/types';

interface TagFilterProps {
  posts: BlogPost[];
  tags: string[];
}

export default function TagFilter({ posts, tags }: TagFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((post) => post.frontmatter.tags.includes(activeTag))
    : posts;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeTag === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-black">No posts found for this tag.</p>
        )}
      </div>
    </div>
  );
}
