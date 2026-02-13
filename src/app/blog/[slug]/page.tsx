import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { mdxComponents } from '@/components/blog/MDXComponents';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <div className="flex items-center gap-3 text-sm text-black">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl">
          {post.frontmatter.title}
        </h1>
        <p className="mt-4 text-lg text-black">{post.frontmatter.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <div className="prose prose-gray max-w-none prose-headings:text-black prose-a:text-blue-600 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100">
        {mdxContent}
      </div>

      <div className="mt-16 border-t border-gray-100 pt-8">
        <Button href="/blog" variant="secondary">
          &larr; Back to Blog
        </Button>
      </div>
    </article>
  );
}
