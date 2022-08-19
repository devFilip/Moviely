import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__title">
        <h1>Home Page</h1>
      </div>
      <div className="nav__navigation">
        <p>Add new movie</p>
        <p>Pending comments</p>
        <p>Pending Users</p>
        <div className="nav__icon">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
