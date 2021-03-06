import { Outlet, Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg ">
        <Link to="/" className="nav navbar-brand">
          <span className="navbarTitle itext">&nbsp; Patricia</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link to="/Weekend" className="nav-link">
                {" "}
                <i className="fa-solid fa-calendar "></i>
                <span className="itext">&nbsp; Weekend</span>
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link to="/Ideas" className="nav-link">
                <i className="fa-solid fa-lightbulb "></i>
                <span className="itext">&nbsp; Fun Ideas</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
