import { ReactNode, useState, useEffect }  from "react";
import Navbar from "./Navbar";


interface Props {
    slides: ReactNode[];
}

function Carousel({ slides }: Props) {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };
    

    return (
        
        <>
            <Navbar currentSlide={currentSlide} goToSlide={goToSlide}/>
            <div className="carousel">
                <ul className="list-unstyled">
                    <li onClick={nextSlide}>
                    { slides[currentSlide] }
                    </li>
                </ul>
            </div>
        </>
        
    );
}

export default Carousel;