
import './App.css';
import BottomNavbar from './components/BottomNavbar';
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
