import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../store/Actions';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();


    

    const handleFavoriteClick = (movie) => {
        const isFavorite = favorites.some(fav => fav.id === movie.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Favorite Movies</h1>
            {favorites.length === 0 ? (
                <p className="text-center">No favorite movies yet.</p>
            ) : (
                <div className="row">
                    {favorites.map(movie => (
                        <div key={movie.id} className="col-md-3 mb-4">
                            <div className="card position-relative">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                                <div
                                    className="favorite-icon position-absolute top-0 end-0 m-2"
                                    onClick={() => handleFavoriteClick(movie)}
                                >
                                    {favorites.some(fav => fav.id === movie.id) ? (
                                        <FaStar className="text-warning star-icon animate__animated animate__pulse" />
                                    ) : (
                                        <FaRegStar className="text-light star-icon" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
