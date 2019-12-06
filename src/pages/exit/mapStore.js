import { loginAction, registerAction } from "actions/login/ActionCreator";
export const mapStateToProps = state => ({
	userInfo: state.login.userInfo
});
export const mapDispatchToProps = dispatch => ({
	handleLoginAsync(user, psd) {
		dispatch(loginAction(user, psd));
	},
	handleRegisterAsync(user, psd) {
		dispatch(registerAction(user, psd));
	}
});
