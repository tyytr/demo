/**
 * Created by fengxiaoli on 2017/12/12.
 */
import React, { Component } from 'react';

class Singin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <form action="/server/user/login.js" method={"post"}>
                    <input type="text" name={"name"} placeholder={"名字"} ref={"name"}/>
                    <input type="text" name={"password"} placeholder={"密码"} ref={"password"}/>
                    <button type={"submit"}>登陆</button>
                </form>
            </div>
        );
    }
}
export default Singin;






