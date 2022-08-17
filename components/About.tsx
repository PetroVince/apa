import {useEffect, useRef} from "react";
import lottie from "lottie-web";

const About = () =>{
    const anim = useRef(null);
    const dolphin = useRef(null);

    useEffect(() => {
        // lottie.loadAnimation({
        //     container: anim.current,
        //     renderer: 'svg',
        //     loop:true,
        //     autoplay: true,
        //     animationData: require("../public/88373-dolphin-jumping.json")
        //
        // })
        lottie.loadAnimation({
            container: dolphin.current,
            renderer: 'svg',
            loop:true,
            autoplay: true,
            animationData: require("../public/20685-dolphin.json"),
            rendererSettings:{}


        })
    },[]);
    return (
        <>
            {/*<div className={"animation"} ref={anim}></div>*/}

            <div id={"about"} className={"AboutContent"}>
                <div className={"dolphin"} ref={dolphin}></div>
               <div className={"content"}>
                   <span className={"circles"}></span>
                   <span className={"circles"}>A</span>
                   <span className={"circles"}>Váci Tanuszoda</span>
                   <span className={"circles"}>2006 szeptemberében jött létre</span>
                   {/*<span className={"circles"}>4x8 méteres</span>*/}
                   {/*<span className={"circles"}>1 méter mély </span>*/}
                   <h1>Rólunk</h1>
                   <div id={"circle"} className={"circle"}>
                       <div className={"introduce"}>
                           <p>Létesítményünk egy 4x8 méteres, 1 méter mély feszített víztükrű beltéri medencét tartalmaz, 30-32 Cº fokos vízhőmérséklettel, melyet kifejezetten a kiscsoportos foglalkoztatások igényeire alakítottunk ki.
                               Nagyon fontosnak tartottam, hogy a nálunk úszó, úszni tanuló gyerekek,
                               felnőttek maximálisan tudjanak azokra a feladatokra koncentrálni,
                               amelyek elősegítik a zökkenőmentes tanulást.
                               Éppen ezért, a medencénk felszerelésénél minden olyan zavaró körülményt igyekeztem kiszűrni,
                               melyek akadályozzák az eredményes munkát.
                               </p>
                       </div>
                   </div>
               </div>
            </div>

        </>
    )
}
export default About
