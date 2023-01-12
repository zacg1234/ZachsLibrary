import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
       <nav>
            <ul>
                <li> 
                    <Link className='link' to="/"> Home </Link> 
                </li>
                <li> 
                    <Link className='link' to="/About"> About </Link>  
                </li>
            </ul>
       </nav>
    )
}

export default NavBar;