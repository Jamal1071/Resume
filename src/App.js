import './App.css';
import Menu from './component/menu/menu';
import Profile from './component/profile/profile';
import Home from './component/home/home';
import Contact from './component/contact/contact';
import AboutMe from './component/about-me/about-me';
import Portfolio from './component/portfolio/portfolio';
import Resume from './component/resume/resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div class="row">
        <Router>
          <Menu />
          <Profile />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/about-me">
              <AboutMe/>
            </Route>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}
export default App;
