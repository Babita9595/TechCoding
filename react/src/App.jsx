
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './RouterConfig';

function App() {


  return (
    <div className="App">
      <Router>
        <RouterConfig />
      </Router>
    </div>
  )
}

export default App
