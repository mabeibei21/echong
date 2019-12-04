import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import list from "./reducers/list";
import book from "./reducers/book";
import rob from "./reducers/rob";
import newguest from "./reducers/newguest";
const reducers=combineReducers({
    home,
    list,
    book,
    rob,
    newguest
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))  

export default store;