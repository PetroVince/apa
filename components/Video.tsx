import Typewriter from 'typewriter-effect';


const Video = () => {
    return (
        <>
            <div className={"videoContainer"}>
                <video autoPlay  loop muted src={require("../public/uszasoktatas.mp4")} />
            </div>

            <div className={"container"}>
                <div className={"content"}>
                    {/*<h1>Váci Tanuszoda</h1>*/}
                    {/*<span className={"line"}></span>*/}
                    <h5>
                        Mi minden
                        <span>
                            <Typewriter options={{
                                strings: ["babát", "gyermeket", "felnőttet"],
                                autoStart: true,
                                loop: true,
                                delay: 250,
                                deleteSpeed: 150,
                            }} />
                        </span>
                         megtanítunk úszni!
                    </h5>
                </div>
            </div>
        </>
    )
}
export default Video;