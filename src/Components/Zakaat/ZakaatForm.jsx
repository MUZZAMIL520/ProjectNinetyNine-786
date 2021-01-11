import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 10,
  },
};

class ZakaatForm extends Component {
  state = {
    totalAmount: 0,
    taxable: 0,
    showTax: false
  }
  formRef = React.createRef();
  onFinish = (values) => {
    const { nisab, gold, silver, inHand, saving, loans, investment, goods, borrowed, wages, taxes } = values

    const totalValues = Number(gold) + Number(silver) + Number(inHand) + Number(saving) + Number(loans) + Number(investment) + Number(goods)
    const totalDeducts = Number(borrowed) + Number(wages) + Number(taxes)
    var totalAmount = 0
    if ((totalValues - totalDeducts) > 0 || (totalValues - totalDeducts) <= 0) {
      console.log('yes')
      totalAmount = totalValues - totalDeducts
    } else {
      totalAmount = 0
    }


    console.log(totalAmount)
    this.setState({ totalAmount: totalAmount, showTax: true })

    if (nisab < totalAmount) {
      const taxable = Math.round((totalAmount / 100) * 2.5);
      this.setState({ taxable })
    } else {
      this.setState({ taxable: 0, showTax: true })
    }

  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  render() {
    return (
      <div style={{ marginLeft: "2%", marginTop: "2%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Zakaat Calculator</h1>
        <Row>
          <Col sm={16} xs={16} lg={20} md={18} xl={20}>
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
              <Form.Item
                name="nisab"
                label="Nisab (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="gold"
                label="Value of Gold (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="silver"
                label="Value of Silver (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>

              <h3 style={{ marginLeft: "35%" }}>Cash</h3>

              <Form.Item
                name="inHand"
                label="In hand & Bank accounts (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="saving"
                label="Deposit for some Future purpose, e.g. Hajj (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="loans"
                label="Given out in Loans (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="investment"
                label="Business Investments, Shares, Pensions (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>

              <h3 style={{ marginLeft: "35%" }}>Trade Goods</h3>

              <Form.Item
                name="goods"
                label="Value of Stock (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>

              <h3 style={{ marginLeft: "35%" }}>Laibilities</h3>

              <Form.Item
                name="borrowed"
                label="Borrowed Money, Goods bought on credit (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="wages"
                label="Wages due to employees (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="taxes"
                label="Taxes, Rent, Utility Bills due immediately (Rupees)"
                initialValue="0"
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Calculate
          </Button>
          &nbsp;&nbsp;
          <Button htmlType="button" type="danger" onClick={this.onReset}>
                  Reset
          </Button>

              </Form.Item>
            </Form>

          </Col>

        </Row>
        <div className="container text-center">
          <div >
            {this.state.showTax ? <> <Row >

              <Col span={16}>
                <p>Total Asset:</p>
              </Col>
              <Col span={4}>{this.state.totalAmount}
              </Col>
            </Row><Row >
                <Col span={16}>
                  <p>Zakat Payable:</p></Col>
                <Col span={4}>{this.state.taxable}
                </Col>
              </Row> </> : <></>}
          </div>
        </div>
      </div>

    );
  }
}

export default ZakaatForm;