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

export default store;
