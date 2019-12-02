import React, { Component } from "react";
import { PageContainer } from "../../common/styled";
import Header from "../../components/header/index";
import { Section, Top, Nav, Fet, Tic, List } from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Mine extends Component {
  render() {
    return (
      <PageContainer>
        <Header title="我的E宠" />
        <Section>
          <div>
            <Top>
              <div className="top">
                <div className="pic">
                  <div>
                    <img
                      onClick={this.handleExit.bind(this)}
                      src="https://img2.epetbar.com/dogs/4.jpg?x-oss-process=style/waterfall&$1=100"
                    />
                  </div>
                </div>
                <div className="userFor">
                  <span>宠值v1</span>

                  <p>主人4512345</p>
                </div>
              </div>
              <div className="bottom">
                <p className="grade">LV1宠物</p>
                <ul>
                  <li>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png" />
                  </li>
                  <i>|</i>
                  <li>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png" />
                  </li>
                  <i>|</i>
                  <li>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png" />
                  </li>
                  <i>|</i>
                  <li>
                    <img src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png" />
                  </li>
                </ul>
              </div>
            </Top>
            <Nav>
              <div className="top">
                <span>我的订单</span>
                <span>查看订单></span>
              </div>
              <ul>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png" />
                  </i>
                  <span>待付款</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" />
                  </i>
                  <span>待收货</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" />
                  </i>
                  <span>待评价</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" />
                  </i>
                  <span>自助售后</span>
                </li>
                <li> &nbsp;</li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" />
                  </i>
                  <span>国际订单</span>
                </li>
              </ul>
            </Nav>
            <Fet>
              <div className="left">
                <img src="https://static.epetbar.com/static_www/my_dev/pet.png" />
              </div>
              <div className="middle">
                <img src="https://static.epetbar.com/static_www/my_dev/pet_intro.png" />
              </div>
              <div className="right">
                <img src="https://img2.epetbar.com/nowater/2018-11/22/08/f79e79530f4b395a948649288cea0ffb.png" />
              </div>
            </Fet>
            <Nav>
              <div className="top">
                <span>我的钱包</span>
                <span>查看钱包></span>
              </div>
              <ul>
                <li>
                  <span className="_red">0</span>
                  <span>待付款</span>
                </li>
                <li>
                  <span className="_red">0</span>
                  <span>待收货</span>
                </li>
                <li>
                  <span className="_red">0.00</span>
                  <span>待评价</span>
                </li>
                <li>
                  <span className="_red">0.00</span>
                  <span>国际订单</span>
                </li>
                <li></li>
              </ul>
            </Nav>
            <Tic>
              <div>
                <img src="https://img2.epetbar.com/nowater/2019-10/24/10/7eaac29196b0d05288eba4d3c86a6c5c.jpg" />
              </div>
            </Tic>
            <List>
              <h3>我的服务</h3>
              <ul>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png" />
                  </i>
                  <span>联系客服</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png" />
                  </i>
                  <span>潮品预售</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/2ef8974804eee7c917d1fbc3c51b6305.png" />
                  </i>
                  <span>我的团购</span>
                </li>
                <li onClick={this.handleCollection.bind(this)}>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png" />
                  </i>
                  <span>我的收藏</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/1d3a06612387336fdef4340d8367a03f.png" />
                  </i>
                  <span>我的兑换</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png" />
                  </i>
                  <span>我的关注</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png" />
                  </i>
                  <span>萌爪联盟</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png" />
                  </i>
                  <span>我的捐赠</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-06/05/00/d417474a0819261bea63d703c2d4fe1e.png" />
                  </i>
                  <span>我的预售</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-10/19/15/24aa6012d8e85ea2ce7adebdbc1907c5.png" />
                  </i>
                  <span>我的现金券</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-11/05/14/a5201c020888233120d212462dd28243.png" />
                  </i>
                  <span>十克关爱</span>
                </li>
                <li>
                  <i>
                    <img src="https://img2.epetbar.com/nowater/2019-11/11/12/353dcdd05c29c9dc1453fcb57cf6d62a.png" />
                  </i>
                  <span>隐私条款</span>
                </li>
              </ul>
            </List>
          </div>
        </Section>
      </PageContainer>
    );
  }
  handleExit() {
    this.props.history.push("exit");
  }
  handleCollection(){
    this.props.history.push("collection");
  }
}

export default Mine;
