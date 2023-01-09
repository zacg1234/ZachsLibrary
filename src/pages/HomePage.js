import BookCard from '../components/BookCard.js';
import reviews from './reviews.js';
const HomePage = () => {
    return (
        <>
            <h1> This is the Home Page</h1>
            {reviews.map(review => 
                <BookCard title={review.title} image= {review.image}/>
            )}
            
        </>
    );
}

export default HomePage;