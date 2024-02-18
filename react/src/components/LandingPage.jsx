import CarouselImage from "./Carousel/Carousel";
import Courses from "./Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header"

const LandingPage = () => {
    return (
        <div>

            <Header />
            <CarouselImage />
            <Courses />
            <Footer />

        </div>
    )
}

export default LandingPage;