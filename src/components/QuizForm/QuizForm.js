import React, { useRef, useEffect, useState, useMemo } from "react";
import Button from "../Button/Button";
import QuizTimer from "../QuizTimer/QuizTimer";
import WORDS from "../../constants/programming_languages.json";
import "./QuizForm.css";
import Header from "../Header";

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
        <Header title="Quiz" subtitle={"Try to find out the #24 most famous programming languages under 5 minutes!"} />

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
        <div className="quizform__content">
          <div className="quizform__quiz">
            {words.map((language) => {
              return (
                <div
                  key={language.rank}
                  className={`quizform__quizline ${
                    language.discovered ? "quiz_ok" : ""
                  }`}
                >
                  <b>#{language.rank}</b> -{" "}
                  {language.discovered && language.language}
                  <svg
                    className="check_svg"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt"
                    height="512.000000pt"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M4473 4540 c-126 -26 -51 43 -1423 -1326 l-1275 -1274 -480 480 c-518 518 -529 527 -657 551 -51 9 -79 9 -124 1 -113 -23 -158 -53 -306 -200 -114 -115 -142 -149 -170 -207 -30 -64 -33 -78 -33 -165 0 -83 4 -103 29 -160 28 -61 77 -113 799 -837 556 -557 784 -779 821 -800 71 -39 168 -39 241 -1 38 20 432 409 1606 1585 1481 1483 1557 1561 1585 1623 25 57 29 77 29 160 0 137 -27 191 -176 345 -126 130 -187 179 -257 205 -59 22 -154 31 -209 20z" />
                    </g>
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizForm;
