import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactus" component={ContactUs} exact />
        <Route path="/privacy" component={PrivacyPolicy} exact />
      </Switch>
    </Router>
  );
}

export default App;
