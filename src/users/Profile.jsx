import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./profile.css";
import LogFirst from "../LogFirst";
import { Link } from "react-router-dom";

const Profile = () => {
  const key = sessionStorage.getItem("key");
  const isAdmin = sessionStorage.getItem("admin");
  const userStr = sessionStorage.getItem(`${key}`);
  const user = JSON.parse(userStr);
  const valid = sessionStorage.getItem("valid");

  const imgSrc = user ? user.src : null;
  const scores = user ? user.scores : null;
  const everage = user ? clculeavg() : null;

  function clculeavg() {
    let sum = 0;
    scores.forEach((score) => {
      sum += score;
    });
    let avg = sum / scores.length;
    avg = Math.round(avg);
    return avg > 0 ? avg : sum;
  }

  return (
    <>
      {valid ? (
        <div className="profile">
          <div className="title">
            <Typography variant="h2">Welcome 👋</Typography>
          </div>
          <div className="avater">
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="profile"
              src={imgSrc}
            />
          </div>
          <div className="nameeverage">
            <div className="name">
              <Typography variant="h3">{user.name}</Typography>
            </div>

            <div className="evarage">
              <div>
                <Typography variant="h6">Everage</Typography>
              </div>
              <Typography variant="h6">{everage}%</Typography>
              <div></div>
            </div>
          </div>
          {isAdmin && (
            <Link
              to={"/Admin"}
              style={{ textDecoration: "underline", textAlign: "center" }}
            >
              <Typography variant="subtitle1">Go To Admin Page</Typography>
            </Link>
          )}
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

            {scores.length === 0 && (
              <div className="scorempty">
                <Typography variant="h6">You don't have scores yet</Typography>
              </div>
            )}
          </div>
        </div>
      ) : (
        <LogFirst />
      )}
    </>
  );
};

export default Profile;
