import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch for research collaborations, consulting, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading subtitle="I'd love to hear from you">
        Get in Touch
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black">
              Other Ways to Connect
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-black">
              Feel free to reach out. I typically
              respond within 1-2 business days.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-medium text-black">Email</p>
                <a
                  href={`mailto:${siteConfig.socialLinks.email}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {siteConfig.socialLinks.email}
                </a>
              </div>
              {siteConfig.socialLinks.linkedin && (
                <div>
                  <p className="text-sm font-medium text-black">LinkedIn</p>
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              )}
              {siteConfig.socialLinks.github && (
                <div>
                  <p className="text-sm font-medium text-black">GitHub</p>
                  <a
                    href={siteConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
              {siteConfig.socialLinks.scholar && (
                <div>
                  <p className="text-sm font-medium text-black">
                    Google Scholar
                  </p>
                  <a
                    href={siteConfig.socialLinks.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Publications
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
