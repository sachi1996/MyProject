import React, { Component } from 'react';

class Register extends Component {

    render() {
        return(
        <div>
            <form>
                <p className="h4 text-center mb-4">Write to us</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">Your name</label>
                <input type="text" id="defaultFormContactNameEx" className="form-control"/>
                <br/>
                <label htmlFor="defaultFormContactEmailEx" className="grey-text">Your email</label>
                <input type="email" id="defaultFormContactEmailEx" className="form-control"/>
                <br/>
                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">Subject</label>
                <input type="text" id="defaultFormContactSubjectEx" className="form-control"/>
                <br/>
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">Your message</label>
                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3"></textarea>
                <div className="text-center mt-4">
                    <button className="btn btn-outline-primary" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
                </div>
            </form>
        </div>
        )
    }
}

export default Register;