import './App.css';
import api from './api/axios-config'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import Home from "./components/home/Home"
import { Routes, Route } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState();

  const getProducts = async () =>{

    try {

      const response = await api.get("/api/v1/products")

      setProducts(response.data)

    } catch (err) {console.log(err)}
  }

  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
