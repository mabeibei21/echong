import { detailAsyncAction } from "../../actions/detail/ActionCreator";
export const mapStateToProps = state => ({
  img: state.detail.img,
  subject: state.detail.subject,
  presubject: state.detail.presubject,
  sale_price: state.detail.sale_price,
  market_price: state.detail.market_price
});

export const mapDispatchToProps = (dispatch) => ({
  handleDetailData(gid) {
    dispatch(detailAsyncAction(gid));
  }
});
