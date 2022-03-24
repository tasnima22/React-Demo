import Logo from "./Logo";

// Shortcut for boilerplate - sfc
const NavBar = () => {
  // Navbar should render our logo, do this by <Component name />
  return (
    <>
      <Logo />
      <h2> News </h2>
    </>
  );
};

export default NavBar;