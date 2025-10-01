"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [visivel, setVisivel] = useState(false);
  const [numPlayers, setNumPlayers] = useState(2);
  const [names, setNames] = useState([]);
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
  }

  const handleStart = () => {
    if (names.some((n) => n.trim() === "")) {
      alert("Preencha todos os nomes antes de começar!");
      return;
    }
    const query = `?numPlayers=${numPlayers}&names=${names.join(",")}`;
    router.push(`/quiz${query}`);
  }

  function popup() {
    setVisivel(!visivel)
  }

  return (
    <div className="bg-[url('/Imagens/sim.jpeg')] bg-cover bg-center h-screen w-full">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <button onClick={popup} className="bg-blue-700 rounded-2xl p-6 text-white 
        hover:bg-blue-700 shadow-md hover:scale-120 
        transition transform duration-200 
        focus:outine-none focus:ring-2 focus:ring-blue-400 
        cursor-pointer" text="Começar Quiz"
        >Começar Quiz</button>
      </div>
      {visivel && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-700 text-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
            <h1 className="text-2xl font-bold mb-4">Configuração do Quiz</h1>

            <label className="block mb-4">
              Número de jogadores:
              <input
                type="number"
                min="2"
                max="5"
                value={numPlayers}
                onChange={handleNumPlayers}
                className="ml-2 p-1 text-white rounded"
              />
            </label>

            <div className="mb-4">
              {names.map((name, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={`Nome do Jogador ${idx + 1}`}
                  value={name}
                  onChange={(e) => handleNameChange(idx, e.target.value)}
                  className="block w-full p-2 mb-2 text-white rounded border-amber-400"
                />
              ))}
            </div>

            <button
              onClick={handleStart}
              className="bg-green-600 px-4 py-2 rounded-xl 
              hover:bg-green-700 hover:scale-110 text-white font-bold 
              transition transform duration-200 
              focus:outline-none focus:ring-2 focus:ring-green-400 
              cursor-pointer"
            >
              Começar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
