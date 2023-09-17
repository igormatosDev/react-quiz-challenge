import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
const QuizTimer = (props) => {
  const { onExpire, expiryTimestamp, startFunctionRef, isRunningRef } = props;

  const { seconds, minutes, isRunning, start, reset } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => onExpire(),
  });

  useEffect(() => {
    startFunctionRef.current = start;
    isRunningRef.current = isRunning;
  }, [startFunctionRef, isRunning]);

  return (
    <div className="timer">
      {minutes}:{String(seconds).length == 1 ? "0" + seconds : seconds }
    </div>
  );
};

export default QuizTimer;
