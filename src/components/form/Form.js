import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';
import { Redirect } from 'react-router-dom';
//import {Route, Link} from 'react-router-dom';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }

    submitData = (e) => {
        e.preventDefault();
    
        axios.get("http://35.199.46.108/casRowSets/tables/cas~fs~cas-shared-default~fs~Public~fs~SCORE2_UNDEFINED_2020_09_12_11_15_40_OUTPUT/rows", {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbG9jYWxob3N0L1NBU0xvZ29uL3Rva2VuX2tleXMiLCJraWQiOiJsZWdhY3ktdG9rZW4ta2V5IiwidHlwIjoiSldUIn0.eyJqdGkiOiI1NzcyZTkwMzllYWM0MmNjODA0MTFlMzEzNmNiMDg5YiIsImV4dF9pZCI6ImNuPU1vZGVsIE1hbmFnZXIsY249VXNlcnMsZGM9c3RyYXRhY2VudGxhYnMsZGM9Y29tIiwic3ViIjoiZDM2ZDc0NWUtODQ0ZS00NzgwLTljM2EtZTk4NWQxNDU1YTJiIiwic2NvcGUiOlsib3BlbmlkIl0sImNsaWVudF9pZCI6ImFwcCIsImNpZCI6ImFwcCIsImF6cCI6ImFwcCIsImdyYW50X3R5cGUiOiJwYXNzd29yZCIsInVzZXJfaWQiOiJkMzZkNzQ1ZS04NDRlLTQ3ODAtOWMzYS1lOTg1ZDE0NTVhMmIiLCJvcmlnaW4iOiJsZGFwIiwidXNlcl9uYW1lIjoic2FzbWRsbWdyIiwiZW1haWwiOiJzYXNtZGxtZ3JAdXNlci5mcm9tLmxkYXAuY2YiLCJhdXRoX3RpbWUiOjE2MDAxMDA4MjUsInJldl9zaWciOiJiZWFhOTY3OCIsImlhdCI6MTYwMDEwMDgyNSwiZXhwIjoxNjAwMTQ0MDI0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0L1NBU0xvZ29uL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbImFwcCIsIm9wZW5pZCJdfQ.lQXsjsgUuZi_w4xL5za5MHPu_ycceTL3cPj0VxA4mvJUSj438eVPwtuOUfhFMG5xWtx1xb4b2wC--V0zfFQuFdef5wUMuebqJfb7RNzlo2MJ-_2MErC5QjpU4RgC2qaMLw3_q8oTms5qehbYAvQEMD1kbq23bE6crmftqND5uTjnHM1zMRi5CUUMdsHNpwvqjE26EVbaImh6k9n0tfSbKEGjDX9l2Eg6AeefCBmXpYJgwZvd_bi6mc--m5A70WOGDLxpTSRzdHAYhIZGVWfyvZ17irCePgDvMSN7PZotwEjOMmc_zjOtCO4lslVgRGA5iZOpfrswNYFHlphplFkaWg'
            }
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
                {/*<div className="form-container">
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
                </div>*/}
            </div>
            </div>
        );
    }
}

export default Form;