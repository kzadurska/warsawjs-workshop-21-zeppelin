import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline'
import URLS from './urls'
import Login from './Login'
import Layout from './Layout'
import reducer from './reducers';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline>
            <Switch>
              <Route path={URLS.LOGIN} exact component={Login} />
              <Route path={URLS.LAYOUT} component={Layout} />   
            </Switch>    
          </CssBaseline>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
