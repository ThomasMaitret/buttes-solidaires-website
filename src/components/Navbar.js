import React from "react";
import { Link } from "gatsby";

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
      <nav className="navbar is-transparent" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              onClick={this.toggleHamburger}
              role="button"
              tabIndex="0"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start mx-auto">
              <Link className="navbar-item" to="/" activeClassName="active">
                Accueil
              </Link>
              <Link
                className="navbar-item"
                to="/asso/"
                activeClassName="active"
              >
                L'association
              </Link>
              <Link
                className="navbar-item"
                to="/permaculture/"
                activeClassName="active"
              >
                La permaculture
              </Link>
              <Link
                className="navbar-item"
                to="/potager/"
                activeClassName="active"
              >
                Le potager
              </Link>
              <Link
                className="navbar-item"
                to="/offres/"
                activeClassName="active"
              >
                Nos offres
              </Link>
              <Link
                className="navbar-item"
                to="/galerie/"
                activeClassName="active"
              >
                Galerie
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
