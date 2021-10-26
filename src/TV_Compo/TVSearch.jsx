import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

export default function SearchMovies() {
  const { name } = useParams();

  const [movies, setmovies] = useState([]);
  const KEY = process.env.REACT_APP_KEY

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const btnclick = async () => {
    try {
      const res = await axios.get(
        ` https://api.themoviedb.org/3/search/tv?api_key=${KEY}&language=en-US&page=1&query=${name}&include_adult=false`
      );
      setmovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    btnclick();
  }, []);

  return (
    <div>
      <div className="TV_Search_main">
        <div className="row">
          {movies.map((mov) => (
            <div className="col-md-3">
              <div class="card TV_Search_main" style={{ width: "18rem" }}>
                
              <Link to={`/TVDetails/${mov.id}`}>
                <img
                  class="card-img-top"
                  src={IMG_API + mov.poster_path}
                  alt="Please Wait"
                /> </Link>
              <div className="details">
                  <div className="rating">
                  <h3>{mov.vote_average}</h3>
                  </div>

                  <div class="card-body">
                    <h5 class="card-text" style={{fontWeight:'700', color:'#032541', textAlign:'justify'}}>{mov.name}</h5>
                    <h5 class="card-text" style={{fontWeight:'500', textAlign:'justify'}}>{mov.first_air_date}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
