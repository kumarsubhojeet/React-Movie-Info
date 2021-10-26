import React from 'react'
import Home from './Pages/Home.jsx'

import Navbar from './Components/NavBar'
import SearchMovies from './Pages/SearchMovies.jsx'
import DetailPage from './Pages/DetailPage'
import Footer from "./Components/Footer";
import TVHome from './Pages/TV_Home.jsx'
import TvDetails from './Pages/TvDetail'
import MainPage from './Pages/MainPage.jsx'
import TVSearch from './TV_Compo/TVSearch.jsx'

import {Switch , Route} from 'react-router-dom'

const App = () => {
  return (
    <>
     <Navbar />
    <section>
   
    <Switch>
      <Route exact path="/TV" component={TVHome} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/" component={MainPage} />

      <Route path='/Search/:name' children={<SearchMovies />}></Route>
      <Route path='/Detail/:id' children={<DetailPage />}></Route>
      <Route path='/TVDetails/:id' children={<TvDetails />}></Route>
      <Route path='/TVSearch/:name' children={<TVSearch />}></Route>

    </Switch>
    </section>

    <Footer />
    </>
  )
}

export default App
