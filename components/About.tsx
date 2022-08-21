import React,{useEffect, useRef} from "react";
import lottie from "lottie-web";
import {motion} from "framer-motion";
import {rotate} from "next/dist/server/lib/squoosh/impl";

const About = () =>{
    const anim = useRef(null);
    const dolphin = useRef(null);
    const scrollRef = useRef(null)

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
                   <motion.span
                       initial={{opacity:0}}
                       whileInView={{opacity: 1}}
                       viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}}
                       className={"circles"}>
                   </motion.span>
                   <motion.span
                       initial={{opacity:0}}
                       whileInView={{opacity: 1}}
                       viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}}
                       className={"circles"}>
                       A
                   </motion.span>
                   <motion.span
                       initial={{opacity:0}}
                       whileInView={{opacity: 1}}
                       viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}}
                       className={"circles"}>
                       Váci Tanuszoda
                   </motion.span>
                   <motion.span
                       initial={{opacity:0}}
                       whileInView={{opacity: 1}}
                       viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}}
                       className={"circles"}>
                       2006 szeptemberében jött létre
                   </motion.span>
                   <motion.span
                       initial={{opacity:0}}
                       whileInView={{opacity: 1}}
                       viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}}
                       className={"circles"}>
                       Igyekeztünk olyan létesítményt teremteni Vác Város központi részén, amely minden korosztály számára elérhető, színvonalas szolgáltatást tud nyújtani.
                   </motion.span>
                   <motion.h1
                       initial={{opacity:0}}
                       whileInView={{opacity: 1}}
                       viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}} >
                       Rólunk
                   </motion.h1>
                   <div id={"circle"} className={"circle"}>
                       <motion.div
                           initial={{opacity:0}}
                           whileInView={{opacity: 1}}
                           viewport={{ fallback:true, amount: 0.8 }} transition={{duration:1}}
                           className={"introduce"}>
                           <p>Létesítményünk egy 4x8 méteres, 1 méter mély feszített víztükrű beltéri medencét tartalmaz, 30-32 Cº fokos vízhőmérséklettel, melyet kifejezetten a kiscsoportos foglalkoztatások igényeire alakítottunk ki.
                               Nagyon fontosnak tartottam, hogy a nálunk úszó, úszni tanuló gyerekek,
                               felnőttek maximálisan tudjanak azokra a feladatokra koncentrálni,
                               amelyek elősegítik a zökkenőmentes tanulást.
                               Éppen ezért, a medencénk felszerelésénél minden olyan zavaró körülményt igyekeztem kiszűrni,
                               melyek akadályozzák az eredményes munkát.
                           </p>
                       </motion.div>

                   </div>
               </div>
            </div>

        </>
    )
}
export default About
