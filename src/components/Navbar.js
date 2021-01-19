import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item"
              title="Logo"
              activeClassName="active"
            >
              <img src={logo} class="logo" alt="Buttes solidaires" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={this.toggleHamburger}
              role="button"
              tabIndex="0"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/asso" activeClassName="active">
                L'association
              </Link>
              <Link
                className="navbar-item"
                to="/permaculture"
                activeClassName="active"
              >
                La permaculture
              </Link>
              <Link
                className="navbar-item"
                to="/potager"
                activeClassName="active"
              >
                Le potager
              </Link>
              <Link
                className="navbar-item"
                to="/offres"
                activeClassName="active"
              >
                Nos offres
              </Link>
              <Link
                className="navbar-item"
                to="/galerie"
                activeClassName="active"
              >
                Galerie
              </Link>
              <Link
                className="navbar-item"
                to="/blog"
                activeClassName="active"
                partiallyActive={true}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
