import { handleActions } from "redux-actions";
import { detailAsyncType,detailSecType} from "actions/detail/ActionTypes";
const defaultState = {
	img:'',
	subject:'',
	presubject:'',
	sale_price:'',
	market_price:''
};

export default handleActions(
	{
		[detailAsyncType]: (state, action) => {
			let detailfirstState = JSON.parse(JSON.stringify(state));
			detailfirstState.img=action.data.datas[0].photos[0].image;
			console.log(detailfirstState.img)
			detailfirstState.subject=action.data.datas[1].subject;
			detailfirstState.presubject=action.data.datas[1].presubject;
			
			return detailfirstState;
		},
		[detailSecType]:(state,action)=>{
			let detailSecState=JSON.parse(JSON.stringify(state));
			detailSecState.sale_price=action.data.sale_price;
			detailSecState.market_price=action.data.market_price;
			return detailSecState
		}
	},
	defaultState
);
