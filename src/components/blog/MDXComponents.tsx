import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-blue-600 underline decoration-blue-300 underline-offset-2 hover:decoration-blue-600"
      {...props}
    >
      {children}
    </a>
  ),
  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ''}
      className="rounded-lg"
      loading="lazy"
      {...props}
    />
  ),
};
