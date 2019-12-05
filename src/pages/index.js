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
export const Search=Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

export const List=Loadable({
    loader:()=>import("./list"),
    loading:Loading
})

export const NewGuest=Loadable({
    loader:()=>import("./newguest"),
    loading:Loading
})

export const Rob=Loadable({
    loader:()=>import("./rob"),
    loading:Loading
})
export const DogFood=Loadable({
    loader:()=>import("./dogfood"),
    loading:Loading
})
export const Spellgroup=Loadable({
    loader:()=>import("./spellgroup"),
    loading:Loading
})

export const Cleargoods=Loadable({
    loader:()=>import("./cleargoods"),
    loading:Loading
})

export const Detail=Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})
export const Exit=Loadable({
    loader:()=>import("./exit"),
    loading:Loading
})

export const Collection=Loadable({
    loader:()=>import("./collection"),
    loading:Loading
})

