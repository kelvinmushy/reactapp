import logo from './logo.svg';
import './App.css';
import Head from './layouts/Head.js';
import Footer from './layouts/Footer.js';
import Home from './components/Home.js';
import Create from './components/userControl/Create.js';
import Edit from './components/userControl/Edit.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
        <Router>
      <div>
      <meta name="csrf-token" content="{{ csrf_token() }}" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
        
          </li>
        </ul>

       <Routes>
        
       <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />
       </Routes>
      </div>
    </Router>
     <Head></Head>
      <Footer></Footer>
    </div>
  );
}

export default App;
