import React from 'react';
// import './App.scss';
// import './Detprof.scss';
import pic from './profile.png';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { profile } from 'console';

function Detail(props: any) {
    return (

        <div className="container">
            <div className="row-2-70">
                <div>Mahesha</div>
                <div>FO ID:192192</div>
            </div>
            <div className="row-2-30">
                <Avatar />
            </div>

        </div>
    );
}

export default Detail;