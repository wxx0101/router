import React, { Component } from 'react'
import { Layout } from 'antd';
import { Link } from "react-router-dom"

const { Header } = Layout;

class HeaderTou extends Component {
    state = {
        topArr: []
    }
    render() {
        let { topArr } = this.state;
        return (
            <Header>
                {
                    topArr.map((item, index) => <Link to={item.redirect} key={index}><div onClick={() => { this.props.slideFn(item.path) }} style={{ display: 'inline', marginLeft: '15px' }}>{item.teLName}</div></Link>)
                }
            </Header>
        )
    }
    componentDidMount() {
        let { headerRoutes } = this.props
        let routerArr = headerRoutes.filter(item => item.redirect)
        this.setState({
            topArr: routerArr
        })
    }
}


export default HeaderTou;