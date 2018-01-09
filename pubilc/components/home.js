import React,{Component} from 'react';
// import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Signin from "./auth/singin";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                {/*<Signin/>*/}
                <div className="new" id={"New"}>
                    <div className="new-text">
                        <h1>测试</h1>
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;
// module.exports = ProductBox;