import React from 'react'
import HomeHero from '../Coomponents/HomeHero'
import HomeText from '../Coomponents/HomeText'
import HomeAgency from '../Coomponents/HomeAgency'
import HomeProj from '../Coomponents/HomeProj'
import HomeOurService from '../Coomponents/HomeOurService'
import Analis from '../Coomponents/Analis'
import HomeRead from '../Coomponents/HomeRead'
import HomeBenefist from '../Coomponents/HomeBenefist'

function Home() {
  return (
    <main>
        <HomeHero/>
        <HomeText/>
        <HomeAgency/>
        <HomeProj/>
        <HomeOurService/>
        <Analis/>
        <HomeRead/>
        <HomeBenefist/>
    </main>
  )
}

export default Home