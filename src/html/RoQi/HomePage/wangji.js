import React from 'react'
import { Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

var DenLuCss = require('./wangji.css')
export default class DenLu extends React.Component {



  render() {

    return (
      <div className={DenLuCss.right}>
        <div className={DenLuCss.border}>
          <div className={DenLuCss.center}>
            <from>
              <Input className={DenLuCss.right1} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ width: 300 }} placeholder="Username" />
              <Input className={DenLuCss.right1} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} style={{ width: 300 }} type="password"
                placeholder="Password" />
              {/* <div className={DenLuCss.zhuce}><Link to="/zhuce">zhuce</Link></div> <div className={DenLuCss.wangji}><Link to="wangji" >忘记密码</Link></div> */}
              <Button href="./denlu" style={{ width: 150 }} className={DenLuCss.button}>确定
              </Button>
            </from>
          </div>
        </div>
      </div>
    )
  }
}
