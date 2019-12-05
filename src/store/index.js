<<<<<<< HEAD
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import list from "./reducers/list";
import book from "./reducers/book";
import rob from "./reducers/rob";
import newguest from "./reducers/newguest";import detail from "./reducers/detail";
import cleargoods from "./reducers/cleargoods";
const reducers=combineReducers({
    home,
    list,
    book,
    rob,
    newguest,detail,
	cleargoods
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))  
=======
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import list from "./reducers/list";
import detail from "./reducers/detail";
import cleargoods from "./reducers/cleargoods";

const reducers = combineReducers({
	list,
	detail,
	cleargoods
});

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(reduxThunk))
);
>>>>>>> 9e469049d28561ceeed962af870a71731c4d6a4b

export default store;
