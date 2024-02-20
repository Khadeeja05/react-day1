import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Route,Routes,Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<Login/>}/>
         <Route path='/sign' element={<Signup/>}/>
         <Route path='/counter' element={<Counter/>}/>
         <Route path='/navbar' element={<Navbar/>}/>
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
