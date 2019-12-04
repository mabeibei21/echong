import {
	goodsListAction,
	goodsGidAction
} from "actions/cleargoods/ActionCreator";

export const mapStateToProps = state => ({
	goods_list: state.cleargoods.goods_list,
	sys_time: state.cleargoods.sys_time
});
export const mapDispatchToProps = dispatch => ({
	handleClearList(price) {
		dispatch(goodsListAction(price));
	},
	handleGid(gid) {
		dispatch(goodsGidAction(gid));
	}
});
