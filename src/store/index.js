import { createStore, applyMiddleware,compose} from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";

const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(sagaMiddleware),
    )
    sagaMiddleware.run(rootSaga)
    // rootSaga - create saga here  
    // store.dispatch({type: 'DANG'})
    // store.dispatch({type: 'HELLO'})
    // store.dispatch({type: 'HELLO'})
    // store.dispatch({type: 'LOGOUT'})
    return store
}
export default configureStore   