import { DangerButton, LargeSuccessButton } from "./composition";
import RecursiveComponent from "./RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <>
      <ol className="main">
        <RecursiveComponent data={nestedObject} />
      </ol>
      <DangerButton size="small" text={"DON'T DO IT"} />
      <LargeSuccessButton text={"DO IT"} />
    </>
  );
}

export default App;
