import { Button, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import {
  addANewUser,
  verifyIsANameExistInDb,
} from "./utils";

function Signin() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function submitclicked(event) {
    /*
    verify that the user name isn't exist in the local storage=>
    1)if not exist: create a new user
    2)if exist : show a mmessage to change the userName 
    */
    event.preventDefault();
    if (!verifyIsANameExistInDb(userName) && confirmPassword === userPassword) {
      const userData = {
        name: userName,
        password: userPassword,
        src: "data:image/jpeg;base64,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",
        scores: [],
        id: localStorage.length,
      };
      addANewUser(userData);
      sessionStorage.setItem("valid", "true");

      navigate("/Profile", { state: userData });
    } else if (verifyIsANameExistInDb(userName)) {
      setMessage("the user name already exist");
      setShowAlert(true);
      setUserPassword("");
      setUserName("");
      setConfirmPassword("");
    } else {
      setMessage("the password and the confirm password aren't simular");
      setShowAlert(true);
      setUserPassword("");
      setUserName("");
      setConfirmPassword("");
    }
    console.log(userName, userPassword, confirmPassword);

    //console.log(verifyIsANameExistInDb(userData.name));
  }
  return (
    <div className="signinwrapper">
      <form className="signin" onSubmit={submitclicked}>
        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          defaultValue=""
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="secondary" type="submit">
          Signin
        </Button>
      </form>
      <Typography variant="subtitle1">
        Do You already register?{" "}
        <Link id="link" to={"/Login"}>
          {" "}
          Login
        </Link>
      </Typography>
      {showAlert && <Alert severity="error">{message}</Alert>}
    </div>
  );
}

export default Signin;
