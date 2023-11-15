import { Typography } from "@mui/material";
import {Link} from "react-router-dom"

const LogFirst = () => {
  return (
    <div style={{color:"white",textAlign:"center",marginTop:"30vh"}}>
      <Typography variant="h3">You need to Login first!</Typography>
      <Typography variant="h6">
        <Link to={"/Login"}>Click me</Link>
      </Typography>
    </div>
  );
};

export default LogFirst;
