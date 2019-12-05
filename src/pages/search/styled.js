import styled from "styled-components";
// 总的包裹
export const Body =styled.div`
    background:#f4f5f7;
    min-height:5.833rem;;
`

export const Header =styled.div`
    height:0.408rem;border-bottom:1px solid #eee;
    ul{
        display:flex;height:0.408rem;
        justify-content:space-around;
        align-items:center;
        .iconfont{
            font-size:0.192rem;
        }
        .sou{
            width:2.4rem;height:0.292rem;
            display:flex;background:#f6f6f6;
            align-items:center;
            i{
                font-size:0.133rem;
                padding:0 0.042rem;
            }
            input{
            border:none;background:#f6f6f6;
            width:1.917rem;height:0.233rem;
            outline:none;font-size:0.117rem;
        }
        }
    }
`

// 热门搜索
export const HotSearch=styled.div`
    .container{
        h6{
            height:0.25rem;font-size:0.117rem;
            color:#666;background:#fbfbfd;
            display:flex;align-items:center;
            font-weight:normal;margin-left:0.1rem;
            i img{
                width:0.167rem;height:0.167rem;margin-right:0.067rem;
            }
        }
        .hot {
            background:#f4f5f7;
            .hot1{
                width:2.958rem;margin:0 auto;
                span{
            background:#fff;padding:0.017rem 0.083rem;
            border-radius:0.083rem;margin-right:0.083rem;
            display:inline-block;margin-top:0.167rem;
            font-size:0.1rem;color:#999;
        }
            }
            
        }
    }
`