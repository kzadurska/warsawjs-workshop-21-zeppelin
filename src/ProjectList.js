import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux'
import * as actions from './actions';

import logo from './logo.svg';
import './App.css';

const styles = {
  spinner: {
    margin: '0 auto',
    width: '100px'
  }
}
class ProjectList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPending: true
    }
  }

  componentDidMount() {
    this.props.readPosts().then(() => this.setState({ isPending: false }))
  }

  render() {
    if (this.state.isPending) {
      return (
        <img src={logo} className="App-logo" alt="logo" />
      )
    }
    return ( 
      <div>Projects list</div>
    )
  }
}

const mapStateToProps = (state, props) => {

  return {
    projects: state.projects.posts
  }
}

const mapDispatchToProps = {
  readPosts: actions.readPosts
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProjectList))