import small_icon from "../images/react-icon-small.png"
import './App.css'

function App() {
  return (
    <>
      <nav id="nav">
        <span id="title" className="blue bold">
          <img src={small_icon} id="small_icon" alt="" />
          ReactFacts
        </span>
        <span className="bold">
          React Course - Project 1
        </span>
      </nav>
      <main>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  )
}

export default App
