import { handleActions } from "redux-actions";
import { spellgroupType } from "actions/spellgroup/ActionTypes";

const defaultState = {
	data: []
};

export default handleActions(
	{
		[spellgroupType]: (state, action) => {
			let theState = Object.assign({}, state);
			theState.data = action.payload;
			return theState;
		}
	},
	defaultState
);
