import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getOrders, deleteOrder } from "../actions/orderActions";
import PropTypes from "prop-types";
class OrderHistory extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  onDeleteClick = (id) => {
    this.props.deleteOrder(id);
  };
  render() {
    const { order } = this.state.order;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="order-list">
            {order.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} className="fade">
                <ListGroupItem>
                  <Button
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                    color="danger"
                    className="remove-btn"
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

OrderHistory.propTypes = {
  getOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order
});

export default connect(mapStateToProps, deleteOrder, getOrders)(OrderHistory);
