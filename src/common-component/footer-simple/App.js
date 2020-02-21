import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Footer } = Layout;

function SimpleFooter(props) {
  return (
    <Footer className={props.className ? props.className : "footer-simple"} style={props.footerClass}>©2020 Created by LZx</Footer>
  );
}

export default SimpleFooter;
