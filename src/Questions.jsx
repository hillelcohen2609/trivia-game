import React, { useState, useRef, useEffect } from "react";
import useFetch from "./useFetch";
import Question from "./Question";
import { useLocation, Link } from "react-router-dom";

import { CircularProgress, Typography } from "@mui/material";

export default function Questions() {
  const location = useLocation();
  console.log("location: ", location.state);
  let id = 21;
  const numQ = location.state.numberQuestions;
  const category = location.state.categoryId;
  const level = location.state.difficulty;

  const [data] = useFetch(
    `https://opentdb.com/api.php?amount=${numQ}`,
    category,
    level
  );
  // https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
  const [score, setScore] = useState(0);
  const [checkAllAnswersClicked, setAheckAllAnswersClicked] = useState(0);
  const [index, setIndex] = useState(0);

  console.log(data);
  console.log(data.length);

  function next() {
    if (index < data.length - 1) {
      const temp = index + 1;
      setIndex(temp);
    }
  }

  function updateCount() {
    const temp = checkAllAnswersClicked + 1;
    console.log("in update temp= " + temp);
    setAheckAllAnswersClicked(temp);
  }

  function setScoreVal() {
    let temp = score + (1 / data.length) * 100;
    temp = Math.round(temp);
    setScore(temp);
  }

  return (
    <>
      {data.length === 0 && (
        <div className="circular">
          <CircularProgress size={"20%"} />
        </div>
      )}
      
      {data.length !== 0 && (
        <div className="questions">
          <Question
            data={data}
            index={index}
            key={index}
            setScoreVal={() => setScoreVal()}
            updateCount={updateCount}
            next={next}
          />
          
          
            
          <div className="score">
        {checkAllAnswersClicked === data.length && data.length > 0 && (
          <>
            {updateUserScores()}
            <Typography variant="h6">Total Score: {score}%</Typography>
            <button className="restart">
              <Link to="/Options" >Restart</Link>
            </button>
          </>
        )}
      </div>
        </div>
      )}
    </>
  );
}
