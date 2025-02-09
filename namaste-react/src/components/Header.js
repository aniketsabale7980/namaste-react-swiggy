import { useState } from "react";
import Logo from "../assets/img/food-villa-logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={Logo} />
    </a>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-pink-200 md:bg-blue-200 shadow-lg">
        <Title />
        <div className="flex grid-flow-col">
          <ul className="flex flex-col md:flex-row py-4 md:py-10 gap-4">
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
            <li>
              <Link to="/instamart">Instamart</Link>
            </li>
          </ul>
        </div>
        <div className="py-4 md:py-10">
          {isOnline ? <h4>Online</h4> : <h4>Offline</h4>}
        </div>
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
