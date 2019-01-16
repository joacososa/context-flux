import { createUser } from "../components/user/user.store";

export const createStore = context => ({
  ...context.state,
  user: createUser(context)
});
