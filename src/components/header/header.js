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
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/servis">Servis</Link>
                </li>
                
                <li>
                  <Link to="/faq">Prodej</Link>            
                </li>
                
                <li>
                  <Link to="/faq">Půjčka</Link>            
                </li>
                
                <li>
                  <Link to="/faq">O nás</Link>            
                </li>
                
                <li>
                  <Link to="/faq">Kontakt</Link>            
                </li>

              </ul>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
