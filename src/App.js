import React from 'react'
import Home from './Pages/Home.jsx'

import Navbar from './Components/NavBar'
import SearchMovies from './Pages/SearchMovies.jsx'
import DetailPage from './Pages/DetailPage'
import Footer from "./Components/Footer";

import {Switch , Route} from 'react-router-dom'

const App = () => {
  return (
    <>
     <Navbar />
    <section>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/Search/:name' children={<SearchMovies />}></Route>
      <Route path='/Detail/:id' children={<DetailPage />}></Route>
    </Switch>
    </section>

    <Footer />
    </>
  )
}

export default App
