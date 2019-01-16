# Example using context-flux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and modified accordingly.

## Available Scripts

In the project directory, you can run:

```sh
$ npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

The example is very simple. State will contain a unique model with information about the logged user. Through the use of  `actions` we will allow its name to be modified. You can see a working example [here](https://codesandbox.io/s/github/gonzalobarbitta/context-flux-api/tree/master/examples)

#### user.actions.js

```js
export const setName = (store, name) => {
  const state = store.state;
  store.setState({ ...state, user: { ...state.user, name } });
};
```

To keep things simple, we will initialize the user's information with static data as opposed to retrieving it from somewhere else.

#### user.store.js

```js
export const createUser = store => ({
  name: 'Gonzalo',
  age: 30,
  actions: createActions(Object.values(actions))(store),
});

```

When placing context-flux `Provider` at the root of your react hierarchy, this state will be accessible from any component in the application. 

Through `Name` and `Age` components we show how to subscribe to this state. `Form` allows the user to edit its name. 

When modifying the user's name, `Name` component is re-rendered and the new data is displayed. `Age` on the other side, is not re-rendered because none of its props changed.



