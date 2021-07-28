import React from 'react';
import "./scss/App.scss";
import Navbar from './components/Navbar/Navbar';
import Beforefooter from './components/Beforefooter/Beforefooter';
import Footer from './components/Footer/Footer';
import Rectangle from './components/Rectangle/Rectangle';
import AfterNavbar from './components/Afternavbar/AfterNavbar';

function App() {
  return (
    <div  >
      {/* <h1>Welcome</h1>
     <button type="button" class="btn btn-success">App</button> */}
      <Navbar />
      <AfterNavbar />
      <Rectangle />
      <Beforefooter />
      <Footer />
    </div>
  );
}

export default App;
