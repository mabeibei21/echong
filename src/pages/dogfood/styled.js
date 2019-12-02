import styled from "styled-components";

export const PetFood = styled.div`
	overflow: auto;
	height: 100%;

	.wrap {
		margin-bottom: 50px;
	}
	.banner {
		width: 100%;
		img {
			width: 100%;
		}
		margin-bottom: 20px;
	}
	.nav {
		width: 100%;
		img {
			width: 100%;
		}
		ul {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding-bottom: 20px;
		}
	}
	.zhishi {
		padding: 20px 0;
	}
	.lf {
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			width: 187px;
		}
	}
	.list {
		ul {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			img {
				width: 187px;
			}
		}
		div {
			padding: 20px 0;
			img {
				width: 100%;
			}
			.wrap {
				width: 100%;
				overflow-x: auto;
			}
			ul {
				flex-wrap: nowrap;
				li {
					padding: 0 10px;
					float: left;
					img {
						width: 83px;
					}
				}
			}
		}
	}
`;
