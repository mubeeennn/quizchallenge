import { useState} from 'react';
import './App.css';
import questions from './questions.json';
import Question from './Question';
import Result from './Result';
import Topprogressbar from './Topprogressbar';

function App() {
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState('');

  const handleclick = (opt) => {
    setCount((previous) => previous + 1);
  };

  return (
    <div className='App'>
      <div className='container'>
        <Topprogressbar count={count}/>
        {questions.map((q, index) => (
          <Question
            key={index}
            count={index + 1}
            category={decodeURIComponent(q.category)}
            question={decodeURIComponent(q.question)}
            difficulty={q.difficulty}
            correctans={decodeURIComponent(q.correct_answer)}
            incorrectans={q.incorrect_answers}
            isShow={count === index}
            selectedOpt={selectedOpt}
            setSelectedOpt={setSelectedOpt}
            setCorrectAnswers={setCorrectAnswers}
          />
        ))}
        {selectedOpt !== '' && <button className="next-btn" onClick={() => handleclick(false)}>Next Question</button>}
        <Result correctAnswers={correctAnswers} count={count} totalQuestions={questions.length} />
      </div>
    </div>
  );
}

export default App;
