import pfp from "../images/pfp.jpeg"
import { MdOutlineMailOutline } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"


function Card() {
    return(
        <div id="card">
            <img src={pfp} id="pfp" alt="" />
            <div id="info">
                <h1 className="white">Raghvendra</h1>
                <p className="role">Frontend Developer</p>
                <small><a href="#" className="website">raghvendra.website</a></small>
            </div>
            <div id="btn-div">
                <a href="#">
                    <button id="email" className="btn">
                        <MdOutlineMailOutline />
                        Email
                    </button>
                </a>
                <a href="#">
                    <button id="linkedin" className="btn white">
                        <FaLinkedin />
                        LinkedIn
                    </button>
                </a>
            </div>
            <div id="content">
                <h3 className="heading white">About</h3>
                <small className="yapping">
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </small>
                <h3 className="heading white">Interests</h3>
                <small className="yapping">
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </small>
            </div>
            <div id="socials-div">
                <a href="#"><FaSquareXTwitter className="social" /></a>
                <a href="#"><FaFacebookSquare className="social" /></a>
                <a href="#"><FaInstagramSquare className="social" /></a>
                <a href="#"><FaGithubSquare className="social" /></a>
            </div>
        </div>
    )
}

export default Card