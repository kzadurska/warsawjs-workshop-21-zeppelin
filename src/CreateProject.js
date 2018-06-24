import React, { Component } from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { Link } from  'react-router-dom';
import URLS from './urls'
import { createPost } from './api'

import logo from './logo.svg';
import './App.css';


const styles = {
  self: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: '0 auto',
  },
  input: {
    margin: '10px'
  },
  spinner: {
    margin: '0 auto',
    width: '100px'
  },
};

class CreateProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      isPending: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onFileInput = this.onFileInput.bind(this)
  }

  handleSubmit() {
    this.setState({ isPending: true })
    createPost({
      username: 'kasia', //
      title: this.state.title,
      image: this.state.image
    }).then(() => this.props.history.replace(URLS.PROJECT_LIST))
  }

  handleChange(event) {
    this.setState({ title: event.target.value })
  }

  onFileInput(event) {
    this.setState({ image: event.target.files[0] })
  }

  render() {
    const {self, input, spinner} = this.props.classes
    if (this.state.isPending) {
      return (
        <div className={spinner}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )
    }
    return ( 
      <form>
        <div className={self}>
          <TextField 
            className={input} 
            name="title" 
            value={this.state.title} 
            placeholder="Type title" 
            onChange={this.handleChange} />
          <input 
            accept="image/*" 
            onChange={this.onFileInput}
            className={input} 
            id="raised-button-file"  
            type="file" /> 
          <label htmlFor="raised-button-file"> 
            <Button raised component="span" className={input}> 
              Choose file
            </Button> 
          </label> 
          <Button 
            className={input} 
            variant="raised" 
            onClick={this.handleSubmit}>
            Create project
          </Button> 
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(CreateProject)