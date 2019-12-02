import styled from "styled-components";

export const Section = styled.div`
  font-size: 12px;
  padding-bottom: 100px;
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
export const Top = styled.div`
  width: 100%;
  height: 1.277rem;
  background-image: url("https://img2.epetbar.com/2019-11/22/17/783ee17e44086728c880b9291af07ebd.jpg?x-oss-process=style/water");
  background-size: 100% 1.267rem;
  .top {
    padding: 20px 20px 5px;
    height: 0.667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pic {
      height: 0.667rem;
      width: 0.667rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 50%;
      div {
        height: 0.6rem;
        width: 0.6rem;
        border: 1px solid #666666;
        border-radius: 50%;
        overflow: hidden;
        img {
          height: 0.6rem;
          width: 0.6rem;
        }
      }
    }
    .userFor {
      padding-left: 20px;
      flex: 1;
      span {
        color: #f00;
        font-size: 13px;
        font-weight: bold;
        padding-right: 5px;
      }
      a {
        display: inline-block;
        background: #25282f;
        color: #f1d08a;
        font-size: 10px;
        height: 16px;
        line-height: 16px;
        padding: 0 3px;
        margin-left: 6px;
        border-radius: 3px;
        i {
          margin-left: 5px;
          font-size: 10px;
          height: 15px;
          width: 15px;
          text-align: center;
          display: inline-block;
          background: #f1d08a;
          color: #25282f;
          border-radius: 50%;
        }
      }
      p {
        font-size: 14px;
      }
    }
  }

  .bottom {
    margin-top: 25px;
    height: 48px;
    background: url("https://misc.jiuxian.com/m_user/images/usercenter/transparent.png")
      repeat;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      margin-left: 25px;
      height: 48px;
      width: 67px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: url("https://misc.jiuxian.com/m_user/images/usercenter/grade.png")
        no-repeat;
      background-size: 67px 37px;
      padding-top: 10px;
      margin-top: 10px;
    }
    ul {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      li {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        img {
          width: 50px;
        }
      }
    }
    i {
      padding-top: 10px;
      font-style: normal;
      color: #666;
    }
  }
`;
export const List = styled.div`
  margin: 0.167rem 0.083rem;
  background: #f3f4f5;
  border-radius: 20px;
  padding-bottom: 10px;
  h3 {
    width: 335px;
    margin: 0 auto;
    font-size: 14px;
    padding: 20px 10px;
  }

  ul {
    padding-bottom: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      width: 25%;
      padding: 5px 0;
      i {
        width: 20px;
        height: 20px;
        img {
          width: 0.167rem;
        }
      }
    }
  }
`;

export const Nav = styled.div`
  color: #000;
  padding: 0 0.083rem;
  margin-top: 0.3rem;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background: #f3f4f5;
  display: flex;
  flex-direction: column;
  ._red {
    color: red;
  }
  .top {
    padding: 0.083rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > span:nth-of-type(2) {
      font-size: 10px;
      color: #aaa;
    }
  }
  ul {
    padding-top: 0.083rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      i {
        height: 20px;
        width: 20px;
        h img {
          width: 20px;
        }
      }
    }
    & > li:nth-of-type(5) {
      position: absolute;
      width: 0.004rem;
      height: 0.417rem;
      border: 0.001rem solid #ddd;
      margin-left: 90px;
    }
  }
`;
export const Tic = styled.div`
  width: 100%;

  div {
    margin: 0.167rem 0.083rem;
    img {
      width: 100%;
    }
  }

  border-radius: 0.417rem;
`;
export const Fet = styled.div`
  background: #f3f4f5;
  margin: 0.167rem 0.083rem;
  padding: 0.083rem 0.083rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .middle {
    flex: 1;
    img {
      width: 135px;
    }
  }
  .left {
    padding-right: 0.167rem;
    img {
      width: 50px;
    }
  }
  .right {
    img {
      width: 68px;
    }
  }
`;
