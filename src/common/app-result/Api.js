import React from 'react';
import 'antd/dist/antd.css';
import { Result } from 'antd';

export default function AppResult(props) {
    return (
        <Result
            status={props.status}
            title={props.title}
            subTitle={props.subTitle}
            extra={<Button type="primary">返回首页</Button>}
        />
    );
}