import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { returnAll } from "./utils";
import "./admin.css";
import { useState } from "react";

const AdminPage = () => {
  const isAdmin = sessionStorage.getItem("admin");
  const users = returnAll();
  const [choosen, setChoosen] = useState(users[0]);
  const [userEverage, setUserEverage] = useState(getAvg(choosen.scores));
  const [sum, setSum] = useState(choosen.scores.length);
  const [valid, setValid] = useState(false);
  function foo() {
    console.log("in foo");
    console.log(choosen);
    setUserEverage(getAvg(choosen.scores));
    setSum(choosen.scores.length);
    setValid(!valid);
  }
  function getAvg(scores) {
    let sum = 0;
    sum = scores.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      sum
    );
    console.log(sum);
    let avg = sum > 0 ? sum / scores.length : 0;
    avg = Math.round(avg);
    return avg;
  }
  console.log(users); //work v
  return (
    <>
      {isAdmin ? (
        <div style={{ textAlign: "center" }} className="adminpage">
          <Typography variant="h2">Check on your users</Typography>

          <div className="autocomplite">
            <Autocomplete
              disablePortal
              value={choosen}
              onChange={(event, newValue) => {
                newValue !== null && setChoosen(newValue);
                setValid(false);
              }}
              id="combo-box-demo"
              options={users}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300, margin: "auto" }}
              renderInput={(params) => <TextField {...params} label="users" />}
            />
          </div>

          <Button variant="contained" color="secondary" onClick={foo}>
            Continue
          </Button>
          {valid && (
            <div className="usercontent">
              <Typography sx={{ textDecoration: "underline" }} variant="h4">
                {choosen.name}'s details
              </Typography>
              <Typography variant="subtitle1">
                everage: {userEverage}{" "}
              </Typography>
              <Typography variant="subtitle1">
                Game he played: {sum}{" "}
              </Typography>
            </div>
          )}
        </div>
      ) : (
        <div className="notad">
          <Typography variant="h3">Sory you are not the admin!</Typography>
        </div>
      )}
    </>
  );
};

export default AdminPage;
