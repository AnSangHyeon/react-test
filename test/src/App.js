import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-test">
        test
      </BrowserRouter>
    </div>
  );
}

export default App;
