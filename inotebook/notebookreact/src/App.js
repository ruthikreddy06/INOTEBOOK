
import About from './components/About';
import Notes from './components/Notes';
import Home from './components/Home';
import Addnote from './components/Addnote';
import Navbar1 from './components/Navbar1';
import News from './components/News';
//import Mycontext from './context/Createcontext';
import Setstate from './context/Setstate';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';

import { useState } from 'react';
import Profile from './components/Profile';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

    
  return (
   <div>     
    <Setstate>
         <Router>
          <Navbar/>
          <Alert alert={alert}/>
          <Routes>
          <Route exact path="/Login" element={<Login showalert={showAlert}/>} />
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/Profile" element={<Profile/>}/>
          <Route exact path="/Note" element={<Notes showalert={showAlert}/>} />
          <Route exact path="/Addnote" element={<Addnote showalert={showAlert}/>}/>
          <Route exact path="/Signup" element={<Signup  showalert={showAlert} />} />
          <Route  exact path="/news" element={<News key="general"  country="in" category="general" />} />
          <Route exact path="/business" element={<News key="business" country="in" category="business" />} />
          <Route exact path="/entertainment" element={ <News key="" country="in" category="entertainment" />} />
          <Route exact path="/science" element={<News key="entertainment" country="in" category="science" />} />
          <Route exact path="/health" element={<News key="health" country="in" category="health" />} />
          <Route exact path="/sports" element={<News key="sports" country="in" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" country="in" category="technology" />} >
          </Route>
          </Routes>
         </Router>
    </Setstate>
    </div>
  );
}

export default App;
