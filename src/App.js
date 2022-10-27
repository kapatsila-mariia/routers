import './App.css';
import Home from './Home';
import Users from './Users';
import User from './User';
import About from './About';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
         <p>Learn React</p> 
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route path=':userId' element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
