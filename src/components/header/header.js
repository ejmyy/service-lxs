import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (

        <header>
          <div className="container">
            <nav>
              <ul>
                
                <li>
                  <Link to="/">Domů</Link>
                </li>

                <li>
                  <Link to="/servis">Servis</Link>
                </li>
                
                <li>
                  <Link to="/default">Prodej</Link>            
                </li>
                
                <li>
                  <Link to="/default">Půjčka</Link>            
                </li>
                
                <li>
                  <Link to="/default">O nás</Link>            
                </li>
                
                <li>
                  <Link to="/default">Kontakt</Link>            
                </li>

              </ul>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
