import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Components
import Header from './components/header/header';
import HomePage from './components/pages/homePage';
import Faq from './components/pages/faq';
import Footer from './components/footer/footer';

// Includes
import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <Router>      
      <div className="App">

          <Header/>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/faq' component={Faq} />
          
          <Footer/>        
      
      </div>
      </Router>
    );
  }
}

export default App;
