import { spellGroupAction } from "actions/spellgroup/ActionCreator";

export const mapStateToProps = state => ({
	data: state.spellgroup.data
});

export const mapDispatchToProps = dispatch => ({
	handleSpellList(classId, page) {
		dispatch(spellGroupAction(classId, page));
	}
});
