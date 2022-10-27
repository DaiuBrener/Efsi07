import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/products';
import Home from './views/home';
import DetalleProd from './components/DetalleProduct';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<DetalleProd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;