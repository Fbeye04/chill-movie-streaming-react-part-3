import Hero from "../components/organisms/Hero";
import MovieSection from "../components/organisms/MovieSection";
import { useEffect } from "react";
import useMovieStore from "../store/movieStore";

const Film = () => {
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

  const heroData = movies.find((movie) => movie.id === 5);
  const onlyFilm = movies.filter((item) => item.type === "Movie");
  const continueWatching = onlyFilm.slice(0, 10);
  const topRating = onlyFilm.filter((movie) => movie.rating >= 4.5);
  const trending = onlyFilm.filter((movie) => movie.isTrending === true);
  const newReleases = onlyFilm.filter((movie) => movie.isNewRelease === true);

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
        section='Melanjutkan Tonton Film'
        dataMovies={continueWatching}
        variant='landscape'
      />
      <MovieSection
        section='Top Rating Film Hari ini'
        dataMovies={topRating}
        variant='portrait'
      />
      <MovieSection
        section='Film Trending'
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

export default Film;
