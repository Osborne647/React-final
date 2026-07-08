import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Games() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [allGames, setAllGames] = useState([]);
  const [games, setGames] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // 👈 controls how many show

  useEffect(() => {
    async function fetchGames() {
      const response = await axios("https://www.freetogame.com/api/games");
      setAllGames(response.data);
    }
    fetchGames();
  }, []);

  useEffect(() => {
    const query = searchParams.get("search")?.toLowerCase() || "";
    if (query) {
      const filtered = allGames.filter((game) =>
        game.genre.toLowerCase().includes(query) ||
        game.platform.toLowerCase().includes(query) ||
        game.title.toLowerCase().includes(query)
      );
      setGames(filtered);
    } else {
      setGames(allGames);
    }
    setVisibleCount(6); // 👈 reset to 6 on new search
  }, [allGames, searchParams]);

  function goToSearch() {
    const query = document.getElementById("search-input").value;
    navigate(`/games?search=${encodeURIComponent(query)}`);
  }

  function handleSort(value) {
    if (value === "A_TO_Z") {
      setGames([...games].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (value === "Z_TO_A") {
      setGames([...games].sort((a, b) => b.title.localeCompare(a.title)));
    }
  }

  return (
    <div>
      <section id="landing-games">
        <div className="search__sort">
          <div className="input-wrapper-gamepage">
            <input
              className="input"
              id="search-input"
              type="text"
              placeholder="Search by genre or platform"
              defaultValue={searchParams.get("search") || ""}
              onKeyDown={(e) => { if (e.key === 'Enter') goToSearch() }}
            />
            <button className="search" onClick={goToSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="sort">
            <select id="filter" onChange={(e) => handleSort(e.target.value)} defaultValue="">
              <option value="" disabled>Sort</option>
              <option value="A_TO_Z">Alphabetical A-Z</option>
              <option value="Z_TO_A">Alphabetical Z-A</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="game-list">
              {games.slice(0, visibleCount).map((game) => (
            <div className="game-card" key={game.id} onClick={() => navigate(`/games/${game.id}`)}>
                <div className="game-card__container">
                <h3>{game.title}</h3>
                <img src={game.thumbnail} alt={game.title} />
                <p><b>Publisher:</b> {game.publisher}</p>
                <p><b>Genre:</b> {game.genre}</p>
                <p><b>Platform:</b> {game.platform}</p>
                <p><b>Release Date:</b> {game.release_date}</p>
                <p><b>URL:</b> {game.freetogame_profile_url}</p>
                </div>
            </div>
              ))}
            </div>
            {visibleCount < games.length && (
              <button
                className="show-more"
                onClick={() => setVisibleCount(visibleCount + 12)}
              >
                Show More
              </button>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;