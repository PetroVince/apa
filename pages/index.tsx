import type { NextPage } from 'next'
import Header from '../components/Header';
import Video from "../components/Video";
import About from "../components/About";
import Functions from "../components/Function";

const Home: NextPage = () => {
  return (
    <>
        <Header />
        <About />
        <Functions/>
    </>
  )
}

export default Home
