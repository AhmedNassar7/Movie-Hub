import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; 

const Navbar = () => {
    const favoritesCount = useSelector(state => state.favorites.length);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">
                                Favorites {favoritesCount > 0 && <span className="badge bg-light text-dark ms-1">{favoritesCount}</span>}
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                <i className="bi bi-person"></i> Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <i className="bi bi-box-arrow-in-right"></i> Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
