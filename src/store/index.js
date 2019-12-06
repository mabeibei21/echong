<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
=======
<<<<<<< HEAD
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
import home from "./reducers/home";
import list from "./reducers/list";
import book from "./reducers/book";
import rob from "./reducers/rob";
<<<<<<< HEAD
import newguest from "./reducers/newguest";
import detail from "./reducers/detail";
import cleargoods from "./reducers/cleargoods";
import login from "./reducers/login";
import spellgroup from "./reducers/spellgroup";
import dogfood from "./reducers/dogfood";
const reducers = combineReducers({
	home,
	list,
	book,
	rob,
	newguest,
	detail,
	cleargoods,
	login,
	spellgroup,
	dogfood
});
=======
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

>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(reduxThunk))
);
<<<<<<< HEAD
=======
>>>>>>> 9e469049d28561ceeed962af870a71731c4d6a4b
>>>>>>> d209379a66cc39580c15cc73c7f24ac9a61e4422

export default store;
// 