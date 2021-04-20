import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Header from './components/Header';
import AlbumFeatures from './features/Album';
import ProductFeature from './features/Product';
import TodoFeature from './features/ToDo';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeatures} />
        <Route path="/products" component={ProductFeature} />

        {/* <Route path="/" component={CounterFeature} /> */}
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
