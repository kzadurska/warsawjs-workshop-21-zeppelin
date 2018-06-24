import React, { Component } from 'react';
import { Route } from  'react-router-dom';
import { withStyles, TextField, Button } from '@material-ui/core';
import { login } from './api'
import Header from './Header'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'
import URLS from './urls'

const styles = {
  self: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: '0 auto',
  },
  input: {
    margin: '10px'
  }
};

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value }) 
  }

  handleSubmit() {
    login(this.state)
  }

  render() {
    // const { self, input } = this.props.clases
    return (
      <form>
        <div className={this.props.classes.self}>
          <TextField 
            className={this.props.classes.input} 
            name="username" 
            value={this.state.username} 
            placeholder="Type username"
            onChange={this.handleChange} />
          <TextField 
            className={this.props.classes.input} 
            name="password" 
            value={this.state.value} 
            placeholder="Type password" 
            onChange={this.handleChange} />
          <Button 
            className={this.props.classes.input} 
            variant="raised" 
            onClick={this.handleSubmit}>
            Login
          </Button> 
        </div> 
      </form>
    )
  }
} 

export default withStyles(styles)(Login)