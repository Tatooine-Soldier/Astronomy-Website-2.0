import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Nav from "./components/Nav.js"
import Heading from "./components/Heading.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Heading/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
