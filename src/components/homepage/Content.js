import React from 'react'
import Main from './Main'
import Trending from './Trending'
import Deals from './Deals'
import Featured from './Featured'
import Recomended from './Recomended'
import Editors from './Editors'


const Content = () => {
  return (
    <div>
        <Main/>
        <Trending/>
        <Deals/>
        <Featured/>
        <Recomended/>
        <Editors/>
    </div>
  )
}

export default Content