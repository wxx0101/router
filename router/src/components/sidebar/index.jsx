import React, { Component } from 'react'
import { Layout } from 'antd';
import { Link } from "react-router-dom"
const { Sider } = Layout;

class Slidebar extends Component {
    render() {
        let { SlideArr } = this.props
        return (
            <Sider>
                {SlideArr.length ? SlideArr.map((item, i) => <Link style={{display: "block",textAlign: "center",height: "50px",lineHeight: "50px"}} to={item.path} key={i}>{item.meta.title}</Link>) : ''}
            </Sider>
        )
    }
}


export default Slidebar;