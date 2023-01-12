import './App.css';
//import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ReviewPage from './pages/ReviewPage'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter >
      <div className="App">
            <div id = "page-body">
            <Link className="nav link" to="/"> Home </Link> 
            <h1 className='nav' id='title'> Zach's Library </h1>
            <Link className="nav link" to="/About"> About </Link>  
              <Routes >
                <Route path ="/" element = {<HomePage/>} />
                <Route path ="/about" element = {<AboutPage/>} />
                <Route path ="/notfound" element = {<NotFoundPage/>} />
                <Route path ="/review/:bookId" element = {<ReviewPage/>} />
              </Routes>
            </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
