import React, { useEffect, useState } from "react";
import ImgMediaCard from "./Card";
import { projects } from "../myData";
import "../css/Portfolio.css";
import useWindowPosition from "../hooks/useWindowPosition";
import Grid from "@material-ui/core/Grid";

const Portfolio = () => {
  // const [offsetY, setoffsetY] = useState(0)
  // const handleScroll = () => setoffsetY(window.pageYOffset)

  // useEffect(() => {
  //     window.addEventListener('scroll', handleScroll)

  // return () => window.removeEventListener('scroll')
  // },[])

  // console.log(offsetY)
  // style={{transform: `translateY(${-offsetY*0.5})`}}

  const animate = useWindowPosition("skills");
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>

      <div className="projects">
        <Grid container spacing={4} style={{ marginLeft: "3%", width: "110%" }}>
          {projects.map((project) => (
            <Grid item xs={12} md={3} lg={2}>
              <ImgMediaCard project={project} animate={animate} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Portfolio;
