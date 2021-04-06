import React, { useEffect, useState } from 'react'
import ImgMediaCard from './Card'
import {projects} from '../myData'
import '../css/Portfolio.css'
import useWindowPosition from '../hooks/useWindowPosition'
import Grid from '@material-ui/core/Grid'

const Portfolio = () => {
    // const [offsetY, setoffsetY] = useState(0)
    // const handleScroll = () => setoffsetY(window.pageYOffset)
  
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    
    // return () => window.removeEventListener('scroll')
    // },[])

    // console.log(offsetY)
    // style={{transform: `translateY(${-offsetY*0.5})`}}
    
    const animate = useWindowPosition('skills')
    return (
        <div className="portfolio" id="portfolio">
            
            <h1>Projects</h1>
            
            <div className="projects">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <ImgMediaCard project={projects[0]} animate={animate}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <ImgMediaCard project={projects[1]} animate={animate}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <ImgMediaCard project={projects[2]} animate={animate}/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <ImgMediaCard project={projects[3]} animate={animate}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Portfolio
