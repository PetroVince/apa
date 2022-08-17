import type { NextPage } from 'next'
import Header from '../components/Header';
import Video from "../components/Video";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
        <Header />
        <About />
    </>
  )
}

export default Home
