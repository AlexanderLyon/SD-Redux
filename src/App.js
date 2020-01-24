import React, { useEffect } from 'react';
import Grid from './components/Grid';
import Filters from './components/Filters';
import { connect } from 'react-redux'
import { fetchProductsFromAPI } from './actions';
import './App.css';

const App = props => {
  useEffect(() => {
    props.fetchProducts.then(() => {
      console.log('Products retrieved:', props.products);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Store</h1>
      </header>
      <main>
        <Filters/>
        <Grid/>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: dispatch(fetchProductsFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
