import {useState, useEffect} from 'react'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=578a23fa4d69a3c499a786c5a705b95&language=en-US&page=1',
        )
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className="home-page">
      <h1>Popular Movies</h1>
      <div className="movie-tiles">
        {movies.map(movie => (
          <div key={movie.id} className="movie-tile">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
