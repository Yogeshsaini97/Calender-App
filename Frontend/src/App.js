
import "./App.css"

import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import CalenderPage from './Components/CalenderPage';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
  
    <Routes>
    
    <Route exact path="/" element={<CalenderPage/>}/>
    </Routes>
      
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
