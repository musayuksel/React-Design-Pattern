import "./App.css";
import SplitScreen from "./components/SplitScreen";

function App() {
  const leftComponent = () => <h1 style={{ backgroundColor: "aqua" }}>LEFT</h1>;
  const rightComponent = () => <p style={{ backgroundColor: "pink" }}>Right</p>;
  return (
    <SplitScreen
      left={leftComponent}
      right={rightComponent}
      leftWeight={1}
      rightWeight={3}
    />
  );
}

export default App;
