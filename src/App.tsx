// import { default as SliderTS } from "./components/SliderTS/Slider" ;
import { default as SliderJS } from "./components/SliderJS/Slider" ;

function App() {
  return (
    <div className="App">
      <h1>carousel demo</h1>
      <div className="container">
        <SliderJS
          autoPlay={false}
        />
      </div>
    </div>
  );
}

export default App;
