import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import {Link} from 'react-router-dom'


import "../Css/Popmovies.css";

export default function PopularMovies() {
  const [movies, setmovies] = useState([]);

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const Api = async () => {
    try {
      const res = await axios.get(
        ` https://api.themoviedb.org/3/movie/popular?api_key=15cf9d24c8884ffaa720aecd385ca9e1&language=en-US&page=1`
      );
      setmovies(res.data.results);
      console.log(res.data.results[0].poster_path);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div>
      <div className="pop_mov">
        <div className="pop_heading">
          <h3>Trending Now</h3>  </div>

          <div className="section_pop">
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
              easing="cubic-bezier(1,.15,.55,1.54)"
              tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
              transitionMs={1000}
              infinite={true}
            >
              {movies.map((item) => (
                <div class="card" style={{ width: "18rem" }} key={item.id}>
                  
                  <Link to={`/Detail/${item.id}`}>
                  <img
                    class="card-img-top"
                    src={IMG_API + item.poster_path}
                    alt="Error"
                  /> </Link>

<div className="details">
                  <div className="rating">
                  <h3>{item.vote_average}</h3>
                  </div>

                  <div class="card-body">
                    <h5 class="card-text" style={{fontWeight:'700', color:'#032541', textAlign:'justify'}}>{item.title}</h5>
                    <h5 class="card-text" style={{fontWeight:'500', textAlign:'justify'}}>{item.release_date}</h5>
                  </div>
                </div>
                </div>
              ))}
            </Carousel>
          </div>
      
      </div>
    </div>
  );
}
