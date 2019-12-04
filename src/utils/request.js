import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";
// 将url中的参数转为对象；
// console.log(qs.parse(url));
// 将对象转为url参数形式
// console.log(qs.stringify(a))
const get=(options)=>{
    let url=options.url;
    let data=options.data;
    if(data){
        var str='';
        for(var key in data){
            str += "&"+key+"="+data[key];
        }
        url=url+"?"+str.slice(1);
    }
    var result=fetchPro(url,{
        headers:{
        // json格式
        "content-type":"application/json",
        ...options.headers
        }
    }).then(res=>res.json());
    return result;
}

const post=(options)=>{
    var result=fetchPro(options.url,{
        method:options.method,
        body:qs.stringify(options.data),
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        }
    }).then(res=>res.json())
    return result;
}

export default{
    get,
    post
}