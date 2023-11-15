import { Button, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";

import "./login.css";
import {  Link,useNavigate  } from "react-router-dom";
import { pink } from "@mui/material/colors";
import { useState } from "react";
import { returnAll } from "./utils";

function Login() {
  const [userName,setUserName]= useState("");
  const [userPassword,setUserPassword]= useState("");
  const [showAlert,setShowAlert]=useState(false);
  const navigate = useNavigate();
  

 /* function loginClicked() {
    //validation navigate("/Options");
    navigate("/Profile");
  }*/
  function submitclicked(event) {
    let flug=true;
    event.preventDefault();
    const users= returnAll();
    users.forEach((user,index)=>{
      if(userName===user.name&&userPassword===user.password){
        flug=!flug;
        sessionStorage.setItem("valid", "true");
        navigate("/Profile",{state:user});
        
      }
    })
    if (flug) {
      setShowAlert(true);
      
    }
    //clear the form
    setUserName("");
    setUserPassword("");
  }

  return (
    <div className="loginwrapper">
      <form  className="login" 
       onSubmit={submitclicked}
      >
        {/**label="User Name" */}
        <TextField id="outlined-basic" label="User Name" value={userName} variant="outlined" onChange={(e)=>setUserName(e.target.value)}/>
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          value={userPassword}
          variant="outlined"
          onChange={(e)=>setUserPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          
          
        >
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
        {showAlert&&<Alert severity="error">incorrect user name or password</Alert>}
        
      
    </div>
  );
}

export default Login;
