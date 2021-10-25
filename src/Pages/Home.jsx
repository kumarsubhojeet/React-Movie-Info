import React from "react";
import PopularMovies from "../Components/PopularMovies";
import TopMovies from '../Components/TopMovies';
import UpcommingMovies from "../Components/UpcommingMovies";
import LatestMovies from "../Components/LatestMovies";

import HomeHeading from "../Components/HomeHeading";

import "../Css/Home.css";

export default function Home() {
  return (
    <div>
      <div className="home_main">

      <div className="HomeHeading">
          <HomeHeading />
        </div>

      <div className="LatestMovies">
          <LatestMovies />
        </div>

        <div className="PopularMovies">
          <PopularMovies />
        </div>

        <div className="Upcomimg">
          <UpcommingMovies />
        </div>

        <div className="TopMovies">
          <TopMovies />
        </div>



      </div>
    </div>
  );
}
