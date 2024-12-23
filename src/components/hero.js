import heroimg from "../assets/heroimg.jpeg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
export default function Hero(){
// adding dynamic values
const config={
    mydescription:"A Front-End React Developer builds user-friendly web interfaces using React.js, creating reusable components, managing state with hooks, and ensuring responsive design. They collaborate with teams to develop modern web applications, focusing on clean code and optimized performance.",
    myrole:""
}

    return <section id="hero" className="md:flex md:flex-row flex flex-col-reverse content-between pl-16 md:pl-32 md:pr-32 pr-16 pt-10 md:pt-56 gap-24  w-[100%]  h-full ">
        <div className="w-[100%] text-4xl flex gap-5 flex-col">
            <p className="text-white md:text-5xl w-[100%]">Iam   <span className=" font-heroname"><span className="text-coral">T</span>hinakaran</span></p>
            <p className="text-white text-2xl"><span className="text-coral">W</span>eb <span className="text-coral">D</span>eveloper</p>
            <p className=" text-xl text-gray-500">{config.mydescription}</p>
            <div className="flex gap-8">
        <a  className="cursor-pointer" href="https://github.com/thinakaran123" target="_blank"><img className="cursor-pointer" src={github}/></a>
        <a  className="cursor-pointer"  href="https://x.com/thinakaran2002" target="_blank"><img src={twitter}/></a>
        <a  className="cursor-pointer"  href="https://www.linkedin.com/in/thinakaran2002/" target="_blank"><img src={linkedin}/></a>
  
       </div>
        </div>
        <img className="md:w-[30%] h-96 dynamic-border" src={heroimg} id="heroimg" alt="hero"/>
      
    </section>
}