import { handleActions } from "redux-actions";
import { foodType, listType } from "actions/dogfood/ActionTypes";
const defaultState = {
	food: [],
	list: []
};
export default handleActions(
	{
		[foodType]: (state, action) => {
			let foodState = JSON.parse(JSON.stringify(state));
			foodState.food = action.payload;
			return foodState;
		},
		[listType]: (state, action) => {
			let listState = JSON.parse(JSON.stringify(state));
			listState.list = action.payload;
			return listState;
		}
	},
	defaultState
);
