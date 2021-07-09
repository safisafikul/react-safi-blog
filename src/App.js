import Navbar from './components/Navbar'
import Home from './components/Home'
// import BlogList from './components/BlogList'


function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
      </div>
      <div></div>
    </div>
  );
}

export default App;
