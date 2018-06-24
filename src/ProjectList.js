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
  },
  author: {
    fontWeight: 'bold',
    fontSize: '12px'
  },
  date: {
    fontSize: '11px',
    color: 'grey'
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
        <div className={this.props.classes.spinner}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )
    }
    return ( 
      <ul>
        {

          this.props.projects.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <div className={this.props.classes.author}>By {project.owner}</div>
              <div className={this.props.classes.date}>on {project.date}</div>
            </li>
          ))
        }
      </ul>
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