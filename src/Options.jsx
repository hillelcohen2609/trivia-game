import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Questions from "./Questions";
import {
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Paper,
  Box,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import LogFirst from "./LogFirst";

const url = "https://opentdb.com/api_category.php";

const Options = () => {
  const [categories, setCategories] = useState(null);
  const [choosenCategory, setChoosenCategory] = useState("");
  const [choosenDifficulty, setChoosenDifficulty] = useState("");
  const [numQ, setNumQ] = useState(10);
  const valid = sessionStorage.getItem("valid");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCategories(result.trivia_categories);
      });
  }, [url]);

  function changeNumQ(event) {
    console.log("in changeNumQ");
    setNumQ(event.target.value);
    console.log("numQ = " + numQ);
  }

  function handleSelectChange(event) {
    setChoosenCategory(event.target.value);
  }

  function handleDifficultyChange(event) {
    setChoosenDifficulty(event.target.value);
  }

  return (
    <>
      {valid ? (
        <div className="options">
          {categories === null && (
            <div className="circular">
              <CircularProgress size={"20%"} />
            </div>
          )}

          {categories && (
            <Paper
              sx={{ width: "60%", ml: "20%", mt: "5%", textAlign: "center" }}
            >
              <Typography variant="h4">Choose your quiz.</Typography>
              <FormControl sx={{ m: 1, minWidth: "50%" }}>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  value={choosenCategory}
                  label="Category"
                  onChange={handleSelectChange}
                  placeholder="choose a category"
                >
                  <MenuItem sx={{ width: "100" }} value="">
                    Any
                  </MenuItem>
                  {categories.map((category, index) => {
                    return (
                      <MenuItem value={category.id} key={index}>
                        {category.name}
                      </MenuItem>
                    );
                  })}
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: "50%" }}>
                <InputLabel id="difficulty">difficulty </InputLabel>
                <Select
                  labelId="difficulty"
                  id="difficulty"
                  value={choosenDifficulty}
                  label="difficulty"
                  onChange={handleDifficultyChange}
                >
                  <MenuItem value="">Any</MenuItem>
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="hard">Hard</MenuItem>
                </Select>
              </FormControl>
              <br></br>

              <input
                type="number"
                className="quantity"
                id="quantity"
                name="quantity"
                min="1"
                max="50"
                onChange={changeNumQ}
                placeholder="type a number"
              ></input>
              <br></br>
              <Link
                to="/Options/Questions"
                state={{
                  difficulty: choosenDifficulty,
                  categoryId: choosenCategory,
                  numberQuestions: numQ,
                }}
              >
                <button
                  className="categorysubmit"
                  disabled={!(numQ > 0 && numQ < 51)}
                >
                  {" "}
                  Start
                </button>
                {/*!(numQ > 0 && numQ < 51)*/}
              </Link>
            </Paper>
          )}
        </div>
      ) : (
        <LogFirst/>
      )}
    </>
  );
};

export default Options;
