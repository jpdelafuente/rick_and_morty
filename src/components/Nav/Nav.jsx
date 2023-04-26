import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar(props) {
    const { onSearch, setAccess } = props
    
    const handleLogOut = () => {
        setAccess(false);
    }
    return (
        <>
            <SearchBar onSearch={onSearch} />
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/favorites'>
                <button>Favorites</button>
            </Link>

            {/* <Link to='/'>Log Out</Link> */}

            <button onClick={handleLogOut}>Log Out</button>
        </>
    );
}

export default NavBar;