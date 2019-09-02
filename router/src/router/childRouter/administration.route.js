import loadable from "react-loadable"
import Loading from "@/components/loading"

const Archives = loadable({
    loader: () => import("@/view/main/administration/child/archives/"),
    loading: Loading
})
const Curriculum = loadable({
    loader: () => import("@/view/main/administration/child/curriculum/"),
    loading: Loading
})
const Distribution = loadable({
    loader: () => import("@/view/main/administration/child/distribution/"),
    loading: Loading
})

const routes = [
    {
        path: "/administration/archives",  // 档案管理
        component: Archives,
        meta: {
            title: "档案管理"
        }
    },
    {
        path: "/administration/curriculum",  // 课程管理
        component: Curriculum,
        meta: {
            title: "课程管理"
        }
    },
    {
        path: "/administration/distribution",  //  分配管理
        component: Distribution,
        meta: {
            title: "分配管理"
        }
    },
    {
        path: "/administration",
        redirect: "/administration/archives",
        teLName:'员工管理'
    }
]

export default routes;