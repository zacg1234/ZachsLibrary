const BookCard = ({title, image}) => {
    
    return (
    <>
        <img src={image} className="App-logo" alt="logo" /> 
        <h2>{title} </h2>
    </> 
    );
   
}

export default BookCard;