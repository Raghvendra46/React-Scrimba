import trollface from "../images/troll-face.png"

function Header() {
    return(
        <nav id="nav">
            <img src={trollface} id="trollface" alt="Image of Trollface" />
            <h2 className="title">Meme Generator</h2>
            <p className="end">React Course - Project 3</p>
        </nav>
    )
}

export default Header