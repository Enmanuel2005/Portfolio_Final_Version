import Nav from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <div className="home_card">
        <Home />
        {/* <About /> */}
        {/* <Contact /> */}
      </div>
    </div>
  )
}

export default App
