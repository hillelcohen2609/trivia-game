import { Button, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToLocalStorage, returnAll } from "./utils";
import "./login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  function submitclicked(event) {
    let flug = true;
    event.preventDefault();
    const users = returnAll();
    users.forEach((user, index) => {
      if (userName === user.name && userPassword === user.password) {
        flug = !flug;
        sessionStorage.setItem("valid", "true");
        addToLocalStorage(user);
        userName === "hillel" && sessionStorage.setItem("admin", "true");
        navigate("/Profile");
      }
    });
    if (flug) {
      setShowAlert(true);
    }
    //clear the form
    setUserName("");
    setUserPassword("");
  }

  return (
    <div className="loginwrapper">
      <form className="login" onSubmit={submitclicked}>
        {/**label="User Name" */}
        <TextField
          id="outlined-basic"
          label="User Name"
          value={userName}
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          value={userPassword}
          variant="outlined"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" type="submit">
          Login
        </Button>
      </form>
      <Typography variant="subtitle1">
        Don't You Have An Account?{" "}
        <Link id="link" to={"/Signin"}>
          {" "}
          Signin
        </Link>
      </Typography>
      {showAlert && (
        <Alert severity="error">incorrect user name or password</Alert>
      )}
    </div>
  );
}

export default Login;
