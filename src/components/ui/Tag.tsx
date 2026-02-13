interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-black">
      {children}
    </span>
  );
}
