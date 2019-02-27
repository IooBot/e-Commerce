import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import cart_empty from '../../../images/cart_empty.jpg';
import './index.css';

class Empty extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let contentHeight = window.innerHeight - 95;

        return (
            <div className="cart-empty" style={{height:contentHeight}} >
                <div>
                    <img src={cart_empty} alt="img" width={100}/>
                </div>
                <div>购物车空空如此</div>
                <div>
                    <button className="empty-button"
                            onClick={()=>{
                                window.location = '/#tab=my'
                            //     this.props.history.push({
                            //         pathname: `/`
                            // })
                            }}>
                        去逛逛
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Empty);