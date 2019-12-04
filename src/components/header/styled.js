import styled from "styled-components";

export const HeaderContainer = styled.div `
    height:0.417rem;display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;position:relative;
    border-bottom:1px solid #f5f5f5;
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
    height:0.567rem;border-bottom:1px solid #f5f5f5;
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
