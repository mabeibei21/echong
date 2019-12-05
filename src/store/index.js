import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import list from "./reducers/list";
import book from "./reducers/book";
import rob from "./reducers/rob";
import newguest from "./reducers/newguest";
import detail from "./reducers/detail";
import cleargoods from "./reducers/cleargoods";
// import cart from "./reducers/cart";
const reducers=combineReducers({
    home,
    list,
    book,
    rob,
    newguest,
    detail,
    cleargoods,
    // cart
})
const store=createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))  

export default store;
