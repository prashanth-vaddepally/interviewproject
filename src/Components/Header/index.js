import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div className="d-flex flex-row">
      <div>
        <h1>MovieDB</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">
              <button type="button">Popular</button>
            </Link>
          </li>
          <li>
            <Link to="/TopratedMovie">
              <button type="button">TopRated</button>
            </Link>
          </li>
          <li>
            <Link to="/UpcomingMovie">
              <button type="button">Upcoming</button>
            </Link>
          </li>
        </ul>
        <input type="search" />
        <button type="button">Search</button>
      </div>
    </div>
  </nav>
)

export default Header
