import type { Metadata } from 'next';
import BookCard from '@/components/bookshelf/BookCard';
import { books } from '@/data/books';

export const metadata: Metadata = {
  title: 'Bookshelf',
  description:
    'Books I have read, grouped by year with ratings and short reflections.',
};

export default function BookshelfPage() {
  const booksByYear = books.reduce<Record<number, typeof books>>((acc, book) => {
    (acc[book.year] ??= []).push(book);
    return acc;
  }, {});

  const sortedYears = Object.keys(booksByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-2xl font-bold text-black">Bookshelf</h2>

      {sortedYears.map((year) => (
        <section key={year} className="mb-12">
          <h3 className="mb-6 text-xl font-semibold text-black">{year}</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {booksByYear[year].sort((a, b) => b.rating - a.rating).map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
