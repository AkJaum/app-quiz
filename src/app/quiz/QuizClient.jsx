"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { questions as allQuestions } from "../data/questions";

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
      alert(`Jogador ${turn + 1} pescou ⚫ e perdeu a questão!`);
      nextTurn();
    } else if (chosenBall === "red") {
      alert(`Jogador ${turn + 1} pescou 🔴 e vai responder sem dica!`);
      setPhase("pergunta");
    } else {
      alert(`Jogador ${turn + 1} pescou 🟢 e vai responder com dica!`);
      setPhase("pergunta");
    }
  };

  const checkAnswer = (selected) => {
    const correct = shuffledQuestions[currentQuestion].answer;

    if (selected === correct) {
      const newScores = [...scores];
      newScores[turn] += 1;
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
    }
  };

  const currentPlayerName = playerNames[turn] || `Jogador ${turn + 1}`;

  if (shuffledQuestions.length === 0) return <p>Carregando perguntas...</p>;

  if (finished) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Fim do Quiz</h2>
        <ul>
          {scores.map((score, idx) => (
            <li key={idx} className="mb-2">
              {playerNames[idx] || `Jogador ${idx + 1}`}: {score} pontos
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-[35px] pl-5 pt-2 pb-10">{currentPlayerName}, é sua vez!</h1>

      {phase === "pesca" && (
        <div className="pl-5">
          <p>Qual bola você pescou?:</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleFishing("black")}
              className="px-4 py-2 bg-black text-white rounded"
            >
              ⚫ Preta
            </button>
            <button
              onClick={() => handleFishing("red")}
              className="px-4 py-2 bg-black text-white rounded"
            >
              🔴 Vermelha
            </button>
            <button
              onClick={() => handleFishing("green")}
              className="px-4 py-2 bg-black text-white rounded"
            >
              🟢 Verde
            </button>
          </div>
        </div>
      )}

      {phase === "pergunta" && (
        <div>
          <h1 className="text-center text-[30px] pt-[30px] font-sans">
            {shuffledQuestions[currentQuestion].question}
          </h1>

          <div className="grid grid-cols-2 grid-rows-2 gap-5 p-6">
            {shuffledQuestions[currentQuestion].options.map((opt, idx) => (
              <p
                key={idx}
                onClick={() => checkAnswer(opt)}
                className="bg-blue-700 rounded-2xl p-6 text-white font-sans cursor-pointer"
              >
                {["A", "B", "C", "D"][idx]}: {opt}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <ul>
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
