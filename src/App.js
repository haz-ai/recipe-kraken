import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Home />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
