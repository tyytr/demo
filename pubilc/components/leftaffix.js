import React,{Component} from 'react';
import { Affix,Menu,Icon,Switch } from 'antd';
import 'antd/dist/antd.css';
class Left extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mode: 'inline',
            theme: 'light'
        };
    }
    // changeMode = (value) => {
    //     this.setState({
    //         mode: value ? 'vertical' : 'inline',
    //     });
    // }
    // changeTheme = (value) => {
    //     this.setState({
    //         theme: value ? 'dark' : 'light',
    //     });
    // }
    render(){
        return (
            <div className="scrollable-container col-sm-4" ref={(node) => { this.container = node; }}>
                <div className="background">
                    <Affix target={() => this.container}>
                        <div>
                            <Switch onChange={this.changeMode} /> Change Mode
                            <span className="ant-divider" style={{ margin: '0 1em' }} />
                            <Switch onChange={this.changeTheme} /> Change Theme
                            <br />
                            <br />
                            <Menu
                                style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode={this.state.mode}
                                theme={this.state.theme}
                            >
                                <Menu.Item key="1">
                                    <Icon type="mail" />
                                    Navigation One
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="calendar" />
                                    Navigation Two
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Affix>
                </div>
            </div>
        )
    }
}
export default Left;
// module.exports = ProductBox;