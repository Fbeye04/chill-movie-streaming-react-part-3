import Hero from "../components/organisms/Hero";
import MovieSection from "../components/organisms/MovieSection";
import { useEffect } from "react";
import useMovieStore from "../store/movieStore";

const Series = () => {
  const { movies, isLoading, fetchMovies } = useMovieStore();

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [fetchMovies, movies.length]);

  if (isLoading) {
    return (
      <div className='text-white text-center my-20 text-lg lg:text-2xl'>
        Memuat Film...
      </div>
    );
  }

  const onlySeries = movies.filter((item) => item.type === "Series");
  const heroData = movies.find((movie) => movie.id === 31);
  const continueWatching = onlySeries.slice(0, 10);
  const topRating = onlySeries.filter((movie) => movie.rating >= 4.5);
  const trending = onlySeries.filter((movie) => movie.isTrending === true);
  const newReleases = onlySeries.filter((movie) => movie.isNewRelease === true);

  return (
    <main className='overflow-x-hidden'>
      {heroData && (
        <Hero
          heroImg={heroData.backdrop}
          title={heroData.title}
          synopsis={heroData.synopsis}
          ageRating={heroData.ageRating}
        />
      )}

      <MovieSection
        section='Melanjutkan Tonton Series'
        dataMovies={continueWatching}
        variant='landscape'
      />
      <MovieSection
        section='Top Rating Series Hari Ini'
        dataMovies={topRating}
        variant='portrait'
      />
      <MovieSection
        section='Series Trending'
        dataMovies={trending}
        variant='portrait'
      />
      <MovieSection
        section='Rilis Baru'
        dataMovies={newReleases}
        variant='portrait'
      />
    </main>
  );
};

export default Series;
