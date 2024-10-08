import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="container text-center py-5">
            <h1 className="display-1 fw-bold animate__animated animate__fadeIn">404</h1>
            <h2 className="display-4 animate__animated animate__fadeIn animate__delay-1s">Page Not Found</h2>
            <p className="lead animate__animated animate__fadeIn animate__delay-2s">Sorry, the page you are looking for not exist.</p>
            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
    );
};

export default PageNotFound;
