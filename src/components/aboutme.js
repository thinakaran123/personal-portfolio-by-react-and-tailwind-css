import aboutmeimg from "../assets/aboutme.png"
export default function Aboutme(){
    return <section id="about"  className="md:flex-row-reverse md:justify-between flex gap-12 flex-col pl-16 md:pl-32 md:pr-32 pr-16 pt-32 md:pt-56">
    <div className="md:w-[50%] text-white flex gap-3 md:pt-16 flex-col"><h1 className="text-5xl"><span className="text-coral">A</span>bout <span className="text-coral">M</span>e</h1>
    <p  className="text-xl">Hi, My name is Thinakaran. I am a Web developer. I build quintessential websites with React.js, Tailwind css + Bootstrap</p>
        <p className="text-xl">I am proficient in front end skills like React.js, CSS, Javascript and more</p>
        <p className="text-xl">In backend I know Asp.net, c#, php.For databases mySql</p>
        </div>
        
        <img src={aboutmeimg} className="w-[100%] md:w-[40%] md:h-96" alt="aboutmeimg"/>
</section>
}