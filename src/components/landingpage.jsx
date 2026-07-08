import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import gaming from "../assets/gamingimg.svg";
import "./landingpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  function goToSearch() {
    const query = document.getElementById("search-input").value;
    navigate(`/games?search=${encodeURIComponent(query)}`);
  }
  return (
    <div className="container">
      {/* ... */}
      <div className="input-wrapper">
        <input
          className="input"
          id="search-input"
          type="text"
          placeholder="Search by genre or platform"
          onKeyDown={(e) => { if (e.key === 'Enter') goToSearch() }}
        />
        <button className="search" onClick={goToSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
        </button>
      </div>
      <figure className="gaming-img-container">
        <img src={gaming} alt="gaming image" className="gaming-img" />
      </figure>
    </div>
  );
}

export default LandingPage;
