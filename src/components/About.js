import Aboutimg from '../assets/about.png';
export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5 ' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold '>About Me</h1>
            <p className='pb-5'>I am a passionate developer with experience in web development and AI-based projects.</p>
            <p className='pb-5'>I have actively participated in several hackathons, solving real-world problems with tech-driven solutions.</p>
            <p className='pb-5'>I enjoy exploring innovative ideas and continuously upgrading my skills through hands-on work</p>

          </div>
            
        </div>
    </section>
  
}