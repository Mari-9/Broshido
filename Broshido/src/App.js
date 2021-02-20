import "./Styles/App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Profiles" component={Profiles}></Route>
        <Route path="/Contact-us" component={ContactUs}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
