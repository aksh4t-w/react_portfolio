import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SortIcon from '@material-ui/icons/Sort'
import {AppBar, IconButton} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import '../css/Header.css'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import {Link as Scroll} from 'react-scroll'
import useWindowPosition from '../hooks/useWindowPosition'

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        // margin: 10,
        color: 'white'
    },
    icon: {
        color: '#fff',
        fontSize: '1rem'
    },
    expand: {
        color: 'rgba(256,256,256, 0.9)',
        fontSize: '3rem',
    }
})

const Header = ({activeSection}) => {
    const classes = useStyles()
    const nav_dark = useWindowPosition('header')

    return (
        <div className="header" id='header'>
            <ul className={`header__nav ${nav_dark && 'dark_bg'}`} id='header__nav'>
                <Scroll to="header" smooth={true}>
                    <li className={`${activeSection==='header' ? 'selected' : ''}`} href="home">HOME</li>
                </Scroll>
                <Scroll to="about" smooth={true}>
                    <li className={`${activeSection==='about' ? 'selected' : ''}`} href="about">ABOUT</li>
                </Scroll>
                <Scroll to="skills" smooth={true}>
                    <li className={`${activeSection==='skills' ? 'selected' : ''}`} href="skills">SKILLS</li>
                </Scroll>
                <Scroll to="portfolio" smooth={true}>
                    <li className={`${activeSection==='portfolio' ? 'selected' : ''}`} href="projects">PROJECTS</li>
                </Scroll>
                <Scroll to="contact" smooth={true}>
                    <li className={`${activeSection==='contact' ? 'selected' : ''}`} href="contact">CONTACT</li>
                </Scroll>

            </ul>
            
            <div className="header__bannerText">
                <h1>I'm Akshat Wagadre.</h1>
                <h2>I'm a ReactJS Developer && an ML Enthusiast. Full Stack React Developer by Day, Freelancer by Night.</h2>
            </div>

            <Scroll className="header__icon" to="about" smooth={true}>
                <IconButton>
                    <ArrowDropDownCircleIcon className={classes.expand}/>
                </IconButton>
            </Scroll>
            
        </div>
    )
}

export default React.memo(Header)

{/* <Button 
    className={classes.button}
    size="large"
    variant="contained"
    color="primary">
    Crazy shit
</Button> */}
{/* <AppBar className={classes.appBar}>
    <h1>My Portfolio</h1>
    <IconButton>
        <SortIcon className={classes.icon}/>
    </IconButton>
</AppBar> */}