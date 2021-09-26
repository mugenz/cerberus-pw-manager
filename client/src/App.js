import "./App.scss";
// import OldVersion from "./OldVersion";
import MainPage from "./MainPage";
import MainContextProvider from "./contexts/MainContextProvider";

const App = () => {
  return (
    <div className="App">
      <MainContextProvider>
        <MainPage />
      </MainContextProvider>
    </div>
  );
};

export default App;
