import Video from "./Video";
import {GiDolphin} from "react-icons/gi";



const Header = () => {
    if(typeof window !== "undefined"){
        if (document.readyState === 'complete'){
            const header = document.getElementById("header");
            const links = document.getElementById("links");
            window.addEventListener("scroll", function(){
                // header.classList.toggle("sticky", window.scrollY > 0);
                links.classList.toggle("sticky", window.scrollY > 0);
            })
        }

    }

    return (
        <>
            <header id={"header"}>
                <h1><GiDolphin/>Tan<span>uszoda</span></h1>
                <nav>
                    <ul id={"links"}>
                        <li>
                            <a href="#about">Rólunk</a>
                        </li>
                        <li>
                            <a id={"#functions"} href="">Szolgáltatásaink</a>
                        </li>
                        <li>
                            <a id={"#pricing"} href="">Áraink</a>
                        </li>
                        <li>
                            <a id={"#contact"} href="">Kapcsolat</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Video />
        </>
    )
}
export default Header;