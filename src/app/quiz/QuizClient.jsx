"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
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
  const [visivel, setVisivel] = useState(false);

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
      setPhase("pergunta");
    } else {
      setPhase("perguntad");
      setDica(1);
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

  const ft_dica = () => {
    setVisivel(!visivel);
  };

  const finishGame = () => {
    setFinished(true);
  };

  const router = useRouter();

  const restartGame = () => {
    router.refresh();
    setFinished(false);
    setCurrentQuestion(0);
    setScores(Array(numPlayers).fill(0));
    setTurn(0);
    setPhase("pesca");
    setBall(null);
    setDica(0);
  };

  useEffect(() => {
    if (finished) {
      setPhase("fim");
    }
  }, [finished]);

  useEffect(() => {
    const someoneWon = scores.some(score => score >= 100);
    if (someoneWon && !finished) {
      setFinished(true);
    }
  }, [scores, finished]);

  const currentPlayerName = playerNames[turn] || `Jogador ${turn + 1}`;

  if (shuffledQuestions.length === 0) return <p>Carregando perguntas...</p>;

  return (
    <main>
      <div className="background-geral">

        <nav>
          <div className="nav-div">
            <Image
              className="eyes"
              src={"/Imagens/minionseyes.png"}
              width={125}
              height={50}
              alt="eyes"
            />
            <h1>Empreendendo Minions</h1>
          </div>
        </nav>
        <Link href="/">
          <Image
            className="back"
            alt="Voltar"
            src="/Imagens/back.png"
            width={50}
            height={10}
          />
        </Link>
        {phase === "pesca" && (
          <div className="quiz-fishing-section">
            <h1 className="quiz-player-turn">{currentPlayerName}, é sua vez!</h1>
            <h1>Qual bola você pescou? 🎣</h1>
            <div className="quiz-fishing-buttons">
              <button onClick={() => handleFishing("black")} className="quiz-ball-btn">
                ⚫
              </button>
              <button onClick={() => handleFishing("red")} className="quiz-ball-btn">
                🔴
              </button>
              <button onClick={() => handleFishing("green")} className="quiz-ball-btn">
                🟢
              </button>
            </div>
          </div>

        )}

        {phase === "pergunta" && (
          <div className="question-box">
            <h1 className="quiz-player-turn">{currentPlayerName}, é sua vez!</h1>
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
            <h1 className="quiz-player-turn">{currentPlayerName}, é sua vez!</h1>
            <h1 className="quiz-question">
              {shuffledQuestions[currentQuestion].question}
            </h1>

            <div className="quiz-dica">
              <Image
                onClick={ft_dica}
                src={"/Imagens/dica.png"}
                width={50}
                height={50}
                alt="Dica"
              />
              {visivel && (
                <p className="quiz-dica-text">{shuffledQuestions[currentQuestion].hint}</p>
              )}
            </div>

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

        {phase === "fim" && (
          <div className="quiz-end-section">
            <h1 className="quiz-end">Fim do Quiz!</h1>
            <button onClick={restartGame} className="quiz-restart-button">
              Reiniciar Quiz
            </button>
            <Link href="/">
            <button className="quiz-restart-button">
              Voltar para a tela inicial
            </button>
            </Link>
          </div>
        )}

        <div className="quiz-score-section">
          <h2>Ranking</h2>
          <ul className="quiz-score-list">
            {[...scores]
              .map((score, idx) => ({
                name: playerNames[idx] || `Jogador ${idx + 1}`,
                score,
              }))
              .sort((a, b) => b.score - a.score)
              .map((player, index) => {
                const medals = ['🥇', '🥈', '🥉'];
                const medal = medals[index] || '';

                return (
                  <li key={index}>
                    {medal} {player.name}: {player.score} pontos
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </main>
  );
}
