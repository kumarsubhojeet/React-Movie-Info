import React , {useState} from "react";
import {Link} from 'react-router-dom'

import "../Css/HomeHeading.css";

export default function HomeHeading() {

    const [search , setsearch] = useState("")

 

  return (
    <div>
      <div className="home_heading_main">
        <div className="title">
          <h1>
            Welcome. Millions of movies, TV shows and people to discover.
            Explore now.
          </h1>
        </div>

        <div className="search_MainP">

            <Link to="/Home" className="search_MainP_link">Movies</Link>

            <Link to="/TV" className="search_MainP_link">TV Shows</Link>

        </div>
      </div>
    </div>
  );
}
