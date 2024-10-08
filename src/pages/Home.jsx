import { useEffect, useState } from "react";
import axiosInstance from '../axiosInstance';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/Actions';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    useEffect(() => {
        axiosInstance.get('movie/popular')
            .then((response) => {
                setMovies(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
                setError('Failed to fetch movies.');
                setLoading(false);
            });
    }, [favorites]); // Dependency array

    const handleFavoriteClick = (event, movie) => {
        event.stopPropagation();
        const isFavorite = favorites.some(fav => fav.id === movie.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie));
        }
    };

    if (loading) return <div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
    if (error) return <div className="text-center py-5"><p>{error}</p></div>;

    return (
        <div className="container py-5">
            <section className="welcome-section text-center py-5 text-dark rounded-3">
                <div className="container">
                    <h1 className="display-4 animate__animated animate__fadeIn animate__delay-1s">Welcome to Movies</h1>
                    <p className="lead animate__animated animate__fadeIn animate__delay-2s">Discover the latest movies and your favorites, right here!</p>
                </div>
            </section>

            <section className="carousel-section py-5">
                <div className="container">
                    <div id="movieCarousel" className="carousel slide">
                        <div className="carousel-inner">
                            {movies.slice(0, 5).map((movie, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="d-block w-100" alt={movie.title} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{movie.title}</h5>
                                        <p>{movie.overview.substring(0, 100)}...</p>
                                        <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <h1 className="text-center mb-4">Popular Movies</h1>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className="card position-relative">
                            <Link to={`/movies/${movie.id}`} className="text-decoration-none">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </Link>
                            <div
                                className="favorite-icon position-absolute top-0 end-0 m-2"
                                onClick={(event) => handleFavoriteClick(event, movie)}
                            >
                                {favorites.some(fav => fav.id === movie.id) ? (
                                    <FaStar className="text-warning star-icon" />
                                ) : (
                                    <FaRegStar className="text-light star-icon" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
