import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import URLS from './urls'
import Login from './Login'
import Layout from './Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline>
          <Switch>
            <Route path={URLS.LOGIN} exact component={Login} />
            <Route path={URLS.LAYOUT} component={Layout} />   
          </Switch>    
        </CssBaseline>
      </BrowserRouter>
    );
  }
}


export default App;
