import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Menu from './components/menu/Menu.jsx';
import Contact from './components/contact/Contact.jsx';
import Shop from './components/shop/Shop.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
      {/* <Header />
      <Home /> */}
    </div>
  );
}
export default App;