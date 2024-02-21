import CustomButton from "../components/CustomButton"
import {motion} from 'framer-motion'

const Hero = () => {
    //TODO!
    const flyTo = (): void => {
 alert('kaydir')
    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x max-h[920px]">
            <h1 className="hero__title">Feel Free, Start your Journey</h1>
            <p className="hero__subtitle text">Are you ready for an unforgettable journey with gold standard service? Make every moment special by crowning your car rental experience with Golden options</p>
            <CustomButton 
            title= 'Start to discover'
             designs='mt-10'
             handleClick={flyTo} />
        </div>
        <div className="flex justify-center">
            <motion.img 
            initial={{ 
              translateX:200,
              scale:0.7
            }}
           whileInView={{
            translateX:0,
            scale:1
           }}
           transition={{
            duration:1,
           }}
             className='object-contain' src="/hero.png"/>
        </div>
    </div>
  )
}

export default Hero
