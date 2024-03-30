import './App.css';
import api from './api/axios-config'
import { useState, useEffect } from 'react';
import Layout from './components/Layout'
import Home from "./components/home/Home"
import { Routes, Route } from 'react-router-dom';

function App() {

  //Set conditional to force API Load
  const [loading, setLoading] = useState(false);

  const [productList, setProducts] = useState([]);

  const getProducts = async () =>{

    //Await loading API
    setLoading(true);

    await api.get("/api/v1/products")
    .then(response =>{
      //checks https status
      if(response.status === 200) {
        console.log(response.data) //checks if api is accessed
        setProducts(response.data)
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
        <h4>Loading...</h4>
      ) : (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home products={productList} />}>

            </Route>
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
