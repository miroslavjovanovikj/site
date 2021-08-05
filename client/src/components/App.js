import React from 'react';
import '.././style/css/App.css';
import Home from '../pages/home-page/Home';
import AboutUs from '../pages/about-us/AboutUs';
import Carrer from '../pages/carrer-page/Carrer';
import Contact from '../pages/contact-page/Contact';
import Drivers from '../pages/drivers/Drivers';
import Shippers from '../pages/shippers/Shippers';
import AppNavbar from './AppNavbar';
import {Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel)
function App() {
  return (
    <div className="App">
      <div>

        <AppNavbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/carrer" component={Carrer}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/drivers" component={Drivers}/>
          <Route exact path="/shippers" component={Shippers}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
