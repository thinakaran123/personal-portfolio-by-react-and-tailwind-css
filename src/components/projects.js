import thinacafeproj1 from "../assets/thinaafeproject.png"
import databaseproject2 from "../assets/databaseproject.png"
import airticketbookingproject2 from "../assets/Airticketbooking site.png"
export default function Projects(){
// dynamic project values
const config={
projects:[{
  image:thinacafeproj1,
  name:"A small website for cafe",
  githublink:"https://github.com/thinakaran123/Website-for-Cafe/tree/main",
}
,{
  image:databaseproject2,
  name:"A CRUD operations database project using React and Javascript",
  githublink:"https://github.com/thinakaran123/database-application-using-react",


},{
  image:airticketbookingproject2,
  name:"A Air Ticket Booking site using Js, Jquery and Boostrap",
  githublink:"https://github.com/thinakaran123/Air-ticket-booking-site",


}
]


}
    return <section id="projects" className="pl-16 md:pl-32 md:pr-32 pr-16 pt-10 md:pt-56 w-[100%] h-full">
        <h1 className="text-white text-5xl"><span className="text-coral">P</span>rojects</h1>
       {/* project div 1 */}
        <div className="mt-10 flex gap-10 flex-col md:flex-row  md:gap-28">
            {/* project 1 */}
{config.projects.map((project)=>(
        <div className="relative w-[100%] group">
        <div className="relative border-white border-2 h-full p-1">
          <img className="transition duration-300 h-full group-hover:brightness-0" src={project.image} />
          <p className="absolute top-5 left-16 text-2xl text-white hidden group-hover:block bg-opacity-50  rounded">
            {project.name}
          </p>
         <a href={project.githublink} target="_blank"><button className="absolute text-black bottom-8 left-28  bg-white border-white border-2 group-hover:block p-1 hidden">View Project</button></a>
      
        </div>
      </div>
))}



        </div>
    </section>
}