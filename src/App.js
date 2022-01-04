import React, {Component} from 'react'; 
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';



import PNavBar from './components/NavBar/PNavBar'; 
import HeroSection from './components/HeroSection/HeroSection';
import Grid from './components/Grid/Grid';

class App extends Component {




  render() { 

           
    return (  

 <Router> 
     
     <Switch> 

                   <Route path='/PNavBar' exact={true} component={PNavBar} /> 
                   <Route path='/HeroSection' exact={true} component={HeroSection} /> 
                   <Route path='/Grid' exact={true} component={Grid} /> 


      </Switch>
       
   </Router>

    );
  }
} 


 
export default App;


