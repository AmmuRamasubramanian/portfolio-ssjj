import {Container,Row,Col} from"react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import { useState,useEffect } from "react";

export const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const toRotate=["Python Programmer","Web Developer"]
    const [isDeleting,setIsDeleting]=useState(false);
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevData=>prevData/2)
        }

        if(!isDeleting && updatedText==fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText==''){
            setIsDeleting(false);
            setDelta(500);
            setLoopNum(loopNum+1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Sivagnana Sowndarya,   `}<br/><span className="wrap">{text}</span></h1>
                        <p>Software Engineer good at algorithms and Data Structures.Proficient in Python,HTML,CSS and Javascript.Capable of developing responsive websites.</p>
                        <a href="https://www.linkedin.com/in/sivagnanasowndaryar/" target="_blank"
									rel="noreferrer">
                        <button>Let's Connect <ArrowRightCircle size={25}/></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
