import {
	classListAction,
	classPicAction,
	classTab2Action,
	calssGuojiAction
} from "actions/class/ActionCreator";

export const mapStateToProps = state => ({
	hot_list: state.list.hot_list,
	pic_list: state.list.pic_list,
	tab2_list: state.list.tab2_list
});

export const mapDispatchToProps = dispatch => ({
	handlepicList(own) {
		dispatch(classPicAction(own));
	},
	handlehotList() {
		dispatch(classListAction());
	},
	handletab2List() {
		dispatch(classTab2Action());
	},
	handleGuoList() {
		dispatch(calssGuojiAction());
	}
});
