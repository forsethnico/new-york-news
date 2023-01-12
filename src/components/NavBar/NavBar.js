import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ categories }) => {
  const allCategories = categories.map((category) => {
    return (
      <Link to={`/section/${category}`} key={category} className="category-text">
        {category.toUpperCase()}
      </Link>
    );
  });

  return <section className="nav-links">{allCategories}</section>;
};

export default NavBar;
