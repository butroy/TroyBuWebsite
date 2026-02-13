import Button from '@/components/ui/Button';

export default function ContactCTA() {
  return (
    <section className="bg-teal-100 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Interested in collaborating?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-black">
          I&apos;m always open to discussing new research collaborations, consulting
          opportunities, or just connecting with fellow scientists and engineers.
        </p>
        <div className="mt-8">
          <Button href="/contact">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
