import { default as SliderTS } from "./components/SliderTS/Slider" ;
import { default as SliderJS } from "./components/SliderJS/Slider" ;

function App() {
  return (
    <div className="App">
      <h1>carousel demo</h1>
      <div className="container">
        <SliderJS
          autoPlay={false}
        />
        <SliderTS
          autoPlay={true} 
          autoPlayTime={500} 
          width={'100%'} 
          height={'100%'}
        />
      </div>
    </div>
  );
}

export default App;
