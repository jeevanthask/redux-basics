import store from "./05)creating-the-store";

//basically we are subscribing in the UI layer
//UI componenets just subscribe to the store so they get notified when the state of the store changes
const unsubscribe = store.subscribe(() => {
  console.log("store changed ", store.getState());
});

console.log(store);

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

console.log(store.getState());

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

unsubscribe();

//we have to unsubscribe to prevent memory leaks

console.log(store.getState());
