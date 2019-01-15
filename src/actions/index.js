/**
 * Combines all functions of a specific actions file as the available actions
 * of the selected store object.
 *
 * @param {Array} actionFile An array of all functions from the actions file
 * for a specific store we want to define.Example: actions: createActions(Object.values(actions))(store)
 * being Object.values(actions) the actions file imported as
 * import * as actions from './example.actions';
 *
 * @param {Object} store The specific store object where we want to assign the actions to.
 * Example: actions: createActions(Object.values(actions))(store)
 * being store: export const createGeneralLedger = store => ({items: [], item: { name: '', selectedEntities: [] },
 * actions: createActions(Object.values(actions))(store),
 * });
 * import * as actions from './example.actions';
 *
 * @returns {Function} All actions functions with the store object assigned in order to setstate when actions
 * need to.
 */

const createActions = actionFile => store => (
  actionFile.reduce((actions, action) => {
    actions[action.name] = payload => (
      action(store, payload)
    );
    return actions;
  }, {})
);

export default createActions;
