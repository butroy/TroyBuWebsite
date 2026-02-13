interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-black">{children}</h2>
      {subtitle && <p className="mt-2 text-black">{subtitle}</p>}
    </div>
  );
}
