
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Movies. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <a href="https://www.facebook.com" className="text-light me-3" aria-label="Facebook">
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                        <a href="https://www.twitter.com" className="text-light me-3" aria-label="Twitter">
                            <i className="bi bi-twitter fs-4"></i>
                        </a>
                        <a href="https://www.instagram.com" className="text-light me-3" aria-label="Instagram">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                        <a href="https://www.linkedin.com" className="text-light" aria-label="LinkedIn">
                            <i className="bi bi-linkedin fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
