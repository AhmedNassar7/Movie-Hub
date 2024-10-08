import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/Actions'; // Updated import

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.some(movie => movie.id === parseInt(id, 10));

    useEffect(() => {
        axiosInstance.get(`movie/${id}`)
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
                setError('Failed to fetch movie details.');
                setLoading(false);
            });
    }, [id]);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(id)); // Updated action
        } else {
            dispatch(addToFavorites(movie)); // Updated action
        }
    };

    if (loading) return <div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
    if (error) return <div className="text-center py-5"><p>{error}</p></div>;

    return (
        <div className="container py-5">
            {movie && (
                <div className="row">
                    <div className="col-md-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Rating:</strong> {movie.vote_average}</p>
                        <button onClick={handleFavoriteClick} className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}>
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
