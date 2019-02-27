import React, {Component} from 'react'
import './index.css'
import {NavBar, Icon} from 'antd-mobile'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let {changePageInMy} = this.props
        return (
            <div className='order-wrap'>
                <div className='order-navbar-wrap'>
                    <NavBar
                        className='order-navbar'
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => changePageInMy('all', {}, false)}
                        rightContent={[
                            <Icon key="1" type="ellipsis"/>,
                        ]}
                    >订单详情</NavBar>
                </div>
            </div>
        )
    }
}

export default Order