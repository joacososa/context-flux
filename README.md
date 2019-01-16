# Context Flux

`context-flux` is a small Context Api based library that reduces boilerplate and enforces best practices.

Use `context-flux` if you need a simple state management, or you want to pass some props deeply without the overkill that comes with Redux or MobX.

This library encourages defining actions and state for each model whose data can be considered "global", and then composing these into one object that will be the application's single source of truth.

## Getting started

```sh
$ npm install --save gonzalobarbitta/context-flux-api
```


### Step 1: Actions

**Actions** are defined for each model. It contains functions that describe how the model's section of the state can be modified. If you are have worked with Redux before, know that these **actions** bring together reducers, async actions & action creators in one place. 

#### user.actions.js

```js
export const setName = (store, name) => {
  const state = store.state;
  store.setState({ ...state, user: { ...state.user, name } });
};
```

### Step 2: Store

**Store** is the place to define the state structure and actions for the current model.

#### user.store.js

```js
import { createActions } from 'context-flux';
import * as actions from './user.actions';

export const createUser = store => ({
  name: 'John Doe',
  actions: createActions(Object.values(actions))(store),
});
```

### Step 3: Application Store

Defines a function that receives the context, and returns an object that combines all separate stores into one.

```
import { createUser } from "../components/user/user.store";

export const createStore = context => ({
  ...context.state,
  user: createUser(context)
});
```

### Step 4: Provider

 **Provider** is a HOC that when placed in the root of your react hierarchy, will make the state available to the entire application.

```
import React, { Component } from 'react';
import { Provider } from 'context-flux';
import { createStore } from './store';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={createStore}>
          ...
        </Provider>
      </div>
    );
  }
}

export default App;
```

### Step 5: View

Context-flux can be used similarly to native redux integrations. See an example below.

```jsx
import React from 'react';
import { connect } from 'context-flux';
import { PropTypes } from 'prop-types';

class Name extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          Name: { this.props.name }
        </div>
      </div>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { name } }) => ({
  name,
});

export default connect(mapStateToProps, Name);
```

## Examples

-   [User](examples)