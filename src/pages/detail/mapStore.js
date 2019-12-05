import {
	detailListAction,
	detailBigListAction
} from "actions/detail/ActionCreator";
import { goodsGidAction } from "actions/cleargoods/ActionCreator";
export const mapStateToProps = state => ({
	pic: state.detail.pic,
	detail: state.detail.detail
});

export const mapDispatchToProps = dispath => ({
	handleDetailData(gid) {
		dispath(detailListAction(gid));
		console.log(gid, "detailMap16");
	},
	handleBigDetailData(gid) {
		dispath(detailBigListAction(gid));
		console.log(gid, "detailMap16");
	}
});
