"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { questions as allQuestions } from "../data/questions";
import "./QuizClient.css";
import Image from "next/image";
import Link from "next/link"

export default function QuizClient() {
  const searchParams = useSearchParams();
  const numPlayers = Number(searchParams.get("numPlayers") || 2);
  const playerNames = (searchParams.get("names") || "").split(",").filter(Boolean);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(Array(numPlayers).fill(0));
  const [turn, setTurn] = useState(0);
  const [phase, setPhase] = useState("pesca");
  const [ball, setBall] = useState(null);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [dica, setDica] = useState(0);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const shuffledOptions = shuffled.map((q) => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5),
    }));
    setShuffledQuestions(shuffledOptions);
  }, []);

  const handleFishing = (chosenBall) => {
    setBall(chosenBall);

    if (chosenBall === "black") {
      nextTurn();
    } else if (chosenBall === "red") {
      setPhase("perguntad");
      setDica(1);
    } else {
      setPhase("pergunta");
    }
  };

  const checkAnswer = (selected, chosenBall) => {
    const correct = shuffledQuestions[currentQuestion].answer;

    if (selected === correct && chosenBall === "red") {
      const newScores = [...scores];
      newScores[turn] += 40;
      setScores(newScores);
      alert("Resposta correta!");
    } else if (selected === correct && chosenBall === "green") {
      const newScores = [...scores];
      newScores[turn] += 20;
      setScores(newScores);
      alert("Resposta correta!");
    } else {
      alert("Resposta errada. Correta: " + correct);
    }

    setPhase("pesca");
    nextTurn();
  };

  const nextTurn = () => {
    const nextQuestion = currentQuestion + 1;
    const nextPlayer = (turn + 1) % numPlayers;

    if (nextQuestion >= shuffledQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQuestion(nextQuestion);
      setTurn(nextPlayer);
      setBall(null);
      setDica(0);
    }
  };

  const currentPlayerName = playerNames[turn] || `Jogador ${turn + 1}`;

  if (shuffledQuestions.length === 0) return <p>Carregando perguntas...</p>;

  if (finished) {
    return (
      <div className="quiz-container">
        <h2 className="quiz-title">Fim do Quiz</h2>
        <ul className="quiz-list">
          {scores.map((score, idx) => (
            <li key={idx} className="quiz-list-item">
              {playerNames[idx] || `Jogador ${idx + 1}`}: {score} pontos
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <main>
      <nav>
        <Link href="/">
          <Image
            className="back"
            alt="Voltar"
            src="/Imagens/back.png"
            width={50}
            height={10}
          />
        </Link>
        <h1 className="quiz-player-turn">{currentPlayerName}, é sua vez!</h1>
      </nav>

      {phase === "pesca" && (
        <div className="quiz-fishing-section">
          <h1>Qual bola você pescou?:</h1>
          <div className="quiz-fishing-buttons">
            <button onClick={() => handleFishing("black")} className="quiz-ball-btn">
              ⚫ Preta
            </button>
            <button onClick={() => handleFishing("red")} className="quiz-ball-btn">
              🔴 Vermelha
            </button>
            <button onClick={() => handleFishing("green")} className="quiz-ball-btn">
              🟢 Verde
            </button>
          </div>
        </div>
      )}

      {phase === "pergunta" && (
        <div className="question-box">
          <h1 className="quiz-question">
            {shuffledQuestions[currentQuestion].question}
          </h1>

          <div className="quiz-options">
            {shuffledQuestions[currentQuestion].options.map((opt, idx) => (
              <p
                key={idx}
                onClick={() => checkAnswer(opt, ball)}
                className="quiz-option"
              >
                {["A", "B", "C", "D"][idx]}: {opt}
              </p>
            ))}
          </div>
        </div>
      )}

      {phase === "perguntad" && (
        <div className="question-box">
          <h1 className="quiz-question">
            {shuffledQuestions[currentQuestion].question}
          </h1>

          <div className="quiz-options">
            {shuffledQuestions[currentQuestion].options.map((opt, idx) => (
              <p
                key={idx}
                onClick={() => checkAnswer(opt, ball)}
                className="quiz-option"
              >
                {["A", "B", "C", "D"][idx]}: {opt}
              </p>
            ))}
          </div>
          <div className="quiz-dica">
            <Image/>
          </div>
        </div>
      )}

      <div className="quiz-score-section">
        <h2>Ranking</h2>
        <ul className="quiz-score-list">
          {scores.map((score, idx) => (
            <li key={idx}>
              {playerNames[idx] || `Jogador ${idx + 1}`}: {score} pontos
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
