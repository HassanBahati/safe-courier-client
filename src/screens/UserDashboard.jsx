import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Col, Container, Row ,Button} from "reactstrap";
import TrackOrder from "../components/TrackOrder";
import { Link } from "react-router-dom";

class UserDashboard extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  render() {
    const { user } = this.props.auth;
    return (
      <Container>
           <Row  className="mt-5 pt-5">
            <Col>
            <h1>{`${user.user}`}'s dashboard</h1>
        <hr style={{maxWidth:'300px', color:'#33B5E5',}}/>

            </Col>
            <Col>
            <Button color='' style={{backgroundColor:'#33B5E5', color:'white', display:'flex', float:'right'}}><Link to='/shipping'>Place Delivery Order</Link></Button>
            </Col>
        </Row>
       
        <Row className='mb-4'>
          <Col>
            <Card>
              {" "}
              <h2 class="card-title">00</h2>
              <h5 class="card-subtitle m-2 text-right text-muted">
                Total Orders <i class="fa fa-box"></i>
              </h5>
            </Card>
          </Col>
          <Col>
            <Card>
              {" "}
              <h2 class="card-title">00</h2>
              <h5 class="card-subtitle m-2 text-right text-muted">
                Delivered Orders <i class="fa fa-box"></i>
              </h5>
            </Card>
          </Col>
          <Col>
            <Card>
              {" "}
              <h2 class="card-title">00</h2>
              <h5 class="card-subtitle m-2 text-right text-muted">
                Pending Orders <i class="fa fa-box"></i>
              </h5>
            </Card>
          </Col>
        </Row>


        <Row className='mb-4'>
          <Col>
            <Card>
              {" "}
              <h2 class="card-title">00</h2>
              <h5 class="card-subtitle m-2 text-right text-muted">
                Total Orders <i class="fa fa-box"></i>
              </h5>
            </Card>
          </Col>
          <Col>
            <Card>
              {" "}
              <h2 class="card-title">00</h2>
              <h5 class="card-subtitle m-2 text-right text-muted">
                Delivered Orders <i class="fa fa-box"></i>
              </h5>
            </Card>
          </Col>
          <Col>
            <Card>
              {" "}
              <h2 class="card-title">00</h2>
              <h5 class="card-subtitle m-2 text-right text-muted">
                Pending Orders <i class="fa fa-box"></i>
              </h5>
            </Card>
          </Col>
        </Row>

        <TrackOrder/>
       
        <div style={{ marginBottom: "10vh" }}></div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(UserDashboard);
