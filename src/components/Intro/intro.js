import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/bg.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent" style={{border:'solid black 1px'}}>
                <span className="hello">Hello</span>
                <span className="introText"> I'm <span className="introName">Senuuz</span><br/><span style={{fontSize:'2rem'}}>Creative Designer</span></span>
                <p className="introPara">Welcome to my creative design portfolio! I'm passionate about <br/>turning ideas into visually captivating experiences. With a keen eye for <br/> aesthetics and a love for innovation,<br/> I bring unique and engaging concepts to life. <br/></p>
                <Link>
                    <button className="btn" style={{ display: 'flex', alignItems: 'center' }}>
                        <FileDownloadIcon style={{ marginRight: '8px' }} />
                        Download my CV
                    </button>
                </Link>
            </div>
            <div className="dp">
                <img src={bg} alt="Portfolio" className="bg" style={{border:'solid black 1px'}}/>
            </div>
        </section>
    );
}

export default Intro;