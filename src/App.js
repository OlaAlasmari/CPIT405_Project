import logo from './logo.svg';
import './App.css';

import Mainpage from './Components/Mainpage';
import MainLayouts from './Layout/MainLayouts';

import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
// BrouserRouter //container for route
// Routes // grophing route
//Route // set path
function App() {

  // js
  return (// html
    <div className="App">
  <MainLayouts>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        </Routes>
      </BrowserRouter>
  </MainLayouts>

    </div>
  );
}
export default App;
