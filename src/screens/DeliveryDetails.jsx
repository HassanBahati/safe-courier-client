import React, { Component } from "react";
import { Button, Container, Form, Label } from "reactstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { addOrder } from "../actions/orderActions";
import { connect } from "react-redux";
class DeliveryDetails extends Component {
  state = {
    name: "",
    pickUp: '',
    delivery:"",
    weight:''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      name: this.state.name,
    pickUp: this.state.pickUp,
    delivery: this.state.delivery,
    weight: this.state.weight
    };

    //add order via addorder action
    this.props.addOrder(newOrder);
  };
  onChange = (e) => {
    this.setState({ [e.target.value]: e.target.value });
  };
  render() {
    return (
      <Container>
        <div className="mt-5 pt-5">
          <CheckoutSteps step1 step2></CheckoutSteps>

          <Form className="form" onSubmit={this.onSubmit}>
            <div>
              <h3>Delivery Address</h3>
            </div>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                required
                onChange={this.onChange}
              ></input>
            </div>
            <div>
              <Label htmlFor="pickUp">PickUp Address</Label>
              <input
                type="text"
                id="pickUp"
                placeholder="Enter PickUp Address"
                required
                onChange={this.onChange}
              ></input>
            </div>
            <div>
              <Label htmlFor="delivery">Delivery Address</Label>
              <input
                type="text"
                id="delivery"
                placeholder="Enter Delivery Address"
                required
                onChange={this.onChange}
              ></input>
            </div>
            <div>
              <Label htmlFor="weight">Weight in Kgs</Label>
              <input
                type="number"
                id="weight"
                placeholder="Enter Weight"
                required
                onChange={this.onChange}
              ></input>
            </div>

            <div>
              <Label htmlFor="country">Country</Label>: Uganda
            </div>
            <div>
              <Label />
              <Button color="dark" type="submit">
                Continue
              </Button>
            </div>
          </Form>

          <div style={{ marginBottom: "20vh" }}></div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
})
export default connect(mapStateToProps,addOrder)(DeliveryDetails);
