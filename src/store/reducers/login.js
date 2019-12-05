import { handleActions } from "redux-actions";
import { registerType, userLoginTypes } from "actions/login/ActionTypes";

const defaultState = {
	userInfo: {},
	info: "",
	name: ""
};

export default handleActions(
	{
		[userLoginTypes]: (state, action) => {
			let userState = Object.assign({}, state);
			let index = Math.floor(Math.random() * 11);
			userState.userInfo = {
				name: action.payload.username,
				urlPic: "@img/(" + index + ").JPEG"
			};
			userState.info = action.payload;
			// console.log(userState.info, "---------------");
			return userState;
		},
		[registerType]: (state, action) => {
			let userState = Object.assign({}, state);
			let index = Math.floor(Math.random() * 11);
			userState.userInfo = {
				name: action.payload.username,
				urlPic: "@img/(" + index + ").JPEG"
			};
			userState.info = action.payload;
			// console.log(userState.info, "---------------");
			return userState;
		}
	},
	defaultState
);
