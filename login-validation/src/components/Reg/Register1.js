import React, { Component } from 'react';
import { Col, Button } from 'mdbreact';

class Register1 extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        console.log(user);

        fetch('http://localhost:5000/Register', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((result)=>result.json())
        .then((info)=>{console.log(info);})
    }

    render() {
        return(

        <div className="container" style={{ marginTop: '50px', width: '700px', backgroundColor: '#7283a7', borderRadius: '10px', opacity: '.7'}}>
            <form onSubmit={ this.handleSubmit }>
                <br/>
                <p className="h5 text-center mb-4" style={{color: '#263238'}}>Register Your Company Here</p>
                 <div className="form-group">
                    <label htmlFor="defaultFormContactNameEx" className="white-text">Company name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={ this.handleInputChange }
                        value={ this.state.name }
                    />
                    <br/>
                 </div>


                 <div className="form-group">
                    <label htmlFor="defaultFormContactEmailEx" className="white-text">Company email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={ this.handleInputChange }
                        value={ this.state.email }
                    />
                    <br/>
                 </div>

                 <div className="form-group">
                    <label htmlFor="defaultFormContactEmailEx" className="white-text">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={ this.handleInputChange }
                        value={ this.state.password }
                    />
                    <br/>
                 </div>

                 <div className="form-group">
                    <label htmlFor="defaultFormContactEmailEx" className="white-text">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password_confirm"
                        onChange={ this.handleInputChange }
                        value={ this.state.password_confirm }
                    />
                 </div>

               <Col>
                <div className="text-center mt-4">
                    <Button color="light-blue" className="btn btn-outline-black" type="submit">Register<i className="fa fa-paper-plane-o ml-2"></i></Button>
                </div>
               </Col>

            </form>
        </div>
        )
    }
}

export default Register1;
