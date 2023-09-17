import React from "react";
import './QuizWord.css'

const QuizWord = ({rank, discovered, word}) => {
  return (
    <div
      key={rank}
      className={`quizword ${discovered ? "quiz_ok" : ""}`}
    >
      <b>#{rank}</b> - {discovered && word}
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
};

export default QuizWord;