/**
 * Created by fengxiaoli on 2017/12/12.
 */
import React, { Component } from 'react';
import axios from 'axios';
import {
    ROOT_URL
} from "../../actions/type";

class Singup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/*<form onSubmit={this.handleFormSubmit.bind(this)}>*/}
                    {/*<input type="text" name={"name"} placeholder={"名字"} ref={"name"}/>*/}
                    {/*<input type="text" name={"password"} placeholder={"密码"} ref={"password"}/>*/}
                    {/*<button type="submit">注册</button>*/}
                {/*</form>*/}
                <form action={"http://localhost:3000/users/addUser"} method={"get"}>
                    <input type="text" name="username" placeholder={"名字"} ref={"username"}/>
                    <input type="text" name="password" placeholder={"密码"} ref={"password"}/>
                    <input type="submit"/>
                    {/*<button type="submit">注册</button>*/}
                </form>
            </div>
        );
    }
}
export default Singup;






