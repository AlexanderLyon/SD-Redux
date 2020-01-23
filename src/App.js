import React from 'react';
import { connect } from 'react-redux'
import { fetchProductsFromAPI } from './actions';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header>
        <h1>Store</h1>
      </header>
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
