import styled from "styled-components";
// 身体body
export const Body=styled.div`
    height:100%;
    
`
// 头部
export const HeaderContainer = styled.div `
    height:0.417rem;display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;position:relative;
    border-bottom:1px solid #ccc;
    font-size:0.15rem;
    .iconfont{
        font-size:0.167rem;
    }
    .header_r {
        display:flex;padding-right:0.042rem;width:0.508rem;
        p{
            width:0.25rem;margin-right:0.042rem;font-size:0.117rem;
        }i{
        float:right;
    }
    }
    
    
    .header_l{
        width:0.508rem;padding-left:0.042rem;
        i{
            
        }
    }
    .header_c{
        width:2.333rem;display:flex;justify-content:center;
        align-items:center;
    }
`

// messagebox
export const Search=styled.div`
    height:0.567rem;border-bottom:1px solid #d7d7d7;
    ul{
        height:0.567rem;display:flex;justify-content:space-around;
        align-items:center;
        li{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            i{
                font-size:0.208rem;color:#999;
            }
            span{
                font-size:0.117rem;color:#666;
            }
        }
    }
`

// 第二个导航Nav
export const Nav=styled.div`
    height:0.375rem;border-bottom:1px solid #d7d7d7;
    ul{
        height:100%;width:100%;
        display:flex;
        li{
            width:1.558rem;height:100%;
            display:flex;justify-content:center;
            align-items:center;font-size:0.117rem;
        }
        /* li:nth-of-type(1){
            border-bottom:1px solid green;
        } */
        .active{
            border-bottom:1px solid green;
        }
    }
`
// 商品
export const Goods=styled.div`
    height:0.917rem;width:3.125rem;
    display:flex;justify-content:space-around;
    align-items:center;margin-top:0.083rem;
    background:#fff;
    .left img{
        width:0.75rem;height:0.75rem;
    }
    .right{
        width:2.208rem;height:0.917rem;
        h6{
            font-weight:normal;
            font-size:0.117rem;color:#333;
        }
        h5{
            font-weight:normal;
            font-size:0.108rem;
            span{
                color:#f60;
            }
        }
        .xia{
            display:flex;justify-content:space-between;
            align-items:center;height:0.317rem;
            span{
                font-size:0.133rem;color:#f60;
                font-weight:bold;
            }
            a{
                background:#f60;width:0.383rem;height:0.208rem;color:#fff;
                font-size:0.108rem;
                display:flex;
                justify-content:center;
                align-items:center;
                border-radius:0.042rem;
            }
        }
    }
`

export const Class=styled.div`
        height:0.375rem;
        display:flex;
        justify-content:center;
        align-items:center;
    
`