import styled from "styled-components";
export const LoginPet = styled.div`
	.top,
	.top2 {
		padding: 10px 40px;
		.title {
			padding: 10px 0;
			h3 {
				font-size: 20px;
				font-weight: 900;
			}
		}
		.put {
			position: relative;
			input {
				padding-top: 20px;
				display: block;
				width: 294px;
				height: 48px;
				border: 0;
				outline: none;
				border-bottom: 1px solid #ccc;
			}
			span {
				position: absolute;
				bottom: 10px;
				right: 0;
				padding: 1px 4px;
				border: 1px solid green;
				border-radius: 10px;
				font-size: 12px;
			}
		}
		.denglu {
			width: 100%;
			height: 50px;
			margin-top: 40px;
			background: #ddd;
			border-radius: 30px;
			text-align: center;
			line-height: 50px;
			font-size: 16px;
			a {
				color: #ccc;
			}
		}
		.denglu2 {
			padding: 20px 0;
			width: 100%;
			height: 20px;
			font-size: 12px;
			a {
				color: #666;
			}
			a:nth-of-type(2) {
				float: right;
			}
		}
	}
	.bottom {
		margin-top: 80px;
		.title {
			font-size: 10px;
			height: 10px;
			text-align: center;
			line-height: 1px;
			border-top: 1px dashed #ccc;
		}
		.title2 {
			width: 100%;
			position: fixed;
			bottom: 60px;
			font-size: 10px;
			text-align: center;
			span:nth-of-type(1) {
				color: #ccc;
			}
			span:nth-of-type(2) {
				color: #f00;
			}
		}
		.way {
			width: 100%;
			ul {
				width: 100%;
				li {
					display: inline-block;
					text-align: center;
					margin: 20px 0;
					width: 50%;
					height: 30px;
					line-height: 30px;
					img {
						width: 30px;
					}
				}
			}
		}
	}
`;
