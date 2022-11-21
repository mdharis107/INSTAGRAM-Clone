
import './App.css';
import BottomNavbar from './components/BottomNavbar';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './pages/HomePage';
import { MainRoute } from './pages/MainRoute';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Login/> */}
      {/* <HomePage/> */}
      <MainRoute/>
      <BottomNavbar/>
    </div>
  );
}

export default App;
