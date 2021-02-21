import "./Styles/App.scss";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import ScrollIntoView from "./ScrollIntoView";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollIntoView>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Profiles" component={Profiles}></Route>
          <Route path="/Contact-us" component={ContactUs}></Route>
        </Switch>
      </ScrollIntoView>
      <Footer />
    </div>
  );
}

export default App;
