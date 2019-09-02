import loadable from "react-loadable"
import Loading from "@/components/loading/"
import { administration, checkWork } from "./childRouter/index"

const getContent = (com, routePath) => {
    return com.map(item => {
        item.path = routePath + item.path
        item.redirect && (item.redirect = routePath + item.redirect)
        return item
    })
}

const Home = loadable({
    loader: () => import("@/view/main/home/"),
    loading: Loading
})
const Login = loadable({
    loader: () => import("@/view/login/"),
    loading: Loading
})
const Main = loadable({
    loader: () => import("@/view/main/"),
    loading: Loading
})


const routes = [
    {
        path: "/",
        redirect: "/main"
    },
    {
        path: "/main",
        component: Main,
        children: [
            {
                path: "/main",
                redirect: "/main/home",
                teLName: "首页"
            },
            {
                path: "/main/home",
                component: Home,
                meta: {
                    title: "首页"
                }
            },
            ...getContent(administration, "/main"),
            ...getContent(checkWork, "/main")
        ]
    },
    {
        path: "/login",
        component: Login
    }
]

export default routes;