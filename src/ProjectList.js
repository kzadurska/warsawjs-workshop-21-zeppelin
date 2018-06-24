import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { Link } from  'react-router-dom';
import * as actions from './actions';
import URLS from './urls'

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
      <div>
        <Link to={URLS.NEW_PROJECT}>Add new project</Link>
        <div>
          <h3>Projects list</h3>
          <ul>
            {

              this.props.projects.map(project => (
                <li key={project.id}>
                  <h4>{project.title}</h4>
                  <div className={this.props.classes.author}>By {project.owner}</div>
                  <div className={this.props.classes.date}>on {project.date}</div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
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