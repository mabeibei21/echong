import { handleActions } from "redux-actions";
import {
	goodsListType,
	goodsGidType,
	shaixuanType
} from "actions/cleargoods/ActionTypes";

const defaultState = {
	goods_list: [],
	gid: "",
	sys_time: "",
	shaixuan: []
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
		},
		[shaixuanType]: (state, action) => {
			let shaixuanState = JSON.parse(JSON.stringify(state));
			shaixuanState.shaixuan = action.payload;
			return shaixuanState;
		}
	},
	defaultState
);
