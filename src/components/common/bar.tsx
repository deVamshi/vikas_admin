import React from 'react';
import logo from './logo.svg';
// import './App.scss';
import { MailOutlined, PhoneFilled } from '@ant-design/icons';
import { Space } from 'antd';
function Bar(props: any) {
    return (
        <div>

            <MailOutlined />
            {props.mail}
            <PhoneFilled />
            {props.phone}


        </div>
    );
}

export default Bar;