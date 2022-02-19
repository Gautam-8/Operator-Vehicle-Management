
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './components/Detail';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { PrivateRoutes } from './components/PrivateRoutes';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
          
          <Route path='/' element={< Home />}></Route>

          <Route path='/login' element={< Login />}></Route>

          <Route path='/register' element={< Register />}></Route>

          <Route path='/details/:num' element={<PrivateRoutes> < Detail/> </PrivateRoutes>}></Route>

      </Routes>
  
    </div>
  );
}

export default App;
