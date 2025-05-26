import Resumeimg from '../assets/ResumeImg.png';
export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img className='w-[500px]'src={Resumeimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold '>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn' href="/resume.pdf">Download</a></p>
           

          </div>
            
        </div>
    </section>
  
}