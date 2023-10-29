import React from 'react'
import CaseHero from '../Coomponents/CaseHero'
import CaseAbove from '../Coomponents/CaseAbove'
import ServiceRese from '../Coomponents/ServiceRese'
import CaseForm from '../Coomponents/CaseForm'
import HomeOurService from '../Coomponents/HomeOurService'
import HomeRead from '../Coomponents/HomeRead'

function CaseStudies() {
  return (
    <main>
        <CaseHero/>
        <CaseAbove/>
        <ServiceRese/>
        <CaseForm/>
        <HomeOurService/>
        <HomeRead/>
    </main>
  )
}

export default CaseStudies