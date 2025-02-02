import { useState } from "react";
import Logo from "../assets/img/food-villa-logo.jpg";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <h1 id="title" key="h2">
      <img className="logo" alt="logo" src={Logo} />
    </h1>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="nav-item">
        <Title />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>LogOut Page</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login Page</button>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;
