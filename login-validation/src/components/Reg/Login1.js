import React, { Component } from 'react';
import { Col, Row, Button } from 'mdbreact';

import Card10 from '../Cards/Card10.js';

class Login1 extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            company: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            company: this.state.company,
            username: this.state.username,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return(
          <div>
          <br/>

      <Row>
          <Col md="6">
             <Card10 />
          </Col>

          <Col md="6">
          <div className="card mx-xl-5" style={{width: '400px', backgroundColor: '#929fba', opacity: '.65'}}>
            <div className="card-body" style={{height: '435px'}}>
            <h3 style={{textAlign: 'center'}}>Login Box</h3>
            <br/>

            <form onSubmit={ this.handleSubmit }>

                <div className="form-group">
                    <label htmlFor="defaultFormLoginEmailEx" className="black-text">Select Company</label>
                        <select
                            type="text"
                            placeholder="Company name"
                            className="form-control"
                            name="company"
                            onChange={ this.handleInputChange }
                            value={ this.state.company }
                        >
                            <option value="virtusa">Virtusa</option>
                            <option value="direcctfn">DirectFN</option>
                            <option value="99x">Sampath Bank</option>
                            <option value="creativeSoftware">Creative Software</option>
                            <option value="wso2">WSO2</option>
                            <option value="milleniumit">MillenniumIT</option>
                            <option value="codegen">Codegen</option>
                        </select>
                </div>

                <div className="form-group">
                    <label htmlFor="defaultFormLoginEmailEx" className="black-text">Your name</label>
                        <input
                        type="text"
                        placeholder="User name"
                        className="form-control"
                        name="username"
                        onChange={ this.handleInputChange }
                        value={ this.state.username }
                        />
                </div>

                <div className="form-group">
                    <label style={{textAlign: 'left'}} htmlFor="defaultFormLoginEmailEx" className="black-text">Password</label>
                        <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        onChange={ this.handleInputChange }
                        value={ this.state.password }
                        />
                </div>
                <div className="form-group" style={{textAlign: 'center'}}>
                    <Button type="submit" className="btn btn-primary">
                        Login
                    </Button>
                </div>
            </form>
            </div>
          </div>
          </Col>
        </Row>
          </div>
        )
    }
}

export default Login1;
