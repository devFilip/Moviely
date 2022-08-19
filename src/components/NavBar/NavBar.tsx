import { useState } from "react";
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
        <div className="nav__title">Home Page</div>
        <div className="nav__navigation">
          {role === "user" ? (
            <p className="nav__item">List of my watched movies</p>
          ) : (
            <>
              <p className="nav__item">Add new movie</p>
              <p className="nav__item">Pending comments</p>
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
