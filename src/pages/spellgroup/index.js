import React, { Fragment } from "react";
import Header from "../../components/header/index";
import { Spelles } from "./styled";
class Spellgroup extends React.Component {
	render() {
		return (
			<Fragment>
				<Header title="E宠拼团"/>
				<Spelles>
					<ul className="nav">
						<li>全部 </li>
						<li>主粮 </li>
						<li>零食 </li>
						<li>医疗保健</li>
						<li>生活日用</li>
					</ul>
					<ul className="main">
						<li>
							<span>立省12.90</span>
							<div className="f">
								<img src="https://img2.epetbar.com/common/upload/commonfile/2019/010/18/133418_183451.jpg?x-oss-process=style/fill&$1=200&$2=200" />
							</div>
							<div className="r">
								<p>洒家 新款普惠装豆腐猫砂 奶香味 2.5kg</p>
								<p>3人拼</p>
								<span>
									<span>¥ </span>
									<b>17</b>
									<span>.00</span>
								</span>
								<em>单价买:¥29.90</em>
							</div>
						</li>
						<li>
							<span>立省12.90</span>
							<div className="f">
								<img src="https://img2.epetbar.com/common/upload/commonfile/2019/010/18/133418_183451.jpg?x-oss-process=style/fill&$1=200&$2=200" />
							</div>
							<div className="r">
								<p>洒家 新款普惠装豆腐猫砂 奶香味 2.5kg</p>
								<p>3人拼</p>
								<span>
									<span>¥ </span>
									<b>17</b>
									<span>.00</span>
								</span>
								<em>单价买:¥29.90</em>
							</div>
						</li>
					</ul>
				</Spelles>
			</Fragment>
		);
	}
}

export default Spellgroup;
