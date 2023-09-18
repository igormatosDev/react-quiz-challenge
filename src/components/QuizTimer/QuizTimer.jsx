import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { TimerEnums } from "../../constants/Enums";

const QuizTimer = (props) => {
  const { onExpire, expiryTimestamp, timerState } = props;

  const { seconds, minutes, isRunning, start } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => onExpire(),
  });

  useEffect(() => {
    if (timerState == TimerEnums.Running) {
      start();
    }
  }, [timerState]);

  return (
    <div className="timer">
      {minutes}:{String(seconds).length === 1 ? "0" + seconds : seconds}
    </div>
  );
};

export default QuizTimer;
