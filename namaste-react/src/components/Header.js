const Title = () => {
  return (
    <h1 id="title" key="h2">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NDG_SR77n8xtaRwNksZyk1oFmSQiQKBN8X4OQj68dwNc8hjWh3QI3qA&s"
      />
    </h1>
  );
};

const HeaderComponent = () => {
  return (
    <>
      <div className="nav-item">
        <Title />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};

export default HeaderComponent;
