import React, { useState } from "react";
import Quiz from "react-quiz-component";

const quizData = {
  quizTitle: "Epithelial Tissue Histology Quiz",
  questions: [
    {
      question:
        "What is the type of muscle tissue that is responsible for voluntary movements?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Skeletal muscle",
        "Smooth muscle",
        "Cardiac muscle",
        "Visceral muscle",
      ],
      correctAnswer: "1",
    },
    {
      question: "What is the characteristic feature of cardiac muscle tissue?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Intercalated discs",
        "Striations",
        "Central nuclei",
        "Multinucleated",
      ],
      correctAnswer: "1",
    },
    {
      question:
        "What is the type of muscle tissue that is responsible for involuntary contractions of the hollow organs?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Skeletal muscle",
        "Smooth muscle",
        "Cardiac muscle",
        "Visceral muscle",
      ],
      correctAnswer: "1",
    },
    {
      question: "What is the characteristic feature of skeletal muscle tissue?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Intercalated discs",
        "Striations",
        "Central nuclei",
        "Multinucleated",
      ],
      correctAnswer: "1",
    },
  ],
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    textAlign: "center",
  },
  resultContainer: {
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px",
  },
};

function QuizComponent() {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = quizData.questions.length;

  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
  };

  const displayResults = () => {
    if (score === totalQuestions * 10) {
      return (
        <div>
          <h1> Congratulations. You Have a Full Score </h1>
          <h2>Quiz Result Summary</h2>
          <h3>Total Questions: {totalQuestions}</h3>
          <h3>Correct Answers: {correctAnswers}</h3>
          <h3>Incorrect Answers: {totalQuestions - correctAnswers}</h3>
          <h3>Score: {score}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Quiz Result Summary</h2>
          <h3>Total Questions: {totalQuestions}</h3>
          <h3>Correct Answers: {correctAnswers}</h3>
          <h3>Incorrect Answers: {totalQuestions - correctAnswers}</h3>
          <h3>Score: {score}</h3>
        </div>
      );
    }
  };

  // const CustomResultPage = (resultSummary) => {
  //   console.log(resultSummary);
  // };

  const questionSubmitted = (response) => {
    console.log(response);
    if (response.isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setScore(score + 10);
    }
  };

  const retakeQuiz = () => {
    setQuizCompleted(false);
    setCorrectAnswers(0);
    setScore(0);
  };
  return (
    <div style={styles.container}>
      {quizCompleted ? (
        <div style={styles.resultContainer}>
          {displayResults()}
          <button style={styles.button} onClick={() => retakeQuiz()}>
            Retake the Quiz
          </button>
        </div>
      ) : (
        <Quiz
          quiz={quizData}
          onComplete={handleCompleteQuiz}
          onQuestionSubmit={questionSubmitted}
        />
      )}
    </div>
  );
}
export default QuizComponent;
