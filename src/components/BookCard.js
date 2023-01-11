const BookCard = ({title, image}) => {
    
    return (
    <>
        <div>
        <img src={image} className="App-logo" alt="logo" /> 
        <h2>{title} </h2>
        </div>
    </> 
    );
   
}

export default BookCard;