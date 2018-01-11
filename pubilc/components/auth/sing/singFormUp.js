import React, { Component } from 'react';
import Code from './code';
class SingFormUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <div className="form-group">
                                <label htmlFor="username">用户名</label>
                                <input type="text" name="username" className="form-control" placeholder="用户名" />
                            </div>
                            <div className="form-group">
                                <label className="exampleInputPassword1">密码</label>
                                <input type="password" name="password" className="form-control" placeholder="密码" />
                            </div>
                            <div className="form-group">
                                <label className="exampleInputPassword1">确认密码</label>
                                <input type="password" name="rpassword" className="form-control" placeholder="确认密码" />
                            </div>
                            {/*<div className="form-group">*/}
                                {/*<label className="exampleInputFile">File input</label>*/}
                                {/*<input type="file" id="exampleInputFile" />*/}
                                    {/*<p className="help-block">Example block-level help text here.</p>*/}
                            {/*</div>*/}
                            <Code/>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />我已阅读并同意 <a href="#">《易换网用户协议》</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-default">提交</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingFormUp;