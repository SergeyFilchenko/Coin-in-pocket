import circle from '..//..//images/Ellipse 13.png'
import logo from '..//..//images/image 19.png'

import { Hero, HeroImage, HeroText } from './Main.styled'

export default function Main (){
    return (
       <div>
       <Hero>
        <HeroText>Швидкі позики на карту</HeroText>
        <img src={circle} alt="" />
        <HeroImage src={logo} alt="" />
       </Hero>
       <div></div>
       </div>
    )
}