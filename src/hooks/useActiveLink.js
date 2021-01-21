import { useEffect, useState } from "react"
import {getDimensions} from './getDimensions';

export default function useActiveLink(){
    const [visibleSection, setVisibleSection] = useState()

    useEffect(()=>{
        const headerRef = window.document.getElementById('header__nav')
        const homeRef = window.document.getElementById('header')
        const aboutRef = window.document.getElementById('about')
        const skillsRef = window.document.getElementById('skills')
        const portfolioRef = window.document.getElementById('portfolio')
        const contactRef = window.document.getElementById('contact')
        
        const sectionRefs = [
        {section: 'header', ref: homeRef},
        {section: 'about', ref: aboutRef},
        {section: 'skills', ref: skillsRef},
        {section: 'portfolio', ref: portfolioRef},
        {section: 'contact', ref: contactRef}
        ]

        const handleScroll = () => {
            const {height: headerHeight} = getDimensions(headerRef)
            const scrollPosition = window.scrollY + headerHeight
            
            const selected = sectionRefs.find(({section, ref}) => {
                const element = ref
                if(element){
                const {offsetTop, offsetBottom} = getDimensions(element)
                return (scrollPosition > offsetTop && scrollPosition < offsetBottom)
                }
            })

            if(selected && selected.section !== visibleSection) setVisibleSection(selected.section)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    },[visibleSection])

    return {visibleSection}
}