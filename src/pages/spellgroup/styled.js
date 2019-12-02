import styled from "styled-components";
export const Spelles = styled.div`
	width: 100%;
	.nav {
		height: 0.333rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		& > li:nth-of-type(1) {
			padding-bottom: 5px;
			border-bottom: 0.025rem solid green;
		}
	}
	.main {
		background: #f3f4f5;
		padding-top: 5px;
		li {
			background: #ffffff;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin: 10px;
			border-radius: 5px;
			padding: 10px;
			position: relative;
			& > span {
				background-color: rgb(255, 164, 0);
				color: rgb(255, 255, 255);
				padding: 1px 5px;
				border-radius: 0 10px 10px 0;
				position: absolute;
				left: 0;
				top: 20px;
			}
			.f {
				width: 100px;
				height: 130px;
				img {
					width: 100px;
				}
			}
			.r {
				width: 220px;
				height: 110px;
				display: flex;
				justify-content: space-between;
				flex-flow: column;
				& > p:nth-of-type(1) {
					font-size: 14px;
				}
				& > p:nth-of-type(2) {
					font-size: 12px;
				}
				& > span {
					color: #f00;
					line-height: 40px;
					span:nth-of-type(1) {
						font-size: 12px;
					}
					span:nth-of-type(2) {
						font-size: 14px;
					}
					span:nth-of-type(3) {
						font-size: 12px;
					}
				}
				em {
					font-style: normal;
					font-size: 12px;
					color: #ccc;
				}
			}
		}
	}
`;
