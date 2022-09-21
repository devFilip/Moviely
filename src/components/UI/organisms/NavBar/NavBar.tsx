import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

interface NavBar {
  role: string;
}

const NavBar: React.FC<NavBar> = ({ role }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="nav">
        <Link to="/" className="nav__title">
          Home Page
        </Link>
        <div className="nav__navigation">
          {role === "user" ? (
            <p className="nav__item">List of my watched movies</p>
          ) : (
            <>
              <NavLink to="/movieForm/new" className="nav__item">
                Add new movie
              </NavLink>
              <NavLink to="/pendingComments" className="nav__item">
                Pending comments
              </NavLink>
              <p className="nav__item">Pending Users</p>
            </>
          )}
          <div className="nav__icon">
            <img
              onClick={handleToggle}
              className="user__img xs"
              src="images/user.png"
              alt="user"
            />
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className="menu">
          <span>Profile</span>
          <hr />
          <span>Log out</span>
        </div>
      )}
    </>
  );
};

export default NavBar;
