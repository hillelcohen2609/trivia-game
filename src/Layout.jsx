import { Quiz } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav >
        <Box sx={{width:'100%',margin:0 }} >
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Quiz />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant='button' component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant='button' component="div" sx={{ flexGrow: 1 }}>
                <Link to="Options">Options</Link>
              </Typography>
              
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
      <Outlet />
    </>
  );
}
