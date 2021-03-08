import React, { Component } from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import imgSearch from "../img/12.png";

class Header extends Component {
  render() {
    const { changeInputSearch, inputString, searchInit, flag } = this.props;
    return (
      <header>
        <div className="container h-flex">
          <NavLink to="/react-demo/" className="logo">
            <img src={logo} alt="logo"></img>
          </NavLink>
          {flag ? (
            <div className="field">
              <input
                onKeyDown={(event) => {
                  searchInit(event, inputString);
                }}
                value={inputString}
                onChange={changeInputSearch}
                placeholder="Поиск..."
              />
              <button
                onClick={(event) => {
                  searchInit(event, inputString);
                }}
                className="btn-search"
              >
                <img src={imgSearch} alt="Поиск" />
              </button>
            </div>
          ) : (
            <div></div>
          )}

          <nav className="links">
            <ul className="nav-menu">
              <li className="links-item">
                <NavLink to="/react-demo/">
                  <svg
                    viewBox="0 0 48 48"
                    height="22"
                    width="22"
                    aria-label="главная страница"
                  >
                    {/*<path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">*/}
                    {/*</path>*/}
                    <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                  </svg>
                </NavLink>
              </li>
              <li className="links-item">
                <NavLink to="/react-demo/all">
                  <svg
                    viewBox="0 0 48 48"
                    height="22"
                    width="22"
                    aria-label="найти людей"
                  >
                    <path d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"></path>
                  </svg>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
