"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Home.css";

export default function Home() {
  const router = useRouter();
  const [visivel, setVisivel] = useState(false);
  const [numPlayers, setNumPlayers] = useState(2);
  const [names, setNames] = useState(Array(2).fill(""));
  const [start, setStart] = useState(false);

  const handleNumPlayers = (e) => {
    const value = Number(e.target.value);
    setNumPlayers(value);
    setNames(Array(value).fill(""));
  };

  const handleNameChange = (index, value) => {
    const update = [...names];
    update[index] = value;
    setNames(update);
  };

  const handleStart = () => {
    if (names.some((n) => n.trim() === "")) {
      alert("Preencha todos os nomes antes de começar!");
      return;
    }
    const query = `?numPlayers=${numPlayers}&names=${names.join(",")}`;
    router.push(`/quiz${query}`);
  };

  const popup = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="home-bg">
      <div className="home-container">
      </div>

        <div className="popup-overlay">
          <div className="popup-box">
            <h1 className="popup-title">Configuração do Quiz</h1>

            <label className="popup-label">
              Número de jogadores:
              <input
                type="number"
                min="2"
                max="5"
                value={numPlayers}
                onChange={handleNumPlayers}
                className="popup-input-number"
              />
            </label>

            <div className="popup-inputs">
              {names.map((name, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={`Nome do Jogador ${idx + 1}`}
                  value={name}
                  onChange={(e) => handleNameChange(idx, e.target.value)}
                  className="popup-input-text"
                />
              ))}
            </div>

            <button onClick={handleStart} className="popup-start-button">
              Começar
            </button>
          </div>
        </div>
    </div>
  );
}
