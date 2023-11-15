import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./profile.css";
import { useLocation } from "react-router-dom";
import { blue } from "@mui/material/colors";

const Profile = () => {
  const { state } = useLocation();
 
  const [imgSrc, setImgSrc] = useState(state.src);
  const [scores,setScores] = useState(state.scores);
  const [everage,setEverage]= useState(clculeavg());

  function clculeavg(){
    let sum = 0;
    scores.forEach(score => {
      sum+=score;
      
    });
    const avg= sum/scores.length;
    return(avg>0?avg:sum)
  }

  return (
    <div className="profile">
      <div className="title">
        <Typography variant="h2">Welcome 👋</Typography>
      </div>
      <div className="avater">
        <Avatar sx={{ width: 100, height: 100 }} alt="profile" src={imgSrc} />
      </div>
      <div className="nameeverage">
        <div className="name">
          <Typography variant="h3">{state.name}</Typography>
        </div>

        <div className="evarage">
          <div>
            <Typography variant="h6">Everage</Typography>
          </div>
          <Typography variant="h6">{everage}%</Typography>
          <div></div>
        </div>
      </div>

      <div className="testscores">
        <Table size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell> Quiz number</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scores.map((score, index) => {
              
              return (
                
                <TableRow key={index}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{score}</TableCell>
                </TableRow>
              );
            })}

           
          </TableBody>
        </Table>
        
        {scores.length===0&&<div className="scorempty"><Typography variant="h6">You don't have scores yet</Typography></div>}
      </div>
    </div>
  );
};

export default Profile;
