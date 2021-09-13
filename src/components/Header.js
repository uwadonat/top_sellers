import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
          <h2>Header</h2>
          <nav>
              <NavLink to="/HomePage">Home</NavLink>
              <NavLink to="/DetailsPage">DetailsPage</NavLink>
          </nav>
        </div>
        

    )
}

export default Header;