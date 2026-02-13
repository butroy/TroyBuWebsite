import { Publication } from '@/types';

export default function PublicationCard({
  title,
  authors,
  journal,
  year,
  doi,
}: Publication) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
      <h3 className="text-base font-semibold leading-snug text-black">
        {title}
      </h3>
      <p className="mt-2 text-sm text-black">{authors}</p>
      <div className="mt-2 flex items-center gap-2 text-sm">
        <span className="font-medium text-black">{journal}</span>
        <span className="text-gray-400">&middot;</span>
        <span className="text-black">{year}</span>
      </div>
      {doi && (
        <a
          href={`https://doi.org/${doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-blue-600 hover:text-blue-800"
        >
          DOI: {doi}
        </a>
      )}
    </div>
  );
}
