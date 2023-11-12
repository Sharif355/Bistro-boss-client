import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/dashboard">DashBoard</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/menus">Our Menu</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <p className=" uppercase text-2xl">
            BISTRO BOSS <br /> RESTAURANT
          </p>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
