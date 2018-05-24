// Imports from NPM
import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Toggle from 'react-bootstrap-toggle';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components Klient
import Header from './components/header/header';
import HomePage from './components/pages/homePage';
import Servis from './components/pages/servis';
import CarServis from './components/pages/carservis';
import CarRepair from './components/pages/carrepair';
import Default from './components/pages/default';
import Happy from './components/pages/happy';
import Login from './components/pages/login';

// Components Servis
import HeaderServis from './components/header/headerServis';
import HomePageServis from './components/pagesServis/homePageServis';
import MyPage from './components/pagesServis/myPage';
import Request from './components/pagesServis/requests';
import CarServiceDetail from './components/pagesServis/carServiceDetail';
import LoginJob from './components/pagesServis/loginJob';


// Includes
import './assets/css/main.css';

class App extends Component {

  constructor() {
    super();
    this.state = { toggleActive: true };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  headerSwitch(isActive){
    if(isActive){
      return <Header/>
    } else {
      return <HeaderServis/>      
    }
  }

  routeSwitch(isActive){
    if(isActive){
      return (
        <Grid>

          <Route exact path='/' component={HomePage} />
          <Route exact path='/servis' component={Servis} />
          <Route exact path='/carservis' component={CarServis}/>
          <Route exact path='/carrepair' component={CarRepair}/>
          <Route exact path='/default' component={Default} />
          <Route exact path='/happy' component={Happy} />
          <Route exact path='/login' component={Login} />
          
        </Grid>
      );
    } else {
      return (
        <Grid>

          <Route exact path='/' component={HomePageServis} />
          <Route exact path='/myPage' component={MyPage} />
          <Route exact path='/carservisservis' component={CarServiceDetail} />
          <Route exact path='/requests' component={Request} />
          <Route exact path='/loginJob' component={LoginJob} />
          <Route exact path='/personalProfile' component={HomePageServis} />

      </Grid>
      );      
    }
  }

  renderSwitch() {
    return(
      <div >
        {this.headerSwitch(this.state.toggleActive)}            
        {this.routeSwitch(this.state.toggleActive)}      
      </div>    
    );
  }


  render() {
    return (
        <div className="App">

          <Router>
            {this.renderSwitch()}
          </Router>

          <footer>
            <Grid>
              <div className="centerToggleButton">
                <Toggle className="toggleButton"
                  onClick={this.onToggle}
                  on="Klient"
                  off="Servis"
                  offstyle="danger"
                  active={this.state.toggleActive}
                />
              </div>
            </Grid>
          </footer>

      </div>
    );
  }
}

export default App;