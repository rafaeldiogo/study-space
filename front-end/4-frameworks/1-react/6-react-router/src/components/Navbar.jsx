// 2 - links com react router

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="about">Sobre</Link> */}
      {/* Substituindo por NavLink para utilizar a funcionalidade
      isActive do NavLink que vai exibir um feedback visual
      do link que está ativo na página
      */}
      <NavLink
        to="/"
        /* className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")} */
      >
        Home
      </NavLink>
      <NavLink to="about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
