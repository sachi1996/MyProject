import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Navlink } from 'mdbreact';
import validator from 'validator';
import InlineError from '../messages/InlineError';

class FormsPage extends Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => { 
    const errors = this.validate(this.state.data);
    this.setState({errors});
  }

  validate = (data) => {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = "Invalid Email"
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  }

  render() {

    const { data, errors } = this.state;

    return (
    <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form onSubmit={this.onSubmit}>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">

                    <Input 
                      type="email"
                      id="email"
                      name="email"
                      label="your email"
                      value={data.email}
                      onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}

                    <Input 
                      type="password"
                      id="password"
                      name="password"
                      label="your password1"
                      value={data.password}
                      onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}

                  </div>
                  <div className="text-center py-4 mt-3">
                    
                      <Button color="cyan" type="submit">Register</Button>
                    
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    
    );
  }
}

export default FormsPage;
