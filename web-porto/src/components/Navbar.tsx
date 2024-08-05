
interface Props {
    currentSlide: number;
    goToSlide: (index: number) => void;
}
function Navbar({currentSlide, goToSlide}: Props) {

    return (
        <div className="container mt-3" id="top-nav">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={(currentSlide === 0)?  "nav-link active" : "nav-link"} href="#" onClick={() => goToSlide(0)}>Home</a>
                            <a className={(currentSlide === 1)?  "nav-link active" : "nav-link"} href="#" onClick={() => goToSlide(1)}>About me</a>
                            <a className={(currentSlide === 2)?  "nav-link active" : "nav-link"} href="#" onClick={() => goToSlide(2)}>Projects</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
    );
    
}

export default Navbar;