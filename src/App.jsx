import { Header } from "./components/Header/Header.jsx";
import element from "./assets/element.svg"
import {Hero} from "./components/Hero/Hero.jsx";
import {GalleryHeader} from "./components/GalleryHeader/GalleryHeader.jsx";
import {Gallery} from "./components/Gallery/Gallery.jsx";
import {Seo} from "./components/Seo/Seo.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
export function App() {
  return (
    <div className="min-h-screen w-full bg-white">
        <img src={element} alt="Dekoracyjny element" className="absolute top-0 md:right-[10%] z-0"/>
        <Header />
        <main className="overflow-hidden">
            <Hero/>
            <GalleryHeader/>
            <Gallery/>
            <Seo/>
        </main>
        <Footer/>
    </div>
  );
}
