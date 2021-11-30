import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
