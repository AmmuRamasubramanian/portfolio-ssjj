import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png";

import html5 from '../assets/img/html5.png';
import css3 from '../assets/img/css3.png';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import java from '../assets/img/java.png';
import python from '../assets/img/python.png';
import mysql from '../assets/img/mysql.png';

export const Skills=()=>{
    const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
    return(
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={python} alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <h5>HTML 5</h5>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MYSQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    )

}