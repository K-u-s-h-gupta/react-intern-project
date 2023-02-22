import './App.css';
import Sidebar from "./Components/Sidebar"
import Navbar from './Components/Settings/Navbar';
import Booklist from './Components/Settings/BookList/Booklist';
import Subscribelist from './Components/Settings/SubscribedList/Subscribelist';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='board'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/booklist" element={<Booklist/>}/>
            <Route path="/subscribe" element={<Subscribelist/>}/>
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
