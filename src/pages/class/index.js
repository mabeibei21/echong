import React, { Component } from 'react'
import {PageContainer} from "../../common/styled";
import { Classifyi, Head } from "./styled";
import Tab2 from "../../components/tab2/index";
class Class extends Component {
    constructor() {
		super();
		this.state = {
			flag: "block"
		};
	}
    render() {
        return (
            <PageContainer>
                <Head>
					<div className="sortHead">
						<div>
							<p className="green">分类</p>
						</div>
						<div>
							<p>品牌</p>
						</div>
						<a href="">
							<img
								src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png"
								alt=""
							/>
						</a>
					</div>
				</Head>

				<Classifyi fl={this.state.flag}>
					<div className="sortBody">
						<div className="left">
							<ul>
								<li className="xuanZhong">为您推荐</li>
								<li>E宠国际</li>
								<li>狗狗主粮</li>
								<li>狗狗零食</li>
								<li>狗狗玩具</li>
								<li>狗狗清洁</li>
								<li>狗狗保健</li>
								<li>狗狗护理</li>
								<li>狗狗生活</li>
								<li>狗狗牵引</li>
								<li>出游洗澡</li>
								<li>狗狗服饰</li>
								<li>狗狗美容</li>
								<li>狗狗窝垫</li>
							</ul>
						</div>
						<div className="right">
							<div className="right-content">
								<a href="" className="right-title">
									热门分类
								</a>
								<ul>
									<li>
										<a href="">
											<div>
												<img
													src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300"
													alt=""
												/>
											</div>
											<p>磨牙洁齿</p>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img
													src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300"
													alt=""
												/>
											</div>
											<p>进口狗粮</p>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img
													src="https://img2.epetbar.com/nowater/2018-08/14/21/87aa3e41aa86317af010c6b1af29064f.jpg?x-oss-process=style/fill&$1=300&$2=300"
													alt=""
												/>
											</div>
											<p>国产狗粮</p>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img
													src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300"
													alt=""
												/>
											</div>
											<p>磨牙洁齿</p>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img
													src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300"
													alt=""
												/>
											</div>
											<p>磨牙洁齿</p>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img
													src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg?x-oss-process=style/fill&$1=300&$2=300"
													alt=""
												/>
											</div>
											<p>磨牙洁齿</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Classifyi>
                <Tab2 fl={!this.state.flag}></Tab2>
            </PageContainer>
        )
    }
}


export default Class;