import React, { useState, useEffect } from 'react';

const spanStyles = ({ width, backgroundColor }) => ({
  backgroundColor,
  width: `${width}%`,
  position: 'absolute',
  left: 0,
  height: '100%',
  transition: 'all 0.25s ease-in-out',
});

const Result = ({ count, correctAnswers, totalQuestions }) => {
  const [calc, setCalc] = useState({ minimum: 0, maximum: 100, current: 0 });

  useEffect(() => {
    if (count !== 0) {
      let minimum = (correctAnswers / totalQuestions) * 100;
      let maximum = ((correctAnswers + (totalQuestions - count)) / totalQuestions) * 100;
      let current = (correctAnswers / count) * 100;
      setCalc({ minimum, maximum: Math.round(maximum), current: Math.round(current) });
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position:'relative',
        top:'100px'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p>{calc.current} %</p>
        <p>{calc.maximum} %</p>
      </div>

      <div
        style={{
          border: '1px solid #000',
          width: 600,
          position: 'relative',
          height: 40,
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <span style={spanStyles({ width: calc.current, backgroundColor: 'rgba(0,0,0,0.25)' })} />
        <span style={spanStyles({ width: calc.minimum, backgroundColor: 'rgba(0,0,0,0.5)' })} />
        <span style={spanStyles({ width: calc.maximum, backgroundColor: 'rgba(0,0,0,0.125)' })} />
      </div>
    </div>
  );
};

export default Result;
