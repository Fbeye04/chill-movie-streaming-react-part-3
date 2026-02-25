import Hero from "../components/organisms/Hero";
import MovieSection from "../components/organisms/MovieSection";
import { useState, useEffect } from "react";
import { getMovies } from "../services/api/movieApi";

const Film = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const dataFromAPI = await getMovies();
      setMovies(dataFromAPI);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

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
