import React from 'react';
import './App.css';
import {Form, Button, Image} from 'react-bootstrap';

class LoginScreen extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        username : '',
        password : ''
      };
    }

    render() {
        return(
        <div className="text-center">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtKy-Nz1UREsRH7FGafRb42-bZcjp-Q4imdw&usqp=CAU" />
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control size="sm" type="username" placeholder="Enter Username" onChange={e => this.setState({username: e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={e => this.setState({password: e.target.value})}/>
                </Form.Group>
            </Form>
            <Button onClick={() => this.props.login(this.state.username,this.state.password)}>Login</Button>
        <Button onClick={() => this.props.navSignUp()}>Go To Sign Up Page</Button>
        </div>
        );
    }

}

export default LoginScreen;