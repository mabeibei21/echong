import { foodAction, listAction } from "actions/dogfood/ActionCreator";

export const mapStateToProps = state => ({
	food: state.dogfood.food,
	list: state.dogfood.list
});

export const mapDispatchToProps = dispatch => ({
	handlefood(cdn, menu) {
		dispatch(foodAction(cdn, menu));
	},
	handlelist(cdn, menu) {
		dispatch(listAction(cdn, menu));
	}
});
