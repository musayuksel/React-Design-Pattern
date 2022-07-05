import "./App.css";
import SplitScreen from "./components/SplitScreen";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import RegularList from "./components/RegularList";
import { people, products } from "./utils/data";
import SmallPersonList from "./components/SmallPersonList";
import LargePeopleList from "./components/LargePeopleList";
import LargeProductList from "./components/LargeProductList";
import SmallProductList from "./components/SmallProductList";
import Modal from "./components/Modal";

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
        <Route
          path="/list-items"
          //when we call the RegularList, for each person it will render within the itemComponent
          //So RegularList component much more reusable
          element={
            <>
              <RegularList
                items={people}
                resourceName="person"
                itemComponent={SmallPersonList}
              />
              <RegularList
                items={people}
                resourceName="person"
                itemComponent={LargePeopleList}
              />
              <RegularList
                items={products}
                resourceName="product"
                itemComponent={SmallProductList}
              />
              <RegularList
                items={products}
                resourceName="product"
                itemComponent={LargeProductList}
              />
            </>
          }
        />
        <Route
          path="/modal"
          element={
            <Modal>
              <LargeProductList product={products[1]} />
            </Modal>
          }
        />
      </Routes>
    </>
  );
}

export default App;
