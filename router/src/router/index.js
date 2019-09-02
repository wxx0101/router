import React from 'react'
import routes from "./routerSetting"
import RouterView from "./routerView"
import { BrowserRouter } from "react-router-dom"

function Router() {
    return <BrowserRouter>
        <RouterView routes={routes} />
    </BrowserRouter>
}
export default Router;