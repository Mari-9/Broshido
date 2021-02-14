import logo from './logo.svg';
import './App.css';
import Header from './header'
import Home from './Home'
import About from './About'
import Profiles from './Profiles'
import ContactUs from './ContactUs'
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Profiles" component={Profiles}></Route>
        <Route path="/Contact-us" component={ContactUs}></Route>
        </Switch>  
    </div>
  );
}

export default App;
