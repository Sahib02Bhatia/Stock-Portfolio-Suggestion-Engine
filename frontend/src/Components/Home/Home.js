/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Badge,
  Row,
  Col,
  Switch,
  Card,
  Divider,
  Button,
  InputNumber,
  message,
} from "antd";
import swal from "sweetalert";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strategies: [],
      amount: 5000,
      msg: null,
    };
  }

  changeAmount = (e) => {
    if (e < 5000) {
      this.setState({
        amount: e,
        msg: "Below 5000",
      });
    } else {
      this.setState({
        amount: e,
        msg: null,
      });
    }
  };

  toggleStrategy = (checkedStrategies) => {
    this.setState({
      strategies: checkedStrategies,
    });
  };

  invest = (e) => {
    console.log("strategies", this.state.strategies);
    this.props.history.push({
      pathname: "/suggest",
      state: {
        strategies: this.state.strategies,
        amount: parseFloat(this.state.amount),
      },
    });
  };
  render() {
    var msg = null;

    if (this.state.msg) {
      msg = "Investment amount should be greater than $5000";
    }

    return (
      <div>
        <div class="px-3 pt-3 bg">
          <center>
            <h1 class="text-info-overlap">STOCK PORTFOLIO SUGGESTION ENGINE</h1>
          </center>
          <Divider></Divider>
        </div>
        <div class="px-2 py-2" align="center">
          <h4 class="">What amount do you want to Invest (in dollars)?</h4>
          <InputNumber
            step={100}
            defaultValue={5000}
            min={5000}
            type="number"
            style={{ width: "50%", height: 45 }}
            onChange={this.changeAmount}
          ></InputNumber>
          <p class="text-danger">{msg}</p>
        </div>
        <div class="px-2 py-2" align="center">
          <h4 class="">Select Investment Strategies (upto two):</h4>
          <Checkbox.Group onChange={this.toggleStrategy}>
            <Row type="flex">
              <Col>
                <div class="px-2 py-2">
                  <Card
                    bordered={true}
                    title="Ethical Investing"
                    style={{ width: 200 }}
                  >
                    <Checkbox
                      value={"ethical"}
                      checked={!!this.state.strategies.includes("ethical")}
                      disabled={
                        !this.state.strategies.includes("ethical") &&
                        this.state.strategies.length == 2
                      }
                    />
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="px-2 py-2">
                  <Card
                    bordered={true}
                    title="Growth Investing"
                    style={{ width: 200 }}
                  >
                    <Checkbox
                      value={"growth"}
                      checked={!!this.state.strategies.includes("growth")}
                      disabled={
                        !this.state.strategies.includes("growth") &&
                        this.state.strategies.length == 2
                      }
                    />
                  </Card>
                </div>
              </Col>

              <Col>
                <div class="px-2 py-2">
                  <Card
                    bordered={true}
                    title="Index Investing"
                    style={{ width: 200 }}
                  >
                    <Checkbox
                      value={"index"}
                      checked={!!this.state.strategies.includes("index")}
                      disabled={
                        !this.state.strategies.includes("index") &&
                        this.state.strategies.length == 2
                      }
                    />
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="px-2 py-2">
                  <Card
                    bordered={true}
                    title="Quality Investing"
                    style={{ width: 200 }}
                  >
                    <Checkbox
                      value={"quality"}
                      checked={!!this.state.strategies.includes("quality")}
                      disabled={
                        !this.state.strategies.includes("quality") &&
                        this.state.strategies.length == 2
                      }
                    />
                  </Card>
                </div>
              </Col>
              <Col>
                <div class="px-2 py-2">
                  <Card
                    bordered={true}
                    title="Value Investing"
                    style={{ width: 200 }}
                  >
                    <Checkbox
                      value={"value"}
                      checked={!!this.state.strategies.includes("value")}
                      disabled={
                        !this.state.strategies.includes("value") &&
                        this.state.strategies.length == 2
                      }
                    />
                  </Card>
                </div>
              </Col>
            </Row>
          </Checkbox.Group>
        </div>
        <div class="px-2 py-2">
          <center style={{ paddingTop: 50 }}>
            <Button
              type="primary"
              style={{ width: 500, height: 50 }}
              disabled={
                this.state.strategies.length < 1 ||
                this.state.strategies.length > 2 ||
                this.state.amount < 5000
              }
              onClick={this.invest}
            >
              Get Suggestions
            </Button>
          </center>
        </div>
      </div>
    );
  }
}

export default Home;
