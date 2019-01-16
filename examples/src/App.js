import React, { Component } from 'react';
import { Provider } from 'context-flux';
import { createStore } from './store';
import Name from './components/user/name';
import Age from './components/user/age';
import Form from './components/user/form';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={createStore}>
          <Name />
          <Age />
          <p></p>
          <Form />
        </Provider>
      </div>
    );
  }
}

export default App;
