import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TagFilter from '@/components/blog/TagFilter';
import { getAllPosts, getAllTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on life and knowledges.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading>
        Blog
      </SectionHeading>
      <TagFilter posts={posts} tags={tags} />
    </div>
  );
}
