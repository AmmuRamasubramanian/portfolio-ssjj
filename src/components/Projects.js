import remoteMonitoring from '../assets/img/remoteMonitoring.png';
import homeAutomation from '../assets/img/homeAutomation.jpg';
import gasLeakage from '../assets/img/gasLeakage.png';
import { ProjectCard } from './ProjectCard';

import { Container, Row, Col } from 'react-bootstrap';

import { ArrowRightCircle } from 'react-bootstrap-icons';
import colorSharp2 from '../assets/img/color-sharp2.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects=()=>{
    const projects=[
        {
            title:'WIRELESS MONITORING',
            description:`To measure the blood oxidation level, temperature of multiple patient using sensors and to develop a web application to display the two parameters to the user with a graphical representation.`,
            imgUrl:remoteMonitoring,
        },
        {
            title:' HOME AUTOMATION USING NODE-MCU',
            description:`It employs an embedded micro-web server in NODE MCUmicrocontroller, with IP connectivity for accessing and controllingdevices and appliances remotely.`,
            imgUrl:homeAutomation,
        },
        {
            title:'LPG GAS DETECTION USING AURDUINO',
            description:`This module consists of an MQ3 sensor that actually recognizes LPGgas, a comparator (LM393) for comparing MQ3 output voltage with areference voltage.`,
            imgUrl:gasLeakage,
        }
    ];

    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                       <TrackVisibility>
                       {({isVisible})=>(
                        <div className={
                            isVisible ? 'animate__animated animate__fadeIn' : ''
                        }>
                            <h2>Projects</h2>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>

                                    <p>
                                        <a href='https://github.com/AmmuRamasubramanian?tab=repositories' rel='noreferer' target="_blank" className='github-explore'>
                                            <p>Want to explore more of my coding projects?
                                            <span>
													{'  '}
													<ArrowRightCircle size={25} />
												</span>
                                            </p>
                                        </a>
                                    </p>

                        </div>
                       )

                       }
                       </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
				className="background-image-right"
				src={colorSharp2}
				alt="Background-img"
			></img>
        </section>
    )
}