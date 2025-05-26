import webimg from '../assets/pro1.png'
import webimg2 from '../assets/pro1.png'
import webimg3 from '../assets/pro1.png'
export default function Projects(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='project'>
        <div className="w-full">
             <div className="flex flex-col px-10 py-5">
                  <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold '>Projects</h1>
                  <p>These are some of my best project.</p>
             </div>
             
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
             <div className='relative'> 
               <img className='h-[250px] w-[300px]' src={webimg}/>
               <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Developed an AI-based system to detect public littering using computer vision and facial recognition.
Implemented automated offender identification and email alert system using a trained face database.</p>
                    <div className='flex justify-center'>
                         <a className='btn' target='_blank' href='#'>View Project</a>
                    </div>
               </div>
             </div>
             <div className='relative'> 
               <img className='h-[250px] w-[300px]' src={webimg2}/>
               <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Created a restaurant reservation API using Node.js, Express.js, and MongoDB.
Added features to book tables and manage customer details.
Tested all API functions using Postman to make sure they work properly.</p>
                    <div className='flex justify-center'>
                         <a className='btn' target='_blank' href='#'>View Project</a>
                    </div>
               </div>
             </div>
             <div className='relative'> 
               <img className='h-[250px] w-[300px]' src={webimg3}/> 
               <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Developed a women safety analytics system using MediaPipe, YOLO, and DeepSORT for real-time person detection and tracking.
Implemented proximity-based threat detection and stored event data in MongoDB.</p>
                    <div className='flex justify-center'>
                         <a className='btn' target='_blank' href='#'>View Project</a>
                    </div>
               </div>
             </div>
        </div>
        </div>
    </section>

} 