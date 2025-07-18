import { questions } from '../../../Data/quizData';
import { useNavigate } from 'react-router-dom';
import './QuizStyles.css'
const QuizResults = () => {
  const navigate = useNavigate();

  let correctCount = 0;

  for (let i = 1; i <= questions.length; i++) {
    const answer = sessionStorage.getItem(`answer_${i}`);
    if (answer !== null) {
      const userAnswer = Number(answer);
      if (userAnswer === questions[i - 1].correctIndex) correctCount++;
    }
  }

  const restartQuiz = () => {
    for (let i = 1; i <= questions.length; i++) {
      sessionStorage.removeItem(`answer_${i}`);
    }
    navigate('/quiz');
  };

  return (
    <div className="quiz-container quiz-results-container">
      <h1>Resultados</h1>
      <p>
        Has respondido correctamente <strong>{correctCount}</strong> de {questions.length} preguntas.
      </p>

      <button className="btn-restart" onClick={restartQuiz}>
        Reiniciar Quiz
      </button>
    </div>
  );
};

export default QuizResults;
