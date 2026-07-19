import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    async function fetchGame() {
      const response = await axios(`https://www.freetogame.com/api/game?id=${id}`);
      setGame(response.data);
    }
    fetchGame();
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    <div className="game-detail">
      <Link to="/games" className="back-link">← Back to games</Link>
      <div className="game-detail__content">
        <img src={game.thumbnail} alt={game.title} />
        <h1>{game.title}</h1>
        <p className="description">{game.description}</p>
        <div className="game-detail__info">
          <p><b>Genre:</b> {game.genre}</p>
          <p><b>Platform:</b> {game.platform}</p>
          <p><b>Publisher:</b> {game.publisher}</p>
          <p><b>Developer:</b> {game.developer}</p>
          <p><b>Release Date:</b> {game.release_date}</p>
          <p><b>Status:</b> {game.status}</p>
        </div>
        {game.minimum_system_requirements && (
          <div className="game-detail__specs">
            <h3>System Requirements</h3>
            <p><b>OS:</b> {game.minimum_system_requirements.os}</p>
            <p><b>Processor:</b> {game.minimum_system_requirements.processor}</p>
            <p><b>Memory:</b> {game.minimum_system_requirements.memory}</p>
            <p><b>Graphics:</b> {game.minimum_system_requirements.graphics}</p>
            <p><b>Storage:</b> {game.minimum_system_requirements.storage}</p>
          </div>
        )}
        <a href={game.game_url} target="_blank" rel="noreferrer" className="play-btn">
          Play Now
        </a>
      </div>
    </div>
  );
}

export default GameDetail;

//MAde by Nick Osborne
