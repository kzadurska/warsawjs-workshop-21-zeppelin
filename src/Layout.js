import React, { Component } from 'react';

import { withStyles } from '@material-ui/core'
import { Route } from  'react-router-dom';
import URLS from './urls'
import Header from './Header'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'


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

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Route path={URLS.NEW_PROJECT} component={CreateProject} />
        <Route path={URLS.PROJECT_LIST} component={ProjectList} />
      </div>
    )
  }
}	

export default  withStyles(styles)(Layout)