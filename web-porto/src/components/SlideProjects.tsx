import Slide from './Slide';

function SlideProjects() {
    return (
        <>
            <Slide id="projects">
                <div className="row m-3 pt-4 px-5">
                    <h1>Projects</h1>
                </div>
                <div className="row pb-5 px-5 justify-content-center text-center">
                    <div className="col p-2">
                        <img src="/to-do-list.png" alt="matrix" height="150"></img>
                        <h3 className="p-2">To-Do List</h3>
                        <p>Simple To-do List as an introductory project to Javascript</p>
                        <div className="d-flex justify-content-evenly">
                            <div id="tech-stack">
                                <button className="btn btn-light rounded-pill pe-none">HTML</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">CSS</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">Javascript</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="col p-2">
                        <img src="/homepage.png" alt="homepage" height="150"/>
                        <h3 className="p-2">Web Portfolio</h3>
                        <p>Web Portfolio built using the React and Typescript</p>
                        <div className="d-flex justify-content-evenly">
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">Typescript</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">React</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">CSS</button>
                            </div>
                        </div>
                    </div>

                    <div className="col p-2">
                        <img src="/matrix_calc.png" alt="matrix" width="300" className="p-1"></img>
                        <h3 className="px-2 pb-2 pt-4">Matrix Multiplication</h3>
                        <p>Basic matrix calculator for matrix multiplication, addition and subtraction</p>
                        <div className="d-flex justify-content-evenly rounded-pill">
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">HTML</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">CSS</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">Python</button>
                            </div>
                            <div>
                                <button className="btn btn-light rounded-pill pe-none">Flask</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    );
}

export default SlideProjects;