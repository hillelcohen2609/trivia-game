import React, { useState } from "react";
import Typography from '@mui/material/Typography';

const Question = ({ data, index, setScoreVal, updateCount, next }) => {
  const [flug, setFlug] = useState(false);

  function handClick(key, e) {
    console.log("data key: ", data[key]);
    updateCount();
    setFlug(true);
    if (data[key].correct === e.target.value) {
      e.target.className = "green";
      setScoreVal();
    } else {
      e.target.className = "red";
    }
  }

  return (
    <div className="answers">
      {data.length !== 0 && (
        <div key={data[index].key} >
          <Typography variant="h6" >
          {data[index].question}
          </Typography>
          <div >
            {data[index].answers.map((ans, indexx) => (
              <button className="answersbtn"
                value={ans}
                key={indexx}
                disabled={flug}
                onClick={(event) => handClick(index, event)}
              >
                {ans}
              </button>
            ))}
          </div>
          {flug && <Typography variant="subtitle1" >Correct Answer: {data[index].correct}</Typography>}
          {console.log("flug: " + flug)}
          {index < data.length - 1 && (
            <div >
              <button disabled={!flug} onClick={() => next()} className="next">
              Next
            </button>
            </div>
            
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
