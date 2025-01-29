import React from "react";

const App = () => {
  return <AppLayout />;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
    </>
  );
};

const Title = () => {
  return (
    <h1 id="title" key="h2">
      <img
        className="logo"
        alt="logo"
        src="https://static.vecteezy.com/system/resources/previews/013/195/659/non_2x/restaurant-delicious-food-logo-badge-line-style-design-with-smile-face-fork-and-spoon-icon-concept-for-catering-food-culinary-logo-design-vector.jpg"
      />
    </h1>
  );
};

const HeaderComponent = () => {
  return (
    <>
      <div className="nav-item">
        <Title />
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default App;
