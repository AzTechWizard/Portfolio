import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle";

function About(){
    return(
        <section className="bg-white py-20" id="about">
            <div className="align element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} className="w-full h-64" />
                <article>
                    <SectionTitle text="About ME!" />
                    <p className="text-slate-600 mt-8 leading-loose font-bold">My name is <strong>Ahzam Zafar</strong>. I have completed my O-Levels from <em>ST. Paul's English High School</em> and
                    A-Levels from <em>Highbrow College</em> and currently I am persuing my BsCS from <em>UBIT</em>.
                    </p>
                </article>
            </div>        
        </section>
    )
}
export default About;