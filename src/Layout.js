import React, { Component } from 'react';

import { withStyles } from '@material-ui/core'
import { Route, Redirect, Switch } from  'react-router-dom';
import URLS from './urls'
import Header from './Header'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'

import { connect } from 'react-redux'
import * as actions from './actions';

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 20,
  },
};

class Layout extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout() // this is sync action
  }

  render() {
    if (!this.props.isUserLoggedIn) {
      return (
        <Redirect to={URLS.LOGIN} />
      )
    }
    return (
      <div>
        <Header logout={this.handleLogout} />
        <Switch>
          <Route path={URLS.NEW_PROJECT} component={CreateProject} />
          <Route path={URLS.PROJECT_LIST} component={ProjectList} />
        </Switch>
      </div>
    )
  }
}	

const mapDispatchToProps = {
  logout: actions.logout
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.auth.username
  }
}

export default  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Layout))