import { useNavigate } from 'react-router-dom';
import './QuizStyles.css';

const QuizStart = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz/question/1');
  };

  return (
    <div className="quiz-container quiz-start">
      <h1>Bienvenido al Quiz</h1>
      <p>Responde las preguntas y revisa tus resultados al final.</p>
      <button className="btn-primary" onClick={startQuiz}>
        Empezar
      </button>
    </div>
  );
};

export default QuizStart;
