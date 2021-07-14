import {Link} from 'react-router-dom';
const Navbar = () =>{
    return(
        <div className="Navbar">
            <h1>Recipe Kraken</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Support'>Support</Link>
            </div>
        </div>
    );
}
export default Navbar;