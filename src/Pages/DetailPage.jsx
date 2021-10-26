import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import Carousel from "react-elastic-carousel";
import {Link} from 'react-router-dom'
import "../Css/Detail.css";

export default function DetailPage() {
  const { id } = useParams();

  const [movies, setmovies] = useState([]);
  const [geners, setgeners] = useState([]);
  const [production, setproduction] = useState([]);
  const [lang , setlang] = useState([]);
  const [recommended,setrecommended] = useState([]);

  const [simlatm , setsimilar] = useState([]);
  const KEY = process.env.REACT_APP_KEY

  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const Apicall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
      );
      setmovies(res.data);
      setgeners(res.data.genres);
      setproduction(res.data.production_companies);
      setlang(res.data.spoken_languages)
    } catch (error) {
      console.log(error);
    }
  };

  const Similar = async()=>{
    try {
      const res = await axios.get(` https://api.themoviedb.org/3/movie/${id}/similar?api_key=15cf9d24c8884ffaa720aecd385ca9e1&language=en-US&page=1`)
      setsimilar(res.data.results);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    Apicall();
    Similar();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  return (
    <div>
      <div className="detail_main">
        <div className="deatil_img_section">
          <img
            className="detail_img"
            src={IMG_API + movies.poster_path}
            alt="Error"
          />
          <a href={movies.homepage} style={{textDecoration:'none'}} target="_blank" without rel="noreferrer"><h2 style={{ fontWeight: "700" , textDecoration:'none' , color: 'Green' }}>Watch Now</h2></a>
       
       <hr />

       <div className="similar_tv_shows">
          <h2 style={{ fontWeight: "700" }}>Similar Shows</h2>
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
             
              infinite={true}
            >
              {simlatm.map((item) => (
                <div class="card" style={{ width: "18rem" }} key={item.id}>
                  
                  <Link to={`/TVDetails/${item.id}`}>
                  <img
                    class="card-img-top"
                    src={IMG_API + item.poster_path}
                    alt="Error"
                  />
                  </Link>

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

        <hr />
       
        </div>

        <div className="deatils">
          <h1 style={{ fontWeight: "700" }}>{movies.original_title}</h1>
          <h3>Tagline: {movies.tagline}</h3>
          <h4>
            <span>
              <i class="far fa-calendar-alt calander"></i>{" "}
            </span>
            {movies.release_date}
          </h4>
          <h4>IMDB: {movies.vote_average}</h4>
          <h4><i class="far fa-clock calander"></i> {movies.runtime} <span>min</span></h4>
          
          <hr />

          <div className="overView">
              <h3 style={{ fontWeight: "700" }}>Overview</h3>
                <h5>{movies.overview}</h5>
            </div>
          
          <hr />
          <h3 style={{ fontWeight: "700" }}>Geners: </h3>
          <div className="row">
            {geners.map((gene) => (
              <>
                <h2>{gene.name}</h2>
              </>
            ))}

            <hr />
            <div className="detail_lang">
                <h3 style={{ fontWeight: "700" }}>Languages</h3>
                <div className="row">
                    {
                        lang.map(lag=>(
                            <h4>{lag.english_name}</h4>
                        ))
                    }
                </div>
            </div>

            <hr />

            <div className="revanu">
              <h3>
                Budget:{" "}
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  value={movies.budget}
                  decimalSeparator="."
                  displayType="text"
                  type="text"
                  prefix="$"
                  thousandSeparator={true}
                  allowNegative={true}
                />
              </h3>
              <h3>
                Revenue:{" "}
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  value={movies.revenue}
                  decimalSeparator="."
                  displayType="text"
                  type="text"
                  prefix="$"
                  thousandSeparator={true}
                  allowNegative={true}
                />
              </h3>
            </div>
            <hr />

            <div className="production_house">
                <h3 style={{ fontWeight: "700" }}>Production Houses:</h3>
              <div className="row">
                {production.map((pro) => (
                  <div className="col-md-6">
                      <div class="card" style={{ width: "18rem" }}>
                    <img
                      class="pro_img"
                      src={IMG_API + pro.logo_path}
                      alt="Error"
                    />
                    <div class="card-body">
                        <h3  style={{ fontWeight: "700" , textAlign: "center"}}>{pro.name}</h3>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>

      <div className="similar_tv_shows2">
          <h2 style={{ fontWeight: "700" }}>Similar Shows</h2>
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
             
              infinite={true}
            >
              {simlatm.map((item) => (
                <div class="card" style={{ width: "18rem" }} key={item.id}>
                  
                  <Link to={`/TVDetails/${item.id}`}>
                  <img
                    class="card-img-top"
                    src={IMG_API + item.poster_path}
                    alt="Error"
                  />
                  </Link>

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
  );
}
