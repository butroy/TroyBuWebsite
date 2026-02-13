import { Patent } from '@/types';

const statusStyles: Record<Patent['status'], string> = {
  granted: 'bg-green-50 text-green-700',
  pending: 'bg-yellow-50 text-yellow-700',
  provisional: 'bg-blue-50 text-blue-700',
};

export default function PatentCard({
  title,
  inventors,
  patentNumber,
  status,
  year,
  link,
}: Patent) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[status]}`}
        >
          {status}
        </span>
        <span className="text-sm text-black">{year}</span>
      </div>
      <h3 className="mt-2 text-base font-semibold leading-snug text-black">
        {title}
      </h3>
      <p className="mt-2 text-sm text-black">{inventors}</p>
      {patentNumber && (
        <p className="mt-1 text-sm font-medium text-black">{patentNumber}</p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-blue-600 hover:text-blue-800"
        >
          View Patent
        </a>
      )}
    </div>
  );
}
