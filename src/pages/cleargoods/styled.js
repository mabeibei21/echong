import styled from "styled-components";
export const Goods = styled.div`
	height: 100%;
	overflow: auto;

	.banner {
		img {
			width: 375px;
		}
	}
	& > div:nth-of-type(4) {
		height: 40px;
		width: 100%;
		span {
			border-right: 1px solid #ccc;
			margin-top: 10px;
			text-align: center;
			display: inline-block;
			width: 33%;
			padding-right: 10px;
			box-sizing: border-box;
			background: url("https://static.epetbar.com/static_wap/epetapp/pages/clear_ware/images/price-sort.png")
				no-repeat;
			background-size: 8px 14px;
			background-position: 90px 4px;
		}
		& > span:nth-of-type(3) {
			border: 0;
			background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575386081102&di=0957163eaba370d3dc293fabd4e4f4dc&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015ff959f041faa801202b0cd53db3.gif")
				no-repeat !important;
			background-size: 149px 113px !important;
			background-position: 15px -47px !important;
		}
	}

	.sortup {
		background: url("https://static.epetbar.com/static_wap/epetapp/pages/clear_ware/images/price-up.png")
			no-repeat !important ;
		background-size: 8px 14px !important;
		background-position: 90px 4px !important;
	}
	.sortdown {
		background: url("https://static.epetbar.com/static_wap/epetapp/pages/clear_ware/images/price-down.png")
			no-repeat !important;
		background-size: 8px 14px !important;
		background-position: 90px 4px !important;
	}
	.bg {
		height: 10px;
		background: #eee;
	}
	.fontRed {
		color: #f03e3e;
	}
	.wrap {
		height: 100%;
		ul {
			li {
				padding: 5px 10px;
				font-size: 12px;
				.bg {
					height: 10px;
					background: #eee;
				}
				.top {
					border-bottom: 1px solid #eee;
					line-height: 25px;
					height: 30px;
					span:nth-of-type(2) {
						color: #ccc;
						padding-left: 10px;
					}
					.zhe {
						/* height: 100%;
						width: 36px; */
						float: right;
						margin-top: -10px;
						.p-top {
							width: 40px;
							height: 15px;
							background: #f15366;
							line-height: 25px;
							text-align: center;
							color: #fff;
						}
						.p-bottom {
							width: 0px;
							height: 10px;

							border: 20px solid transparent;
							border-top: 12px solid #f15366;
						}
					}
				}
				.bottom {
					width: 100%;
					display: flex;
					align-items: center;
					img {
						width: 100px;
						padding: 10px 0 10px 0;
					}
					.right {
						display: flex;
						justify-content: space-around;
						flex-flow: column;
						margin-top: 20px;
						width: 255px;
						height: 100px;

						span {
							color: #f00;
							font-size: 14px;
							del {
								color: #ccc;
								font-size: 12px;
							}
						}
						div {
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;
							span {
								span {
									padding: 1px;
									color: #fff;
									background: #f15366;
								}
							}
							b {
								background: #fff;
								font-size: 12px;
								color: #ccc;
							}

							img {
								float: right;
								width: 25px;
							}
						}
					}
				}
			}
		}
	}
`;
