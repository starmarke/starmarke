import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';
import Checkout from './Checkout';
import Footer from './footer';
import  {BrowserRouter as Router, Switch, Routes, Route}
from "react-router-dom"
import Login from './Login';

function App() {
  //add detail route
  return (

    
<Router>


  
<div className="App">
  <Routes>




    <Route path="/checkout" element={[<Header/>, <Checkout />,<Footer />]} />
    <Route path="/Login" element={[<Header/>, <Login />]} />


    <Route path="/" element={[<Header/>,<Home />,<Footer />]} />

	<Route path="/detail" element={[<Header/>,<Detail />,<Footer />]} />

  </Routes>

</div>

</Router>
  );
}

export default App;
