import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost, BlogFrontmatter } from '@/types';

const contentDir = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const frontmatter = data as BlogFrontmatter;

      if (!frontmatter.published) return null;

      return {
        slug,
        frontmatter,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post): post is BlogPost => post !== null);

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.frontmatter.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];

  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
