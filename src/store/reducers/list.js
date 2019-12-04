import { handleActions } from "redux-actions";

import {
	classPicType,
	classListsType,
	classTab2Type,
	classGuoType
} from "actions/class/ActionTypes";

const defaultState = {
	hot_list: [],
	pic_list: [],
	tab2_list: []
	// guo_list: []
};

export default handleActions(
	{
		[classListsType]: (state, action) => {
			let hotState = JSON.parse(JSON.stringify(state));
			hotState.hot_list = action.payload.categorys;
			return hotState;
		},
		[classPicType]: (state, action) => {
			let tabState = JSON.parse(JSON.stringify(state));
			tabState.pic_list = action.payload.cate_list[0].list;
			return tabState;
		},
		[classTab2Type]: (state, action) => {
			let tabState = JSON.parse(JSON.stringify(state));
			tabState.tab2_list = action.payload.brand;
			return tabState;
		},
		[classGuoType]: (state, action) => {
			let guoState = JSON.parse(JSON.stringify(state));
			console.log(action.payload, 1111);
			// guoState.tab2_list = action.payload.cate_list[1];
			return guoState;
		}
	},
	defaultState
);
