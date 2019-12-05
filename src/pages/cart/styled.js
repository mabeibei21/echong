
import styled from "styled-components";
// body
export const Body=styled.div`
    height:100%;
    background:#f5f5f5;
`


// 购物车商品列表
export const CartList=styled.div`
background:#fff;
    h6{
        height:0.375rem;
        font-weight:normal;
        font-size:0.125rem;
        display:flex;align-items:center;
        i{
            margin-left:0.1rem;margin-right:0.1rem;
            color:green;font-size:0.167rem;
        }
    }
    .carta{
        display:flex;justify-content:space-around;
        align-items:center;height:0.917rem;
        width:2.958rem;
        .cartc img{
            width:0.708rem;height:0.708rem;
        }
        .cartr{
            width:1.883rem;
        }
        .cartr h6{
            font-weight:normal;
            span{
                color:#f05757;font-size:0.1rem;
            }
            i{
                font-size:0.1rem;font-style:normal;
            }
        }
        p {
            display:flex;justify-content:space-between;
            align-items:center;
            i{
            font-size:0.117rem;color:#f05757;
            font-style:normal;
        }
        strong {
            b{
                border:1px solid #d7d7d7;
                padding:0 0.042rem;
                border-radius:0.017rem 0 0 0.017rem;
                color:#d7d7d7;
            }
            em{
                border-top:1px solid #d7d7d7;
                border-bottom:1px solid #d7d7d7;
                padding:0 0.042rem;font-style:normal;
                color:#d7d7d7;font-weight:normal;
            }
            a{
                border:1px solid #d7d7d7;
                padding:0 0.042rem;color:#d7d7d7;
                border-radius:0 0.017rem 0.017rem 0;
            }
        }
        }
    }
`

// 底部总金额
export const Bottom=styled.div`
    height:0.5rem;background:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;position:fixed;
        bottom:0;z-index:100;width:100%;
    p{
        margin-left:0.1rem;font-size:0.117rem;
        i{
            font-size:0.167rem;color:green;
            margin-right:0.017rem;
        }
        span{
            color:#f05757;
        }
    }
    h6{
        width:0.667rem;height:0.292rem;
        background:green;color:#fff;
        font-size:0.117rem;
        border-radius:0.125rem;
        display:flex;justify-content:center;
        align-items:center;margin-right:0.1rem;
        
    }
`