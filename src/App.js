import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import Header from './components/header/header';
import HomePage from './components/pages/homePage';
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
  render() {

    return (
      <Router>
        <div className="App">

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
              
            
            <Footer/>        
        
        </div>
      </Router>
    );
  }
}

export default App;
