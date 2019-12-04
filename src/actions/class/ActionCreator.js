import {
	classListsType,
	classPicType,
	classTab2Type,
	classGuoType
} from "./ActionTypes";

import {
	class_listApi,
	class_picApi,
	class_tab2,
	calss_Guoji
} from "api/class";
import { createAction } from "redux-actions";

export const classListAction = () => {
	let classlistAction = createAction(classListsType, data => data);
	return async dispatch => {
		let data = await class_listApi();
		dispatch(classlistAction(data));
	};
};
export const classPicAction = own => {
	let picAction = createAction(classPicType, data => data);
	return async dispatch => {
		let data = await class_picApi(own);
		dispatch(picAction(data));
	};
};
export const classTab2Action = () => {
	let tabAction = createAction(classTab2Type, data => data);
	return async dispatch => {
		let data = await class_tab2();
		dispatch(tabAction(data));
	};
};
export const calssGuojiAction = () => {
	let guoJiAction = createAction(classGuoType, data => data);
	return async dispatch => {
		let data = await calss_Guoji();
		dispatch(guoJiAction(data));
	};
};
