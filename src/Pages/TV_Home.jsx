import React from 'react'

import TVPop from '../TV_Compo/TVPop'
import TopRated from '../TV_Compo/TopRated'
import TVHeading from '../TV_Compo/TvHeading'


import '../Css/TVHeading.css'

export default function TV_Home() {
    return (
        <div>

            <div className="TV_heading">
                <TVHeading />
            </div>
            
            <div className="TV_latest_main">
                <TVPop />
            </div>

            <div className="TopRated_main">
                <TopRated />
            </div>

        </div>
    )
}
