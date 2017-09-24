import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import createStore from './store';
import Main from './main';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
