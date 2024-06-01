import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <div className="nav-logo">SWWIKI</div>
        <ul className="nav-menu">
            <Link to="/people">People</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/species">Species</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="/starships">Starships</Link>
            <Link to="/films">Films</Link>
            <Link to="/user">Additional</Link>
        </ul>
    </div>
  )
}

export default Navbar