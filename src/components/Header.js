import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <header>
        <h1>todos</h1>
        <p>Items will persist in the browser local storage</p>
      </header>
    </>
  );
};

export default Header;
