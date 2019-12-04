import { handleActions } from "redux-actions";
import { goodsGitType } from "actions/detail/ActionTypes";
const defaultState = {
	gid: 466284
};

export default handleActions({
	[goodsGitType]: (state, action) => {
		let GidState = JSON.parse(JSON.stringify(state));
		GidState.gid = action.gid;
	}
});
