import React, { Component } from "react";
import { Layout } from "antd";
import "./CustomHeader.css";
import "antd/dist/antd.css";
import CustomHeader from "./CustomHeader";

const { Header, Content, Footer } = Layout;

export default class CustomLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ all: "unset" }} {...this.props}>
          <CustomHeader {...this.props} />
        </Header>
        <Content
          className="main-container"
          style={{ backgroundColor: "white" }}
        >
          {this.props.children}
        </Content>
        {console.log(this.props.check)}
        {!this.props.check && (
          <Footer
            className="text-center"
            style={{
              backgroundColor: "#006400",
              color: "white",
              width:"100%",
              bottom:"0",


            }}
          >
            <div>© Ninety Nine 2020</div>
          </Footer>
        )}
      </Layout>
    );
  }
}
