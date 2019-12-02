import styled from "styled-components";
export const Head = styled.div`
	.sortHead {
		width: 100%;
		height: 0.333rem;
		display: flex;
		justify-content: center;
		position: relative;
		border-bottom: 1px solid #ccc;
		& > div {
			width: 0.6rem;
			height: 100%;
			text-align: center;
			line-height: 0.333rem;
			p {
				width: auto;
				height: 0.333rem;
				font-size: 13px;
			}
			.green {
				color: #41c856;
				border-bottom: 2px solid #41c856;
			}
		}
		a {
			width: 0.14rem;
			height: 0.14rem;
			display: block;
			position: absolute;
			top: 0.08rem;
			right: 0.15rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
`;
export const Classifyi = styled.div`
	display: ${props => props.fl};
	.sortBody {
		background: #f3f4f5;
		box-sizing: border-box;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0.41rem 0 0.52rem;
		background: #f5f5f5;
		display: flex;
		justify-content: space-between;
		& > div {
			overflow: auto;
		}
		.left {
			width: 0.7rem;
			ul {
				width: 100%;
				height: 100%;
				li {
					box-sizing: border-box;
					margin-right: 10px;
					line-height: 0.5rem;
					text-align: center;
					font-size: 13px;
					background: #fff;
				}
				.xuanZhong {
					color: #41c856;
					background: #f5f5f5;
				}
			}
		}
		.right {
			background: #fff;
			width: 2.45rem;
			margin-top: 0.08rem;
			.right-content {
				width: 100%;
				height: auto;
				box-sizing: border-box;
				padding: 0.1rem 0.05rem 0.2rem;
				.right-title {
					width: 100%;
					height: 0.2rem;
					padding-left: 0.05rem;
					margin-top: 0.2rem;
					color: #999;
					font-size: 13px;
				}
				ul {
					width: 100%;
					height: 100%;
					display: flex;
					flex-wrap: wrap;
					li {
						width: 33.3%;
						height: 0.98rem;
						margin-top: 0.05rem;
						box-sizing: border-box;
						padding: 0 0.05rem;
						a {
							width: 100%;
							height: 100%;
							div {
								width: 100%;
								height: 0.68rem;
								img {
									width: 100%;
									height: 100%;
								}
							}
							p {
								width: 100%;
								line-height: 0.2rem;
								margin-top: 0.1rem;
								color: #333;
								font-size: 13px;
								text-align: center;
							}
						}
					}
				}
			}
		}
	}
`;
