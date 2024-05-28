import { Outlet, Link } from "react-router-dom";
import './../App.css';
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home"  style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </li>
          <li>
            <Link to="/entry"  style={{ textDecoration: 'none', color: 'white' }}>Entry</Link>
          </li>
          <li>
            <Link to="/search"  style={{ textDecoration: 'none', color: 'white' }}>Search</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
