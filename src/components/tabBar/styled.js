import styled from "styled-components";

export const TabBarContainer =styled.div`
    width:100%;height:0.433rem;
    background:#fff;
    border-top:1px solid #ccc;
    position:fixed;
    left:0;bottom:0;
    ul{
        width:100%;height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
.active{
        color:green;
    }
    }
    
    li{
        width:100%;height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        i{
            font-size:0.2rem
        }
        span{
            font-size:0.117rem;
        }
    }
`