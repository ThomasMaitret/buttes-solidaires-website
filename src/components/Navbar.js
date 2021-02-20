import React from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <nav className="flex text-center bg-white shadow-md sm:items-baseline w-full sm:justify-center sticky top-0 z-30 whitespace-nowrap overflow-x-auto">
      <ActiveLink href="/" activeClassName="active">
        <a className="p-4">Accueil</a>
      </ActiveLink>
      <ActiveLink href="/asso" activeClassName="active">
        <a className="p-4">L'association</a>
      </ActiveLink>
      <ActiveLink href="/permaculture" activeClassName="active">
        <a className="p-4">La permaculture</a>
      </ActiveLink>
      <ActiveLink href="/potagers" activeClassName="active">
        <a className="p-4">Les potagers</a>
      </ActiveLink>
      <ActiveLink href="/offres" activeClassName="active">
        <a className="p-4">Nos offres</a>
      </ActiveLink>
      <ActiveLink href="/galerie" activeClassName="active">
        <a className="p-4">Galerie</a>
      </ActiveLink>
    </nav>
  );
};

export default Navbar;
