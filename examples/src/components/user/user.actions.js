export const setName = (store, name) => {
  const state = store.state;
  store.setState({ ...state, user: { ...state.user, name } });
};
