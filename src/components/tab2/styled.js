import styled from "styled-components";
export const Tab = styled.div`
	.wrap {
		div {
			padding: 20px 0;
			width: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		ul {
			padding: 0 10px;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li {
				margin-bottom: 20px;
				width: 112px;
				height: 108px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-flow: column;
				div {
					display: flex;
					justify-content: space-around;
					align-items: center;
					width: 105px;
					height: 62px;
					box-sizing: border-box;
					border: 1px solid #eee;
					img {
						width: 80px;
					}
				}
				p {
					height: 40px;
					width: 90px;
					line-height: 40px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				span {
					font-size: 12px;
					color: #ccc;
				}
			}
		}
	}
`;
