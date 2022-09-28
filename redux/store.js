import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createWrapper} from 'next-redux-wrapper';
import thunk from "redux-thunk";
import reducer from "./reducer/rootReducer";

// create a makeStore function
const makeStore = context => createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});


