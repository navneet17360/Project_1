import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar gradient-bg">
      <div className="navContainer">
        <span className="logo">
          <b>WillBook</b>
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;