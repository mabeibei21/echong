import styled from "styled-components";
export const Head = styled.div`
	.details-top {
		height: 50px;
		width: 100%;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 18px;
		background: #fff;
		position: relative;
		p {
			height: 100%;
			display: flex;
			align-items: center;
			span {
				margin: 0 0.04rem;
				display: block;
				height: 100%;
				line-height: 0.5rem;
			}
			.rborder {
				border-bottom: 2px solid #f00;
			}
		}
		.details-top-back {
			background: url(https://static.epetbar.com/static_web/wap/dist/images/background/topIco.png)
				0 5px no-repeat;
			display: block;
			height: 0.35rem;
			width: 0.35rem;
			background-size: 80%;
		}
		.details-top-dl {
			background: url(https://static.epetbar.com/static_web/wap/dist/images/background/topIco.png)
				0 33% no-repeat;
			display: block;
			height: 0.35rem;
			width: 0.35rem;
			background-size: 80%;
		}
		i {
			width: 0.2rem;
			height: 0.2rem;
			display: block;
			position: absolute;
			top: 0.11rem;
			right: 0.3rem;
			background: url(https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/other.png);
			background-size: 0.5rem auto;
		}
	}
`;
export const Top = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
	flex-direction: column; 
	.banner {
		width: 100%;
		display: flex;
		/* align-items: center; */
		justify-content: center;
		div {
			width: 2.667rem;
			img {
				width: 2.667rem;
			}
		}
	}
	.title {
		padding: 10px 12px 0;
		span {
			font-size: 13px;
			color: #333;
		}
	}
	.free {
		font-size: 12px;
		color: #fc5a5a;
		padding: 2px 12px 10px;
		border-bottom: 1px solid #ddd;
	}
	.price {
		padding: 10px 12px;
		em {
			font-size: 14px;
			font-style: normal;
			color: #fc5a5a;
		}
		b {
			font-size: 19px;
			color: #fc5a5a;
			padding-right: 5px;
		}
		del {
			font-size: 12px;
			color: #333;
		}
		div {
			padding-top: 3px;
			width: 78px;
			float: right;
		}
	}
	.bg {
		height: 20px;
		width: 100%;
		background: #f3f4f5;
	}
`;

export const Mation = styled.div`
	
	margin: 10px 0;
 
	.a1 {
		padding: 5px 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		em {
			flex: 1;
		}
		b {
			font-size: 13px;
			padding-right: 5px;
		}
		span {
			border: 1px solid #ff0000;
			font-size: 12px;
			padding: 0 2px;
			margin: 0 5px;
		}
		em {
			font-style: normal;
			font-size: 12px;
		}
	}
	.a2 {
		padding: 5px 10px;
		font-size: 12px;

		em {
			font-style: normal;
			color: #ff0000;
		}
	}
	.a3 {
		padding: 5px 10px;
		font-size: 12px;
		ul {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding-left: 50px;
			flex-wrap: wrap;
			li {
				flex-wrap: wrap;
				span {
					margin-bottom: 4px;
					border: 1px solid #ff0000;
					padding: 2px 0px;
					width: 100px;
					display: block;
					text-align: center;
					border-radius: 5px;
					color: #fff;
					background: #f00;
				}
			}
		}
	}
	.bg {
		height: 10px;
		background: #f3f4f5;
	}
	.a4 {
		padding: 15px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		div {
			padding-left: 0.167rem;
			flex: 1;
		}
	}
	.a5 {
		font-size: 12px;
		padding: 10px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		span {
			padding: 0 5px;
		}
	}
	.a6 {
		padding: 10px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		font-size: 12px;
		img {
			width: 0.167rem;
		}
		span {
			padding-left: 3px;
		}
	}
	.a7 {
		.nav {
			padding: 0 10px;
			height: 40px;
			font-size: 12px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #eee;
		}
		ul {
		
			li {
				overflow: hidden;
				border-bottom: 1px solid #eee;
				display: flex;
				justify-content: space-between;
				padding: 15px 0;
				flex-flow: column;
				.bottom {
                    padding:0 10px;
					p {
						font-size: 12px;
						color: #000;
					}
					img {
						width: 55px;
					}
				}
				.top {      padding:0 10px;
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.left {
					img {
						width: 42px;
					}
				}
				.middle {
					box-sizing: border-box;
					height: 75px;
					display: flex;
					justify-content: space-around;
					flex-flow: column;
					
					flex: 1;
					p {
						margin: 0;
						font-size: 12px;
					}
				}
				.right {
                    margin-right:20px;
					width: 72px;
					img:nth-of-type(1) {
						width: 72px;
					}
					img:nth-of-type(2) {
						width: 15px;
					}
				}
			}
			.look {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 35px;
				a {
					border: 0.004rem solid #f00;
					padding: 0.047rem 0.333rem;
					border-radius: 0.042rem;
					color: #ff0000;
				}
			}
		}
	}
`;
export const Estimate = styled.div`
	.foot {
		height: 1.8rem;
		width: 100%;
		background: #fff;
		.ps2 {
			height: 1.15rem;
			width: 100%;
			box-sizing: border-box;
			padding: 0.1rem;
			.ps21 {
				display: flex;
				height: 0.4rem;
				div {
					&:nth-child(2) {
						width: 1.5rem;
						height: 0.4rem;
						p {
							height: 0.2rem;
							line-height: 0.2rem;
						}
					}
					&:nth-child(3) {
						width: 0.53rem;
						height: 0.27rem;
						border: 1px solid #f03e3e;
						border-radius: 0.05rem;
						color: #f03e3e;
						text-align: center;
						line-height: 0.27rem;
					}
				}
			}
			.ps22 {
				width: 100%;
				height: 0.61rem;
				box-sizing: border-box;
				padding: 0.1rem 0.1rem 0 0.1rem;
				ul {
					height: 100%;
					width: 100%;
					display: flex;
					justify-content: space-around;
					li {
						padding-top: 0.167rem;
						width: 33.3%;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						p {
							&:nth-child(2) {
								color: #999;
							}
						}
						&:nth-child(2) {
							border-left: 1px solid #ddd;
							border-right: 1px solid #ddd;
						}
					}
				}
			}
		}
		.btn {
			width: 100%;
			height: 0.65rem;
			box-sizing: border-box;
			padding: 0.05rem 0.15rem 0.15rem;
			display: flex;
			justify-content: space-between;
			input {
				width: 1.39rem;
				height: 0.35rem;
				border: 1px solid #f88;
				background: #fff;
				color: #f88;
				border-radius: 0.05rem;
			}
		}
	}

	.details-main .foot .ps2 .ps21 div:nth-child(1),
	.details-main .foot .ps2 .ps21 div:nth-child(1) img {
		width: 0.77rem;
		height: 0.4rem;
		margin-right: 0.1rem;
	}
`;
export const Buttono = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	.details-bottom {
		height: 0.5rem;
		width: 100%;
		background: #f5f5f5;
		position: absolute;
		bottom: 0;
		display: flex;
		& > a {
			height: 100%;
			display: block;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: #999;
		}
		a {
			&:nth-child(1) {
				width: 25%;
				b {
					display: block;
					width: 0.2rem;
					height: 0.2rem;
					background: url(https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/s1.png);
					background-position: 0 -0.2rem;
					background-size: 100%;
				}
			}
			&:nth-child(2) {
				width: 25%;
				position: relative;
				b {
					display: block;
					width: 0.2rem;
					height: 0.2rem;
					background: url(https://static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/car.png);
					background-position: 0 -0.2rem;
					background-size: 100%;
					position: relative;
					.num {
						display: block;
						width: 0.16rem;
						height: 0.16rem;
						background: #f03e3e;
						border-radius: 50%;
						color: #fff;
						text-align: center;
						line-height: 0.16rem;
						font-style: 0.12rem;
						position: absolute;
						top: -0.05rem;
						right: -0.08rem;
					}
				}
			}
			&:nth-child(3) {
				width: 50%;
				background: #f03e3e;
				color: #fff;
				font-size: 0.15rem;
			}
		}
	}
`;
export const Section = styled.div`
	height: 100%;
	width: 100%;
	overflow: auto;
	position: absolute;
	background-color: ${props => props.bgSection};
	padding-bottom: 100px;
	img {
		width: 100%;
	}
`;
