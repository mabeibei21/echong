import styled from "styled-components";

export const Shai = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding-top: 54px;
	background: #ffff;
	.active2 {
		background: #f03e3e !important;
		color: #fff;
	}
	.active3 {
		background: #ccc !important;
	}
	.show {
		display: block;
	}
	.hidden {
		display: none;
	}
	.top {
		width: 100%;
		overflow: hidden;
		.active1 {
			color: #f03e3e;
			border: 1px solid #f03e3e;
			background: #fff;
		}

		ul {
			overflow-x: auto;
			white-space: nowrap;
			border: 1px solid #eee; /* position: relative; */
			li {
				width: 93.75px;
				display: inline-block;
				font-size: 12px;
				color: #333;
				text-align: center;
				position: relative;
				box-sizing: border-box;
				outline: none;
				height: 40px;
				overflow: hidden;
				background: #f3f4f6;
				height: 24px;
				line-height: 22px;
				margin: 10px 5px;
				border: 1px solid transparent;
				border-radius: 4px;
			}
		}
	}
	.list {
		width: 100%;
		height: 100%;
		padding-bottom: 50px;
		.left {
			width: 25%;
			height: 100%;
			background-color: #f3f4f5;
			overflow-y: auto;
			li {
				padding: 11px 5px;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				font-size: 12px;
				text-align: center;
			}
		}
	}
	.foot {
		position: absolute;
		bottom: 0;
		height: 50px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		border-top: 1px solid #eee;
		div {
			width: 50%;
			height: 100%;
			line-height: 50px;
			font-size: 14px;
			text-align: center;
		}
		div:nth-of-type(1) {
			border-right: 1px solid #eee;
		}
	}
`;
