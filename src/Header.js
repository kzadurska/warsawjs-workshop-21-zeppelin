import React, { Component } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  withStyles, 
  List, 
  ListItem, 
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from  'react-router-dom';
import URLS from './urls'

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flex: 1,
  },
  sidebar: {
    width: 200,
  },
};

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDrawerOpen: false
    }

    this.onDrawerOpen = this.onDrawerOpen.bind(this)
    this.onDrawerClose = this.onDrawerClose.bind(this)
  }

  onDrawerOpen() {
    this.setState({ isDrawerOpen: true })
  }

  onDrawerClose() {
    this.setState({ isDrawerOpen: false })
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.onDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" >
              Title
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
          <Drawer open={this.state.isDrawerOpen}>
            <div
              className={this.props.classes.sidebar}
              onClick={this.onDrawerClose}
              onKeyDown={this.onDrawerClose}>
              X
            </div>
            <List>
              <ListItem button>
                <ListItemText>
                  <Link to={URLS.PROJECT_LIST}>Projects</Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link to={URLS.NEW_PROJECT}>New Project</Link>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)