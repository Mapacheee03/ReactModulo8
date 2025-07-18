export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

export const questions: Question[] = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "París", "Londres", "Berlín"],
    correctIndex: 1,
  },
  {
    question: "¿Qué lenguaje se usa para estilos web?",
    options: ["HTML", "Python", "CSS", "Java"],
    correctIndex: 2,
  },
  {
    question: "¿Cuántos planetas tiene el sistema solar?",
    options: ["7", "8", "9", "10"],
    correctIndex: 1,
  },
];
