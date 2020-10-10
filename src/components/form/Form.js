import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';
import { Redirect } from 'react-router-dom';
//import {Route, Link} from 'react-router-dom';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: '',
            response: ''
        }
    }

    handleTextChange = (e) => {
        e.preventDefult();
        this.setState({ response: e.value });
    }
    
    submitData = (e) => {
        e.preventDefault();
    
        axios.get("url", {
            headers: {
                'Authorization': 'Bearer'}
        }).then(res => {
            //const {history} = this.props;
            console.log(res.data);

            // The object to be printed is res.data;
            this.setState({data: res.data.accept});
        });
    }

    render(){
        return(
            <div>
            
            <div className="register-photo">
                <form onSubmit={this.submitData}>
                <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
                </form>
                <div>
                    {this.state.data}  
                </div>
                <div className="form-container">
                    <form onSubmit={this.submitData}>
                        <h2 className="text-center"><strong>Create</strong> an account.</h2>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Name"  onChange={this.handleNameChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Password"  onChange={this.handlePasswordChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"  onChange={this.handlePassRepChange} required/>
                        </div>
                        
                        <div className="form-group">
                            <input className="form-control" type="text" name="description" placeholder="Describe Yourself"  onChange={this.handleDescriptionChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="LinkedIn" placeholder="LinkedIn Profile Link" onChange={this.handleLinkedInChange} />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" />I agree to the license terms.
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Form;
