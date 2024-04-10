import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SingleMovieDetailPage = () => {
  const [movie, setMovie] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=578a23fa4d69a3c499a786c5a705b95&language=en-US`,
        )
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      }
    }

    fetchMovieDetails()
  }, [movieId])

  return (
    <div className="single-movie-detail-page">
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  )
}

export default SingleMovieDetailPage
