import { useLayoutEffect, useState } from "react"

export default function useWindowPosition(id){
    const [animation, setAnimation] = useState(false)

    useLayoutEffect(() => {
        const updatePosition = () => {
            const offsetHeight = window.document.getElementById(id).offsetHeight
            const offsetTop = window.document.getElementById(id).offsetTop

            if(window.pageYOffset > offsetTop + offsetHeight*0.5)
                setAnimation(true)
            else 
                setAnimation(false)
        }
        window.addEventListener('scroll', updatePosition)
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [id])
    
    return animation
}