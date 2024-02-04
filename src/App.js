import Landing from "./components/Landing.js";
import InstagramFeed from "./components/InstagramFeed.js";
import Form from "./components/Form";
import About from "./components/AboutUs.js";

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <InstagramFeed/>
      <Form/>
    </div>
  );
}

export default App;
