import {
	goodsListAction,
	goodsGidAction,
	shaixuanAction
} from "actions/cleargoods/ActionCreator";

export const mapStateToProps = state => ({
	goods_list: state.cleargoods.goods_list,
	sys_time: state.cleargoods.sys_time,
	shaixuan: state.cleargoods.shaixuan
});
export const mapDispatchToProps = dispatch => ({
	handleClearList(page, price, type) {
		dispatch(goodsListAction(page, price, type));
	},
	handleGid(gid) {
		dispatch(goodsGidAction(gid));
	},
	handleShaixuan() {
		dispatch(shaixuanAction());
	}
});
