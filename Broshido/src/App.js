import "./Styles/App.scss";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import CheckOut from "./CheckOut";
import ScrollIntoView from "./ScrollIntoView";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Headroom from "react-headroom";
library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Headroom>
        <Header />
      </Headroom>
      <ScrollIntoView>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Profiles" component={Profiles}></Route>
          <Route path="/Contact-us" component={ContactUs}></Route>
          <Route path="/CheckOut" component={CheckOut}></Route>
        </Switch>
      </ScrollIntoView>
      <Footer />
    </div>
  );
}

export default App;
