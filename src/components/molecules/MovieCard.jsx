import { MdStar } from "react-icons/md";
import Label from "../atoms/Label";
import HoverMovieCard from "./HoverMovieCard";

const MovieCard = ({
  poster,
  backdrop,
  title,
  rating,
  label,
  labelVariant,
  variant,
  genre,
  duration,
  ageRating,
}) => {
  const isLandscape = variant === "landscape";

  const cardStyle = {
    portrait: "w-[150px] md:w-[200px] lg:w-[234px] aspect-[2/3]",
    landscape: " w-[309px] lg:w-[302px] aspect-video",
  };

  return (
    <div
      className={`relative text-white cursor-pointer shrink-0 group z-10 hover:z-50 ${cardStyle[variant]}`}>
      <div className='w-full h-full relative'>
        <img
          src={poster}
          className='object-cover w-full h-full rounded-lg '
          alt={`${title}`}
          loading='lazy'
        />

        {isLandscape && (
          <div className='absolute bottom-0 left-0 w-full p-3 md:p-4 poster-overlay flex justify-between items-end'>
            <h6 className='text-sm lg:text-lg'>{title}</h6>

            <div className='flex items-center gap-1'>
              <MdStar />
              <span className='text-xs md:text-sm'>{rating}/5</span>
            </div>
          </div>
        )}

        {label && <Label variant={labelVariant}>{label}</Label>}
      </div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden lg:block invisible group-hover:visible opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto'>
        <HoverMovieCard
          title={title}
          backdrop={backdrop}
          rating={rating}
          genre={genre}
          duration={duration}
          ageRating={ageRating}
        />
      </div>
    </div>
  );
};

export default MovieCard;
