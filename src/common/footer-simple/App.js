import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Footer } = Layout;

function SimpleFooter(props) {
  return (
    <Footer className="footer-simple">©2020 Created by LZx</Footer>
  );
}

export default SimpleFooter;
