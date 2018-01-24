import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
  import loggingMiddleware from 'redux-logger';
  import thunkMiddleware from 'redux-thunk';
  import { composeWithDevTools } from 'redux-devtools-extension';

  //import project from './project';

  const reducer = combineReducers({
    //project
  });
  
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  );
  
  export default store;
  
// export * from './project';