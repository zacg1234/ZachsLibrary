import BookCard from '../components/BookCard.js';
import reviews from './reviews.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <h1> Home Page</h1>
            {reviews.map(review => 
                <Link to = {`review/${review.bookId}`}> 
                    <BookCard title={review.title} image= {review.image}/>
                </Link>
            )}
            
        </>
    );
}

export default HomePage;