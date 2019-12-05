import styled from "styled-components";
export const Body=styled.div`
    height:100%;
    overflow:auto;
`
// 每日疯抢的导航条
export const RobDay=styled.div`
    height:0.5rem;
    background:pink;
    .active{
        background:rgba(255,255,255,0.4)
    }
    ul{
        width:100%;height:100%;
        display:flex;
        overflow-x:auto;
    
        li{
            display:flex;justify-content:center;
        align-items:center;flex-direction:column;
        width:0.625rem;
        box-sizing:content-box;
        div{
            text-align:center;
            width:100px;
        }
        a{
            font-size:0.1rem;color:#333;
        }
        span{
            margin-top:0.042rem;
            width:100%;border-top:1px solid red;
            display:flex;justify-content:center;
            img{
                width:0.083rem;height:0.083rem;
                position:relative;
                top:-0.042rem;
            }
        }
        i{
            font-style:normal;font-size:0.1rem;
            color:#333;
        }
        }
    }
`
export const Title=styled.div`
    height:0.533rem;
    display:flex;justify-content:center;
    align-items:center;font-size:0.125rem;
    border-bottom:1px solid #d7d7d7;
    img{
        width:0.133rem;height:0.133rem;
        margin-right:0.042rem;
    }
`
export const Goods=styled.div`
.goods{
    height:1.208rem;
    display:flex;
}
    
    .left {
        margin-left:0.1rem;margin-right:0.083rem;
        display:flex;justify-content:center;
        align-items:center;
        img{
        width:0.875rem;height:0.875rem;
    }}
    .right{
        width:2rem;box-sizing:border-box;
        border-bottom:1px solid #d7d7d7;
        h6{
            font-weight:normal;
            font-size:0.108rem;color:#333;
            margin-top:0.042rem;
        }
        h5{
            font-weight:normal;
            font-size:0.1rem;color:#999;
            float:right;
            margin-top:0.25rem;
        }
        p{
            display:flex;height:0.233rem;margin-top:0.417rem;
            justify-content:space-between;
            span{
                font-size:0.15rem;color:#ea5858;
                del{
                    font-size:0.1rem;color:#999;
                }
            }
            i{
                font-size:0.1rem;width:0.667rem;height:0.25rem;background:#4ace83;
                color:#fff;border-radius:0.125rem;
                display:flex;justify-content:center;
                align-items:center;font-style:normal;
            }
        }
    }
`