import React, { useEffect, useState } from 'react'
import ImgMediaCard from './Card'
import {projects} from '../myData'
import '../css/Portfolio.css'
import useWindowPosition from '../hook/useWindowPosition'
import Grid from '@material-ui/core/Grid'

const Portfolio = () => {
    const [offsetY, setoffsetY] = useState(0)
    const handleScroll = () => setoffsetY(window.pageYOffset)
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll')
    },[])

    const animate = useWindowPosition('header')
    // console.log(offsetY)
    return (
        <div className="portfolio" id="portfolio" style={{transform: `translateY(${-offsetY*0.5})`}}>
            
            <h1>Check out some of my works:</h1>
            
            <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                    <ImgMediaCard project={projects[0]} animate={animate}/>
                </Grid>
                <Grid item item xs={6} md={3}>
                    <ImgMediaCard project={projects[1]} animate={animate}/>
                </Grid>
                <Grid item item xs={6} md={3}>
                    <ImgMediaCard project={projects[2]} animate={animate}/>
                </Grid>
                <Grid item item xs={6} md={3}>
                    <ImgMediaCard project={projects[3]} animate={animate}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Portfolio