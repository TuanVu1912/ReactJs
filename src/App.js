import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumFeatures from './features/Album';
import CartFeature from './features/Cart';
import ProductFeature from './features/Product';
import TodoFeature from './features/ToDo';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        {/* <Redirect from="/home" to="/" exact /> */}
        <Route path="/" component={ProductFeature} />
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/album" component={AlbumFeatures} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        {/* <Route path="/" component={CounterFeature} /> */}
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
