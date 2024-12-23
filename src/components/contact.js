import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"

export default function Contact(){
    const openEmailClient = () => {
        window.location.href = "mailto:thinakarandev@hotmail.com";
      };
    return <section id="contact" className="flex gap-10 flex-col justify-items-center pb-96 items-center pl-16 md:pl-32 md:pr-32 pr-16 pt-96 md:pt-96 w-[100%] h-full">
            <button onClick={openEmailClient} className="text-white border-2 border-white p-3 rounded-xl hover:bg-white hover:text-black text-xl">Let's Talk</button>
            <a download="CV.pdf" href="../../THINAKARAN.pdf" className="text-white border-2 border-white p-3  rounded-xl hover:bg-white hover:text-black text-xl">Get CV/Resume </a>
          
            <div className="flex gap-4">
            <a  className="cursor-pointer" href="https://github.com/thinakaran123" target="_blank"><img className="cursor-pointer" src={github}/></a>
        <a  className="cursor-pointer"  href="https://x.com/thinakaran2002" target="_blank"><img src={twitter}/></a>
        <a  className="cursor-pointer"  href="https://www.linkedin.com/in/thinakaran2002/" target="_blank"><img src={linkedin}/></a>

        </div>
    </section>
}