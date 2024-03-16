import { Link } from "react-router-dom";

import "./Navbar.css";

function NavBar() {
  return (
    <>
      <header className="nav">
        <div className="left">
          <Link to="/">
            <h2>Glam With Ujala</h2>
          </Link>
        </div>
        <div className="right">
          <button className="btn btn-primary">Login/Register</button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
