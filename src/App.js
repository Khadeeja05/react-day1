import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route,Routes,Router} from 'react-router-dom';
import Mapping from './components/Mapping';
import Arraymap from './components/Arraymap';
import Textmap from './components/Textmap';
import Api from './components/Api';
import Gridsy from './components/Gridsy';
import Cardz from './components/Cardz';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Login/>}/>
         <Route path='/sign' element={<Signup/>}/>
         <Route path='/counter' element={<Counter/>}/>
         <Route path='/navbar' element={<Navbar/>}/>
         <Route path='/t' element={<Mapping/>}/>
         <Route path='/a' element={<Arraymap/>}/>
         <Route path='/m' element={<Textmap/>}/>
         <Route path='/p' element={<Api/>}/>
         <Route path='/g' element={<Gridsy/>}/>
         <Route path='/c' element={<Cardz/>}/>
</Routes>
      

    
      {/* <StateBasics/> */}
      {/* <Counter/> */}
     {/* <Login/> */}
     {/* <Signup/> */}
     {/* <UseEffect></UseEffect> */}
     

     
      
      
    </div>
  );
}

export default App;
