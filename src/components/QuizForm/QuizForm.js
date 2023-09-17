import React, { useRef, useEffect, useState, useMemo } from "react";
import Button from "../Button/Button";
import QuizTimer from "../QuizTimer/QuizTimer";
import WORDS from "../../constants/programming_languages.json";
import "./QuizForm.css";
import Header from "../Header";
import QuizWord from "../QuizWord/QuizWord";

const QuizForm = () => {
  // constants
  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 60 * 5);
  const [words, setWords] = useState(
    WORDS.map((language, i) => {
      return {
        rank: i + 1,
        language: language,
        discovered: false,
      };
    })
  );

  console.count("component rendered");

  // hooks
  const startFunctionRef = useRef();
  const [query, setQuery] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (words.length > 0) {
      const newLang = words.map((language) => {
        return {
          ...language,
          discovered:
            language.discovered ||
            query.toLowerCase() === language.language.toLowerCase(),
        };
      });

      if (
        newLang.filter((l) => l.discovered).length !==
        words.filter((l) => l.discovered).length
      ) {
        setQuery("");
      }

      setWords(newLang);
      const won = newLang.every((language) => language.discovered === true);
      if (won) {
        return handleWin();
      }
    }
  }, [query]);

  const handleClick = () => {
    if (startFunctionRef.current) {
      startFunctionRef.current();
    }
  };

  const handleTimerExpire = () => {
    alert("cabô");
  };
  const handleWin = () => {
    alert("ganhô");
  };

  return (
    <>
      <div className="quizform">
        <Header
          title="Quiz"
          subtitle={
            "Try to find out the #24 most famous programming languages under 5 minutes!"
          }
        />

        {/* 1º SECTION  */}
        <div className="quizform__head">
          <div className="quizform__button">
            {isRunning ? (
              <input
                className="quizform__input"
                type="text"
                placeholder="Digite aqui a palavra"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            ) : (
              <Button onClickAction={handleClick}>Play quiz</Button>
            )}
          </div>

          <div className="quizform__texts">
            <div className="score">
              <h2>Score</h2>
              {
                words.filter((obj) => {
                  return obj.discovered;
                }).length
              }
              /{words.length}
            </div>
            <div>
              <h2>Timer</h2>
              <QuizTimer
                onExpire={handleTimerExpire}
                expiryTimestamp={expiryTimestamp}
                startFunctionRef={startFunctionRef}
                setIsRunning={setIsRunning}
              />
            </div>
          </div>
        </div>

        {/* 2º SECTION  */}
        <div className="quizform__quiz">
          {words.map((language) => {
            return (
              <QuizWord
                word={language.language}
                discovered={language.discovered}
                rank={language.rank}
                key={language.key}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuizForm;
