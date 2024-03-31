import './App.css';
import api from './api/axios-config'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import Home from "./components/home/Home"
import { Routes, Route } from 'react-router-dom';

function App() {

  //Set conditional to force API Load
  const [loading, setLoading] = useState(false);

  const [allProducts, setProducts] = useState([]);

  const getProducts = async () =>{

    //Await loading API
    setLoading(true);

    await api.get("/api/v1/products")
    .then(response =>{
      //checks https status
      if(response.status === 200) {
        setProducts(response.data) //sets product data on success
        setLoading(false)
      } else {
        console.log(response.status)
      }
    })
  }

  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1> //Waits for API Response
      ) : (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home products={allProducts} />}>

            </Route>
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
