import React, { createContext } from 'react';
import { PropTypes } from 'prop-types';
import WrapperComponent from '../utils';

const Context = createContext();

/**
 * Place Provider in the root of your react hierarchy, this will create a component that
 * will generate a base context api provider, using store prop function will create the store
 * to initialize the context for the root of your application.
 *
 * @property {Function} store is the function that combines all the stores of your application. This function should
 * receive context as parameter and should be implemented like this: export const createStore = context
 * => ({...context.state, SampleStoreA: createSampleStoreA(context),
 * SampleStoreB: createSampleStoreB(context),}); .
 * createSampleStoreA(context) should be done in your component level tree as this example :
 * export const createGeneralLedger = store =>
 * ({items: [], item: { name: '', selectedEntities: [] }, actions: createActions(Object.values(actions))(store),});
 * where createActions should be imported from our library as: import createActions from 'contextBase';
 *
 *  @type {Component} that should be placed where you want to start using the context api store.
 *
 */
class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.store(this);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.func.isRequired,
};

/**
 * Creates a higher order component that connects the Component param with the store assigning
 * to the result component as props using the mapStateToProps param.
 *
 * @param {Function} mapStateToProps is a function that tells your component what props will be added.
 *
 * @param {Component} Component is the component we want to connect to the store.
 *
 * @returns {Component} will return a new component conected to the context api stores selected
 * as parameters in the selectedStores param. This will give the return component the access to that
 * store as Props.
 */
const connect = (mapStateToProps, Component) => props => (
  <Context.Consumer>
    { context => (
      <WrapperComponent context={context} mapStateToProps={mapStateToProps}>
        <Component {...mapStateToProps(context)} {...props} />
      </WrapperComponent>
    )}
  </Context.Consumer>
);

export { Provider, connect };

