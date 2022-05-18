import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import Support from './Support'

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/About'>
              <About />
            </Route>
            <Route exact path='/Support'>
              <Support />
            </Route>
          </Switch>
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
export default App
