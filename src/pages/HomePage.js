import BookCard from '../components/BookCard.js';
//import tempImage from '../logo.svg';
//import reviews from './reviews.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [bookReviewsData, setBookReviewsData] = useState([]);

    const loadBookReviewsData = async() => {
        const resp = await fetch('https://5zjf4cji6k.execute-api.us-east-2.amazonaws.com/reviews');
        let jsonData = await resp.json();

        setBookReviewsData(jsonData);
        //console.log(bookReviewsData);
    }

    useEffect(() => {
        loadBookReviewsData();    
    }, []);

    return (
        <>
            <h1> Home Page</h1>
            {     
                bookReviewsData.map((review) => 
                    <Link key = {review.bookId}  to = {`review/${review.bookId}`}> 
                        <BookCard title={review.title} image ={review.image} />
                    </Link>
            )}
            
        </>
    );
}

export default HomePage;