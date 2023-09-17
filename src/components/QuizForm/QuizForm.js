import React, { useRef, useEffect } from "react";
import Button from "../Button/Button";
import QuizTimer from "../QuizTimer/QuizTimer";
import PROGRAMMING_LANGUAGES from "../../constants/programming_languages.json"
import "./QuizForm.css";

const QuizForm = () => {
  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 60 * 0.1);
  const programmingLanguages = PROGRAMMING_LANGUAGES.map((language,i) =>{
    return {
      'rank': i,
      'language': language,
      'discovered': false,
    }
  })
  // render count
  const count = useRef(0);
  const startFunctionRef = useRef();
  const isRunningRef = useRef(false);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleClick = () =>{
    console.log(isRunningRef);
    console.log("click")
    if (startFunctionRef.current) {
        startFunctionRef.current();
      }
  }

  const handleTimerExpire = () =>{
    alert("cabô");
  }

  return (
    <>
      <h3>Rendered {count.current} times.</h3>

      {/* 1º SECTION  */}
      <div className="quizform">
        <div className="quizform__button">
          <Button onClickAction={handleClick}>Play quiz</Button>
        </div>

        <div className="quizform__texts">
          <div className="score">
            <h2>Score</h2>
            {programmingLanguages.filter(obj => {return obj.discovered}).length}/{programmingLanguages.length}
          </div>
          <div>
            <h2>Timer</h2>
            <QuizTimer
                onExpire={handleTimerExpire}
                expiryTimestamp={expiryTimestamp}
                startFunctionRef={startFunctionRef}
                isRunningRef={isRunningRef}
            />
          </div>
        </div>
      </div>

      {/* 2º SECTION  */}
      {/* rank & language */}
    </>
  );
};

export default QuizForm;
