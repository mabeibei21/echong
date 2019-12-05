import { userLoginTypes, registerType } from "./ActionTypes";
import { createAction } from "redux-actions";
import { loginApi, registerApi } from "api/login";
export const loginAction = (username, password) => {
	let loginAction = createAction(userLoginTypes, data => data);
	return async dispatch => {
		let data = await loginApi(username, password);
		dispatch(loginAction(data.data));
	};
};

export const registerAction = (username, password) => {
	let resAction = createAction(registerType, data => data);
	return async dispatch => {
		let data = await registerApi(username, password);
		dispatch(resAction(data.data));
	};
};
