import React from 'react';
import './App.css';
import {Form, Button} from 'react-bootstrap';

class RegisterScreen extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        username:'',
        password:''
      };
    }

    render() {
        return(
        <div className="text-center">
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" onChange={e => this.setState({username: e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={e => this.setState({password: e.target.value})}/>
                </Form.Group>
            </Form>
            <Button onClick={() => this.props.signup(this.state.username,this.state.password)}>Sign Up</Button>
        </div>
        );
    }

}

export default RegisterScreen;