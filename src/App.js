import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import MusicPlayer from './components/Player/MusicPlayer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      {/* <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />

        </Switch>
      </Router> */}
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={LandingPage}/>    
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
