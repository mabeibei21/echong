import { foodType, listType } from "./ActionTypes";
import { createAction } from "redux-actions";
import { dogfoodApi, dogListApi } from "api/dogfood";

export const foodAction = (cdn, menu) => {
	let listAction = createAction(foodType, data => data);
	return async dispatch => {
		let data = await dogfoodApi(cdn, menu);
		dispatch(listAction(data));
	};
};
export const listAction = menu => {
	let lisAction = createAction(listType, data => data);
	return async dispatch => {
		let data = await dogListApi(menu);
		dispatch(lisAction(data));
	};
};
