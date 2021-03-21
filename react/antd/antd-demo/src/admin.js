import React, { Component } from 'react';
import { Row,Col } from 'antd'
import Header from './components/Header'

const Admin=(props)=>{//函数式组件，要传入props
    return (
        //后台的界面架构
        <div className='app'>
            <Header />
            <div className="app-content">
                <Row>
                    <Col span={2}>

                    </Col>
                    <Col span={10}>
                        {props.children}
                    </Col>
                    <Col span={5}>

                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Admin;