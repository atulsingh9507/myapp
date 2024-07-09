import  React,{ useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
  
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
       setAlert({
        message:message,
        type:type
       })
       setTimeout(() =>{
        setAlert(null);
       },1500);
  }
  return (
    <>
    <Router>
     <Navbar title="vikashtech"/>
     <Alert Alert={alert}/>
     <div className='container my-3'>
      <Routes>
      
      <Route path="/about" element={<About />} />

          
          
        
      
          
           
        

      </Routes>
      </div>
      < TextForm showAlert={showAlert} heading='Enter the text to analyze below'/>
     </Router> 
      
      
     
     
    </>
      
    
   
  );
}

export default App;