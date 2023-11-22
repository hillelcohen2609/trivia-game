import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageErr() {
  return (
    <div style={{textAlign:"center"}}>
      <Typography variant="h2">Sorry No Page</Typography>
      <Typography variant="h5">back to <Link to="/">Home page</Link></Typography>
        
     
    </div>
  );
}
