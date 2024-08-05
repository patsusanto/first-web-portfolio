import SocialBar from "./components/SocialBar";
import Carousel from "./components/Carousel";
import SlideProjects from "./components/SlideProjects";
import SlideAbout from "./components/SlideAbout";
import SlideHome from "./components/SlideHome";

const slides: React.ReactNode[] = [
  <SlideHome key={0} />,
  <SlideAbout key={1} />,
  <SlideProjects key={2} />
];

function App() {

  return ( 
    <>
      <Carousel slides={slides} />
      <SocialBar />
    </>
  );
}

export default App;