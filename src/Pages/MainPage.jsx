import React from 'react'
import HomeHMainPage from "../Components/HomeHMainPage";
import PopularMovies from "../Components/PopularMovies";

import LatestMovies from "../Components/LatestMovies";
import TopMovies from '../Components/TopMovies';


import '../Css/Main.css'
import TVPop from '../TV_Compo/TVPop'
import TopRated from '../TV_Compo/TopRated'

export default function MainPage() {
    return (
        <div>

        <div className="HomeHeading">
            <HomeHMainPage />
        </div>

      <div className="LatestMovies">
          <LatestMovies />
        </div>

        <div className="TV_latest_main">
                <TVPop />
            </div>

           

        <div className="PopularMovies">
          <PopularMovies />
        </div>

        <div className="TopRated_main">
                <TopRated />
            </div>
        
        <div className="TopMovies">
          <TopMovies />
        </div>

        </div>
    )
}
