import styled from "styled-components";


export const Body=styled.div`
    height:100%;overflow:auto;
`
// 搜索
export const SearchBox=styled.div`
    height:0.5rem;border-bottom:1px solid #f5f5f5;display:flex;
    justify-content:center;
    align-items:center;
    .input{
        width:2.958rem;height:0.333rem;
        background:#f6f6f6;display:flex;
        align-items:center;
        i{
            font-size:0.167rem;margin-left:0.083rem;
            margin-right:0.042rem;
        }
        span{
            font-size:0.117rem;color:#999;
        }
    }
`

// 导航条 有排序

export const Nav=styled.div`
    height:0.333rem;
    border-bottom:1px solid #f5f5f5;
    ul{
        height:100%;display:flex;
        justify-content:space-around;
        align-items:center;font-size:0.117rem;
        color:#666;
    }
`
// 点击默认出现的信息

export const Default=styled.div`
    height:1.4rem;
    .one{
        height:0.35rem;display:flex;
        justify-content:space-between;
        align-items:center;background:#f5f5f5;
        span{
            margin-left:0.1rem;
            font-size:0.117rem;
        }
        i{
            margin-right:0.1rem;
        }
    }
`
// 商品列表

export const GoodsList=styled.div`
    height:1.025rem;
    
    .zhong{
        width:2.958rem;margin:0 auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #f5f5f5;
        margin-top:0.083rem;
        .left img{
            width:0.833rem;height:0.833rem;
        }
        .right{
            width:2.042rem;
            h6{
                font-weight:normal;
                font-size:0.1rem;
            }
            h5{
                font-weight:normal;
                font-size:0.117rem;color:#FF5757;
                margin-top:0.292rem;;
            }
            p{height:0.25rem;
            box-sizing:border-box;
            line-height:0.25rem;
            margin-bottom:0.083rem;
                font-size:0.1rem;color:#999;
                i{
                    font-size:0.25rem;
                    float:right;display:inline-block;
                    color:green;
                }
            }
        }
    }
`