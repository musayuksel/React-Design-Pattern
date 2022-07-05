import "./App.css";
import SplitScreen from "./components/SplitScreen";

function App() {
  const LeftComponent = () => <h1 style={{ backgroundColor: "aqua" }}>LEFT</h1>;
  const RightComponent = () => <p style={{ backgroundColor: "pink" }}>Right</p>;
  return (
    <SplitScreen
      // left={LeftComponent}
      // right={RightComponent}
      leftWeight={1}
      rightWeight={3}
    >
      {/* Pass as a children component */}
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  );
}

export default App;
