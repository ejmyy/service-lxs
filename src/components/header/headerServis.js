import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderServis extends Component {
  render() {
    return (
      <header className="headerServis">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Moje Stránka</Link>
              </li>
              <li>
                <Link to="/requests">Žádosti</Link>
              </li>
              <li>
                <Link to="/personalProfile">Osobní profil</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderServis;