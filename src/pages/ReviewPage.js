import { useParams } from 'react-router-dom';
import reviews from './reviews.js'

const ReviewPage = () => {
    const {bookId} = useParams()
    const review = reviews.find(review => review.bookId === bookId)

    return (
        <>
            <img src= {review.image} className="App-logo" alt="logo" /> 
            <h1> {review.title} </h1>
            <h3> {review.review} </h3>
        </>
    );
}

export default ReviewPage;