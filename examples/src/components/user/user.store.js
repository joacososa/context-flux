import { createActions } from 'context-flux';
import * as actions from './user.actions';

export const createUser = store => ({
  name: 'Gonzalo',
  age: 31,
  actions: createActions(Object.values(actions))(store),
});
