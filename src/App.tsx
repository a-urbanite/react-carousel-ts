import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      carousel demo
      <Slider
        autoPlay={true}
        autoPlayTime={500}
        width={'px'}
        height={'px'}
      />
    </div>
  );
}

export default App;
