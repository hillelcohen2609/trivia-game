import React, { useEffect, useState } from "react";
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i

    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function buildTheUrl(url, category, level) {
  if (category !== "") {
    url = url + `&category=${category}`;
  }
  if (level !== "") {
    url = url + `&difficulty=${level}`;
  }
  console.log(url);
  return url;
}

function decode(encrypted) {
  const parser = new DOMParser();
  const decodedText = parser.parseFromString(encrypted, "text/html").body
    .textContent;
  return decodedText;
}

export default function useFetch(url, category, level) {
  const URL = buildTheUrl(url, category, level);
  //console.log("The url is: "+URL);
  const [data, setData] = useState([]);

  let id = 0;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        /*need to set 1)[of 10 different options]-> in every
        element will be a {q,answers options ,correct options} */
        let arr = [];
        result.results.forEach((result) => {
          const decodedText = decode(result.question);
          let ans = result.incorrect_answers.map((anss) => {
            let decodedText = decode(anss);
            return decodedText;
          });

          const decodedText2 = decode(result.correct_answer);
          ans.push(decodedText2);
          shuffleArray(ans);

          arr.push({
            question: decodedText,
            answers: ans,
            correct: decodedText2,
            key: id,
          });
          id++;
        }); //maps end here
        setData(arr);
      });
  }, [url]);

  return [data];
}
