// this should be the index file initially
import store from "./05)creating-the-store";

console.log(store);

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

console.log(store.getStore());

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getStore());
