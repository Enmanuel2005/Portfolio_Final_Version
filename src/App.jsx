import Nav from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <div className="home_card">
        {/* <Home /> */}
        <About />
      </div>
    </div>
  )
}

export default App
