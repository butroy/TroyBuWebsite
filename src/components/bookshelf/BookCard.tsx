import { Book } from '@/types';
import StarRating from './StarRating';

export default function BookCard({ title, image, rating, comment }: Book) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[2/3] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-black">{title}</h3>
        <div className="mt-1">
          <StarRating rating={rating} />
        </div>
        <p className="mt-2 text-sm italic text-black">{comment}</p>
      </div>
    </div>
  );
}
