import styled from "styled-components";
export const Section=styled.div`
    position:relative;
    top:0;left:0;bottom:0;right:0;
    padding-bottom:0.4rem;
    overflow:auto;height:100%;
.content{
    flex:1;
    position:absolute;
    top:0;left:0;right:0;
    padding-bottom:0.8rem;
}
    
`
//轮播图
export const Slider =styled.div`
    width:3.125rem;height:2.417rem;
    img{
        width:3.125rem;height:2.417rem;
    }
`

//搜索+导航
export const Top=styled.div`
    background:${props=>props.color};
    height:0.867rem;position:fixed;
    z-index:10;width:3.125rem;color:#fff;
    top:0;left:0;overflow:hidden;
    .sousuo{
        display:flex;height:0.25rem;
        justify-content:space-around;
        align-items:center;margin-top:0.208rem;
        p{
            width:2.542rem;height:0.208rem;color:#333;
            background:#f3f4f5;border-radius:0.083rem;
            i{
                margin-left:0.125rem;font-size:0.083rem;margin-right:0.017rem;
            }
            span{
                font-size:0.1rem;
            }
        }
        i{
            font-size:0.208rem;
        }
    }
    .nav{
        height:0.367rem;overflow:hidden;
        ul{
            display:flex;height:0.367rem;
            width:100%;overflow-x:auto;
            align-items:center;
            li {
                padding:0 0.05rem;display:block;
                white-space:nowrap;font-size:0.117rem;
                img{
                width:0.575rem;height:0.167rem;
            }
        }
        .jing{
                font-size:0.167rem;font-weight:bold;
            }
    }
}
`

//中间导航
export const Nav=styled.div`
    height:0.958rem;position:relative;
    top:-0.125rem;left:0;
    img{
        width:0.625rem;height:0.958rem;
    }
`
//图片的组合
export const Tu1=styled.div`
    height:1.275rem;position:relative;
    top:-0.167rem;
    .tu1{
        width:3.125rem;height:0.567rem;
    }
    .tu2{
        width:3.125rem;height:0.708rem;
    }
`
export const Tu2=styled.div`
    height:1.767rem;display:flex;
    position:relative;top:-0.167rem;
    .left{
        width:1.45rem;height:1.767rem;
        img{
            width:1.45rem;height:1.767rem;
        }
    }
    .right img{
        width:1.675rem;height:0.592rem;
    }
`
export const Tu3=styled.div`
    height:0.9rem;width:3.125rem;
    position:relative;top:-0.167rem;
    img{
        height:0.9rem;width:3.125rem;
    }
`
// 每日疯抢
export const Rushed=styled.div`
    height:1.208rem;display:flex;
    justify-content:space-around;
    .tuu{
        display:flex;
        /* justify-content:space-around; */
        align-items:center;height:0.208rem;
        padding:0 0.1rem;
        img{
            width:0.5rem;height:0.133rem;
        }
        h6{
            font-weight:normal;
            span{
                background:#fb4752;
                font-size:0.083rem;
                border-radius:0.042rem 0 0 0.042rem;border:1px solid #fb4752;color:#fff;
            }
            b{
                border:1px solid #fb4752;
                border-radius:0 0.042rem 0.042rem 0;
            }
        }
    }
    .zuohe{
        display:flex;float:left;
        .zuozuo{
            width:0.7rem;height:0.792rem;
            display:flex;flex-direction:column;
            justify-content:center;
            align-items:center;
            img{
                width:0.492rem;height:0.492rem;
            }
            h6{
                color:#ff5757;font-size:0.117rem;
            }
            h5{
                font-weight:normal;
                font-size:0.083rem;color:#999;
            }
        }
    }
`

export const AllBuy =styled.div`
    .buy{
        .tu1{
            width:3.125rem;height:0.25rem;
        }
        .tu2{
            margin-top:0.083rem;
            width:3.125rem;height:2.025rem;
        }
    }
    .book{
        .tutop{
            width:3.125rem;height:0.25rem;
        }
        .tubottom{
            margin-top:0.083rem;
            width:3.125rem;height:1.408rem;
        }
    }
`

export const Like=styled.div`
    .guess{
        width:2.958rem;margin:0.25rem auto;
        h5 img{
            width:1.167rem;height:0.158rem;
            margin-bottom:0.167rem;
        }
        .box{
            width:1.4rem;height:2.133rem;
            border:1px solid #ccc;float:left;
            margin-right:0.058rem;
            margin-bottom:0.083rem;border-radius:0.083rem;
            .box1 {
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                img{
                width:1.175rem;height:1.175rem;
                margin-top:0.125rem;
            }
            p{
                font-size:0.117rem;
                width:1.175rem;white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                margin-top:0.042rem;
            }
            h6{
                display:flex;justify-content:space-between;
                align-items:center;
                margin-top:0.042rem;
                span{
                    font-size:0.117rem;color:#ff5757;padding-right:0.25rem;
                }
                img{
                    width:0.217rem;height:0.217rem;
                    padding-left:0.25rem;
                }
            }
            }
        }
    }
`
