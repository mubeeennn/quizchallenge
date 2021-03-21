import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

function shuffleArray(arr) {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const buttonStyles = (correctAns) => ({
  backgroundColor: correctAns ? '#000' : '#C0C0C0',
  color: correctAns ? '#fff' : '#000',
});

const Question = ({
  count,
  category,
  question,
  difficulty,
  correctans,
  incorrectans,
  isShow,
  selectedOpt,
  setSelectedOpt,
  setCorrectAnswers,
}) => {
  const [answers, setAnswers] = useState([]);

  function handleOptionClick(option) {
    setSelectedOpt(option);
    setCorrectAnswers((prev) => (option === correctans ? prev + 1 : prev));
  }

  useEffect(() => {
    setSelectedOpt('');
    let newAnswers = shuffleArray([correctans, ...incorrectans]);
    setAnswers(newAnswers);
  }, [isShow]);

  if (isShow) {
    return (
      <div>
        <h1 style={{ color: '#585858' }}>Question {count} of 20</h1>
        <p style={{ fontWeight: '500', color: '#777' }}>{category}</p>
        {
          <StarRatings
            rating={difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3}
            starRatedColor='black'
            starDimension='14px'
            numberOfStars={3}
            name='rating'
          />
        }
        <div style={{marginTop:"40px"}}>
          <p style={{fontSize:"20px", fontWeight:"500"}}>{question}</p>
          <div className='btn-container' style={{marginTop:"40px"}}>
            {answers.map((a) => {
              return (
                <button
                  className='btn'
                  onClick={() => handleOptionClick(a)}
                  style={buttonStyles(selectedOpt !== '' && a === correctans)}
                  disabled={selectedOpt !== '' && selectedOpt !== a}
                >
                  {decodeURIComponent(a)}
                </button>
              );
            })}
          </div>
          <div style={{textAlign:"center"}}>
          <p>{selectedOpt === correctans ? <h2>Correct!</h2> : selectedOpt !== '' && <h2>"Sorry!"</h2>}</p>
            
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Question;
