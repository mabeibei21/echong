import styled from "styled-components";

export const Body=styled.div`
    height:100%;
    overflow:auto;
    background:orange;
    flex:1;
    .big{
        margin-bottom:0.8rem;
    }
`
// 开始的主图
export const Tu=styled.div`
height:7.15rem;
    img:nth-of-type(1){
        width:3.125rem;height:3.767rem;
    }
    img:nth-of-type(2){
        width:3.125rem;height:3.383rem;
    }
`

// 人气推荐

export const Intro=styled.div`
min-height:5.833rem;
    .intro{
        height:2.867rem;width:1.533rem;
        background:#fff;display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;padding:0 0.083rem;
        box-sizing:border-box;float:left;
        margin-right:0.058rem;margin-bottom:0.058rem;
        img{
            width:1.533rem;height:1.533rem;
        }
        h6{
            font-weight:normal;
            font-size:0.1rem;color:#333;
            height:0.333rem
        }
        h5{
            font-weight:normal;
            display:flex;justify-content:space-between;
            align-items:center;height:0.242rem;
            width:100%;
            span{
                font-size:0.15rem;color:#ff4400;
            }
            del{
                font-size:0.1rem;color:#999;
            }
        }
        h4{
            width:1.225rem;height:0.292rem;
            background:#ff4400;font-size:0.117rem;
            color:#fff;display:flex;
            justify-content:center;
            align-items:center;
            border-radius:0.167rem;
            margin-top:0.083rem;
        }
    }
    .intro:nth-of-type(2n){
        margin-right:0;
    }
`