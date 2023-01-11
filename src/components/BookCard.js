const BookCard = ({title, image}) => {
    
    return (
    <>
        <div className="BookCard">
            <img src={image} className="App-logo" alt="logo" /> 
            <h2>{title} </h2>
        </div>
    </> 
    );
   
}

export default BookCard;