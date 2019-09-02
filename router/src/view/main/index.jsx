import React, { Component } from 'react'
import Header from "@/components/header/"
import Slidebar from "@/components/sidebar/"
import RouterView from "@/router/routerView"
import "./style/main.css"
import { Layout } from 'antd'
const { Content } = Layout;

class Main extends Component {
    state = {
        SlideArr: []
    }
    render() {
        let { routes } = this.props;
        let { SlideArr } = this.state;
        return (
            <Layout>
                <Header headerRoutes={routes} slideFn={this.slideFn} />
                <Layout className="content">
                    <div className={SlideArr.length ? "slideBox" : "notClass"}><Slidebar SlideArr={SlideArr} /></div>
                    <Content className="con">
                        <RouterView routes={routes} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
    slideFn = (title) => {
        let SlideArr = this.props.routes.filter(item => item.path.includes(title) && title !== '/main' && !item.redirect)
        this.setState({ SlideArr: SlideArr })
    }
    componentDidMount() {
        if (this.props.location.pathname.split('/').length <= 3) return;
        let url = this.props.location.pathname.split('/')[2]
        this.slideFn(url)
    }
}

export default Main;