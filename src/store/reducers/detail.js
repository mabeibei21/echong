import { handleActions } from "redux-actions";
import { detailListType, detailBigListType } from "actions/detail/ActionTypes";
const defaultState = {
	detail: [],
	pic: [],
	sell: "",
	pingjia: "",
	shop: "",
	price: "",
	gid: ""
};

export default handleActions(
	{
		[detailListType]: (state, action) => {
			let detailState = JSON.parse(JSON.stringify(state));
			detailState.detail = action.payload;
			return detailState;
		},
		[detailBigListType]: (state, action) => {
			let detailState = JSON.parse(JSON.stringify(state));
			// console.log(action, "detailStoreBig");
			detailState.pic = action.payload.datas[0].photos;
			return detailState;
		}
	},
	defaultState
);
