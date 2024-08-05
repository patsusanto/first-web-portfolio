import Slide from "./Slide";

interface Props {
    className: string;
}

function SlideHome() {
    return (
        <Slide id="home">
            <div className="row mx-3 mt-1 px-5 pt-5">
                <h1>Patrick Sebastian Susanto</h1>
                <h3>Student @Technische Hochschule Deggendorf</h3>
            </div>
            <div className="row mx-3 mt-4 justify-content-center text-center">
                <div id="quote">
                    <h2>Aspiring Indonesian software developer currently studying Wirtschaftsinformatik (Business Informatics) in Deggendorf, Germany.</h2>
                </div>
            </div>
            <div className="row m-5 justify-content-center text-center">
                <p>Click the card to cycle through website</p>
            </div>
        </Slide>
    );
}

export default SlideHome;