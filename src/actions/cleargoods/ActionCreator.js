import { goodsListType, goodsGidType, shaixuanType } from "./ActionTypes";
import { cleargoods_api, shaixuanApi } from "api/cleargoods";
import { createAction } from "redux-actions";

export const goodsListAction = (page, price, type) => {
	let listAction = createAction(goodsListType, data => data);
	return async dispatch => {
		let data = await cleargoods_api(page, price, type);
		dispatch(listAction(data));
	};
};
export const shaixuanAction = () => {
	let listAction = createAction(shaixuanType, data => data);
	return async dispatch => {
		let data = await shaixuanApi();
		dispatch(listAction(data));
	};
};

export const goodsGidAction = gid => ({ type: goodsGidType, gid });
