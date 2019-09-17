import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import "./style.css";

class CustomNavbar extends Component {
  render() {
    return (
      <div className="nav-root">
        <AppBar className="nav-main" position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className="nav-button"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className="nav-title">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Bloggify
              </Link>
            </Typography>
            <Link style={{ textDecoration: "none", color: "white" }}>
              <Button className="nav-component" color="inherit">
                Add Post
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default CustomNavbar;
