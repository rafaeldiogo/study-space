import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="products">Produtos</NavLink>
      <NavLink to="about">Sobre</NavLink>
    </nav>
  );
};
