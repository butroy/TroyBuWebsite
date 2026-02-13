import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  disabled,
  onClick,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50',
    secondary: 'border border-gray-300 bg-white text-black hover:bg-gray-50',
  };
  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
