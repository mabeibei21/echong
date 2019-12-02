import styled from "styled-components";

//body
export const Body=styled.div`
    height:100%;overflow:auto;
`
// 导航2
export const NavSec=styled.div`
    height:0.633rem;border-bottom:1px solid #d7d7d7;
    .top{
        height:0.25rem;margin-top:0.083rem;
        ul{
            height:100%;
            display:flex;
            justify-content:space-around;
            align-items:center;
            li:nth-of-type(1){
                font-size:0.117rem;color:#333;
            }
            li:nth-of-type(2){
                width:2.025rem;background: rgba(240,240,240,1);height:0.25rem;display:flex;align-items:center;
                border-radius:0.125rem;
                font-size:0.1rem;color:#666;
                i{
                    margin-left:0.042rem;margin-right:0.017rem;
                }
            }
        }
    }
    .NavXia{
        height:0.3rem;
        ol{
            height:100%;width:100%;
            display:flex;justify-content:space-around;
            align-items:center;font-size:0.1rem;
            margin-top:0.083rem;
        }
    }
`

// 能不能吃 导航3
export const NavThree=styled.div`
    height:0.817rem;
    ul{
        height:100%;width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        li img{
            width:0.625rem;height:0.817rem;
        }
    }
`

// 经验分享

export const Share=styled.div`
padding-bottom:0.883rem;
    .bao{
        width:2.875rem;height:1.067rem;
        margin:0 auto; border:1px solid #d7d7d7; 
        border-radius:0.083rem;
        margin-top:0.125rem;
        .tutu{
            height:0.683rem;display:flex;
            justify-content:space-around;
            align-items:center;
            img{
                width:1.042rem;height:0.517rem;
                margin-top:0.167rem;
            }
            .ppp{
                width:1.5rem;margin-top:0.125rem;
                h6{
                    font-weight:normal;
                    font-size:0.117rem;
                }
                h5{
                    font-weight:normal;
                    font-size:0.1rem;color:#999;
                    width:1.5rem;white-space:nowrap;
                    overflow:hidden;text-overflow:ellipsis;
                }
            }
        }
        .zi{
            display:flex;height:0.225rem;
            justify-content:space-between;
            align-items:center;margin-top:0.125rem;
            p{
                font-size:0.1rem;color:#333;
                margin-left:0.125rem;
                img{
                    width:0.192rem;height:0.192rem;
                }
            }
            a{
                font-size:0.1rem;color:#999;
                margin-right:0.125rem;
                img{
                    width:0.133rem;height:0.125rem;
                }
            }
        }
    }
`