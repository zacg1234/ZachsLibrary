import { useParams } from 'react-router-dom';
//import reviews from './reviews.js'
//import logo from '../logo.svg';
import { useState, useEffect } from 'react';

const ReviewPage = () => {
    const {bookId} = useParams();
    const [bookReview, setBookReview] = useState([]);

    useEffect(() => {
        const loadBookReview = async() => {
            const resp = await fetch('https://3tel3oriv8.execute-api.us-east-2.amazonaws.com/Prod/' + bookId);
            let jsonData = await resp.json();
    
            setBookReview(jsonData.data.Item);
        }

        loadBookReview();    
    }, [bookId]);

   
    return (
        <>
            <img src= {bookReview.image} className="App-logo" alt="logo" /> 
            <h1> {bookReview.title} </h1>
            <h3> {bookReview.review} </h3>
        </>
    );
}

export default ReviewPage;