import collage from "../images/collage.png"

function Hero() {
    return(
        <main id="hero">
            <img src={collage} id="collage" alt="" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </main>
    )
}

export default Hero