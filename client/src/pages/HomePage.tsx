import CarouselModel from "../components/Homepage/CarouselModel";
import Gallery from "../components/Homepage/Gallery";
import { modelList } from '../utils/models';


const HomePage = () => {
  return <main>
    <nav>Hero algo</nav>
    <CarouselModel models={modelList} handleModel={()=>{}} removerModel={()=>{}}/>
    <Gallery/>
  </main>;
};

export default HomePage;
