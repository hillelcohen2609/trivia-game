
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <nav style={{marginBottom:"30vh"}}>
        <Box sx={{ width: "100%", margin: 0 }}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              
              
              <div style={{marginRight:"3vh"}}><Avatar  onClick={() => {
                  navigate("Profile");
                }} /></div>
              <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="button" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/Login">Login</Link>
              </Typography>
              <Typography variant="button" component="div">
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
