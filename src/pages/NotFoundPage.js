import {Link} from 'react-router-dom'
const NotFoundPage = () => {
    return (
        <>
            <h1> 404 Page not found</h1>
            <Link className="nav link" to="/"> PRESS HERE TO RETURN HOME </Link>
        </>
    );
}

export default NotFoundPage;