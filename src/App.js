import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Investor from './Investor';
import Company from './Company';
import Government from './Government';
import Contact from './Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Router path="/contact"><Contact /></Router>
        <Route path="/investor"><Investor /></Route>
        <Route path="/company"><Company /></Route>
        <Route path="/gov"><Government /></Route>
        <Route path="/"><Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
