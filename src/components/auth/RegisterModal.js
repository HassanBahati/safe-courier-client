import React, { Component } from "react";
import {
  Button,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { register } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../../actions/errorActions";
class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };
  //attempting to dsiplay errors in modal
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //check for regsiter error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    //if authenticated close
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }
  toggle = () => {
    //cear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    //create user object
    const newUser = {
      name,
      email,
      password,
    };

    //attempt to register
    this.props.register(newUser);

    // //close modal
    // this.toggle();
  };
  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  className="mb-3"
                  placeholder="Name"
                  onChange={this.onChange}
                ></Input>

                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  className="mb-3"
                  placeholder="Email"
                  onChange={this.onChange}
                ></Input>

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  className="mb-3"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                ></Input>

                <Button color="dark" block style={{ marginTop: "2rem" }}>
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.err,
});
export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
