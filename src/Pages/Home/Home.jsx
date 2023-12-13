import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import BrandShop from "../Projects/BrandShop";
import Donations from "../Projects/Donations";
import Restaurant from "../Projects/Restaurant";
import Skills from "../Skills/Skills";
import 'aos/dist/aos.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <h1 data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="text-3xl text-center font-bold text-blue-500 mb-4">Projects</h1>
            <Restaurant></Restaurant>
            <BrandShop></BrandShop>
            <Donations></Donations>
            <Footer></Footer>
        </div>
    );
};

export default Home;