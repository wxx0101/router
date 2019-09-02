import loadable from "react-loadable"
import Loading from "@/components/loading"

const Approval = loadable({
    loader: () => import("@/view/main/checkWork/child/approval/"),
    loading: Loading
})
const Statistics = loadable({
    loader: () => import("@/view/main/checkWork/child/statistics/"),
    loading: Loading
})


const routes = [
    {
        path: "/checkWork/approval",  // 考勤审批
        component: Approval,
        meta: {
            title: "考勤审批"
        }
    },
    {
        path: "/checkWork/statistics",  // 考勤统计
        component: Statistics,
        meta: {
            title: "考勤统计"
        }
    },
    {
        path: "/checkWork",
        redirect: "/checkWork/approval",
        teLName:'员工考勤'
    }
]

export default routes;