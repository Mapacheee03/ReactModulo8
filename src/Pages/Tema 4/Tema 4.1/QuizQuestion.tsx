import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../../../Data/quizData';
import { useState, useEffect } from 'react';
import './QuizStyles.css';

const QuizQuestion = () => {
  const { number } = useParams();
  const questionNumber = Number(number);
  const navigate = useNavigate();

  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(`answer_${questionNumber}`);
    if (stored !== null) setSelected(Number(stored));
  }, [questionNumber]);

  if (
    isNaN(questionNumber) ||
    questionNumber < 1 ||
    questionNumber > questions.length
  ) {
    return (
      <div
        className="quiz-container"
        style={{
          color: '#e53e3e',
          fontWeight: '600',
          fontSize: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        Pregunta inválida.
      </div>
    );
  }

  const question = questions[questionNumber - 1];

  const handleOptionClick = (index: number) => {
    setSelected(index);
    sessionStorage.setItem(`answer_${questionNumber}`, index.toString());
  };

  const goNext = () => {
    if (questionNumber === questions.length) {
      navigate('/quiz/results');
    } else {
      navigate(`/quiz/question/${questionNumber + 1}`);
    }
  };

  const goBack = () => {
    if (questionNumber > 1) {
      navigate(`/quiz/question/${questionNumber - 1}`);
    } else {
      navigate('/quiz');
    }
  };

  // Cálculo del progreso en porcentaje
  const progressPercent = (questionNumber / questions.length) * 100;

  return (
    <div className="quiz-container quiz-question-container">
      {/* Barra de progreso */}
      <div className="progress-bar-container" aria-label="Barra de progreso del quiz">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <h2>
        Pregunta {questionNumber} de {questions.length}
      </h2>
      <p>{question.question}</p>

      <ul className="options-list">
        {question.options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => handleOptionClick(i)}
              className={`option-btn ${selected === i ? 'selected' : ''}`}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>

      <div className="navigation-buttons">
        <button className="btn-secondary" onClick={goBack}>
          Anterior
        </button>
        <button
          className="btn-primary"
          onClick={goNext}
          disabled={selected === null}
          aria-disabled={selected === null}
        >
          {questionNumber === questions.length ? 'Terminar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
