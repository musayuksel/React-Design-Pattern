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
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import UncontrolledOnboardingFlow from "./components/UncontrolledOnboardingFlow";

function App() {
  const LeftComponent = () => <h1 style={{ backgroundColor: "aqua" }}>LEFT</h1>;
  const RightComponent = () => <p style={{ backgroundColor: "pink" }}>Right</p>;
  // UNCONTROLLED ONBOARDING FLOW
  const StepOneComponent = ({ goToNext }) => (
    <>
      <h1>Step One</h1>
      <button onClick={goToNext}>Next</button>
    </>
  );
  const StepTwoComponent = ({ goToNext }) => (
    <>
      <h1>Step Two</h1>
      <button onClick={goToNext}>Next</button>
    </>
  );
  const StepThreeComponent = ({ goToNext }) => (
    <>
      <h1>Step Three</h1>
      <button onClick={goToNext}>Next</button>
    </>
  );

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
        <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
        <Route path="/controlled-form" element={<ControlledForm />} />
        {/* ************************************** */}

        <Route
          path="/uncontrolled-onboarding-flow"
          element={
            <UncontrolledOnboardingFlow>
              <StepOneComponent />
              <StepTwoComponent />
              <StepThreeComponent />
              {/* //this is the child component that will be rendered when the user clicks the finish button */}
            </UncontrolledOnboardingFlow>
          }
        />
      </Routes>
    </>
  );
}

export default App;
