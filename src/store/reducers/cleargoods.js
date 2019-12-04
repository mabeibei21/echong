import { handleActions } from "redux-actions";
import { goodsListType, goodsGidType } from "actions/cleargoods/ActionTypes";

const defaultState = {
	goods_list: [],
	gid: "",
	sys_time: ""
};

export default handleActions(
	{
		[goodsListType]: (state, action) => {
			let goodsState = JSON.parse(JSON.stringify(state));
			goodsState.goods_list = action.payload;
			goodsState.sys_time = action.payload.sys_time;
			return goodsState;
		},
		[goodsGidType]: (state, action) => {
			let gidState = JSON.parse(JSON.stringify(state));
			gidState.gid = action.gid;
			gidState.sys_time = action.sys_time;
			return gidState;
		}
	},
	defaultState
);
