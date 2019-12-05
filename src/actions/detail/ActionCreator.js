import { detailListType, detailBigListType } from "./ActionTypes";
import { createAction } from "redux-actions";
import { detail_api, detailBig_api } from "api/detail";

export const detailListAction = gid => {
	let listAction = createAction(detailListType, data => data);
	return async dispatch => {
		let data = await detail_api(gid);
		dispatch(listAction(data));
	};
};
export const detailBigListAction = gid => {
	let listAction = createAction(detailBigListType, data => data);
	return async dispatch => {
		let data = await detailBig_api(gid);
		dispatch(listAction(data));
	};
};
