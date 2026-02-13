import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <p className="mt-4 text-lg text-black">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8">
        <Button href="/">Go Home</Button>
      </div>
    </div>
  );
}
