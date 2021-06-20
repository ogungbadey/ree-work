import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Intro from './components/Intro/Intro';
import MusicPlayer from './components/Player/MusicPlayer';

function App() {
  return (
    <div className="App">
  {/* <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/ree1.jpg`} 
     alt="logo"/> */}
     {/* <div style={{width:""}}>
      
     </div> */}
     <NavBar/>
     <Intro/>
     <MusicPlayer/>
    </div>
  );
}

export default App;
