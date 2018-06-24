import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { Route } from  'react-router-dom';
import { withStyles, TextField, Button } from '@material-ui/core';
import { login } from './actions'
import Header from './Header'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'

import * as actions from './actions';
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
      password: '',
      isPending: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value }) 
  }

  handleSubmit() {
    const { username, password } = this.state
    this.setState({ isPending: true })
    this.props.login({username, password})
      .then((response) => { 
           // i'm logged in, redirect to project list
          this.props.history.replace(URLS.PROJECT_LIST)
      })
      .catch(error => {
        this.setState({ 
          username: '', 
          password: '', 
          isPending: false 
        })
      })
  }

  render() {
    const { self, input } = this.props.classes
    return (
      <form>
        <div className={self}>
          <TextField 
            className={input} 
            name="username" 
            value={this.state.username} 
            placeholder="Type username"
            onChange={this.handleChange} />
          <TextField 
            className={input} 
            name="password" 
            value={this.state.value} 
            placeholder="Type password" 
            onChange={this.handleChange} />
          <Button 
            className={input} 
            variant="raised" 
            onClick={this.handleSubmit}>
            Login
          </Button> 
        </div> 
      </form>
    )
  }
} 

// we don't have to use dispatch directly on the action
// it is added here
// we access it then though this.props
// *magic*
const mapDispatchToProps = {
  login: actions.login
}

export default withStyles(styles)(withRouter(connect(null, mapDispatchToProps)(Login)));
