import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav class="flex text-center bg-white shadow-md sm:items-baseline w-full sm:justify-center sticky top-0 z-30 whitespace-nowrap overflow-x-auto">
      <Link to="/" activeClassName="active" className="p-4">
        Accueil
      </Link>
      <Link to="/asso/" activeClassName="active" className="p-4">
        L'association
      </Link>
      <Link to="/permaculture/" activeClassName="active" className="p-4">
        La permaculture
      </Link>
      <Link to="/potagers/" activeClassName="active" className="p-4">
        Les potagers
      </Link>
      <Link to="/offres/" activeClassName="active" className="p-4">
        Nos offres
      </Link>
      <Link to="/galerie/" activeClassName="active" className="p-4">
        Galerie
      </Link>
    </nav>
  );
};

export default Navbar;
