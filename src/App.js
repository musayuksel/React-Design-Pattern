import "./App.css";
import SplitScreen from "./components/SplitScreen";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const LeftComponent = () => <h1 style={{ backgroundColor: "aqua" }}>LEFT</h1>;
  const RightComponent = () => <p style={{ backgroundColor: "pink" }}>Right</p>;
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/split-screen"
          element={
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
          }
        />
        <Route path="/list-items" element={<p>list item</p>} />
      </Routes>
    </>
  );
}

export default App;
