import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumFeatures from './features/Album';
import ProductFeature from './features/Product';
import TodoFeature from './features/ToDo';
import CartFeature from './features/Cart';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeatures} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        {/* <Route path="/" component={CounterFeature} /> */}
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
