import { spellgroupType } from "./ActionTypes";
import { createAction } from "redux-actions";
import { spellgroupApi } from "api/spellgroup";

export const spellGroupAction = (classId, page) => {
	let spellAction = createAction(spellgroupType, data => data);
	return async dispatch => {
		let data = await spellgroupApi(classId, page);
		dispatch(spellAction(data));
	};
};
