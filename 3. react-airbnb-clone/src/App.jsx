import './App.css'
import Navbar from './navbar'
import Hero from './hero'
import Card from './card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return(
    <Card 
      key = {item.id}
      item = {item}
    />)
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section id="cards-section">
        {cards}
      </section>
    </>
  )
}

export default App
