import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <>
      <AppLayout />
    </>
  );
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default App;
