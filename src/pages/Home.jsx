import React from 'react'
import Slider from '../components/Slider';
import QuickInfo from '../components/QuickInfo'
import About from "../components/About"
import Course from "../components/Course"
import PrincipalCard from '../components/PrincipalCard';
import Recruiters from '../components/Recruiters';

const Home = () => {
  return (
    <>
        <Slider/>
        <QuickInfo/>
        <About/>
        <Course/>
        <PrincipalCard/>
        <Recruiters/>
    </>
  )
}

export default Home