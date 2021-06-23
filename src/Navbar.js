const Navbar = () =>{
    return(
        <div className="Navbar">
            <h1>Recipe Kraken</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Support</a>
                {/* <a href='Here goes the path to the page'></a> */}
            </div>
        </div>
    );
}
export default Navbar;