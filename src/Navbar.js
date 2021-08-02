import { Link } from 'react-router-dom';
import Logo from './Images/Logo.gif';
const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={Logo} alt="Recipe Kraken"/>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Support'>Support</Link>
            </div>
        </div>
    );
}
export default Navbar;