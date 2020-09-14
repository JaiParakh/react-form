import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';
import { Redirect } from 'react-router-dom';
//import {Route, Link} from 'react-router-dom';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passrep: '',
            description: '',
            linkedInUrl: ''
        }
    }


    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }
    
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handlePassRepChange = (e) => {
        this.setState({passrep: e.target.value});
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    handleLinkedInChange = (e) => {
        this.setState({linkedInUrl: e.target.value});
    }

    submitData = (e) => {
        e.preventDefault();
        //console.log(this.props.coords.latitude);
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            description: this.state.description,
            linkedInUrl: this.state.linkedInUrl,
        }
        
        //console.log(user);
        axios.post("user/register", user).then(res => {
            //const {history} = this.props;
            console.log(res.data);
            if(res.data.success){
                //store.set('loggedIn', true);
                //store.set('id', res.data.data._id);
                //history.push('/maps');
            }
        });
    }

    render(){
        return(
            <div>
            
            <div className="register-photo">
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