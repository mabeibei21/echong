import Loadable from "react-loadable";
import Loading from "../common/loading";

export const Select=Loadable({
    loader:()=>import("./select"),
    loading:Loading
})
export const Class=Loadable({
    loader:()=>import("./class"),
    loading:Loading
})
export const Book=Loadable({
    loader:()=>import("./book"),
    loading:Loading
})
export const Cart=Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})
export const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
export const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
