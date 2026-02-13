import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} {siteConfig.name} All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.socialLinks.github && (
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-black"
              >
                GitHub
              </a>
            )}
            {siteConfig.socialLinks.linkedin && (
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-black"
              >
                LinkedIn
              </a>
            )}
            {siteConfig.socialLinks.scholar && (
              <a
                href={siteConfig.socialLinks.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-black"
              >
                Google Scholar
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
