import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import Header from './components/header/header';
import HomePage from './components/pages/homePage';
import HomePageServis from './components/pagesServis/homePageServis';
import Servis from './components/pages/servis';
import CarRepair from './components/pages/carrepair';
import Default from './components/pages/default';
import Happy from './components/pages/happy';
import Login from './components/pages/login';
import Footer from './components/footer/footer';


// Includes
import './assets/css/main.css';
import CarServis from './components/pages/carservis';

class App extends Component {

  constructor() {
    super();
    this.state = { toggleActive: true };
    this.onToggle = this.onToggle.bind(this);
  }
 
  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  renderSwitch(isActive) {

    if(isActive) {
        return <div className="App">

                   <Header/>

                     <Grid>

                       <Route exact path='/' component={HomePage} />
                       <Route exact path='/servis' component={Servis} />
                       <Route exact path='/carservis' component={CarServis}/>
                       <Route exact path='/carrepair' component={CarRepair}/>
                       <Route exact path='/faq' component={Default} />
                       <Route exact path='/happy' component={Happy} />
                       <Route exact path='/login' component={Login} />

                     </Grid>      

                 </div>
      } else {
        return <div className="App">
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

                  <Grid>
      
                    <Route exact path='/' component={HomePageServis} />
                    <Route exact path='/requests' component={HomePageServis} />
                    <Route exact path='/personalProfile' component={HomePageServis} />

                  </Grid>
              </div>;
      }
  }
  


  render() {

    return (
        <div>

          <div>
            <Router>
              {this.renderSwitch(this.state.toggleActive)}
            </Router>
          </div>

          <footer>
            <Grid>
              <form>
                <Toggle className="toggleButton"
                  onClick={this.onToggle}
                  on="Klient"
                  off="Servis"
                  offstyle="danger"
                  active={this.state.toggleActive}
                />
              </form>
            </Grid>
          </footer>  

      </div>
    );
  }
}

export default App;
