import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addOrder } from "../actions/orderActions";

class orderModel extends Component {
  state = {
    modal: false,
    name: "",
  };
  onSubmit = (e) =>{
      e.preventDefault()
      const newOrder = {
          id: 3,
          name: this.state.name
      }

      //add order via addorder action
      this.props.addOrder(newOrder);

      //close modal
      this.toggle()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) =>{
      this.setState({[e.target.value]: e.target.value})
  }
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Order
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Add to Order List
          </ModalHeader>
          <ModalBody>
              <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                      <Label for ='order'>Order</Label>
                      <Input type='text' name='name' id='order' placeholder='Addd order item' onChange={this.onChange}></Input>

                  </FormGroup>
                  <Button color='dark' style={{marginTop:'2rem'}} block>Add order</Button>
              </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    order: state.order
})
export default connect(mapStateToProps,addOrder)(orderModel);
