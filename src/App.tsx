import "./App.css";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Kishan Nimmaraju..........</h1>
      {heading}
      <HeadingComponent />
    </>
  );
}

// React Element
const heading = <h1>Hello React using JSX</h1>;

//React Functional Component
const number = 1000;
export const HeadingComponent = () => {
  return (
    <>
      {100 + 100}
      {number}
      <h1>It's the React functional component</h1>
      <Title />
    </>
  );
};

const Title = () => <h1>Hello digital india</h1>;

export default App;
