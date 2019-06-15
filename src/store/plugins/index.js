export const saveStorage = store =>{
  console.log(store&&'store loading');
  if(localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state));
  } else {
    store.subscribe((mutation, state) => {
      localStorage.state = JSON.stringify(state)
    });
  }
};
