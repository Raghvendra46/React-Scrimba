import './App.css'
import Navbar from './Navbar'
import Place from './Place'
import data from './data'

function App() {
  const places = data.map(item => {
    return(
      <Place
      key = {item.id}
      item = {item}
      />
    )
  })
  return (
    <>
      <Navbar />
      <section id="main-sec">
        {places}
      </section>
    </>
  )
}

export default App
