import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
          <nav>
              <NavLink to="/HomePage">Home</NavLink>
              <NavLink to="/DetailsPage">DetailsPage</NavLink>
          </nav>
        </div>
        

    )
}

export default Header;