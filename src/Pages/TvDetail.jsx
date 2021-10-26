import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import {Link} from 'react-router-dom'

import "../Css/Detail.css";
import '../Css/Tvdetails.css'

export default function DetailPage() {
  const { id } = useParams();

  const [movies, setmovies] = useState([]);
  const [geners, setgeners] = useState([]);
  const [networks, setnetworks] = useState([]);
  const [lang , setlang] = useState([]);
  const [seasons , setseasons] = useState([]);
  const [production, setproduction] = useState([]);
  const [director,setdirector] = useState([]);
  const [recommended,setrecommended] = useState([]);

  const [simlatm , setsimilar] = useState([]);
  const KEY = process.env.REACT_APP_KEY


  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const Apicall = async () => {
    try {
      const res = await axios.get(
        ` https://api.themoviedb.org/3/tv/${id}?api_key=${KEY}&language=en-US`
      );
      setmovies(res.data);
      setgeners(res.data.genres);
      setlang(res.data.spoken_languages)
      setnetworks(res.data.networks)
      setseasons(res.data.seasons)
      setproduction(res.data.production_companies)
      setdirector(res.data.created_by)
    } catch (error) {
      console.log(error);
    }
  };

  const Similar = async()=>{
    try {
      const res = await axios.get(` https://api.themoviedb.org/3/tv/${id}/similar?api_key=${KEY}&language=en-US&page=1`)
      setsimilar(res.data.results);
    } catch (error) {
      console.log(error);
    }

  }

  const Recommended = async()=>{
    try {
      const res = await axios.get(` https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${KEY}&language=en-US&page=1`)
      setrecommended(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Apicall();
    Similar();
    Recommended();
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
                    <h5 class="card-text" style={{fontWeight:'700', color:'#032541', textAlign:'justify'}}>{item.name}</h5>
                    <h5 class="card-text" style={{fontWeight:'500', textAlign:'justify'}}>{item.first_air_date}</h5>
                  </div>
                </div>
                </div>
              ))}
            </Carousel>
        
        </div>

        <hr />

        <div className="recommended_tv_shows">
          <h2 style={{ fontWeight: "700" }}>Recommended Shows</h2>
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
             
              infinite={true}
            >
              {recommended.map((item) => (
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
                    <h5 class="card-text" style={{fontWeight:'700', color:'#032541', textAlign:'justify'}}>{item.name}</h5>
                    <h5 class="card-text" style={{fontWeight:'500', textAlign:'justify'}}>{item.first_air_date}</h5>
                  </div>
                </div>
                </div>
              ))}
            </Carousel>
        
        </div>
        
        </div>

        <div className="deatils">
          <h1 style={{ fontWeight: "700" }}>{movies.name}</h1>
          <h3>Tagline: {movies.tagline}</h3>
          <h4>
            <span>
              <i class="far fa-calendar-alt calander"></i>{" "}
            </span>
            {movies.release_date}
          </h4>
          <h4>IMDB: {movies.vote_average}</h4>
          <h4><i class="far fa-clock calander"></i> {movies.episode_run_time} <span>min p/e</span></h4>
          
          <hr />

          <div className="director">
          <h3 style={{ fontWeight: "700" }}>Director</h3>
          <div className="row">
                {
                  director.map(dir=>(
                   <div className="col-md-6">
                     <div class="card TvDetail_card" style={{ width: "18rem" }}>
  <img class="card-img-top" src={IMG_API + dir.profile_path} alt="Error" />
  <div class="card-body">
    <h4 class="card-text">{dir.name}</h4>
  </div>
</div>
                   </div>
                  ))
                }
              </div>

          </div>

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

            <div className="networks">
              <h2 style={{ fontWeight: "700" }}>Watch In</h2>
              <div className="row">
                {
                  networks.map(net=>(
                   <div className="col-md-6">
                     <div class="card TvDetail_card" style={{ width: "18rem" }}>
  <img class="card-img-top" src={IMG_API + net.logo_path} alt="Error" />
  <div class="card-body">
    <h4 class="card-text">{net.name}</h4>
  </div>
</div>
                   </div>
                  ))
                }
              </div>
            </div>
            <hr />

            <div className="seasons">
            <h2 style={{ fontWeight: "700" }}>Seasons</h2>
              <div className="row">
                {
                  seasons.map(soa=>(
                    <div className="col-md-6">
                    <div class="card TvDetail_card" style={{ width: "18rem" }}>
 <img class="card-img-top" src={IMG_API + soa.poster_path} alt="Error" />
 <div class="card-body">
   <h4 class="card-text">{soa.name}</h4>
   <h4 class="card-text">No of Episode: {soa.episode_count}</h4>
   <h4 class="card-text"><i class="far fa-calendar-alt calander"></i>: {soa.air_date}</h4>
 
 </div>
</div>
                  </div>
                  ))
                }
              </div>
            </div>

            <hr />

            <div className="production_comp">
            <h2 style={{ fontWeight: "700" }}>Production Company</h2>
              <div className="row">
                {
                  production.map(pro=>(
                    <div className="col-md-6">

                     <div class="card TvDetail_card" style={{ width: "18rem" }}>
  <img class="card-img-top" src={IMG_API + pro.logo_path} alt="Not Found" />
  <div class="card-body">
    <h4 class="card-text">{pro.name}</h4>
  </div>
</div>
                  
                    </div>
                  ))
                }
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
                    <h5 class="card-text" style={{fontWeight:'700', color:'#032541', textAlign:'justify'}}>{item.name}</h5>
                    <h5 class="card-text" style={{fontWeight:'500', textAlign:'justify'}}>{item.first_air_date}</h5>
                  </div>
                </div>
                </div>
              ))}
            </Carousel>
        
        </div>

        <hr />

        <div className="recommended_tv_shows2">
          <h2 style={{ fontWeight: "700" }}>Recommended Shows</h2>
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
             
              infinite={true}
            >
              {recommended.map((item) => (
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
                    <h5 class="card-text" style={{fontWeight:'700', color:'#032541', textAlign:'justify'}}>{item.name}</h5>
                    <h5 class="card-text" style={{fontWeight:'500', textAlign:'justify'}}>{item.first_air_date}</h5>
                  </div>
                </div>
                </div>
              ))}
            </Carousel>
        
        </div>
  


           
          </div>
        </div>
      </div>

     
    </div>
  );
}
