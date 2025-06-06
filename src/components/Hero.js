import heroimg from '../assets/hero.png'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

export default function Hero(){
    const config={
        subtitle:"A Full Stack Developer"
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi , <br/> I'm <span className='text-black'>Rithanya</span>
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
        
        <div className='flex py-10'>
            <a href="https://www.linkedin.com/in/rithanya-sadhasivam-7714632a2/" className='pr-5 hover:text-white'>< AiOutlineLinkedin size={40}/></a>
            <a href="https://github.com/RithanyaSadhasivam" className='pr-5 hover:text-white'>< AiOutlineGithub size={40}/></a>
           
            
        </div>
        </div>
        <img className='md:w-1/3 ' src={heroimg} alt="Not found"/>
    </section>
}