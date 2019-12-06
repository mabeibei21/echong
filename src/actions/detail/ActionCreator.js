import { detailAsyncType,detailSecType} from "./ActionTypes";

import {detailfirstapi,detailsecApi} from "api/detail";


export const detailAsyncAction=(gid)=>{
	let detailAction=(data)=>({
		type:detailAsyncType,
		data
	})
	let detailSecAction=(data)=>({
		type:detailSecType,
		data
	})
	return async (dispatch)=>{
		let data=await detailfirstapi(gid);
		let data1=await detailsecApi(gid);
		dispatch(detailAction(data));
		dispatch(detailSecAction(data1));
		// console.log(data1,5555);
	}

	
}
