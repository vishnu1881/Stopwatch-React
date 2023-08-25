import "./App.css";
import Stopwatch from "./stopwatch";

function App() {
  return (
    <div className="App">
      <div className="header">
        <span>StopWatch</span>
      </div>
      <div className="stopwatcharea">
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
