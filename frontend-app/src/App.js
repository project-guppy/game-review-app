import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Grid from "./components/grid";

function App() {
  return (
    <div className="App">
      <div className="navigationBar">
        <Navbar />
      </div>
      <div className="grid">
        <Grid />
      </div>
    </div>
  );
}

export default App;