import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/blog';

export default function RecentPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading>
          Recent Posts
        </SectionHeading>
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/blog" variant="secondary">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
