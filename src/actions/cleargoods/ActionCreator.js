import { goodsListType, goodsGidType } from "./ActionTypes";
import { cleargoods_api } from "api/cleargoods";
import { createAction } from "redux-actions";

export const goodsListAction = price => {
	let listAction = createAction(goodsListType, data => data);
	return async dispatch => {
		let data = await cleargoods_api(price);
		dispatch(listAction(data));
	};
};

export const goodsGidAction = gid => ({ type: goodsGidType, gid });
